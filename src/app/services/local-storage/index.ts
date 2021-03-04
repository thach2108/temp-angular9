import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";

const APP_PREFIX = environment.appPrefix.toUpperCase() + "-";

@Injectable()
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
  }

  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

}
