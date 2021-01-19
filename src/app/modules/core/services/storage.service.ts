import { Injectable } from "@angular/core";
import CryptoJS from "crypto-js";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class StorageService {

  constructor() { }

  public GetItem(key: string): any
  {
    if (key == null) {
      return null;
    }

    const potentialItem = localStorage.getItem(CryptoJS.HmacSHA512(key, environment.appKey).toString());

    if (potentialItem == null) {
      return null;
    }

    try {
      return JSON.parse(CryptoJS.AES.decrypt(potentialItem, environment.appKey).toString(CryptoJS.enc.Utf8));
    }
    catch (e) {
      // Auto-Remove invalid records...
      console.error(`INVALID STORAGE RECORD '${key}':`, e);
      this.RemoveItem(key);

      return null;
    }
  }

  public GetItems(keys: string[]): { key: string, value: any }[] {
    return keys.map((key) => this.GetItem(key));
  }

  public SetItem(key: string, value: any): void
  {
    if (key == null || value == null) {
      return;
    }

    localStorage.setItem(
      CryptoJS.HmacSHA512(key, environment.appKey).toString(),
      CryptoJS.AES.encrypt(JSON.stringify(value), environment.appKey).toString()
    );
  }

  public SetItems(items: { key: string, value: any }[]): void {
    for (const [key, value] of Object.entries(items)) {
      this.SetItem(key, value);
    }
  }

  public RemoveItem(key: string): void
  {
    if (key == null) {
     return;
    }

    localStorage.removeItem(CryptoJS.HmacSHA512(key, environment.appKey).toString());
  }

  public Clear(): void
  {
    localStorage.clear();
  }
}
