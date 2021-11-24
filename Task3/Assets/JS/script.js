// function whatShallIWear(temp) {
//     if(temp<60){
//         console.log("wear a jacket");
//     }
//     else if(temp<70){
//         console.log("wear a sweater");
//     }
//     else{
//         console.log("wear a t-shirt");
//     }
// }

// whatShallIWear(50);
// whatShallIWear(80);
// whatShallIWear(60);

// function doIt(param){
//     param = 2;
//     console.log(param);
// }

// var test = 1;
// doIt(test);
// console.log(test);

// var radius = 5.2;
// var theArea = calculateArea(radius);

// function calculateArea(r){
//     var area;

//     if(r<=0){
//         return 0;
//     }
//     else{
//         area = Math.PI*r*r;
//         return area;
//     }
// }

// console.log("The area is: " + theArea);


// function playTurn(player, location){
//     points = 0;

//     if(location==1){
//         points = points + 100;
//     }
//     return points;
// }

// var total = playTurn("Jai", 1);
// alert(points);

// let fiatParams = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "Medium Blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000,
//     started: false,
//     fuel: 0
// };

// let taxiParams = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341,
//     started: false,
//     fuel: 0
// };

// let cadiParams = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892,
//     started: false,
//     fuel: 0
// };

// let chevyParams = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021,
//     started: false,
//     fuel: 0
// };

// let testCarParams = {
//     make: "Webville Motors",
//     model: "Test Car",
//     year: 2014,
//     color: "marine",
//     passengers: 2,
//     convertible: true,
//     mileage: 21
// };

// let limoParams = {
//     make: "Webville Motors",
//     model: "Limo",
//     year: 1983,
//     color: "black",
//     passengers: 12,
//     convertible: true,
//     mileage: 21120
// };

// function Car(params){
//     this.make = params.make;
//     this.model = params.model;
//     this.year = params.year;
//     this.color = params.color;
//     this.passengers = params.passengers;
//     this.convertible = params.convertible;
//     this.mileage = params.mileage;
//     this.started = params.started;
//     this.fuel = params.fuel;
//     this.start = function(){
//         if(this.fuel == 0){
//             console.log(`${"The car is on the empty, fill up before starting"}`);
//         }
//         else{
//             this.started = true;
//         }
//     };
//     this.stop = function(){
//         this.started = false;
//     };
//     this.drive = function(){
//         if(this.started){
//             if(this.fuel > 0){
//                 console.log(`${this.make} ${this.model} ${"goes zoom zoom!"}`);
//             }
//             else{
//                 console.log(`${"Uh oh, out of fuel."}`);
//                 this.stop();
//             }
//         }
//         else{
//             console.log("You need to start the engine first.");
//         }
//     };
//     this.addFuel = function(amount){
//         this.fuel = this.fuel + amount;
//     };
// }

// let fiat = new Car(fiatParams);
// let taxi = new Car(taxiParams);
// let cadi = new Car(cadiParams);
// let chevy = new Car(chevyParams);
// let testcar = new Car(testCarParams);
// let limo = new Car(limoParams);
// let cars = [fiat, taxi, cadi, chevy, testcar, limo];

// for (let i = 0; i < cars.length; i++) {
//     cars[i].start();
//     cars[i].drive();
//     cars[i].drive();
//     cars[i].stop();
// }



// function prequal(car){
//     if(car.mileage > 10000){
//         return false;
//     }
//     else if(car.year > 1960){
//         return false;
//     }
// }

// var worthALook = prequal(taxi);
// if(worthALook){
//     console.log(`${"You gotta check out this"} ${taxi.make} ${taxi.model}`);
// }
// else{
//     console.log(`${"You should really pass on the"} ${taxi.make} ${taxi.model}`);
// }

// var worthALook = prequal(cadi);
// if(worthALook){
//     console.log(`${"You gotta check out this"} ${cadi.make} ${cadi.model}`);
// }
// else{
//     console.log(`${"You should really pass on the"} ${cadi.make} ${cadi.model}`);
// }

// var worthALook = prequal(chevy);
// if(worthALook){
//     console.log(`${"You gotta check out this"} ${chevy.make} ${chevy.model}`);
// }
// else{
//     console.log(`${"You should really pass on the"} ${chevy.make} ${chevy.model}`);
// }

// var worthALook = prequal(fiat);
// if(worthALook){
//     console.log(`${"You gotta check out this"} ${fiat.make} ${fiat.model}`);
// }
// else{
//     console.log(`${"You should really pass on the"} ${fiat.make} ${fiat.model}`);
// }


// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function(){
//         if(this.weight > 25){
//             console.log(`${this.name} ${"says Woof!"}`);
//         }
//         else{
//             console.log(`${this.name} ${"says Yip!"}`);
//         }
//     }
// }

// let dog = {
//     name: "Fido",
//     breed: "Mixed",
//     weight: 38
// };

// let fido = new Dog("Fido", "Mixed", 38);
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [fido, fluffy, spot];

// for (let i = 0; i < dogs.length; i++) {
//     let size = "small";
//     if(dogs[i].weight > 10){
//         size = "large";
//     }

//     console.log(`${"Dog:"} ${dogs[i].name} ${"is a"} ${size} ${dogs[i].breed}`);
// }

// for (let i = 0; i < dogs.length; i++) {
//     dogs[i].bark();
// }

// function Duck(type, canFly){
//     this.type = type;
//     this.canFly = canFly;
// }

// let duck = {
//     type: "redheaded",
//     canFly: true
// }


// function Coffee(roast, ounces){
//     this.roast = roast;
//     this.ounces = ounces;
//     this.getSize = function(){
//         if(this.ounces === 8){
//             return "small";
//         }
//         else if(this.ounces === 12){
//             return "medium";
//         }
//         else if(this.ounces === 16){
//             return "large";
//         }
//     }
//     this.toString = function(){
//         return `${"You've ordered a"} ${this.getSize()} ${this.roast} ${"coffee."}`;
//     }
// }

// let houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.toString());

// let darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());


// function Dog(name, breed, weight){
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }

// Dog.prototype.species = "Canine";
// Dog.prototype.bark = function(){
//     if (this.weight > 25) {
//         console.log(this.name + " says Woof!");
//     } else {
//         console.log(this.name + " says Yip!");
//     }
// };
// Dog.prototype.run = function(){
//     console.log("Run!");
// };
// Dog.prototype.wag = function(){
//     console.log("Wag!");
// };

// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);

// spot.bark = function(){
//     console.log(this.name + " says WOOF!");
// }

// fido.bark();
// fido.run();
// fido.wag();

// fluffy.bark();
// fluffy.run();
// fluffy.wag();

// spot.bark();
// spot.run();
// spot.wag();

// class Calc {
//     constructor(a){
//         this.a = a;
//     }
//     plus(b){
//         this.a += b;
//         return this
//     }
//     minus(c){
//         this.a -= c;
//         return this
//     }
//     divide(x){
//         this.a /= x;
//         return this
//     }
//     multiply(y){
//         this.a *= y;
//         return this
//     }
// }

// let calculator = new Calc(50).plus(6).minus(30).multiply(3).divide(2);

// console.log(calculator);


