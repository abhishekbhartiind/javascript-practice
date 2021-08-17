
function fizzBuzz(n) {
    // Write your code here
    
var str="",x,y,a;
    for (a=1;a<=n;a++){
    x = a%3 ==0;
    y = a%5 ==0;
    if(x)
    {
        str+="fizz"
    }
    if (y)
    {
        str+="buzz"
    }
    if (!(x||y))
    {
        str+=a;
    }
    str+="\n"
    }
    
    return str;
}


console.log(fizzBuzz(15));