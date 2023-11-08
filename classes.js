class UserDetails {
  static variable = 0;
  constructor(name, age) {
    (this.name = name), (this.age = age), UserDetails.variable++;
  }
  welcome() {
    console.log(
      `hello ${this.name} you are ${this.age} years old and count is${UserDetails.variable}`
    );
  }
  static totalUsers() {
    console.log(`total users is ${this.variable}`);
  }
}

let userone = new UserDetails("sanjay", 22);
let usertwo = new UserDetails("jagathi", 23);
let userthree = new UserDetails("jagathssi", 25);
let userfour = new UserDetails("jagathssi", 25);
// console.log(userone.welcome());
// console.log(usertwo.welcome());
// console.log(userthree.welcome());
// console.log(UserDetails.totalUsers())

class PaidUsers extends UserDetails{
    constructor(variable){
        super(variable);
    }
    message(variable){
        console.log('variable');
    }
}
let paidUser1 = new PaidUsers("dana",24);
console.log(paidUser1.welcome());
console.log(paidUser1.message(a))