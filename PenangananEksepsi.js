//kelas ekspesi
class DivisionByZeroError extends Error{
    constructor(msg){
        super(msg);
        this.name=this.constructor.name;
        this.message=msg;
    }
    getMessage(){
        return this.message;
    }
}

var a = 2;
console.log("Input Nilai b:"+a);
var b = 0;
console.log("Input Nilai b:"+b);

try{
    if(b==0){
        throw new DivisionByZeroError(
            'Nilai B tidak boleh'
        );
    }
    let c=a/b;
    console.log(`${a}/${b}=${c}`);
}catch(e){
    console.log(e.getMessage());
}
