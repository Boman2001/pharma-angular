import { browser, by, element } from "protractor";

export class UserCreatePage {
  async navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/doctors/new`);
  }
}
