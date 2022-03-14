function test1(a, b) {
    document.write("<p>test1() a = ".concat(a, ", b = ").concat(b, "</p>"));
}
function test2(a, b) {
    document.write("<p>test2() a = ".concat(a, ", b = ").concat(b, "</p>"));
    return (a - b);
}
function test3(a, b) {
    if ((a - b) < 0) {
        return "Result is negative number: " + (a - b);
    }
    else {
        return (a - b);
    }
}
test1(50, 20);
var r = test2(30, 10);
document.write("<p>Result from test2: ".concat(r, "</p>"));
var r2 = test3(r, -200);
document.write("<p>Result from test3: ".concat(r2, "</p>"));
