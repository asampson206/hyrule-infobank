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

document.addEventListener("DOMContentLoaded", function() {
fetch("http://localhost:3001/lynels").then
(function (response){
return response.json()
}).then(function(data){
    
    const filteredLynels = data.filter(lynels => lynels.loot.includes("White-maned"));
    const lootItems = filteredLynels.map(lynels => lynels.loot);

    let h3Element = document.querySelector(".drops");
    h3Element.textContent = "White Lynels drop the following items upon their (unlikely) defeat: " + lootItems + ". Click the image to receive them now!"
    console.log("hi")
})
})
    

