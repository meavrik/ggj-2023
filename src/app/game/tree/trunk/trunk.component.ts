import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-trunk',
  templateUrl: './trunk.component.html',
  styleUrls: ['./trunk.component.scss'],
})
export class TrunkComponent implements OnInit, OnChanges {
  @Input() size!: number | null;
  @HostBinding('style.scale') scale!: number;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.scale = Math.max(this.size || 0, 0.2);
  }
}
