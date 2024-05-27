import axios from "axios"
import{
    navBar,
    createHeader,
    reload_cart
} from "../../modules/ui.js"

let leaft_bar=document.querySelector('.leaft_bar')
navBar(leaft_bar)
let header=document.querySelector('header')
createHeader(header)

let loc = JSON.parse(localStorage.getItem('user'))
let wallet_place=document.querySelector('.wallet_place')
let baseURL='http://localhost:3000'
axios.get(baseURL+'/cards?userId=' + loc.id)
  .then(res => {
   
  
   
      reload_cart(res.data.splice(0, 4), wallet_place)
   
  })
