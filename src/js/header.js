import * as util from './util'

export const header = () => {
  const shopList = document.querySelector('.js-shop-list')
  const shopListItems = [...document.querySelectorAll('.js-shop-list__item')]

  const wrapContent = [...document.querySelectorAll('.js-wrap-content')]
  const btnHamburger = document.querySelector('.js-button--hamburger')
  const menuMobieList = document.querySelector('.js-menu-mobie-list')
  const menuMobieListItems = [...document.querySelectorAll('.js-menu-mobie-list__item')]
  const menuMobieListLv2 = document.querySelector('.js-menu-mobie-list-lv2')

  const category = document.querySelector('.js-categories__chosen')
  const categoryList = document.querySelector('.js-categories-list')
  const arrCategories = [...document.querySelectorAll('.js-categories-list__value')]
  const result = document.querySelector('.js-categories__result')

  const mainNavbar = document.querySelector('.js-header__main-navbar')
  const mainHeader = document.querySelector('#js-header')
  const showBrand = document.querySelector('.js-brand')
  let hidenHeight = -(mainHeader.offsetHeight - mainNavbar.offsetHeight)
  let lastScrollTop = 0;

  const modalSearch = document.querySelector('.js-modal-search')
  const btnSearchMobie = document.querySelector('.js-button--search-mb')
  const btnClose = document.querySelector('.js-modal-search__btn-close')

  shopListItems.forEach(item => {
    shopList.style.height = `${wrapContent[0].offsetHeight}px`
    const menuChild = item.querySelector('.js-wrap-content')

    item.addEventListener('mouseover', () => {
      util.getSiblings(item).map(getSIb => getSIb.classList.remove('is-active'))
      item.classList.add('is-active')
      shopList.style.height = `${menuChild.offsetHeight}px`
    })
  })

  btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle('open')
    menuMobieList.style.maxHeight = menuMobieList.offsetHeight === 0 ?
      `${menuMobieList.scrollHeight}px` :
      null
  })

  menuMobieListItems.forEach(item => {
    let menuMobieChild = item.querySelector('.js-menu-mobie-list-lv2')

    item.addEventListener('click', event => {

      event.preventDefault()
      item.classList.toggle('rotate90')

      menuMobieChild.style.maxHeight = menuMobieChild.offsetHeight === 0 ?
        `${menuMobieChild.scrollHeight}px` :
        null

      menuMobieList.style.maxHeight = `${menuMobieList.scrollHeight + menuMobieChild.scrollHeight}px`

      menuMobieChild.addEventListener('click', event => {
        event.stopPropagation()
      })
    })

  })

  category.addEventListener('click', () => {
    categoryList.classList.toggle('is-active')
    category.classList.toggle('rotate90')

    hideOnClickOutside(category, () => {
      categoryList.classList.remove('is-active')
      category.classList.remove('rotate90')
    })
  })

  arrCategories.forEach(item => {
    item.addEventListener('click', () => {
      result.innerHTML = item.innerHTML
    })
  })

  const scrollHeader = () => {
    window.addEventListener('scroll', () => {
      let srollTop = window.scrollY

      mainHeader.style.top = srollTop > 150 ?
        `${hidenHeight}px` :
        null

      srollTop > 150 ?
        showBrand.classList.add('show') :
        showBrand.classList.remove('show')
    })
  }

  if (window.innerWidth > 992) scrollHeader()

  btnSearchMobie.addEventListener('click', () => {
    modalSearch.classList.add('is-active')
  })

  btnClose.addEventListener('click', () => {
    modalSearch.classList.remove('is-active')

  })
}


const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)

const hideOnClickOutside = (element, fn) => {
  const outsideClickListener = event => {
    if (!element.contains(event.target) && isVisible(element)) {
      fn()
      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}


