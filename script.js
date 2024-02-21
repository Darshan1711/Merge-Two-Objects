function merge(){

    let f1 = JSON.parse(document.getElementById("f1").value);
    let f2 = JSON.parse(document.getElementById("f2").value);

    let f3 = {...f1, ...f2};

    document.getElementById("s1").textContent = `Merge Object : ${JSON.stringify(f3)}`


}