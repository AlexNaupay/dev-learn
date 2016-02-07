export default function maths(){
    console.log(0o35);
    console.log(0b100);

    let arr1 = [1,2,3];
    let arr2 = Array.from(arr1, v => --v);
    arr2.push(3);
    console.log(arr1);
    console.log(arr2);

    let fecha    = [24, 4, 2015];
    let [d, , y] = fecha;
    console.log(d);
    console.log(y);
}