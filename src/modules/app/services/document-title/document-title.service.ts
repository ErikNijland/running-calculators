import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Event, NavigationEnd, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';

@Injectable()
export class DocumentTitleService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  activate() {
    this.router.events.pipe(
      filter((routerEvent: Event) => routerEvent instanceof NavigationEnd),
      switchMap(() => this.activatedRoute.firstChild.data),
      map((routeData) => routeData.title),
    ).subscribe((documentTitle) => {
      this.title.setTitle(documentTitle);
    });
  }
}
