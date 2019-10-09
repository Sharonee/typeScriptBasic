var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumferemce(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumferemce = calculateCircumferemce;
})(MyMath || (MyMath = {}));
//# sourceMappingURL=Circum.js.map