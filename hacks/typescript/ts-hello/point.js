"use strict";
exports.__esModule = true;
exports.Pointx = void 0;
var Pointx = /** @class */ (function () {
    function Pointx(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    Pointx.prototype.draw = function () {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };
    ;
    Pointx.prototype.getDistance = function (another) {
        // ...
    };
    return Pointx;
}());
exports.Pointx = Pointx;
var pointx = new Pointx(3, 5);
pointx.draw();
