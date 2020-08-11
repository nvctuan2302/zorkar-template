import * as util from './util'

export const tab = () => {

  const tabItems = [...document.querySelectorAll('.js-tab__item')]
  const tabContent = [...document.querySelectorAll('.js-tab-content')]

  tabItems.forEach(item => {
    item.addEventListener('click', () => {
      util.getSiblings(item).map(getSIb => getSIb.classList.remove('is-active'))
      item.classList.toggle('is-active')
    })
  })
}

