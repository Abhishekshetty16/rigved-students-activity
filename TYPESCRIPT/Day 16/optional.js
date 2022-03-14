function test1(a, b, c) {
    document.write("<p>a=".concat(a, ",b=").concat(b, ",c=").concat(c, "</p>"));
}
test1(23);
test1(23, 22);
test1(40, 32, 22);
var user;
user = { firstname: "alex", phone: 4555788878 };
document.write("<p> Name:".concat(user.firstname, ",phone:").concat(user.phone, "</p>"));
