const load=document.getElementById('loading');
const card=document.getElementById('card');
const env=document.getElementById('env');
const music=document.getElementById('music');
const story=document.getElementById('story');
const photo=document.getElementById('photo');
const cap=document.getElementById('caption');
const letter=document.getElementById('letter');
const type=document.getElementById('type');
const count=document.getElementById('count');

setTimeout(()=>load.style.display='none',2000);

const photos=['photo1.jpg','photo2.jpg','photo3.jpg','photo4.jpg','photo5.jpg'];
const caps=[
'The day you entered my life ❤️',
'Three years of beautiful memories ✨',
'Every smile of yours is my happiness 😊',
'You are my safe place ❤️',
'Forever starts with us 💍'
];

env.onclick=()=>{
 music.play().catch(()=>{});
 card.style.display='none';
 story.classList.remove('hidden');
 let i=0;
 function next(){
   photo.src=photos[i];
   cap.textContent=caps[i];
   i++;
   if(i<photos.length)setTimeout(next,3000);
   else setTimeout(showLetter,3000);
 }
 next();
}

function showLetter(){
 story.classList.add('hidden');
 letter.classList.remove('hidden');
 const msg=`Hi Babe,

Happy Girlfriend Day ❤️

Three years with you have been the most beautiful part of my life.

Thank you for every smile, every laugh, every memory and every moment we've shared.

No matter where life takes us, you'll always have a special place in my heart.

I Love You Forever.

Forever Yours,
Amalu ❤️`;
 let i=0;
 function typeIt(){
   if(i<msg.length){
      type.textContent+=msg.charAt(i++);
      setTimeout(typeIt,35);
   }else countdown();
 }
 typeIt();
}
function countdown(){
 let n=3;
 count.textContent=n;
 const t=setInterval(()=>{
   n--;
   if(n>0)count.textContent=n;
   else if(n===0)count.textContent='❤️';
   else{
      clearInterval(t);
      count.innerHTML='<h2>In every lifetime... I would still choose you ❤️</h2>';
   }
 },1000);
}
