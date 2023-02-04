import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { D3Service } from '../../services/d3.service';
import { Node, ForceDirectedGraph } from '../models';

@Directive({
  selector: '[draggableNode]',
})
export class DraggableDirective implements OnInit {
  @Input() draggableNode!: Node;
  @Input() draggableInGraph!: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(
      this.element.nativeElement,
      this.draggableNode,
      this.draggableInGraph
    );
  }
}
