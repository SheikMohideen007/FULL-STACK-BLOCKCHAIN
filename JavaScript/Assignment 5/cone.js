class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    console.log(
      ((Math.PI * Math.pow(this.radius, 2) * this.height) / 3).toFixed(4)
    );
  }
}
let volumeOfCone = new Cone(10, 20);

volumeOfCone.getVolume();
