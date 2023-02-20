// object destructuring
const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFamousSong: "kashmir",
};
// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1,var2)

const {bandName:var1,famousSong,...restProps} = band;
// console.log(var1)
console.log(famousSong)
// console.log(restProps)