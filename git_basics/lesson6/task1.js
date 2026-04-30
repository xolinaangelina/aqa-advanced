//  Площа прямокутника

// 1. Function declaration
function calcArea(width, height) {
  return width * height;
}
console.log('Declaration:', calcArea(5, 10));

// 2. Function expression
const calcAreaExpr = function(width, height) {
  return width * height;
};
console.log('Expression:', calcAreaExpr(5, 10));

// 3. Arrow function
const calcAreaArrow = (width, height) => width * height;
console.log('Arrow:', calcAreaArrow(5, 10));