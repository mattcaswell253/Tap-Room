export class Keg {
  public empty: boolean = false;
  public volume: number = 24;
  constructor(public brand: string, public name: string, public abv: number, public price: string, public style: number) {  }
}
