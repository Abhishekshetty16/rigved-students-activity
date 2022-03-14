var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    student.prototype.display = function () {
        document.write("<p>Name:".concat(this.name, ",Age:").concat(this.age));
    };
    return student;
}());
var s1 = new student('Abhi', 23);
s1.display();
