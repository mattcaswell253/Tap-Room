import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <h3>New Keg</h3>
      <label>Enter  New Keg:</label><br>
      <label>Brand:</label>
      <input #newBrand><br>
      <label>Name:</label>
      <input #newName><br>
      <label>ABV:</label>
      <input #newABV><br>
      <label>Price:</label>
      <input #newPrice><br>

      <label>Enter Keg Style:</label>
      <br>
      <select #newStyle>
      <option type="radio" [value]="1">1 (Blonde) </option><br>
      <option type="radio" [value]="2">2 (Ale) </option><br>
      <option type="radio" [value]="3">3 (Stout) </option>
      </select>
      <button (click)="submitForm(newBrand.value, newName.value, newABV.value, newPrice.value, newStyle.value); newBrand.value=''; newName.value=''; newABV.value=''; newPrice.value='';">Add</button>

    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, name: string, abv: string, price: string, style: number) {
    var newKegToAdd: Keg = new Keg(brand, name, abv, price, style);
    console.log(newKegToAdd);
    this.newKegSender.emit(newKegToAdd);
  }
}
