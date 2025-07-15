import { token, TokenService } from "@/lib/token-service";
import { makeAutoObservable } from "mobx";

class AuthStore {
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }
  login() {
    TokenService.set(token.accessToken, "mockAccessToken");
    this.isLoggedIn = true;
  }

  logout() {
    TokenService.remove(token.accessToken);
    this.isLoggedIn = false;
  }
}

export const authStore = new AuthStore();
