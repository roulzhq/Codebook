import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
}
