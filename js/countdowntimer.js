// JavaScript Document
//let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   navigator.clipboard.writeText('djdjdjdjdj')

// })


// setTimeout(function () {
//   console.log(dkdkdk);
// }, 0)
// console.log('ddndn=')

// let interval = setInterval(function () {
//   console.log('yes')
// }, 1000)


 //btn.addEventListener('click', function () {
  // clearInterval(interval)
 //})


let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.reset')

let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')

//startBtn.style.display = 'none'

//stopBtn.style.display = 'none'

//resetBtn.style.display = 'none'

//default value for innerhtml

days.innerHTML = "80"
hours.innerHTML = "24"
minutes.innerHTML = "60"
seconds.innerHTML = "60"








// setting the default value

let d = 80
let h = 23
let m = 59
let s = 59

let interval
startBtn.addEventListener('click', function () {
 interval =  setInterval(function () {
   s--;  // note change to -- to reduce countdown
   seconds.innerHTML = s;
   
   if (s <= 0) {
     s = 60
     m--
   minutes.innerHTML = m
     if (m <= 0) {
       m = 60
       h--
       hours.innerHTML = h
       if (h <= 0) {
         h = 24
         d--
        days.innerHTML = d
       }
    }
  }
  }, 1000);
})

stopBtn.addEventListener('click', function () {
  clearInterval(interval)
})


resetBtn.addEventListener('click', function () {
   d = 80;
   h = 24;
   m = 60;
  s = 60;
  
	 
	
	 
    days.innerHTML = d -'0'
	hours.innerHTML = h -'0'
	minutes.innerHTML = m -'0'
	seconds.innerHTML = s -'0'
 
  
 
})