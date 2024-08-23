function isPrime(n){
    let c=0;
    for (let index = 1; index <= n; index++) {
        if(n%index==0)
        {
            c++;
        }
    }
    if(n==1)
    {
        console.log("Input is 1 whhich is Nither Prime nor Composite");
    }
    else if(c==2){
        console.log("Prime Number");
    }
    else{
        console.log("Composite Number");
    }
}
isPrime(1);