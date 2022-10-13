class Rectangle {
  constructor(area) {
    this.area = area;
    this.getArea(area);
  }
  getArea(area) {
    console.log(Math.pow(area, 2));
  }
}

class Square extends Rectangle {
  constructor(area) {
    super(area);
    this.area = area;
  }
}
let squareObj = new Square(10);
