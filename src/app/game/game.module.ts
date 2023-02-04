import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { TreeComponent } from './tree/tree.component';
import { D3_DIRECTIVES, DraggableDirective } from './tree/d3/directives';
import { BranchComponent } from './tree/branch/branch.component';
import { GroundComponent } from './ground/ground.component';
import { EnergyBarComponent } from './energy-bar/energy-bar.component';
import { RainComponent } from './rain/rain.component';
import { D3TreeComponent } from './d3-tree/d3-tree.component';
import { LinkVisualComponent } from './tree/link-visual/link-visual.component';
import { NodeVisualComponent } from './tree/node-visual/node-visual.component';
import { D3Service } from './tree/services/d3.service';
import { RootsComponent } from './roots/roots.component';
import { LeafComponent } from './tree/branch/leaf/leaf.component';
import { RootComponent } from './roots/root/root.component';
import { TrunkComponent } from './tree/trunk/trunk.component';

@NgModule({
  declarations: [
    GameComponent,
    LinkVisualComponent,
    TreeComponent,
    DraggableDirective,
    BranchComponent,
    GroundComponent,
    EnergyBarComponent,
    RainComponent,
    D3TreeComponent,
    NodeVisualComponent,
    RootsComponent,
    LeafComponent,
    RootComponent,
    TrunkComponent,
  ],
  imports: [CommonModule],
  providers: [D3Service, D3_DIRECTIVES],
  exports: [GameComponent],
})
export class GameModule {}
