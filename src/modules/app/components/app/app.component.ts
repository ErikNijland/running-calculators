import {Component, OnInit} from '@angular/core';
import {DocumentTitleService} from '../../services/document-title/document-title.service';

@Component({
  selector: 'rc-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private documentTitleService: DocumentTitleService) {}

  ngOnInit() {
    this.documentTitleService.activate();
  }
}
