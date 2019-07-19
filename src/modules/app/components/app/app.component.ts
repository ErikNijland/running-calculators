import {Component, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from '../../services/google-analytics/google-analytics.service';
import {DocumentTitleService} from '../../services/document-title/document-title.service';

@Component({
  selector: 'rc-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private documentTitleService: DocumentTitleService,
    private googleAnalyticsService: GoogleAnalyticsService,
  ) {}

  ngOnInit() {
    this.documentTitleService.activate();
    this.googleAnalyticsService.activate();
  }
}
