import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { D3Service } from '../../services/d3.service';

@Directive({
  selector: '[zoomableOf]',
})
export class ZoomableDirective implements OnInit {
  @Input() zoomableOf!: ElementRef;

  constructor(private d3Service: D3Service, private element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyZoomableBehaviour(
      this.zoomableOf,
      this.element.nativeElement
    );
  }
}
