import { Component } from '@angular/core';
import { Keg } from './keg.model';



@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Tap Room</h1>
    </div>
    <keg-list [childKegList]="masterKegList" (clickSender)="editTask($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-task></new-task>

  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  addKeg = null;
  masterKegList: Keg[] = [
    new Keg('Bayerische Staatsbrauerei Weihenstephan', 'Weihenstephaner Pilsner', '5.1%', 5, 1),
    new Keg('New Belgium', 'Voodoo Ranger', '7%', 6, 2),
    new Keg('Deschutes Brewery', 'Obsidian Stout', '6.4%', 5, 3)
  ];
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
}
