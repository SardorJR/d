
export function navBar(place) {
    let p = document.createElement('p')
    let btns_bar = document.createElement('div')
    let button = document.createElement('button')
    let img = document.createElement('img')
    let span = document.createElement('span')
    let button2 = document.createElement('button')
    let img2 = document.createElement('img')
    let span2 = document.createElement('span')
    let button3 = document.createElement('button')
    let img3 = document.createElement('img')
    let span3 = document.createElement('span')
    let button4 = document.createElement('button')
    let img4 = document.createElement('img')
    let span4 = document.createElement('span')
    let button5 = document.createElement('button')
    let img5 = document.createElement('img')
    let span5 = document.createElement('span')
    let btns_bar2 = document.createElement('div')
    let button6 = document.createElement('button')
    let img6 = document.createElement('img')
    let h3 = document.createElement('h3')
    let two = document.createElement('button')
    let img7 = document.createElement('img')
    let h33 = document.createElement('h3')
    p.innerHTML = 'valuet'
    btns_bar.classList.add('btns_bar')
    img.src = '/imgs/side_bar/overwiew.png'
    span.innerHTML = 'Overview'
    button.classList.add('overview')
    button2.classList.add('wallets')
    button3.classList.add('transictions')
    button4.classList.add('exchange')
    
    img2.src = '/imgs/side_bar/Group.png'
    span2.innerHTML = 'Wallets'
    img3.src = '/imgs/side_bar/Group (1).png'
    span3.innerHTML = 'Transictions'
    img4.src = '/imgs/side_bar/Group 6 (1).png'
    span4.innerHTML = 'Exchange'
    img5.src = '/imgs/side_bar/Group (2).png'
    span5.innerHTML = 'market'
    btns_bar2.classList.add('btns_bar2')
    img6.src = '/imgs/side_bar/Ellipse (1).png'
    h3.innerHTML = 'Mike Jakson'
    two.classList.add('two')
    img6.src = '/imgs/side_bar/Group (3).png'
    h3.innerHTML = 'Log out'
    place.append(p, btns_bar, btns_bar2)
    btns_bar.append(button, button2, button3, button4, button5)
    button.append(img, span)
    button2.append(img2, span2)
    button3.append(img3, span3)
    button4.append(img4, span4)
    button5.append(img5, span5)
    btns_bar2.append(button6, two)
    button6.append(img6, h3)
    two.append(img7, h33)
    span.onclick = () => {
        location.assign('/pages/overwiev/')
    }
    span2.onclick = () => {
        location.assign('/pages/wallets/')
    }
    span3.onclick = () => {
        location.assign('/pages/transictions/')
    }
    span4.onclick = () => {
        location.assign('/pages/Exchange/')
    }
    span5.onclick = () => {
        location.assign('/pages/market/')
    }

    let curr_page = location.pathname.split('/').at(-2) 

    switch (curr_page) {
        case "overview":
            button.classList.add('active-button')
            break
        case "wallets":
            button2.classList.add('active-button')
            break
        case "transictions":
            button3.classList.add('active-button')
            break
        case "exchange":
            button4.classList.add('active-button')
            break
      
    
    }
}

export function createHeader(place) {
    let search = document.createElement('div')
    let input = document.createElement('input')
    let imgs = document.createElement('div')

    let img = document.createElement('img')
    let img2 = document.createElement('img')
    search.classList.add('search')
    imgs.classList.add('imgs')
    img.src = '/imgs/side_bar/Group 3.png'
    img2.src = '/imgs/side_bar/d.png'
    img2.classList.add('mes')

    place.append(search, imgs)
    search.append(input)
    imgs.append(img, img2)
}

export function reload_cart(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let bitcoin_cart = document.createElement('div')
        let p = document.createElement('p')
        let boxes = document.createElement('div')
        let bbb = document.createElement('div')
        let img = document.createElement('img')
        let bit_text = document.createElement('div')
        let p2 = document.createElement('p')
        let span = document.createElement('span')
        let tr = document.createElement('div')
        let ilem13 = document.createElement('div')
        let img2 = document.createElement('img')
        let pp = document.createElement('div')
        let p1 = document.createElement('p1')
        let span2 = document.createElement('span')
        let ilem13_2 = document.createElement('div')
        let img_2 = document.createElement('img')
        let pp_2 = document.createElement('div')
        let p1_2 = document.createElement('p1')
        let span2_2 = document.createElement('span')
        let ilem13_3 = document.createElement('div')
        let img_3 = document.createElement('img')
        let pp_3 = document.createElement('div')
        let p1_3 = document.createElement('p1')
        let span2_3 = document.createElement('span')
        bitcoin_cart.classList.add('bitcoin_cart')
        p.innerHTML = 'BitCoin'
        img.src = '/imgs/cart_bit/Group 5 (1).png'
        p2.innerHTML = '600 BTC'
        span.innerHTML = '$30,000,000'
        img2.src = '/imgs/cart_bit/Vector (5).png '
        p1.innerHTML = '$1 200= 0,074 BTC'
        span2.innerHTML = '1 BTC = $6 542, 35'
        img_2.src = '/imgs/cart_bit/Vector (5).png '
        p1_2.innerHTML = '$1 200= 0,074 BTC'
        span2_2.innerHTML = '1 BTC = $6 542, 35'
        img_3.src = '/imgs/cart_bit/Vector (5).png'
        p1_3.innerHTML = '$1 200= 0,074 BTC'
        span2_3.innerHTML = '1 BTC = $6 542, 35'

        boxes.classList.add('boxes')
        bbb.classList.add('bbb')
        bit_text.classList.add('bit_text')
        tr.classList.add('tr')
        ilem13.classList.add('ilem13')
        pp.classList.add('pp')
        ilem13_2.classList.add('ilem13')
        pp_2.classList.add('pp')
        ilem13_3.classList.add('ilem13')
        pp_3.classList.add('pp')
        place.append(bitcoin_cart)
        bitcoin_cart.append(p, boxes)
        boxes.append(bbb, bit_text, tr)
        bbb.append(img)
        bit_text.append(p2, span)
        tr.append(ilem13, ilem13_2, ilem13_3)
        ilem13.append(img2, pp)
        pp.append(p1, span2)
        ilem13_2.append(img_2, pp_2)
        pp_2.append(p1_2, span2_2)
        ilem13_3.append(img_3, pp_3)
        pp_3.append(p1_3, span2_3)

     

    }
}


export function reload_transaction(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        place.innerHTML += `
        <div class="tr_item">
        <div class="tr_e">
            <p>AM ${item.tm}</p>
            <p>${item.time}</p>
            <button></button>
        </div>
        <div class="tr_e2">
            <img src="/imgs/Group 13.2.png" alt="">
            <h3>74EKRJMXkhKDR5dj34578fgirwE22sfg</h3>
        </div>
        <div class="tr_e3">
            <h4>${item.amount} BTC</h4>
            <button>waiting</button>
        </div>
    </div>
`
    }
}