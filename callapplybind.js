let name1 = {
  firstname: "sanjay",
  lastname: "krishnan",
};
let name2 = {
  firstname: "soundarya",
  lastname: "lakshmi",
};
let printname = function (town,district) {
  console.log(this.firstname+" is from "+ town + district);
};

printname.call(name1,"gobi");
printname.apply(name2,["gobi","erode"]);

//call method directs where the this keyword should points to
//apply-->the arguements are passed as an array
//bind -->

let bindmethod = printname.bind(name2,"gobichettipalayam");
bindmethod()
