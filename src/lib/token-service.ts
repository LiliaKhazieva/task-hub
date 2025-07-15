import Cookies from "js-cookie";
type TTokenName = "accessToken" | "refreshToken";

export const token = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
} as const;

type TToken = (typeof token)[keyof typeof token];

export class TokenService {
  static set(name: TTokenName, token: string) {
    Cookies.set(name, token, {
      expires: 7,
      path: "/",
      sameSite: "lax",
    });
  }
  static remove(name: TToken) {
    Cookies.remove(name, {
      path: "/",
    });
  }
}
