sum=(a)=>
{
    var s=0;
    while(a)
    {
        s=s+1;
        a=a/10;
        a=~~a;
    }
    
    console.log("no. of digits of a number is "+s);
}
sum(123456);