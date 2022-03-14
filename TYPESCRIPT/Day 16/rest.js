function sum1(x) {
    var z = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        z[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var _a = 0, z_1 = z; _a < z_1.length; _a++) {
        var i = z_1[_a];
        result = result + i;
    }
    return result;
} // example of rest in jscript..
function sum2(x) {
    var z = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        z[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var _a = 0, z_2 = z; _a < z_2.length; _a++) {
        var i = z_2[_a];
        result = result + i;
    }
    return result;
} // example of tscript
var r = sum1('10', 14, '22', 50);
document.write("<p>Result=".concat(r, "</p>"));
r = sum2(10, 50, 30, 38);
document.write("<p>Result".concat(r, "</p>"));
