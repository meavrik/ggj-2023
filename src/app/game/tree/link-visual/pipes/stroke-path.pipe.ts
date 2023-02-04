import { Pipe, PipeTransform } from '@angular/core';

interface IPoint {
  x: number;
  y: number;
}

@Pipe({
  name: 'strokePath'
})
export class StrokePathPipe implements PipeTransform {
  transform(startPoint: IPoint, endPoint: IPoint, edgesCount: number, asPoints: boolean = true, offset: number = 0): string {
    const curve = edgesCount * 50;
    const center: IPoint = { x: (startPoint.x + endPoint.x) / 2, y: (startPoint.y + endPoint.y) / 2 };
    const takeX = Math.abs(startPoint.x - endPoint.x) > Math.abs(startPoint.y - endPoint.y);
    const curvePosition: IPoint = { x: takeX ? curve : 0, y: takeX ? 0 : curve };

    if (asPoints) {
      return `${startPoint.x},${startPoint.y} ${center.x + (curvePosition.y || 0)},${center.y + (curvePosition.x || 0)} ${endPoint.x},${endPoint.y} `;
    }

    const xOffset = Math.abs(startPoint.x - endPoint.x) < Math.abs(startPoint.y - endPoint.y) ? offset : 0;
    const yOffset = Math.abs(startPoint.x - endPoint.x) >= Math.abs(startPoint.y - endPoint.y) ? offset : 0;

    return `M ${startPoint.x + xOffset} ${startPoint.y + yOffset} Q ${center.x + xOffset + curvePosition.y * 2} ${
      center.y + yOffset + curvePosition.x * 2
    } ${endPoint.x + xOffset} ${endPoint.y + yOffset}`;
  }
}
