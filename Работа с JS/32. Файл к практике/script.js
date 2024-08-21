let circles = document.getElementsByClassName('circle');


let radius = 300; // Радиус окружности
let numCircles = 10; // Количество кружков
let circleSize = 900; // Размер кружков

for (let i = 0; i < circles.length; i++) {
 
  let angle = (i / numCircles) * (2 * Math.PI);
  let x = Math.cos(angle) * radius + (circles[i].clientWidth / 2) - (circleSize / 2);
  let y = Math.sin(angle) * radius + (circles[i].clientHeight / 2) - (circleSize / 2);
  
  circles[i].style.left = `${x}px`;
  circles[i].style.top = `${y}px`;

}

async function getNames() {
  return await fetch('https://jsonplaceholder.typicode.com/users')
  .then(responce => responce.json())
  .then(data => {
     
  });
}

let names = getNames();


console.log(names);


let tl = gsap.timeline({duration: 1, yoyo: false});

tl.from('.wrapper', {duration: 10, rotation: 360, repeat: -1, ease: "linear"})
.from("#circle1", {x: 1500})
.from("#circle2", {x: 1500, y: 500})
.from("#circle3", {x: 1000, y: 1000})
.from("#circle4", {x: 1000, y: 1000})
.from("#circle5", {x: 1000, y: 1000})
.from("#circle6", {x: 1000, y: 1000})
.from("#circle7", {x: 1000, y: 1000})
.from("#circle8", {x: 1000, y: 1000})
.from("#circle9", {x: 1000, y: 1000})
.from("#circle10", {x: 1000, y: 1000})
.from('.circle', {repeat: -1, duration: 10, rotation: -360, ease: "linear"});


document.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('circle')) {
      tl.pause();
      gsap.to('.wrapper', {zIndex: 0, opacity: 0.1});
      gsap.to(`#${event.target.parentNode.parentNode.id}`, {zIndex: 1000, opacity: 1});
      gsap.to(`#${event.target.id}`, {scale: 2, duration: 0.5, ease: "linear", borderRadius: 10});
    }
});


document.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('circle')) {
    tl.play();
    gsap.to('.wrapper', {zIndex: 0, opacity: 1});
    gsap.to(`#${event.target.id}`, {scale: 1, duration: 0.5, ease: "linear", borderRadius: 50});
  }
});



/**************************************************************Что то сломалось, надо починить!**************************************************************/
/* function _0x1f4b(_0x195ab3,_0x321931){const _0x133a63=_0x133a();return _0x1f4b=function(_0x1f4b66,_0x1f1b35){_0x1f4b66=_0x1f4b66-0x1e8;let _0x2ed87d=_0x133a63[_0x1f4b66];return _0x2ed87d;},_0x1f4b(_0x195ab3,_0x321931);}const _0x19d2e0=_0x1f4b;function _0x133a(){const _0x29ccd3=['#circle4','from','#circle3','1027440vauMNI','#circle6','33tJgSKc','#circle1','#circle5','465370OIrtom','#circle9','.wrapper','<0.25','contains','2486106YVadCw','mouseout','.circle','circle','mouseover','target','play','addEventListener','1057530CpvHwC','125176VTvLHT','98jOvNhc','#circle7','#circle12','3661XruOnt','#circle11','linear','19252JkOTUr','parentNode','classList','#circle10','#circle2','49OLknwt'];_0x133a=function(){return _0x29ccd3;};return _0x133a();}(function(_0x1f977a,_0x1f8f8b){const _0xfa0d01=_0x1f4b,_0x72e177=_0x1f977a();while(!![]){try{const _0x47871e=parseInt(_0xfa0d01(0x1f4))/0x1*(parseInt(_0xfa0d01(0x1f1))/0x2)+-parseInt(_0xfa0d01(0x202))/0x3*(parseInt(_0xfa0d01(0x1f7))/0x4)+parseInt(_0xfa0d01(0x1ef))/0x5+parseInt(_0xfa0d01(0x200))/0x6+-parseInt(_0xfa0d01(0x1fc))/0x7*(parseInt(_0xfa0d01(0x1f0))/0x8)+-parseInt(_0xfa0d01(0x20a))/0x9+parseInt(_0xfa0d01(0x205))/0xa;if(_0x47871e===_0x1f8f8b)break;else _0x72e177['push'](_0x72e177['shift']());}catch(_0x165a9b){_0x72e177['push'](_0x72e177['shift']());}}}(_0x133a,0x297ee));let tl=gsap['timeline']({'duration':0x1,'yoyo':![]});tl['from'](_0x19d2e0(0x207),{'rotation':0x168,'repeat':-0x1,'duration':0xc,'ease':_0x19d2e0(0x1f6)})[_0x19d2e0(0x1fe)](_0x19d2e0(0x203),{'x':0x5dc},'<0.25')[_0x19d2e0(0x1fe)](_0x19d2e0(0x1fb),{'x':0x5dc,'y':0x1f4},'<0.25')['from'](_0x19d2e0(0x1ff),{'x':0x3e8,'y':0x3e8},_0x19d2e0(0x208))[_0x19d2e0(0x1fe)](_0x19d2e0(0x1fd),{'y':0x5dc},_0x19d2e0(0x208))[_0x19d2e0(0x1fe)](_0x19d2e0(0x204),{'x':-0x3e8,'y':0x5dc},_0x19d2e0(0x208))[_0x19d2e0(0x1fe)](_0x19d2e0(0x201),{'x':-0x5dc,'y':0x5dc},_0x19d2e0(0x208))['from'](_0x19d2e0(0x1f2),{'x':-0x5dc},_0x19d2e0(0x208))['from']('#circle8',{'x':-0x3e8,'y':-0x5dc},'<0.25')[_0x19d2e0(0x1fe)](_0x19d2e0(0x206),{'x':-0x1f4,'y':-0x5dc},'<0.25')[_0x19d2e0(0x1fe)](_0x19d2e0(0x1fa),{'y':-0x5dc},_0x19d2e0(0x208))[_0x19d2e0(0x1fe)](_0x19d2e0(0x1f5),{'x':0x5dc,'y':-0x1f4},_0x19d2e0(0x208))[_0x19d2e0(0x1fe)](_0x19d2e0(0x1f3),{'x':0x3e8,'y':-0x3e8},_0x19d2e0(0x208))[_0x19d2e0(0x1fe)](_0x19d2e0(0x1e9),{'rotation':-0x168,'repeat':-0x1,'duration':0xc,'ease':_0x19d2e0(0x1f6)},'1'),document[_0x19d2e0(0x1ee)](_0x19d2e0(0x1eb),function(_0x168453){const _0x576eab=_0x19d2e0;_0x168453[_0x576eab(0x1ec)][_0x576eab(0x1f9)][_0x576eab(0x209)](_0x576eab(0x1ea))&&(tl['pause'](),gsap['to'](_0x576eab(0x207),{'zIndex':0x0,'opacity':0.5}),gsap['to']('#'+_0x168453[_0x576eab(0x1ec)][_0x576eab(0x1f8)][_0x576eab(0x1f8)]['id'],{'zIndex':0x3e8,'opacity':0x1}),gsap['to']('#'+_0x168453[_0x576eab(0x1ec)]['id'],{'scale':0x2,'duration':0.5,'ease':_0x576eab(0x1f6),'borderRadius':0xa}));}),document[_0x19d2e0(0x1ee)](_0x19d2e0(0x1e8),function(_0x86b446){const _0x38cf64=_0x19d2e0;_0x86b446[_0x38cf64(0x1ec)]['classList'][_0x38cf64(0x209)](_0x38cf64(0x1ea))&&(tl[_0x38cf64(0x1ed)](),gsap['to'](_0x38cf64(0x207),{'zIndex':0x0,'opacity':0x1}),gsap['to']('#'+_0x86b446[_0x38cf64(0x1ec)]['id'],{'scale':0x1,'duration':0.5,'ease':_0x38cf64(0x1f6),'borderRadius':0x32}));});  */