import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  /**
   * Returns true if both objects are the same, false otherwise.
   */
  public compareObjects(object1, object2) {
    return JSON.stringify(object1) === JSON.stringify(object2);
  }

  /**
   * Clones to object to avoid memory conflicts (for example when using arrays inside of objects)
   */
  public cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
  }
}
