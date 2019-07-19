import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[rcScrollIntoView]',
})
export class ScrollIntoViewDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.scrollIntoView();
  }
}
