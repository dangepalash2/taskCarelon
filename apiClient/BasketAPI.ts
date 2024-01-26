import request from "superagent";
const agent = request.agent();
const url = `${process.env.BASE_URL}/pet`;
import authorServices from "../apiClient/authorServices.ts";
import { expect as expectChai } from "chai";

class BasketAPI {
  public async addToBasket(basketData: object, token: string) {
    /////////////
    //ADD ADDRESS
    let addToBasket;
    addToBasket = await browser.call(() => {
      return authorServices
        .addToBasket(basketData, token)
        .then((data) => (addToBasket = data))
        .catch((err) => console.log(err));
    });
  }
}

export default new BasketAPI();
