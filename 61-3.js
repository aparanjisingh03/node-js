var palin=function(a)
{
    var h=a;
    var s=0;
    while(a)
    {
        var c=a%10;
        s=s*10+c;
        a=a/10;
        a=~~a;
    }
    if(h==s)
    console.log("yes");
    else
    console.log("no");
}
palin(12353321);