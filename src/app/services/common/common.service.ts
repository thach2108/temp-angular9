import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor() { }

  public randX(from: number, to: number): number {
    const a = Math.floor(Math.random() * (!!to ? to - from : 100)) + (!!from ? from : 0);
    return a;
  }

}
