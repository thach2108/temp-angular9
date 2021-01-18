import { browser, by, element } from 'protractor';

export class AppDashboard {

  getBrowser() {
    return browser;
  }

  navigateTo() {
    return browser.get('/');
  }

  getBody() {
    return element(by.xpath('/html/body'));
  }

  getByCss(selector) {
    return element.all(by.css(selector));
  }

}
