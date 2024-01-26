import BasketAPI from "../apiClient/BasketAPI.ts";
import CheckoutAPI from "../apiClient/CheckoutAPI.ts";
import addressAPI from "../apiClient/addressAPI.ts";
import authorServices from "../apiClient/authorServices.ts";
import cardsAPI from "../apiClient/cardsAPI.ts";
import digitalWallet from "../apiClient/digitalWallet.ts";
import loginAPI from "../apiClient/loginAPI.ts";
import helpers from "../helpers.ts";

let loginData = {
  email: "pd25@gmail.com",
  password: "palash123",
};

let basketData = { ProductId: 24, BasketId: "10", quantity: 3 };

let addressData = {
  country: "BB",
  fullName: "BB",
  mobileNum: 80000000,
  zipCode: "2222",
  streetAddress: "2222",
  city: "222",
  state: "222",
};
let addBalance = { balance: 30, paymentId: 18 };
interface loginRespReturn {
  token: string;
  bid: string;
}
let response;

let cardDetails = {
  fullName: "AA",
  cardNum: 1234123412341234,
  expMonth: "2",
  expYear: "2082",
};

describe("AS Test Suite", () => {
  it("Authenticate User", async () => {
    let loginRespReturn: Promise<loginRespReturn> =
      loginAPI.loginWithUser(loginData);
    var fromattedToken = (await loginRespReturn).token.toString();

    ///ADD TO BASKET
    basketData.BasketId = (await loginRespReturn).bid;
    BasketAPI.addToBasket(basketData, fromattedToken);

    var addressID = addressAPI.addAddress(addressData, fromattedToken);
    addressAPI.verifyAddress(fromattedToken);

    /////////////
    //ADD CARDS
    cardsAPI.cardsAddition(cardDetails, fromattedToken);
    var id = cardsAPI.verifyCardsAddition(fromattedToken);
    var formattedId = (await id).toString();
    console.log("This is formatted ID : " + formattedId);

    ////
    //ADD TO WALLET 30
    addBalance.paymentId = parseInt(formattedId);
    digitalWallet.addBalance(addBalance, fromattedToken);
    await console.log("THIS IS STEP 4");

    ///CHECKOUT
    CheckoutAPI.checkout(
      fromattedToken,
      (await loginRespReturn).bid,
      formattedId,
      3,
      addressID
    );
  });
});
