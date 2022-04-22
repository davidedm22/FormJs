const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault()

    const firstName = form['firstname'].value
    const lastname = form['lastname'].value
    const email = form['email'].value
    const password = form['password'].value

    if(firstName === ''){
        addErrorTo('firstname', 'first name is required')
    }else{
        removeErrorFrom('firstname')
    }
    if(lastname === ''){
        addErrorTo('lastname', 'last name is required')
    }else{
        removeErrorFrom('lastname')
        }
        
        if(email === ''){
            addErrorTo('email', 'email is required')
        }else if(!isValid(email)){
            addErrorTo('email' ,'email is not valid')
        }else{
            removeErrorFrom('email')
        }
        if(password === ''){
            addErrorTo('password', 'password is required')
        }else{
            removeErrorFrom('password')
            }
})

function addErrorTo(field, message){
    const formControl = form[field].parentNode
    formControl.classList.add('error')
    
    const small = formControl.querySelector('small')
    small.innerText = message
    small.style.opacity = '1'
}

function removeErrorFrom(field){
    const formControl = form[field].parentNode
    formControl.classList.remove('error')

    const small = formControl.querySelector('small')
    small.style.opacity = '0'
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}