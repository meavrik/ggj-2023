import { Node } from './node';

export class Link implements d3.SimulationLinkDatum<Node> {
  count = 0;

  constructor(public source: Node, public target: Node) {}
}
