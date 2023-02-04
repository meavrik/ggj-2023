import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { ForceDirectedGraph } from '../d3/models/force-directed-graph';
import { Link } from '../d3/models/link';
import { Node } from '../d3/models/node';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */
  zoom: any;
  svg: any;
  svgContainer: any;
  zoomBehavier: any;

  readonly graphTransform$ = new BehaviorSubject<{
    x: number;
    y: number;
    k: number;
  } | null>(null);
  readonly dropNode$ = new Subject<Node>();
  readonly dragNode$ = new Subject<Node>();

  constructor() {}

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement: any, containerElement: any) {
    // let svg, container, zoomed, zoom;
    this.svg = d3.select(svgElement);
    const container = d3.select(containerElement);
    this.svgContainer = containerElement;
    containerElement.minBoundX = 0;
    const zoomed = (event: any) => {
      const { x, y, k } = event.transform;
      const gridUnit = 40 * k;
      const xx = Math.ceil(x / gridUnit) * gridUnit;
      const yy = Math.ceil(y / gridUnit) * gridUnit;
      container.attr(
        'transform',
        `translate(${xx || 0} ,${yy || 0}) scale(${k || 0})`
      );
      this.graphTransform$.next(event.transform);
    };
  }
  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element: any, node: Node, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);
    const dragged = (event: any) => {
      const gridSize = 40;
      if (event.x > 0) {
        node.fx = gridSize * Math.floor(event.x / gridSize);
      }

      if (event.y > 0) {
        node.fy = gridSize * Math.floor(event.y / gridSize);
      }

      this.dragNode$.next(node);
    };

    const ended = (event: any) => {
      if (graph && !event.active) {
        graph.simulation.alphaTarget(0);
      }

      node.fx = null;
      node.fy = null;

      this.dropNode$.next(node);
    };

    const started = (event: any) => {
      /** Preventing propagation of dragstart to parent elements */
      event.sourceEvent.stopPropagation();

      if (graph && !event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }
    };

    d3element.call(
      d3.drag().on('start', started).on('drag', dragged).on('end', ended)
    );
  }

  /** The interactable graph we will simulate in this article
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(
    nodes: Node[],
    links: Link[],
    options: { width: number; height: number }
  ) {
    const sg = new ForceDirectedGraph(nodes, links, options);
    return sg;
  }
}
