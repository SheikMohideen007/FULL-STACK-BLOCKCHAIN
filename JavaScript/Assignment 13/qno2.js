let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];
let result = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
};
students.forEach((e) => {
  mark = e.marks;
  switch (Math.floor(mark / 10)) {
    case 9:
    case 10:
      result.A.push({ name: e.name, grade: "A" });
      break;
    case 8:
      result.B.push({ name: e.name, grade: "B" });
      break;
    case 7:
      result.C.push({ name: e.name, grade: "C" });
      break;
    case 6:
      result.D.push({ name: e.name, grade: "D" });
      break;
    case 5:
      result.E.push({ name: e.name, grade: "E" });
      break;
    default:
      result.F.push({ name: e.name, grade: "F" });
  }
});

console.log(result);
