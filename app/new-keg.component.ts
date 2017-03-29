import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div *ngIf="childSelectedKeg">
      <h3>New Keg</h3>
      <label>Enter  New Keg:</label><br>
      <label>Brand:</label>
      <input #newBrand><br>
      <label>Name:</label>
      <input #newName><br>
      <label>ABV:</label>
      <input #newABV><br>
      <label>#newPrice</label>
      <input [(ngModel)]="childSelectedKeg.price"><br>

      <label>Enter Keg Style:</label>
      <br>
      <select #newStyle>
      <input type="radio" [value]="1">1 (Blonde)<br>
      <input type="radio" [value]="2">2 (Ale)<br>
      <input type="radio" [value]="3">3 (Stout)
      </select>
    </div>
  `
})

export class NewKegComponent {

}
