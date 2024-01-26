import request from "superagent";
const agent = request.agent();
const url = `${process.env.BASE_URL}/pet`;
import authorServices from "../apiClient/authorServices.ts";
import { expect as expectChai } from "chai";

class CardsAPI {
  public async cardsAddition(
    cardsDetails: object,
    authToken: string
  ): Promise<string> {
    let response;
    response = await browser.call(async () => {
      return authorServices
        .addCards(cardsDetails, authToken)
        .then((data) => (response = data))
        .catch((err) => console.log(err));
    });

    var textString = JSON.stringify(response.text).toString();
    let re = /\\/gi;
    let formattedString = textString.replace(re, "");

    formattedString = formattedString.substring(1, formattedString.length - 1);

    var textOBJ = JSON.parse(formattedString);
    let token = textOBJ.authentication.token;
    await expectChai(response.status).to.equal("success");
    await expectChai(textOBJ.data).to.contain("AA");

    return token;
  }
  public async verifyCardsAddition(token: string): Promise<string> {
    /////////////
    //Count ADDRESSES
    let verifyCardsAddition;
    verifyCardsAddition = await browser.call(() => {
      return authorServices
        .verifyCards(token)
        .then((data) => (verifyCardsAddition = data))
        .catch((err) => console.log(err));
    });
    verifyCardsAddition = JSON.stringify(verifyCardsAddition.text).toString();
    let res = /\\/gi;
    let aa = verifyCardsAddition.replace(res, "");

    aa = aa.substring(1, aa.length - 1);
    var textOBJ1 = JSON.parse(aa);
    await expectChai(textOBJ1.status).to.contain("success");
    await expectChai(textOBJ1.data[0].cardNum).to.contain("1234");
    var id = textOBJ1.data[0].id;
    return id;
  }
}

export default new CardsAPI();
