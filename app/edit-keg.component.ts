import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div id="edit-keg-form">
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.brand}} - {{childSelectedKeg.name}}</h3>
      <h3>Edit Keg</h3>
      <label>Edit Keg Information</label><br>
      <label>Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand"><br>
      <label>Name:</label>
      <input [(ngModel)]="childSelectedKeg.name"><br>
      <label>ABV:</label>
      <input [(ngModel)]="childSelectedKeg.abv"><br>
      <label>Price:</label>
      <input [(ngModel)]="childSelectedKeg.price"><br>

      <label>Enter Keg Style:</label>
      <br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="1"> Blonde<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="2"> Pilsner<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="3"> Lager<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="4"> Hefeweizen<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="5"> IPA<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="6"> Amber<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="7"> Stout
      <button (click)="doneButtonClicked()">Done</button>
    </div>

      </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
