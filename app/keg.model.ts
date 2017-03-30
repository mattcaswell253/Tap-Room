export class Keg {
  public empty: boolean = false;
  public volume: number = 12;
  constructor(public brand: string, public name: string, public abv: string, public price: string, public style: number) {  }
}
