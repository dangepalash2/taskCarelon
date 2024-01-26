import request from "superagent";
const agent = request.agent();
const url = `${process.env.BASE_URL}/pet`;
import authorServices from "./authorServices.ts";
import { expect as expectChai } from "chai";

class DigitalWallet {
  public async addBalance(cardsDetails: object, authToken: string) {
    let response;
    response = await browser.call(async () => {
      return authorServices
        .addBalance(cardsDetails, authToken)
        .then((data) => (response = data))
        .catch((err) => console.log(err));
    });

    var textString = JSON.stringify(response.text).toString();
    let re = /\\/gi;
    let formattedString = textString.replace(re, "");

    formattedString = formattedString.substring(1, formattedString.length - 1);

    var textOBJ = JSON.parse(formattedString);
    await expectChai(textOBJ.status).to.equal("success");
  }
}

export default new DigitalWallet();
