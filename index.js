const spy = chai.spy();
function receivesAFunction(callback){
   callback(); 
}
receivesAFunction(spy);
chai.expect(spy).to.have.been.called();

// var fn;
// fn = returnsANamedFunction();
function returnsANamedFunction(){
   return function name (){

   }

}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}

