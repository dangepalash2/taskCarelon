import request from "superagent";
const agent = request.agent();
const url = `${process.env.BASE_URL}/pet`;
import authorServices from "../apiClient/authorServices.ts";
import { expect as expectChai } from "chai";
interface loginRespReturn {
  token: string;
  bid: string;
}
class LoginAPI {
  public async loginWithUser(loginData: object): Promise<loginRespReturn> {
    let response;
    response = await browser.call(async () => {
      return authorServices
        .loginUser(loginData)
        .then((data) => (response = data))
        .catch((err) => console.log(err));
    });

    var textString = JSON.stringify(response.text).toString();
    let re = /\\/gi;
    let formattedString = textString.replace(re, "");

    formattedString = formattedString.substring(1, formattedString.length - 1);

    var textOBJ = JSON.parse(formattedString);
    let token = textOBJ.authentication.token;
    await expectChai(response.status).to.equal(200);
    await expectChai(textOBJ.authentication.umail).to.contain("pd25@gmail.com");
    let bid = textOBJ.authentication.bid;
    return { token, bid };
  }
}

export default new LoginAPI();
