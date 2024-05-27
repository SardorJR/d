import axios from "axios"
let up=document.querySelector('.up')
up.onclick=()=>{
    location.assign('/pages/signup')
}



// import { isError } from "../../modules/status.js"

let baseURL ="http://localhost:3000"
let form = document.forms.namedItem('sign-in')

let pattern = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

form.onsubmit = (event) => {
    event.preventDefault()

    let fm = new FormData(event.target)

    let user = {
        email: fm.get('email'),
        password: fm.get('password')
    }
console.log(user);
    let { email, password } = user

    if (!email || !pattern.email.test(email) || password.length < 4) {
        // isError('error', 'Fill both of the fields correctly!')
        alert('error', 'Fill both of the fields correctly!')
        return
    }

    axios.get(baseURL + "/users?email=" + email)
        .then(res => {
            if (res.data.length === 0) {
                // isError('error', 'User is not found!')
                alert('error', 'User is not found!')
                return
            }

            let [data] = res.data

            if (data.password === password) {
                // isError('success', '')
                alert('success')
                delete data.password
                localStorage.setItem('user', JSON.stringify(data))
                setTimeout(() => {
                    location.assign('/pages/overwiev/')
                }, 3300)
            } else {
                // isError('error', 'Wrong password!')
                alert('error')
            }
        })
}