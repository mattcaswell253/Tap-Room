import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.brand}} - {{childSelectedKeg.name}}</h3>
      <h3>New Keg</h3>
      <label>Enter Keg Brand & Name:</label><br>
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
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="1">1 (Blonde)<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="2">2 (Ale)<br>
      <input type="radio" [(ngModel)]="childSelectedKeg.style" [value]="3">3 (Stout)
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
