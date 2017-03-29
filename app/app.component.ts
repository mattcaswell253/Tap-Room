import { Component } from '@angular/core';

export class Keg {
  constructor(public brand: string, public name: string, public style: number) {  }
}
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
     <ul>
       <li [class]="kegStyle(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.brand}} | {{currentKeg.name}}  <button (click)="editKeg(currentKeg)">Edit!</button></li>
     </ul>
     <hr>
    <div>
      <div *ngIf="selectedKeg">
       <h3>{{selectedKeg.brand}} | {{selectedKeg.name}}</h3>
      <h3>Edit Keg</h3>
      <label>Enter Keg Brand & Name:</label>
      <input [(ngModel)]="selectedKeg.brand">
      <input [(ngModel)]="selectedKeg.name">
       <label>Enter Keg Style:</label>
       <br>
       <input type="radio" [(ngModel)]="selectedKeg.style" [value]="1">1 (Blonde)<br>
       <input type="radio" [(ngModel)]="selectedKeg.style" [value]="2">2 (Ale)<br>
       <input type="radio" [(ngModel)]="selectedKeg.style" [value]="3">3 (Stout)
       <button (click)="finishedEditing()">Done</button>
       </div>
    </div>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Bayerische Staatsbrauerei Weihenstephan', 'Weihenstephaner Pilsner', 1),
    new Keg('New Belgium', 'Voodoo Ranger', 2),
    new Keg('Deschutes Brewery', 'Obsidian Stout', 3)
  ];
  selectedKeg = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
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
