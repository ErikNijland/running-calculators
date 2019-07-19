import {Injectable} from '@angular/core';
import {filter, map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, Event, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class NavigationService {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  getRouteTitle(): Observable<string> {
    return this.router.events.pipe(
      filter((routerEvent: Event) => routerEvent instanceof NavigationEnd),
      switchMap(() => this.activatedRoute.firstChild.data),
      map((routeData) => routeData.title),
    );
  }
}
