var coord = { x: 33, y: 21 };
var axis3d = { x: 22, y: 65, z: 34 };
function printcoord(pt) {
    document.write("<p>x=".concat(pt.x, ",y=").concat(pt.y, "</p>"));
}
function print3dcoord(pt3) {
    document.write("<p>x=".concat(pt3.x, ",y=").concat(pt3.y, ",z=").concat(pt3.z, "</p>"));
}
printcoord(coord);
print3dcoord(axis3d);
