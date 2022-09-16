const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const buttons = document.querySelectorAll(".value");
const rate = document.querySelector('#rate');
const state = document.querySelector('#state');
const form = document.querySelector('#form')

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    button.classList.add("active")
    
    })
  if(button.value === "2") {
    two.addEventListener('click', (e) => {
        btn = two.value;
        window.localStorage.setItem("number", btn)
        one.classList.remove("active")
        three.classList.remove("active")
        four.classList.remove("active")
        five.classList.remove("active")
    })
  } else if (button.value === "1") {
    one.addEventListener('click', (e) => {
        btn = one.value;
        window.localStorage.setItem("number", btn)
        two.classList.remove("active")
        three.classList.remove("active")
        four.classList.remove("active")
        five.classList.remove("active")
       })
  } else if (button.value === "3") {
    three.addEventListener('click', (e) => {
        btn = three.value;
        window.localStorage.setItem("number", btn)
        one.classList.remove("active")
        two.classList.remove("active")
        four.classList.remove("active")
        five.classList.remove("active")
    })
  } else if (button.value === "4") {
    four.addEventListener('click', (e) => {
        btn = four.value;
        window.localStorage.setItem("number", btn)
        one.classList.remove("active")
        three.classList.remove("active")
        two.classList.remove("active")
        five.classList.remove("active")
    })
  } else if (button.value === "5") {
    five.addEventListener('click', (e) => {
        btn = five.value;
        window.localStorage.setItem("number", btn)
        one.classList.remove("active")
        two.classList.remove("active")
        three.classList.remove("active")
        four.classList.remove("active")
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            state.innerText = localStorage.getItem("number")
            
            window.location.href = "submit.html"
        })
        
    })
  }
})

//window.addEventListener('load', () => {
    // one.addEventListener('click', (e) => {
    //     btn = one.value;
    //     // btn_string = JSON.stringify(btn)
    //     window.localStorage.setItem("number", btn)
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         state.innerText = localStorage.getItem("number")
            
    //         window.location.href = "submit.html"
    //     })
        
    //    })   
//})
