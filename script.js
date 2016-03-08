var Vehicle = function() {
    this.speed = 1;
    this.damagePts = 0;
}

Vehicle.prototype.insert = function() {
    var newVehicle = $('<div class= "vehicle ' + this.type + '" id=' + this.id + '></div>');
    $('.container').append(newVehicle);
    var left = Math.floor(Math.random() * document.documentElement.clientWidth);
    var top = Math.floor(Math.random() * document.documentElement.clientHeight);
    $('#'+this.id).css("left", left);
    $('#'+this.id).css("top", top);
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


var addCar = function() {
    allVehicles.push(new Car());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "car";
    allVehicles[allVehicles.length - 1].insert();
}

var addCopCar = function() {
    allVehicles.push(new CopCar());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "copCar";
    allVehicles[allVehicles.length - 1].insert();
}

var addMotorcycle = function() {
    allVehicles.push(new Motorcycle());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "motorcycle";
    allVehicles[allVehicles.length - 1].insert();
}

var addTank = function() {
    allVehicles.push(new Tank());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "tank";
    allVehicles[allVehicles.length - 1].insert();
}

$(document).ready(function() {
    $('#btnCar').click(function() {
        addCar();
    });
    $('#btnCopCar').click(function() {
        addCopCar();
    });
    $('#btnMotorcycle').click(function() {
        addMotorcycle();
    });
    $('#btnTank').click(function() {
        addTank();
    });
});