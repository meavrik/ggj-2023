import { Component, Input } from '@angular/core';
import { Link } from '../d3/models/link';

@Component({
  selector: '[linkVisual]',
  templateUrl: './link-visual.component.html',
})
export class LinkVisualComponent {
  @Input('linkVisual') link!: Link;
}
