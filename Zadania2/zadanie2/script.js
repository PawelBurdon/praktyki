const fib = (x) =>{
    if(x == 0){
        return 0
    }else if(x == 1){
        return 1
    }else if(x>1){
       return fib(x-1)+fib(x-2)
    }
}
