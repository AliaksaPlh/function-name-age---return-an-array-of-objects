function getPersons(name, age) {
  let personsObjectsArray = [];
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  personsObjectsArray.push(new Person(name, age));
  return personsObjectsArray;
}
