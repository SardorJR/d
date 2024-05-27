import axios from "axios"


let baseURL = "http://localhost:3000"
let form = document.forms.namedItem('card-adding')
let loc = JSON.parse(localStorage.getItem('user'))





form.onsubmit = (event) => {
    event.preventDefault()

    let fm = new FormData(event.target)

    let card = {
        id: String(Math.random()),
        userId: loc.id,
        name: fm.get('name'),
        currency: fm.get('currency'),
        balance: fm.get('balance')
    }

    let { name, currency } = card

    if (name === "" || currency === 'currency') {
        // isError('error', 'Fill both of the fields!')
        alert('error', 'Fill both of the fields!')
        return
    }

    axios.post(baseURL + '/cards', card)
        .then(res => {
            if (res.status == 200 || res.status === 201) {
                // isError('success', '')
                alert('success')
                setTimeout(() => {
                    location.assign('/pages/overwiev/')
                }, 3300)
            }
        })
}