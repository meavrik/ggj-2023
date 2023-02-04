import { Component, Input, OnInit } from '@angular/core';
import { ForceDirectedGraph } from '../tree/d3/models';
import { D3Service } from '../tree/services/d3.service';

@Component({
  selector: 'app-d3-tree',
  templateUrl: './d3-tree.component.html',
  styleUrls: ['./d3-tree.component.scss'],
})
export class D3TreeComponent implements OnInit {
  @Input('nodes') nodes!: any[];
  @Input('links') links!: any[];
  graph!: ForceDirectedGraph;

  constructor(private d3Service: D3Service) {}

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(
      this.nodes,
      this.links,
      this.options
    );
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  private _options: { width: number; height: number } = {
    width: 800,
    height: 600,
  };

  get options() {
    return (this._options = {
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
}
