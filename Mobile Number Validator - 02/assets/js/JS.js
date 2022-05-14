
class SignInForm{
    constructor(){
        this.phoneInput = document.getElementById('tel')
        this.submit = document.getElementById('submit')
        
        this.numberRegx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    }
    validation(){
        this.phoneInput.addEventListener('input', () =>{
            console.log('This happened 1')
            if(this.phoneInput.value ==''){
                this.phoneInput.style.color = 'red'
                this.phoneInput.style.caretColor = 'black'
            }
            else if(this.phoneInput.value.match(this.numberRegx)){
                this.phoneInput.style.color = 'rgb(40, 212, 40)'
                this.phoneInput.style.caretColor = 'black'
            }
            else{
                this.phoneInput.style.color = 'red'
                this.phoneInput.style.caretColor = 'black'
            }
        })
    }
}



let signInFormOpperator = new SignInForm()


signInFormOpperator.validation()