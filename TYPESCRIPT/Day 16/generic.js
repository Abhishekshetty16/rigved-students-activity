function identity(a) {
    return a;
}
var a1 = identity(20);
var a2 = identity("Abhi");
var a3 = identity(false);
document.write("<p>a1=".concat(a1, ",a2=").concat(a2, ",a3=").concat(a3, "</p>"));
