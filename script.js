var Vehicle = function() {
    this.speed = 1;
    this.damagePts = 0;
}

Vehicle.prototype.move = function() {
    
}

Vehicle.prototype.damage = function() {
    
}

Vehicle.prototype.totaled = function() {
    
}


var Car = function() {
    Vehicle.call(this);
    
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var CopCar = function() {
    Car.call(this);
    
}
CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;

var Motorcycle = function() {
    Vehicle.call(this);
    this.speed = 2;
    
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var Tank = function() {
    Vehicle.call(this);
    this.speed = 0.5;
    
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;


var allVehicles = [];