import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[rcSelectAllText]',
})
export class SelectAllTextDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('focus')
  selectAllText() {
    this.elementRef.nativeElement.select();
  }
}
