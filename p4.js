let validUser = false
let validEmail = false
let validPhone = false
$('#success').hide();
$('#failure').hide();

const name = document.getElementById("name");
name.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let string = name.value
    if (regex.test(string)) {
        name.classList.remove("is-invalid")
        validUser = true
    }
    else {
        name.classList.add("is-invalid")
        validUser = false
    }
});


const email = document.getElementById("email")
email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){3,7}$/;
    let string = email.value
    if (regex.test(string)) {
        email.classList.remove("is-invalid")
        validEmail = true
    }
    else {
        email.classList.add("is-invalid")
        validEmail = false
    }
});


const phone = document.getElementById("phone")
phone.addEventListener("blur", () => {
    let regex = /^([0-9]){10}$/;
    let string = phone.value
    if (regex.test(string)) {
        phone.classList.remove("is-invalid")
        validPhone = true
    }
    else {
        phone.classList.add("is-invalid")
        validPhone = false
    }
});


let submit = document.getElementById("submit")
submit.addEventListener("click", (e) => {
    e.preventDefault()

    if (validUser && validPhone && validEmail) {
        // submit your data   
        let success = document.getElementById("success")
        // let failure = document.getElementById("failure")
        success.classList.add("show")
        // failure.classList.remove("show")
        // these next two statement are from jQuery
        $('#failure').hide();
        $('#success').show();
    }

    else {
        let failure = document.getElementById("failure")
        failure.classList.add("show")
        // success.classList.remove("show")
        $('#success').hide();
        $('#failure').show();
    }
})