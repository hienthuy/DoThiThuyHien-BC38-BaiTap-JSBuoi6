//BÀI 1
function findNum() {
    var i = 1;
    var sum = 0;
    while(sum <= 10000) {
        sum += i;
        i++;
    }
content = i-1;
document.getElementById("show_1").innerHTML = content;
document.getElementById("show_1").classList.add("info");
}


//BÀI 2
 function total() {
    var numX = document.getElementById("numX").value * 1;
    var numNu = document.getElementById("numN").value * 1;
    var sum = 0;
    content = "";
    for(var i = 1; i <=n ; i++) {
        sum += Math.pow(numX,i);
    }
    content = sum;
    document.getElementById("show_2").innerHTML = content;
    document.getElementById("show_2").classList.add("info");
}
