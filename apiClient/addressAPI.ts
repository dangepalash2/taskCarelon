import request from "superagent";
const agent = request.agent();
const url = `${process.env.BASE_URL}/pet`;
import authorServices from "../apiClient/authorServices.ts";
import { expect as expectChai } from "chai";

class AddressAPI {
  public async addAddress(addressData: object, token: string) {
    /////////////
    //ADD ADDRESS
    let verifyAddress;
    verifyAddress = await browser.call(() => {
      return authorServices
        .addAddress(addressData, token)
        .then((data) => (verifyAddress = data))
        .catch((err) => console.log(err));
    });
    verifyAddress = JSON.stringify(verifyAddress.text).toString();
    let res = /\\/gi;
    let aa = verifyAddress.replace(res, "");

    aa = aa.substring(1, aa.length - 1);
    var textOBJ1 = JSON.parse(aa);
    await expectChai(textOBJ1.status).to.contain("success");
    var id = textOBJ1.data[0].id;
    return id;
  }

  public async verifyAddress(token: string) {
    /////////////
    //Count ADDRESSES
    let verifyAddress;
    verifyAddress = await browser.call(() => {
      return authorServices
        .verifyAddress(token)
        .then((data) => (verifyAddress = data))
        .catch((err) => console.log(err));
    });
    verifyAddress = JSON.stringify(verifyAddress.text).toString();
    let res = /\\/gi;
    let aa = verifyAddress.replace(res, "");

    aa = aa.substring(1, aa.length - 1);
    var textOBJ1 = JSON.parse(aa);
    await expectChai(textOBJ1.status).to.contain("success");
    await expectChai(textOBJ1.data).to.contain("BB");
  }
}

export default new AddressAPI();
