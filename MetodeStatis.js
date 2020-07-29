class Segitiga{
    //konstruktor
    constructor(a,t){
        //mendefinisikan properti
        this.alas=a;
        this.tinggi=t;
    }

    //daftar metode
    luas(){
        return this.alas*this.tinggi/2;
    }

    //metode statis
    static buatObjek(a,t){
        return new Segitiga(a,t);
    }
}

//membaca data alas dan tinggi
var a = 3;
console.log("Nilai a:"+a);
var t = 4;
console.log("Nilai t:"+t);

//memanggil metode statis
let obj=Segitiga.buatObjek(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.luas()}`);