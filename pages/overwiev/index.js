import{
    navBar,
    createHeader,
    reload_cart
} from "../../modules/ui.js"
import {
    getData
  } from "../../modules/http.request.js"
import axios from "axios"
let leaft_bar=document.querySelector('.leaft_bar')
navBar(leaft_bar)
let header=document.querySelector('header')
createHeader(header)
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'white',
    tension: 0.1,
    backgroundColor: 'white'
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)' // Цвет сетки X
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)' // Цвет сетки Y
        }
      }
    }
  }
};


document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.querySelector('.canvas');
    new Chart(canvas, config);
  });
  let card=document.querySelector('.widget')
  card.onclick=()=>{
    location.assign('/add-card/')
  }
  let loc = JSON.parse(localStorage.getItem('user'))
  let right_St=document.querySelector('.right_St')
  let baseURL='http://localhost:3000'
axios.get(baseURL+'/cards?userId=' + loc.id)
    .then(res => {
     
    
     
        reload_cart(res.data.splice(0, 4), right_St)
     
    })

  // import {
  //   createHeader,
  //   reloadCards,
  //   reloadTransactions
  // } from "/modules/ui.js"
  // import {
  //   getData
  // } from "./modules/http.request"
  // import axios from "axios"
  // let greeting = document.querySelector('#greeting')
  // let userEmail = document.querySelector('#user-email')
  // let header = document.querySelector('header .inner-header')
  // let cardContainer = document.querySelector('.card-container')
  // let transactionContainer = document.querySelector('.transaction-container')
  // let baseURL = import.meta.env.VITE_BASE_URL
  // let loc = JSON.parse(localStorage.getItem('user'))
  // greeting.innerHTML = `Добро пожаловать, ${loc.name}`
  // userEmail.innerHTML = loc.email
  
  // createHeader(header)
  
  // getData('/cards?userId=' + loc.id)
  //   .then(res => {
  //     console.log(res);
  //     if (res.length === 0) {
  //       cardContainer.innerHTML = 'У вас нет кошельков. Что-бы добавить переходите на вкладку "Мои кошельки" </br> или кликните по ссылке снизу.'
  //       cardContainer.classList.add('empty-container')
  //     } else {
  //       cardContainer.classList.remove('empty-container')
  //       reloadCards(res.splice(0, 4), cardContainer)
  //     }
  //   })