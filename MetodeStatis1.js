class Arimetika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
var a = 3;
console.log("Nilai a:"+a);
var b = 4;
console.log("Nilai b:"+b);
//memanggil metode statis
console.log(`${a}+${b}=${Arimetika.tambah(a,b)}`);