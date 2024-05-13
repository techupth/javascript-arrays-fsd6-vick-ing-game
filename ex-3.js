const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
let alex = employees[1].name;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;
employees[1].hobbies.push("Watching basketball"); //เพิ่มลำดับท้าย
employees[1].hobbies.unshift("Watching basketball"); //แทรกลำดับแรก

console.log(employees[0]);
