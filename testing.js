


function sum(a,b)
{

  if(b!=undefined)
  {
    return a  + b;
  }
  else {
    return function (b) {

      return a + b;
    }
  }
}
console.log(sum(20,30));

console.log(sum(20)(30));
