export const scrollTop = () => {
  const btnTop = document.querySelector('#js-scroll-top')

  window.addEventListener('scroll', () => {
    return window.scrollY >= 300 ? btnTop.classList.add('is-visible') : btnTop.classList.remove('is-visible')
  })

  btnTop.addEventListener('click', function TopscrollTo() {
    if (window.scrollY != 0) {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY - 20);
        TopscrollTo();
      }, 5)
    }
  })
}
