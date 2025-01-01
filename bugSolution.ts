function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Using type assertion
console.log(greeter(user.toString()));
//Using type checking
if(typeof user === 'string'){
    console.log(greeter(user));
} else {
    console.log("Invalid input");
}
