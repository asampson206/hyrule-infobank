document.querySelector(".img1").addEventListener("click", clickTheLynel)
function clickTheLynel(){alert("Trap Set, and sprung! I hope you like being BBQ!")}

const doc = document.querySelector('html')
doc.addEventListener("keydown", (event) => {
    let event1 = event.key;
    let changer = doc.style.backgroundColor = 'red'
    if(event1 === 'f'){return changer}
})

doc.addEventListener("keydown", (event) => {
    let event1 = event.key;
    let alert2 = alert('Start the drumroll then click \'Ok\' to see your fate! And thanks again for putting your safety, in our hands!')
    if(event1 === 'f'){return alert2}
    
})

document.querySelector(".img2").addEventListener("mouseenter", function (){
let image2 = document.querySelector(".img2")
image2.title = 'If you see this, you should definitely run!'
})


    

