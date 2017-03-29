export class Keg {
  public empty: boolean = false;
  public volume: number = 124;
  constructor(public brand: string, public name: string, public abv: string, public price: string, public style: number) {  }
}
