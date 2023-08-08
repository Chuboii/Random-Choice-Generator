let input = document.querySelector("textarea")
let textArea = document.querySelector(".texts") 
let alrt = document.querySelector(".alert")

input.addEventListener("keydown", (e) => {
    duplicate(e.target.value)
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 30);
randomChoice()
    }
})

function duplicate(input) {
    textArea.innerHTML = ''
    let words = input.split(' ')
    let filteredSpace = words.filter(el => el !== '')
    
    filteredSpace.forEach(word => {
        let p = document.createElement("p")
        textArea.append(p)
        p.classList.add("item")
        p.innerHTML = word
    });

}

function randomChoice() {
    let interval = setInterval(()=> {
        let random = pickRandom()
            if (random !== undefined) {
                higlight(random)   
        }
        
        setTimeout(() => {
            unhighlight(random)
        }, 100);
      
            
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            let random = pickRandom()
            higlight(random)

            alrt.style.display = 'block'
            alrt.innerHTML = `Your random choice is <span class="rand">${random.innerHTML}</span> <button onclick="cancelFunc()" class='cancel'>Cancel</button>`
        }, 100);
    }, 3000);
}

function cancelFunc(){
    alrt.style.display = 'none'
    textArea.innerHTML = ''
}


function pickRandom() {
    let tag = document.querySelectorAll(".item")  
    return tag[Math.floor(Math.random() * tag.length)]
}


function higlight(tag) {
    tag.classList.add("active")
}

function unhighlight(tag) {
    tag.classList.remove("active")
}