import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div class="add-new-keg">
    <span id="new-keg-title">New Keg</span>
    <div>
      <label>Enter Keg:</label><br>
      <div class="col-md-2 new-label">
        <label>Brand:</label>
      </div>
      <div class="col-md-10 new-input">
        <input #newBrand><br>
      </div>
      <div class="col-md-2 new-label">
        <label>Name:</label>
      </div>
      <div class="col-md-10 new-input">
        <input #newName><br>
      </div>
      <div class="col-md-2 new-label">
        <label>ABV:</label>
      </div>
      <div class="col-md-10 new-input">
        <input #newABV><br>
      </div>
      <div class="col-md-2 new-label">
        <label>Price:</label>
      </div>
      <div class="col-md-10 new-input">
        <input #newPrice><br>
      </div>

      <label>Enter Keg Style:</label>
      <br>
      <select #newStyle class="select-option">
      <option type="radio" [value]="1">Blonde </option><br>
      <option type="radio" [value]="2">Pilsner </option><br>
      <option type="radio" [value]="3">Lager </option><br>
      <option type="radio" [value]="4">Hefeweizen </option><br>
      <option type="radio" [value]="5">IPA </option><br>
      <option type="radio" [value]="6">Amber </option><br>
      <option type="radio" [value]="7">Stout </option>
      </select>
      <button class="button" (click)="submitForm(newBrand.value, newName.value, newABV.value, newPrice.value, newStyle.value); newBrand.value=''; newName.value=''; newABV.value=''; newPrice.value='';">Add</button>

    </div>
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
