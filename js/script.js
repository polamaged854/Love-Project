// let test=document.querySelector('#test');
// console.log(test)
/*
innerHTML
innerTEXT



*/

// test.textContent=`<h2>Test 2</h2>`  //text
// test.innerHTML=`<h2>Test 2</h2>`
// //!create element
// let parent=document.getElementById('parent');
 
// let h3=document.createElement('h3');
// h3.innerHTML='test create '
// console.log(h3)
// parent.appendChild(h3)

// let img=document.createElement('img')
// img.setAttribute('src','images/61dlft5BTGL._AC_SY879_.jpg');
// parent.appendChild(img)



//!Example 
  //?HTML VIWER
// let data=document.getElementById('data');
// let btn=document.getElementById('btn');
// let result=document.getElementById('result');

// btn.addEventListener('click',()=>{
//     let myData=data.value;
//     result.textContent=myData;
// })
//====================================================

//!Events
  let div1=document.getElementById('div1')
  let div2=document.getElementById('div2')
//   div1.addEventListener('dblclick',()=>{
//     div2.style.width='500px'
//   })

// div1.addEventListener('mouseenter',()=>{
//     div2.style.width='500px'
//     div2.style.height='500px'
// })
// div1.addEventListener('mouseleave',()=>{
//     div2.style.width='500px'
//     div2.style.height='500px'
// })
// div1.addEventListener('mousedown',()=>{
//     div2.style.width='500px'
//     div2.style.height='500px'
// })
// div1.addEventListener('mouseup',()=>{
//     div2.style.width='500px'
//     div2.style.height='500px'
// })
// div1.addEventListener('mouseover',()=>{
//     div2.style.width='500px'
//     div2.style.height='500px'
// })

// div1.addEventListener('keyup',(e)=>{
//     console.log("test");
//     console.log(e)
//     if(e.key=='h'){
//  div2.style.width='500px'
//     div2.style.height='500px'
//     }
   
// })
// div1.addEventListener('keydown',(e)=>{
//     console.log("test");
//     console.log(e)
//     if(e.key=='h'){
//  div2.style.width='500px'
//     div2.style.height='500px'
//     }
   
// })

// div1.addEventListener('keypress',(e)=>{
//     console.log("test");
//     console.log(e)
//     if(e.key=='h'){
//  div2.style.width='500px'
//     div2.style.height='500px'
//     }
   
// })

// div1.addEventListener('change',()=>{
//     console.log("test")
//  div2.style.width='500px'
//     div2.style.height='500px'
// })
//=====================================
//!Love Example
  let yesbtn=document.getElementById('yesbtn');
  let nobtn=document.getElementById('nobtn');
  let klma=document.getElementById('klma');
 let cont=document.getElementById('cont');

 let noRec=nobtn.getBoundingClientRect();
 let conRec=cont.getBoundingClientRect();


  yesbtn.addEventListener('click',()=>{
    klma.innerHTML='I Love You Too ❤';
  })

  nobtn.addEventListener('mouseover',()=>{
     let i= Math.floor(Math.random()*(conRec.width-noRec.width))+1
     let j=Math.floor(Math.random()*(conRec.height-noRec.height))+1
     nobtn.style.left=i+'px';
     nobtn.style.top=j+'px';

  })

  