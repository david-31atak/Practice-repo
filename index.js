// var i;
// for (i=1;i<=5;i++) {
//     document.write("<p>I Love JS</p>");
// }
var homeless=document.getElementById("home");
var hps=document.getElementById("hp");



function david() {
    var i=1;
    do {
        homeless.innerHTML="<li>I Love JS</li>";
        i++;
    }
    while(i>=5);
};

var dav= {
    name:"babe",
    class:"Space",
    age:32
};

homeless.innerHTML="My name is:"+" "+dav.name+" "+"and i'm"+" "+dav.age+"years old"+", "+"and i live in "+dav.class;

function student(n, c, r) {
    this.n=n;
    this.c=c;
    this.r=r;
};
var student1=new student("Dav","space", 32);
hps.innerHTML=student1.n+" "+"goes to the market in "+student1.c+" for every "+student1.r+" days";

var race="black lives matter";
document.write(race.toUpperCase());

var myDate = new Date();
document.write(myDate);


var pr=document.querySelector("#press");
pr.addEventListener("click",function (){
    prompt("are you sure.");
})

