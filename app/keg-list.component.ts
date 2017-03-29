import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
     <option value="allKegs">All Kegs</option>
     <option value="emptyKegs">Empty Kegs</option>
     <option value="tappedKegs" selected="selected">Tapped Kegs</option>
   </select>

   <ul>
      <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | volume:filterByVolume">{{currentKeg.brand}} - {{currentKeg.name}} | ABV: {{currentKeg.abv}} | Price: {{currentKeg.price}}
        <input *ngIf="currentKeg.empty === true" type="checkbox" checked (click)="toggleEmpty(currentKeg, false)"/>
        <input *ngIf="currentKeg.empty === false" type="checkbox" (click)="toggleEmpty(currentKeg, true)"/>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </li>
    </ul>


  <ul>
  <li *ngFor="let currentKeg of childKegList | volume"><button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByVolume: string = "emptyKegs";

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.empty === true) {
      alert("This keg is empty!");
    } else {
      alert("This keg is not empty. Better get to work!");
    }
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByVolume = optionFromMenu;
}
toggleEmpty(clickedKeg: Keg, setVolume: boolean) {
     clickedKeg.empty = setVolume;
   }
}
