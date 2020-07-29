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
}

//membuat data alas dan tinggi
var a = 3;
console.log("Masukkan Nilai alas:"+a);
var t = 4;
console.log("Masukkan Nilai tinggi:"+t);


//membuat objek dari kelas segitiga
let obj=new Segitiga(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.luas()}`);