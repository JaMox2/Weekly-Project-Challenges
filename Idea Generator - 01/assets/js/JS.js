

class RngGenerater{
    constructor(){
        this.storedNames = JSON.parse(localStorage.getItem("names")) || []
        this.addGenInput = document.getElementById('addGenInput')
        this.ulContainer = document.getElementById('listOfItems')   
        
        this.genBtn = document.getElementById('genBtn')
        this.genRNG = 0
        this.itemShower = document.getElementById('itemShower')
        
    }
    addList(){
        document.getElementById('addGen').addEventListener('click', () =>{
            this.storedNames.push(this.addGenInput.value)
            localStorage.setItem("names", JSON.stringify(this.storedNames))

            let li = document.createElement("li")
            li.textContent = `${this.storedNames.length}: ${this.addGenInput.value}`
            this.ulContainer.appendChild(li)

            this.addGenInput.value = ''
        })
    }
    liOnLoad(){
        if(this.storedNames.length > 0){
            this.storedNames.forEach((element, i) => {
                let li = document.createElement("li")
                li.textContent = `${i + 1}: ${element}`

                this.ulContainer.appendChild(li)
            });
        }
    }
    listClear(){
        let clearBtn = document.getElementById('clear')
        let listDisplay = document.getElementById('listOfItems')
        
        clearBtn.addEventListener('click', () =>{
            this.storedNames = []
            localStorage.clear()
            if (listDisplay.children.length > 0){
                listDisplay.innerHTML = ''
            }
        })
    }
    generateIdea(){
        this.genBtn.addEventListener('click', ()=>{
            if(this.storedNames.length > 0){
                console.log('greater')
                this.genRNG = Math.floor(Math.random() * this.storedNames.length)
                console.log(this.storedNames[this.genRNG])
                this.itemShower.innerText = this.storedNames[this.genRNG]
            }else{
                this.itemShower.innerText = 'Item One'
            }
        })
    }
}


let rngGenOpperator = new RngGenerater()
// rngGenOpperator.liOnLoad()
rngGenOpperator.addList()
rngGenOpperator.listClear()
rngGenOpperator.generateIdea()
window.onload = rngGenOpperator.liOnLoad()
