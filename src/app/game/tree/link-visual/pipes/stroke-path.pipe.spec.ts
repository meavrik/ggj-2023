import { StrokePathPipe } from './stroke-path.pipe';
//TODO TEST
describe('Pipe: StrokePathe', () => {
  it('create an instance', () => {
    const pipe = new StrokePathPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an path with 1 edge', () => {
    const pipe = new StrokePathPipe();
    expect(pipe.transform({ x: 10, y: 10 }, { x: 20, y: 10 }, 1, false)).toEqual(`M 10 10 Q 15 110 20 10`);
  });

  it('create an path with 3 edges', () => {
    const pipe = new StrokePathPipe();
    expect(pipe.transform({ x: 10, y: 10 }, { x: 20, y: 10 }, 3, false)).toEqual(`M 10 10 Q 15 310 20 10`);
  });

  it('create an path asPoints', () => {
    const pipe = new StrokePathPipe();
    expect(pipe.transform({ x: 10, y: 10 }, { x: 20, y: 10 }, 1, true)).toEqual(`10,10 15,60 20,10 `);
  });

  it('create an path asPoints with 3 edges', () => {
    const pipe = new StrokePathPipe();
    expect(pipe.transform({ x: 10, y: 10 }, { x: 20, y: 10 }, 3, true)).toEqual(`10,10 15,160 20,10 `);
  });

  it('create an path asPoints with offset', () => {
    const pipe = new StrokePathPipe();
    expect(pipe.transform({ x: 10, y: 10 }, { x: 20, y: 10 }, 1, false, 10)).toEqual(`M 10 20 Q 15 120 20 20`);
  });

  it('create an path asPoints with offset ad 2 edges', () => {
    const pipe = new StrokePathPipe();
    expect(pipe.transform({ x: 10, y: 10 }, { x: 20, y: 10 }, 2, false, 10)).toEqual(`M 10 20 Q 15 220 20 20`);
  });
});
