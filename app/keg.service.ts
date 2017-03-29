import { Injectable } from '@angular/core';
import { Keg } from './keg';
import { KEGS } from './mock-kegs';
@Injectable()
export class KegService {
  getKegs(): Promise<Keg[]> {
    return Promise.resolve(KEGS);
  }
}
