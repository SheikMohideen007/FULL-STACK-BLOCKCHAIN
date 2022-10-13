class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  getVolume() {
    console.log(((4 / 3) * Math.PI * Math.pow(this.radius, 3)).toFixed(4));
  }
}
let volumeOfSphere = new Sphere(10);

volumeOfSphere.getVolume();
