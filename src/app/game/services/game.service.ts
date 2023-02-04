import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBranch } from '../interfaces/game.interfaces';

export type Weather = 'sun' | 'cloudy';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  roots: IBranch[] = [
    { x: 0, y: 0, size: 55, rotate: -270 },
    { x: 0, y: 20, size: 45, rotate: 170 },
    { x: 0, y: 30, size: 45, rotate: 10 },
    { x: -50, y: 30, size: 40, rotate: 130 },
    { x: -80, y: 63, size: 45, rotate: 196 },
    { x: 98, y: 48, size: 43, rotate: 22 },
  ];

  branches: IBranch[] = [
    { x: -5, y: -50, size: 10, rotate: 340, branches: [] },
    { x: -5, y: -40, size: 10, rotate: 220, branches: [] },
    { x: 0, y: -70, size: 12, rotate: 230, branches: [] },
    { x: 0, y: -104, size: 15, rotate: 0, branches: [] },
    { x: -5, y: -150, size: 17, rotate: 196, branches: [] },
    { x: -9, y: -120, size: 18, rotate: 186, branches: [] },

    { x: -5, y: -160, size: 16, rotate: 343, branches: [] },
    { x: -9, y: -220, size: 18, rotate: 186, branches: [] },
    { x: -5, y: -240, size: 20, rotate: 10, branches: [] },
  ];

  trunkSize$ = new BehaviorSubject<number>(0);
  currentRoots$ = new BehaviorSubject<IBranch[]>([]);
  currentBranches$ = new BehaviorSubject<IBranch[]>([]);
  currentWeather$ = new BehaviorSubject<Weather>('sun');

  addRoot() {
    console.log('add root');

    if (this.roots.length) {
      const item: IBranch = this.roots.shift() as IBranch;
      this.currentRoots$.next([...this.currentRoots$.getValue(), item]);
    } else {
      const myRoots = this.currentRoots$.getValue();
      const randomIndex = Math.min(
        Math.floor(Math.random() * myRoots.length) + 1,
        myRoots.length - 1
      );
      const findRoot = myRoots[randomIndex];

      findRoot.branches = [
        ...(findRoot.branches || []),
        {
          x: Math.floor(Math.random() * 120) - 120,
          y: 5,
          size: Math.floor(Math.random() * 30) + 15,
          rotate: Math.floor(Math.random() * 180) - 90,
          branches: [],
        },
      ];
    }
  }

  nextTurn() {
    const arr: Weather[] = ['sun', 'cloudy'];
    const rand = Math.floor(Math.random() * arr.length);
    this.currentWeather$.next(arr[rand]);
  }

  addBranch() {
    if (this.branches.length) {
      const item: IBranch = this.branches.shift() as IBranch;
      this.currentBranches$.next([...this.currentBranches$.getValue(), item]);
    }
  }

  grow() {
    this.trunkSize$.next(Math.min(this.trunkSize$.getValue() + 0.1, 1));
  }

  addLeaf() {
    const myBranches = this.currentBranches$.getValue();
    if (!myBranches.length) return;
    const randomIndex = Math.floor(Math.random() * myBranches.length);
    const findBranch = myBranches[randomIndex];

    findBranch.branches = [
      ...(findBranch.branches || []),
      {
        x: Math.floor(Math.random() * 50) - 40,
        y: 5,
        size: Math.floor(Math.random() * 15) + 5,
        rotate: Math.floor(Math.random() * 180) - 90,
        branches: [],
      },
    ];
  }
}
