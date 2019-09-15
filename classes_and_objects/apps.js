var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "type";
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log("Print the age" + this.age);
        // this.setType("new Type");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Sharon", "sharon");
console.log(person);
person.printAge; // todo - ask why doesnt print the age
//// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max() {
        var _this = _super.call(this, "max", "max user name") || this;
        _this.age = 31;
        return _this;
    }
    return Max;
}(Person));
var max = new Max();
console.log(max);
//Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);
//Statics methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumfernence = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumfernence(5));
//# sourceMappingURL=apps.js.map