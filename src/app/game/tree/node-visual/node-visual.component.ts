import { Component, Input } from '@angular/core';
import { Node } from '../d3/models/node';
@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
})
export class NodeVisualComponent {
  @Input('nodeVisual') node!: Node | null;
}
