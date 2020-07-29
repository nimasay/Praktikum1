var globalVar = 100;

function f(){
    var localVar = 200;

    console.log("Memanggil Variable di dalam fungsi");
    console.log("globalVar:"+globalVar);
    console.log("localVar:"+localVar);
}

f();

console.log("\n Memanggil Variable di luar fungsi");
console.log("globalVar:"+globalVar);
