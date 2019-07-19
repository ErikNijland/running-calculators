import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[rcScrollIntoView]',
})
export class ScrollIntoViewDirective implements OnChanges {
  @Input() rcScrollIntoView: number;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    this.elementRef.nativeElement.scrollIntoView();
  }
}
