function refresh(){
    let length = document.getElementById("passwordLength").value;
    return length
}


let containerOne = document.getElementById("containerOne")
let containerTwo = document.getElementById("containerTwo")
let containerThree = document.getElementById("containerThree")
let containerFour = document.getElementById("containerFour")

let AllChars = [];
for (let i=32; i<127; i++){
AllChars.push(String.fromCharCode(i));
}


let stringChars = AllChars.join('');

let retValue=['','','',''];

function displayPassword(){
        for (let i = 0, n = stringChars.length; i < refresh(); ++i) {
        for(let j=0; j<4; j++){
          
        retValue[j] += stringChars.charAt(Math.floor(Math.random() * n));
    }}
    this.containerOne.value = retValue[0];
    this.containerTwo.value = retValue[1];
    this.containerThree.value = retValue[2];
    this.containerFour.value = retValue[3];
    retValue=['','','',''];
}

containerOne.onclick = function() {
    this.select();
    document.execCommand('copy');
    containerOne.value = " ✅copied!";
}
containerTwo.onclick = function() {
    this.select();
    document.execCommand('copy');
    containerTwo.value = " ✅copied!";
}
containerThree.onclick = function() {
    this.select();
    document.execCommand('copy');
   containerThree.value = " ✅copied!";
}
containerFour.onclick = function() {
    this.select();
    document.execCommand('copy');
    containerFour.value = " ✅copied!";
}
