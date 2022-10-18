// Your code here.

/*
getFirstName
parameters: person object

person = {              

  firstName: string
  lastName: string
}

return firstName property (string)

*/





function getFirstName(person){

  return person.firstName;
  
}
let person = {firstName: 'Beetle', lastName: 'Juice', age: '50'};
let person2 = {firstName: 'Petra', lastName: 'Solano', age: '30'};






function getLastName(person){
  return person.lastName;
  
}
console.log(getLastName(person));
console.log(getLastName({firstName: 'Beetle', lastName: 'Juice'}));







function getFullName(person){
  return person.firstName + " " + person.lastName;
}
console.log(getFullName(person));
console.log(getFullName({firstName: 'Beetle', lastName: 'Juice'}));






function setFirstName(person, newFirstName){
  person.firstName = newFirstName;
}
setFirstName(person, 'Sokka');
console.log(person);






function setAge(person, newAge){
  person.age = newAge;
}
console.log(setAge, '30');
console.log(setAge, '33');






function giveBirthday(person){
  if (person.age === undefined) {
    person.age = 1;
  } else if (person.age !== undefined){ 
    person.age += 1;
  }
}
giveBirthday(person);
giveBirthday(person2);
console.log(person);
console.log(person2);







function marry(person,person2){
  if(person.married === false && person2.married === false)
  person.married = true;
  person2.married = true;

  person.spouseName = person2.firstName + " " + person2.lastName + "!";
  person2.spouseName = person.firstName + " " + person.lastName + "!";
}
marry(person,person2);
console.log(person,person2);






function divorce(person,person2){
  if(person.married === true && person2.married === true)
  person.married = false;
  person2.married = false

  delete person.spouseName;
  delete person2.spouseName;
}

divorce(person,person2);
console.log(person);
console.log(person2);






// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
