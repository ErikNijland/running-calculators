import {Injectable} from '@angular/core';
import {NavigationService} from '../navigation/navigation.service';

declare global {
  interface Window {
    gtag: any;
  }
}

@Injectable()
export class GoogleAnalyticsService {
  constructor(private navigationService: NavigationService) {}

  activate() {
    this.navigationService.getRouteTitle().subscribe((documentTitle) => {
      this.trackPageview(documentTitle);
    });
  }

  private trackPageview(pageTitle) {
    window.gtag('event',
      'page_view',
      {
        page_title: pageTitle,
        page_path: window.location.pathname,
  });
  }
}
