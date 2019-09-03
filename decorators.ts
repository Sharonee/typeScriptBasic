function decoratorName(name: string) {
    return function(target: Function): void{
    /*do something*/
    console.log('the name is : ${name}');
    }
   }
   
   @decoratorName('someName')
   class className{
   
   }