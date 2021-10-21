/**
 * * OAuth Process
 * Login using the credentials
 * Save token from response into the database
    * Create a token field and save it 
    * 
 * Set authorization header
 * Get client for login
 * 
*/


// Adonis Dependencies
import Env from "@ioc:Adonis/Core/Env";
import Logger from "@ioc:Adonis/Core/Logger";

// External Dependencies
import Axios, { AxiosInstance } from "axios";

// Models
import ThirdPartyApp from "App/Models/Auth/ThirdPartyApp";
import ThirdPartyToken from "App/Models/Auth/ThirdPartyToken";

export default class AuthProvider {
  public $axios: AxiosInstance;

  constructor() {
    this.$axios = Axios.create({
      baseURL: Env.get("RESIDO_URL"),
      headers: { common: {} }
    });
  }

  setAuthorizationHeader(thirdPartyToken: ThirdPartyToken) {
    this.$axios = Axios.create({
      baseURL: Env.get("RESIDO_URL"),
      headers: { common: { Authorization: `Bearer ${thirdPartyToken.token}` } }
    });
    return this.$axios;
  }

  async login() {
    try {
      const response = await this.$axios.post("/oauth/login", {
        username: Env.get("RESIDO_USERNAME"),
        password: Env.get("RESIDO_PASSWORD")
      });
      return this.saveToken(response);
    } catch (error) {
      Logger.debug(error);
      throw error;
    }
  }

  async saveToken(response) {
    const app = await ThirdPartyApp.findByOrFail("code", "resido");
    var thirdPartyToken = await ThirdPartyToken.findBy(
      "third_party_app_id",
      app.id
    );
    if (!thirdPartyToken) {
      thirdPartyToken = await ThirdPartyToken.create({
        thirdPartyAppId: app.id,
        token: response.data.token,
        refreshToken: response.data.refreshToken,
        tokenExpiresAt: Date.now() / 1000 + 3600 * 24 * 365,
        refreshTokenExpiresAt: Date.now() / 1000 + 3600 * 24 * 365 * 2
      });

      return this.setAuthorizationHeader(thirdPartyToken);
    }
    thirdPartyToken.token = response.data.token;
    thirdPartyToken.refreshToken = response.data.refreshToken;
    thirdPartyToken.tokenExpiresAt = Date.now() / 1000 + 3600 * 24 * 365;
    thirdPartyToken.refreshTokenExpiresAt =
      Date.now() / 1000 + 3600 * 24 * 365 * 2;
    await thirdPartyToken.save();

    return this.setAuthorizationHeader(thirdPartyToken);
  }

  async getClient() {
    const app = await ThirdPartyApp.findByOrFail("code", "resido");
    var thirdPartyToken = await ThirdPartyToken.findBy(
      "third_party_app_id",
      app.id
    );

    if (!thirdPartyToken) return await this.login();

    if (thirdPartyToken.tokenExpiresAt < Date.now() / 1000) {
      await thirdPartyToken.delete();
      return await this.login();
    }

    return this.setAuthorizationHeader(thirdPartyToken);
  }
}
