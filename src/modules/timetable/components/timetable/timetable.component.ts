import {Component, OnInit} from '@angular/core';
import {Timetable} from '../../types/timetable';
import {TimetableService} from '../../services/timetable/timetable.service';

@Component({
  selector: 'rc-timetable',
  templateUrl: './timetable.component.html'
})
export class TimetableComponent implements OnInit {
  rows: Timetable;

  constructor(private timetableService: TimetableService) {}

  ngOnInit() {
    this.rows = this.timetableService.getRows();
  }
}
