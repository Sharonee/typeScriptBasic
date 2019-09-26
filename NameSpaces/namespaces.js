var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumferemce(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumferemce = calculateCircumferemce;
    function calculateRectangle(width, lenght) {
        return width * lenght;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateCircumferemce(10));
console.log(MyMath.calculateRectangle(10, 20));
//# sourceMappingURL=namespaces.js.map