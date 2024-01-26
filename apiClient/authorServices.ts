import axios from "axios";
import request from "superagent";

const agent = request.agent();

const CARELON_BS_URL = "http://localhost:3000";

class AuthorService {
  async loginUser(data) {
    return await agent
      .post(CARELON_BS_URL + "/rest/user/login")
      .send(data)
      .set("Accept", "application/json")
      .then((response) => {
        //you can manupulate result set as per requirements.
        return response;
      });
  }

  async addAddress(data, headerTokenValue) {
    return await agent
      .post(CARELON_BS_URL + "/api/Addresss/")
      .send(data)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${headerTokenValue}`)
      .then((response) => {
        //you can manupulate result set as per requirements.
        return response;
      });
  }

  async verifyAddress(headerTokenValue) {
    return await agent
      .get(CARELON_BS_URL + "/api/Addresss/")
      .set("Authorization", `Bearer ${headerTokenValue}`)
      .then((response) => {
        //you can manupulate result set as per requirements.
        return response;
      });
  }

  async addCards(data, headerTokenValue) {
    return await agent
      .post(CARELON_BS_URL + "/api/Cards/")
      .send(data)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${headerTokenValue}`)
      .then((response) => {
        //you can manupulate result set as per requirements.
        return response;
      });
  }

  async verifyCards(headerTokenValue) {
    return await agent
      .get(CARELON_BS_URL + "/api/Cards/")
      .set("Authorization", `Bearer ${headerTokenValue}`)
      .then((response) => {
        //you can manupulate result set as per requirements.
        return response;
      });
  }

  async addBalance(data, headerTokenValue) {
    return await agent
      .put(CARELON_BS_URL + "/rest/wallet/balance")
      .send(data)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${headerTokenValue}`)
      .then((response) => {
        //you can manupulate result set as per requirements.
        return response;
      });
  }

  async addToBasket(data, headerTokenValue) {
    return await agent
      .post(CARELON_BS_URL + "/api/BasketItems/")
      .send(data)
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${headerTokenValue}`)
      .then((response) => {
        //you can manupulate result set as per requirements.
        return response;
      });
  }
  async checkout(
    headerTokenValue,
    bid,
    paymentID,
    deliveryMethodId,
    addressID
  ) {
    return await agent
      .post(CARELON_BS_URL + `/rest/basket/${bid}/checkout`)
      .send({
        couponData: "bnVsbA==",
        orderDetails: {
          paymentId: paymentID,
          addressId: addressID,
          deliveryMethodId: deliveryMethodId,
        },
      })
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${headerTokenValue}`)
      .then((response) => {
        console.log(" add To Basket resposne " + JSON.stringify(response));
        //you can manupulate result set as per requirements.
        return response;
      });
  }
}
export default new AuthorService();
