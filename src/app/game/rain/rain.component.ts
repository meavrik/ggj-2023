import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss'],
})
export class RainComponent implements OnInit {
  @ViewChild('front') frontRef!: ElementRef;
  @ViewChild('back') backRef!: ElementRef;

  htmlStr1: string = '';
  htmlStr2: string = '';

  makeItRain() {
    let increment = 0;
    let drops = '';
    let backDrops = '';

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      //random number between 5 and 2
      const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops +=
        '<div class="drop" style="left: ' +
        increment +
        '%; bottom: ' +
        (randoFiver + randoFiver - 1 + 100) +
        '%; animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"></div></div>';
      backDrops +=
        '<div class="drop" style="right: ' +
        increment +
        '%; bottom: ' +
        (randoFiver + randoFiver - 1 + 100) +
        '%; animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"></div></div>';
    }

    this.htmlStr1 += drops;
    this.htmlStr2 += backDrops;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.makeItRain();
    }, 100);
  }
}
