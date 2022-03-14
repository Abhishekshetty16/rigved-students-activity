interface point {
    x:number;
    y:number;
}
interface point3d extends point{
    z:number;
}
let coord: point={x:33,y:21}
let axis3d:point3d={x:22,y:65,z:34};

function printcoord(pt:point){
    document.write(`<p>x=${pt.x},y=${pt.y}</p>`)
}
function print3dcoord(pt3:point3d){
    document.write(`<p>x=${pt3.x},y=${pt3.y},z=${pt3.z}</p>`)
}
printcoord(coord);
print3dcoord(axis3d);