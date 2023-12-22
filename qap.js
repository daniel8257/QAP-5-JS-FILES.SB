
const incomeTaxRate = 0.15;

fetch("./qap.json")
  .then(response => response.json())
  .then(people => {
    // Create a container to hold the people data
    const container = document.createElement('div');
    container.id = 'peopleContainer';

    // Loop through an array in the JSON data
    people.forEach(person => {
      // Create a new div for each person
      const personDiv = document.createElement('div');
      personDiv.className = 'person';

      // Add the person's data to the div
      personDiv.innerHTML = `
        <h2>${getFullName(person)}</h2>
        <p>Birthday: ${getBirthday(person)}</p>
        <p>Age: ${getAge(person)}</p>
        <p>Gender: ${getGender(person)}</p>
        <p>Address: ${getAddress(person)}</p>
        <p>Phone: ${getPhone(person)}</p>
        <p>Salary: ${getSalary(person)}</p>
        <p>Income Tax: ${getIncomeTax(person)}</p>
        <p>Net Income: ${getNetIncome(person)}</p>
      `;

      // Also log the data to the console
      console.log(getFullName(person));
       console.log(getBirthday(person));
       console.log(getAge(person));
       console.log(getGender(person));
       console.log(getPhone(person));
       console.log(getSalary(person));
       console.log(getIncomeTax(person));
       console.log(getNetIncome(person));



      // Add the person's div to the container
      container.appendChild(personDiv);
    });

    // Append the container to the body of the document
    document.body.appendChild(container);
  })
    .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

function getBirthday(person) {
  return person.birthDate;
}

function getAge(person) {    
  return `${new Date().getFullYear() - new Date(person.birthDate).getFullYear()} years old.`;
}

function getGender(person) {
  return person.gender;
}

function getAddress(person) {
  return person.address.street + ", " + person.address.city + ", " + person.address.province + " ," + person.address.postalCode + ", " + person.address.country;
}

function getPhone(person) {
  return person.phone;
}

function getSalary(person) {
  return person.salary;
}

function getIncomeTax(person) {
  return person.salary * incomeTaxRate;
}

function getNetIncome(person) {
  return person.salary - getIncomeTax(person);
}