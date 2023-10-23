const submitButton = document.getElementById('submitButton')
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

submitButton.addEventListener('click', (event)=> {
    try {

    const email = document.getElementById("inputEmail").value
    const password = document.getElementById("inputPassword").value

    if (!(emailRegex.test(email)) && !(passwordRegex.test(password))) {
        throw new Error("invalid email and password")
    }
    if(!(passwordRegex.test(password))) {
        throw new Error("invalid password!")

    } if(!(emailRegex.test(email))) {
        throw new Error("invalid email adress!")
    }
    
    alert("Login successful")
    window.location.href = "other.html";
    } catch (erro) {
        alert(erro.message)
        console.error(erro)
    }
})


