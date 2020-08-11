import * as util from './util'

const btnAddCart = [...document.querySelectorAll('.js-btn-add')]
const btnRemoveCart = document.querySelector('.js-btn-remove')
const cartList = document.querySelector('.js-cart-list')
const quantityTottal = document.querySelector('.js-cart-shoping__quantity')
const notiEmpty = document.querySelector('.js-cart-emtpty')
const cartContent = document.querySelector('.js-cart-content')
const quantityProduct = 1
const arrCartPrice = []
const arrCartId = []

const changeBtn = (btnItem) => {
  const wating = `<i class=" fas fa-sync-alt u-syncRotate u-bg-transparent u-mr-3"></i>`
  const cart = `<i class="fas fa-shopping-cart u-bg-transparent u-mr-3"></i> `

  btnItem.insertAdjacentHTML('afterbegin', wating)
  btnItem.disabled = true
  setTimeout(() => {
    btnItem.innerHTML = cart + 'VIEW CART'
  }, 1500)
}

const getData = (product) => {
  const img = product.querySelector('.js-img')
  const style = img.currentStyle || window.getComputedStyle(img, false)
  const src = style.backgroundImage.slice(4, -1).replace(/"/g, "");
  const productItem = `                  
  <div class="card card--horizontal is-sm">
    <div class="card-img">
      <a href="#" class="card-img__img-front" style="background-image: url(${src});">
      </a>
    </div>
    <div class="card-body">
      <a href="#" class="card-body__title">${product.querySelector('.js-product-name').innerHTML}</a>
      <div class="card-body__price js-card-body__price"><span>${quantityProduct}</span> &#x2716 <span class="js-cart-price"> ${product.querySelector('.js-price').innerHTML}</span></div>
    </div>
    <button class="u-mr-20 button js-btn-remove">&#x2716</button>
  </div>`

  notiEmpty.style.display = 'none'
  cartContent.style.display = 'block'
  let dataItem = cartList.insertAdjacentHTML('afterbegin', productItem)
}

const tottalPrice = () => {
  const tottalPrice = document.querySelector('.js-cart-content__total')
  const priceList = [...document.querySelectorAll('.js-cart-price')]
  const arrayPrice = priceList.map(item => Number(item.innerHTML))
  const price = util.totalResult(arrayPrice, 0)

  if (priceList.length === 0) {
    notiEmpty.style.display = 'block'
    cartContent.style.display = 'none'
  }

  tottalPrice.innerHTML = `SUBTOTAL: £${price}`
  quantityTottal.innerHTML = priceList.length
}

export const cart = () => {
  btnAddCart.forEach(btnItem => {
    const product = btnItem.closest('.card')

    btnItem.addEventListener('click', () => {
      changeBtn(btnItem)
      getData(product)
      tottalPrice()
    })
  })

  util.delegate(document, 'click', '.js-btn-remove', e => {
    e.target.closest('.card').remove()
    tottalPrice()
  });
}
