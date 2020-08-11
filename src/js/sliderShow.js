const totalItems = document.querySelectorAll('.js-img-list > *').length
const listImg = document.querySelector('.js-img-list')

let slideIndex = -1

export const slider = () => {
  slideIndex++

  listImg.style.transform =
    totalItems > slideIndex ?
      `translateX(-${slideIndex * 100}%)` :
      null

  if (totalItems === slideIndex) slideIndex = 0

  setTimeout(slider, 3000)
}
