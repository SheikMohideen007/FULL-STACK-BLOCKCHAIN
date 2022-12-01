let employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];

// a) filter employees according to department = IT
console.log(employees.filter((e) => e.department == "IT"));

// b) filter employees who earn a salary < 65000
console.log(employees.filter((e) => e.Salary < 65000));
