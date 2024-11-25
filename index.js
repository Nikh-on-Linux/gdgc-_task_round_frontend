const dom = document.querySelector('.display');

const midX = dom.clientWidth / 2;
const midY = dom.clientHeight / 2;

document.addEventListener("mousemove",(e)=>{
  mouseMovement(e,dom)
})
dom.addEventListener("mouseout",(e)=>{
  dom.style.setProperty('--rotateX',0 + 'deg')
  dom.style.setProperty('--rotateY',0 + 'deg')
})



function mouseMovement(event,element){
  const x = event.clientX;
  const y = event.clientY

  console.log(x,y)

  const offsetX = (((x-midX) / midX) * 8);
  const offsetY = (((y-midY) / midY) * 8);

  element.style.setProperty('--rotateX',-1*offsetY + 'deg')
  element.style.setProperty('--rotateY',offsetX + 'deg')
}



function delay(el){
  j = 0.1
  const sl = document.querySelectorAll(`.${el}`);
  sl.forEach((e)=>{e.style.animationDelay = `${j}s` ; j+=0.1})
}

delay('swipeinleft');
delay('fadein');
delay('swipein');
delay('swipeinright');
delay('squeezout');


const bars = document.querySelector('.bars');
const navdom = document.querySelector('.navdom');
const header = document.querySelector('.hd');
bars.onclick = ()=>{
  navdom.classList.toggle("swipedown");
  navdom.classList.toggle("dis");
  header.classList.toggle('rmb');
}