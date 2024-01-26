import request from "superagent";
const agent = request.agent();
const url = `${process.env.BASE_URL}/pet`;
import authorServices from "./authorServices.ts";
import { expect as expectChai } from "chai";

class CheckoutAPI {
  public async checkout(
    authToken: string,
    bid: string,
    paymentID: string,
    deliveryMethodId = 3,
    addressID
  ) {
    let response;
    response = await browser.call(async () => {
      return authorServices
        .checkout(authToken, bid, paymentID, deliveryMethodId, addressID)
        .then((data) => (response = data))
        .catch((err) => console.log(err));
    });

    await console.log(
      "This is checkout response : " + JSON.stringify(response.text).toString()
    );
    var textString = JSON.stringify(response.text).toString();
    let re = /\\/gi;
    let formattedString = textString.replace(re, "");

    formattedString = formattedString.substring(1, formattedString.length - 1);

    var textOBJ = JSON.parse(formattedString);
    await expectChai(textOBJ.text).to.contain("orderConformation");
  }
}

export default new CheckoutAPI();
