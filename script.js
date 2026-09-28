const cover=document.getElementById('cover');
const music=document.getElementById('music');
const musicBtn=document.getElementById('musicBtn');
const openBtn=document.getElementById('openBtn');

async function playMusic(){
  try{
    await music.play();
    musicBtn.textContent='Ⅱ';
    musicBtn.classList.add('playing');
    musicBtn.classList.remove('unavailable');
  }catch(error){
    musicBtn.textContent='♪';
    musicBtn.classList.add('unavailable');
  }
}

openBtn.addEventListener('click',()=>{
  cover.classList.add('hide');
  playMusic();
});

musicBtn.addEventListener('click',()=>{
  if(music.paused){
    playMusic();
  }else{
    music.pause();
    musicBtn.textContent='♪';
    musicBtn.classList.remove('playing');
  }
});

const target=new Date('2026-11-21T21:00:00+05:30').getTime();
function updateCountdown(){
  const distance=Math.max(0,target-Date.now());
  document.getElementById('days').textContent=String(Math.floor(distance/86400000)).padStart(2,'0');
  document.getElementById('hours').textContent=String(Math.floor(distance/3600000)%24).padStart(2,'0');
  document.getElementById('minutes').textContent=String(Math.floor(distance/60000)%60).padStart(2,'0');
  document.getElementById('seconds').textContent=String(Math.floor(distance/1000)%60).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);
