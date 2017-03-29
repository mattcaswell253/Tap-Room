import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "volume",
  pure: false
})


export class VolumePipe implements PipeTransform {
  transform(input: Keg[], desiredVolume) {
    var output: Keg[] = [];
    if(desiredVolume === "tappedKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].empty === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredVolume === "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].empty === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
