let sin=document.querySelector('.in')
sin.onclick=()=>{
    location.assign('/pages/signin/')
}


import axios from "axios"
// import {isError} from "../../modules/status.js"

let baseURL = "http://localhost:3000"
let form = document.forms.namedItem('sign-up')

let patterns = {
    name: /^[A-Za-z]{1,30}$/,
    surname: /^[A-Za-z]{1,30}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

form.onsubmit = (event) => {
    event.preventDefault()

    let fm = new FormData(event.target)

    let user = {
        id: String(Math.random()),
        name: fm.get('name'),
        surname: fm.get('surname'),
        email: fm.get('email'),
        password: fm.get('password')
    }

    let { name, surname, email, password } = user

    if (!name || !patterns.name.test(name) || !surname || !patterns.surname.test(surname) || !email || !patterns.email.test(email) || password.length < 4) {
        // isError('error', 'Fill all the fields correctly!')
        alert('error', 'Fill all the fields correctly!')
        return
    }

    axios.get(baseURL + "/users?email=" + email)
        .then(res => {
            if (res.data.length > 0) {
                // isError('error', 'User already exists!')
                alert('error', 'User already exists!')
                return
            }

            axios.post(baseURL + '/users', user)
                .then(res => {
                    if (res.status == 200 || res.status === 201) {
                        // isError('success', '')
                        alert('success', '')
                        setTimeout(() => {
                            location.assign('/pages/signin/index.html')
                        }, 3300)
                    }
                })
        })
}