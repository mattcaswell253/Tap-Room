import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
  <li *ngFor="let currentKeg of childTaskList">{{currentKeg.brand}} - {{currentKeg.name}} | ABV: {{currentKeg.abv}} | Price: {{currentKeg.price}}<button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  kegStyle(currentKeg){
    if (currentKeg.style === 3){
      return "bg-danger";
    } else if (currentKeg.style === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
