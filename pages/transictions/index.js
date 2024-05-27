import axios from "axios"
import {
    navBar,
    createHeader,
    reload_transaction
} from "../../modules/ui.js"
let baseURL = 'http://localhost:3000'
let leaft_bar = document.querySelector('.leaft_bar')
navBar(leaft_bar)
let header = document.querySelector('header')
createHeader(header)

let widget = document.querySelector('.widget')
widget.onclick = () => {
    location.assign('/add-transictions/')
}
let tran_box = document.querySelector('.tran_box')
axios.get(baseURL + "/transactions")
.then(res=>{
    reload_transaction(res.data,tran_box)
})
