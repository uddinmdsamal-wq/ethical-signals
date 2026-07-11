const btn=document.querySelector("button");

const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

btn.onclick=()=>{

btn.innerHTML="🚀 Sending...";

setTimeout(()=>{

btn.innerHTML="✅ Sent";

},800);

setTimeout(()=>{

btn.innerHTML="🚀 SEND";

},1800);

}
/* Fake Online Counter */

let users=1;

setInterval(()=>{

users=Math.floor(Math.random()*40)+1;

document.getElementById("counter").innerHTML="🟢 Online: "+users;

},2500);

/* Card Glow */

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/35;
let y=(window.innerHeight/2-e.pageY)/35;

card.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});
