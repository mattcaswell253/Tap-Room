import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="row">

  <select (change)="onChange($event.target.value)">
     <option value="allKegs">All Kegs</option>
     <option value="emptyKegs">Empty Kegs</option>
     <option value="tappedKegs" selected="selected">Tapped Kegs</option>
   </select>
 </div>
   <div class="row">
     <div class="col-md-8">
       <h3>Brand | Name</h3>
     </div>
     <div class="col-md-2">
       <h3>ABV:</h3>
     </div>
     <div class="col-md-2">
       <h3>Price:</h3>
     </div>
   </div>

<div class="row">
  <div *ngFor="let currentKeg of childKegList | volume:filterByVolume">
    <div class="col-md-8 _{{currentKeg.style}}">
      {{currentKeg.brand}} | {{currentKeg.name}}:
      <input *ngIf="currentKeg.empty === true" type="checkbox" (click)="toggleEmpty(currentKeg, false)"/>
      <input *ngIf="currentKeg.empty === false" type="checkbox" (click)="toggleEmpty(currentKeg, true)"/>
    </div>
    <div class="col-md-2">
      {{currentKeg.abv}}
    </div>
    <div (click)="isEmpty(currentKeg)" class="col-md-1">
      $ {{currentKeg.price}}
    </div>
    <div class="col-md-1">
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    </div>
  </div>
</div>
<hr>
<div class="row">
  <div class="col-md-4">
  <div class="row _1">
  Blonde Ale
  </div>
  <div class="row _2">
  Pilsner
  </div>
  <div class="row _3">
  Lager
  </div>

  </div>
  <div class="col-md-4">
  <div class="row _4">
  Hefeweizen
  </div>
  <div class="row _5">
  IPA
  </div>
  <div class="row _6">
  Amber
  </div>
  </div>
  <div class="col-md-4">
    <div class="row _7">
      Stout
    </div>
  </div>
</div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByVolume: string = "emptyKegs";

  isEmpty(clickedKeg: Keg) {
    if(clickedKeg.volume > 11) {
      clickedKeg.volume -= 1;
      alert(clickedKeg.volume);
    } else if (clickedKeg.volume > 0) {
      clickedKeg.volume -= 1;
      alert("This keg is almost empty!");
      alert(clickedKeg.volume);
    } else {
      clickedKeg.empty === true;
      alert("This keg is empty!");
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
