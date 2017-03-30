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
   <div id="tap-board">
   <div class="row">
     <div class="col-md-5">
       <h3>Brand | Name</h3>
     </div>
     <div class="col-md-2">
       <h3>ABV:</h3>
     </div>
     <div class="col-md-1">
       <h3>Price:</h3>
     </div>
     <div class="col-md-2">
       <h3>Pints left:</h3>
     </div>
   </div>
   <hr>

<div class="row">
  <div *ngFor="let currentKeg of childKegList | volume:filterByVolume" class="row">
    <div class="col-md-5" (click)="editButtonHasBeenClicked(currentKeg)">
      <span class="_{{currentKeg.style}}" id="current-beers">{{currentKeg.brand}} | {{currentKeg.name}}</span>
    </div>
    <div [class]="drunkness(currentKeg)" class="col-md-2">
      {{currentKeg.abv}}
    </div>
    <div class="col-md-1">
      $ {{currentKeg.price}}
    </div>
    <div class="col-md-1">
      {{currentKeg.volume}}
    </div>
    <div class="col-md-2">
    <button (click)="isEmpty(currentKeg)" class="btn">Sell!</button>
    </div>
  </div>
</div>
</div>

<hr>
<div class="row">
  <div class="col-md-4">
  <div class="row _1 color-coding">
  Blonde Ale
  </div>
  <div class="row _2 color-coding">
  Pilsner
  </div>
  <div class="row _3 color-coding">
  Lager
  </div>

  </div>
  <div class="col-md-4">
  <div class="row _4 color-coding">
  Hefeweizen
  </div>
  <div class="row _5 color-coding">
  IPA
  </div>
  <div class="row _6 color-coding">
  Amber
  </div>
  </div>
  <div class="col-md-4">
    <div class="row _7 color-coding">
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
    if(clickedKeg.volume >= 11) {
      clickedKeg.volume -= 1;
    } else if (clickedKeg.volume <= 10 && clickedKeg.volume >= 1) {
      clickedKeg.volume -= 1;
    } else {
      clickedKeg.empty = true;
    }
  }

  drunkness(currentKeg){
    if (currentKeg.priority === 7){
      return "high-ABV";
    } else  {
      return "regular-ABV";
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
