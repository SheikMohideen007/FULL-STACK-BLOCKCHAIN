class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    console.log((Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4));
  }
}
let volumeOfCylinder = new Cylinder(10, 20);

volumeOfCylinder.getVolume();
