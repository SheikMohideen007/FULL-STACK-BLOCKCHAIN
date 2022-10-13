let step = parseInt(87);
function matchHouses(step) {
  if (step == 1) {
    //step ==1 returns 6 //because its fixed
    return 6;
  } else {
    let hillshape = step * 2; //actual logic
    let upperHorizontal = step;
    let lowerHorizontal = step;
    let center = step + 1;
    return hillshape + upperHorizontal + lowerHorizontal + center;
  }
}
console.log(matchHouses(step));
