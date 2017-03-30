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
    <div class="col-md-2">
    <span [class]="drunkness(currentKeg)">
      {{currentKeg.abv}}%
      </span>
    </div>
    <div class="col-md-1" id="pint-price">
      $ {{currentKeg.price}}
    </div>
    <div class="col-md-1">
      <span [class]="lowKeg(currentKeg)">{{currentKeg.volume}}</span>
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
  Hefeweizen
  </div>

  </div>
  <div class="col-md-4">
    <div class="row _4 color-coding">
    Lager
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
      Porter
    </div>
    <div class="row _8 color-coding">
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
    var beerABV: number = currentKeg.abv;
    if (beerABV >= 7){
      return "high-ABV";
    } else  {
      return "regular-ABV";
    }
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  lowKeg(currentKeg) {
    var kegVolume: number = parseInt(currentKeg.volume);
    if (kegVolume <= 10){
      return "low-keg";
    } else  {
      return "tapped-keg";
    }
  }

  onChange(optionFromMenu) {
  this.filterByVolume = optionFromMenu;
}
toggleEmpty(clickedKeg: Keg, setVolume: boolean) {
     clickedKeg.empty = setVolume;
   }
}
