import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationService} from '../navigation/navigation.service';

@Injectable()
export class DocumentTitleService {
  constructor(
    private navigationService: NavigationService,
    private title: Title
  ) {}

  activate() {
    this.navigationService.getRouteTitle().subscribe((documentTitle) => {
      this.title.setTitle(documentTitle);
    });
  }
}
