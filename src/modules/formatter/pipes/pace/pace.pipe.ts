import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'rcPace'
})
export class PacePipe implements PipeTransform {
  transform(paceInSecs: number): string {
    const minutes = Math.floor(paceInSecs / 60);
    const seconds = paceInSecs % 60;

    const secondsWithLeadingZeros = String(seconds).padStart(2, '0');

    return `${minutes}:${secondsWithLeadingZeros} / km`;
  }
}
