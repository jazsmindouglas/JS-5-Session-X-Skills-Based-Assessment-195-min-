    class Person{
      constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      }
      get fName(){
        return this.firstName;
      }
      get lName(){
        return this.lastName;
      }
      get vAge(){
        return this.age;
      }
    }

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');
    const submit = document.getElementById('Submit');
    const input = document.getElementById('input');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const value1 = new Person(firstName, lastName, age);
  input.innerHTML =`Hello, ${value1.fName.value} ${value1.lName.value}! You are ${value1.vAge.value} years old.`;

  console.log(value1);
});


/*if (firstName.length<2) {
    alert("Please input your First name");
    submitOK = "false";
  }
  if (lastName.length<1) {
    alert("Please input your Last name");
    submitOK = "false";
  }
 if (isNaN(age) || age < 1 || age > 100) {
    alert("Please input your age");
    submitOK = "false";
  }
  if (submitOK == "false") {
    return false;
  }*/

