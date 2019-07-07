import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(timeInMs: number): string {
    const timeInSecs = timeInMs / 1000;

    const hours = Math.floor(timeInSecs / (60 * 60));
    const remainder = Math.ceil(timeInSecs % (60 * 60));

    const minutes = Math.floor(remainder / 60);
    const seconds = remainder % 60;

    const formattedChunks = [];

    if (hours > 0) {
      formattedChunks.push(`${hours}h`);
    }

    if (minutes > 0) {
      formattedChunks.push(`${minutes}m`);
    }
    if (seconds > 0) {
      formattedChunks.push(`${seconds}s`);
    }

    return formattedChunks.join(' ');
  }
}
