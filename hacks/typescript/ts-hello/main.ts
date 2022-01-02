var count: string;
var counts: number
var yup: number[]
var pole: any[] = ["ppeo", 9]
count = '4';
counts = 8;
yup = [2,3,5,6]

const colorGreen = 0
const colorYellow = 1
const colorOrange = 0

enum Color { Red, Green, Blue };
var backgroundColor = Color.Green

// Type assertions
var message = "yes"
// var osps = message.endsWith('3')

var messages
messages = "Go pack go"
// let mess = (<string>message).endsWith("go")
// let mess2 = (message as string).endsWith("go")


//  Arrow Function
var log = function (message) {
    return message
}
var doLog = (message) => console.log(message);


// Custom types
let drawPoint = (point) => {
    // ...
}
drawPoint({
    x: "name",
    y: "yes"
})

// Inline annotations
var drawPoint1 = (point: { x: number, y: number }) => {
    // ...
}
drawPoint1({
    x: 1,
    y: 2
})

// Interfaces
interface Point1 {
    x: number,
    y: number
}
var drawPoint2 = (point: Point1) => {
    // ...
}
drawPoint1({
    x: 1,
    y: 2
})

class Point {
    x: number;
    y: number;
    draw() {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };
    getDistance(another: Point) {
        // ...
    }
}
// var point: Point;
var point = new Point();
point.x = 4;
point.y = 2;
point.draw()


// Constructors
class Points {
    x: number;
    y: number;

    constructor(x: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };
    getDistance(another: Points) {
        // ...
    }
}
// varpoint: Points;
var points = new Points(3,5);
points.draw()



// Access Modifiers
// public
// private
// protected
class Pointers {
    private x: number;
    y: number;

    constructor(x: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };
    getDistance(another: Pointers) {
        // ...
    }
}
// var point: Pointers;
var pointer = new Pointers(3,5);
// pointer.x = 9 // Cannot accesss it
pointer.draw()

class Pointer {
    constructor(private x: number, public y?: number) { };

    draw() {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };

    getDistance(another: Pointer) {
        // ...
    }
}
// var point: Pointer;
var pointers = new Pointer(3,5);
pointer.y = 9 // Cannot accesss it
pointers.draw()



class Pointery {
    constructor(private x: number, public y?: number) { };

    draw() {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };

    getDistance(another: Pointery) {
        // ...
    }

    getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0) throw new Error("Value cannot be less than 0")

        this.x = value
    }
}
// var point: Pointery;
var pointery = new Pointery(3,5);
var x = pointery.getX
pointery.setX(12)
pointery.draw()


class Pointeryo {
    // constructor(private _x: number, public y?: number) { };
    constructor(private x: number, public y?: number) { };

    draw() {
        // ...
        console.log('X:' + this.x + 'Y:', this.y);
    };

    getDistance(another: Pointeryo) {
        // ...
    }

    // property
    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0) throw new Error("Value cannot be less than 0")

        this.x = value
    }
}
// var point: Pointeryo;
var pointeryo = new Pointeryo(3,5);
var u = pointeryo.X
pointeryo.X = 10
pointeryo.draw()

