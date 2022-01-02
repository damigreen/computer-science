export class Pointx {
    constructor(private x: number, public y?: number) { };

    draw() {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };

    getDistance(another: Pointx) {
        // ...
    }
}
var pointx = new Pointx(3,5);
pointx.draw()

