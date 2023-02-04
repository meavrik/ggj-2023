import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-energy-bar',
  templateUrl: './energy-bar.component.html',
  styleUrls: ['./energy-bar.component.scss'],
})
export class EnergyBarComponent implements OnChanges {
  @HostBinding('class.energy') @Input() isEnergy!: boolean;
  @Input() energy: number = 1;
  bars: any[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    this.bars = new Array(this.energy).fill({});
  }
}
