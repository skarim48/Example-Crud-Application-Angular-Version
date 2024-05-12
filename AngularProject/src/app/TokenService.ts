import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  static get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}') || {};
  }
  static set(key: string, value: any): boolean {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  has(key: string): boolean {
    return !!localStorage.getItem(key);
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
