//*********declear variable ***************
let lightScreen = document.getElementById("lightscreen")
let darkScreen = document.getElementById("darkscreen")
let but = document.getElementById("but")
let but2 = document.getElementById("but2")
let but3 = document.getElementById("but3")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let wif = document.querySelector(".wif")
let sig = document.querySelector(".sig")
let bat = document.querySelector(".bat")
let paswordDiv = document.getElementById("pasworddiv")
let passwordCarrier= document.getElementById("passwordcarrier")
let homePage = document.getElementById("homepage");
let digits = document.getElementById("digits");
let network = document.getElementById("network");
let incr =  document.getElementById("vol")
let clearBack1 = document.querySelector(".clearback1")
let ok = document.querySelector(".ok")
let videoCam = document.querySelector(".videocam")
let clearBack2 = document.querySelector(".clearback2")
let menu = document.getElementById("menu")
let comb = document.getElementById("comb")


// *************togle lightscreen************8
function toggleScreens() {
  if (lightScreen.style.display === "none") {
      lightScreen.style.display = "block";
      darkScreen.style.display = "none";
      comb.style.display = "flex";
      incr.style.zIndex = "1";
     
      
  } else {
      lightScreen.style.display = "none";
      darkScreen.style.display = "block";
  }
}
// *********volume*************

let vol = 0
function volume() {  
  vol++     
 let incr =  document.getElementById("vol")
 incr.style.width =`${vol * 10}px`
 incr.style.display = "block"
 setTimeout(() => {        
 incr.style.display = "none"
}, 10000);
} 
 
function volumee( ) {
vol--
 let incr =  document.getElementById("vol")
 incr.style.width =`${vol * 10}px`
 incr.style.display = "block"
 setTimeout(() => {        
 incr.style.display = "none"
}, 10000);
}
//********time**********
setInterval(()=>{
    let date = new Date();
    p1.innerHTML = `${date.getHours()}:`;
    p2.innerHTML = `${date.getMinutes()}`;
 })
// ******** key / number display*********
 function digitHolder( ) {
 if (document.getElementById("passwordcarrier").style.display = "block"){
  digits.style.display = "flex" 
  homePage.style.display = "none";
  menu.style.display = "none";
  comb.style.display = "flex";
} else {
          digits.style.display = "none";

 }         
}
//*********password to passwordpindisplay*********
let passwordPinDisplay = document.getElementById("passwordpindisplay");
function del1() { 
  passwordPinDisplay.innerHTML =  passwordPinDisplay.innerHTML.slice(0, -1)        
//  passwordPinDisplay.innerHTML =  passwordPinDisplay.innerHTML.substring(0, passwordPinDisplay.innerHTML.length -1)        This performs thesame function
}
//*******passwordextalishment******* // passwordpindisplay digitHolder
let phonePassword = "888888"
let typePassword = ""

function pinner(password) {
typePassword += password
passwordPinDisplay.innerHTML += password
if ( typePassword.length == 6 && typePassword !== phonePassword) {
  passwordPinDisplay.innerHTML = ""
  typePassword = ""
  return;

}else if (typePassword.length == 6 && typePassword == phonePassword){
  passwordPinDisplay.innerHTML = ""
  typePassword = ""
  homePage.style.display = "block";
  menu.style.display = "flex";
  digits.style.display = "none"
  passwordCarrier.style.display = "block";
comb.style.zIndex = "1"
}
}

let dignumberDisplay = document.getElementById("dignumberdisplay")
let callPage = document.getElementById("callpage")
let numberHolder = document.getElementById("number_holder")

function calling() { 
  callPage.style.display = "block"
   network.style.color = "white"
   date.style.color = "white"
   passwordPinDisplay.style.color = "white"
   numberHolder.style.display = "flex"
   homePage.style.display = "none";
   
}

function typedDigit(dialer) {
  dignumberDisplay.innerHTML += dialer
  dignumberDisplay.style.color = "white"
  dignumberDisplay.style.fontSize = "20px"
  dignumberDisplay.style.textAlign = "center"
  dignumberDisplay.style.marginTop = "10px"
  clearBack2.style.display = "block"
  clearBack2.style.color= "white"
  videoCam.style.display = "block"
  videoCam.style.color = "white"
}
function del2() { 
  dignumberDisplay.innerHTML =  dignumberDisplay.innerHTML.slice(0, -1) 

}   
let callingNum = document.getElementById("callingnum")
let numberCalling = document.getElementById("numbercalling")

function greendialling( ) {
 numberCalling.innerHTML = dignumberDisplay.innerHTML
  callingNum.style.display = "block"
  dignumberDisplay.style.display = "none"
  menu.style.display = "none"

}

function callcutting(params) {
  setTimeout(() => {        
  callingNum.style.display = "none"
   }, 1000);
  homePage.style.display = "block";
   
}

