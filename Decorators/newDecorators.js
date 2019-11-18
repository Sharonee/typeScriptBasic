var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator = metaprogramming
// extending a class for more functnality
function logMethod(target, key, descriptor) {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;
    //editing the descriptor/value parameter
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        // note usage of originalMethod here
        var result = originalMethod.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call: " + key + "(" + a + ") => " + r);
        return result;
    };
    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}
var Person1 = /** @class */ (function () {
    function Person1(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person1.prototype.saySomething = function (something, somethingElse) {
        return this.name + " " + this.surname + " says: " + something + " " + somethingElse;
    };
    __decorate([
        logMethod
    ], Person1.prototype, "saySomething", null);
    return Person1;
}());
var p = new Person1("remo", "jansen");
p.saySomething("I love playing", "halo");
//# sourceMappingURL=newDecorators.js.map