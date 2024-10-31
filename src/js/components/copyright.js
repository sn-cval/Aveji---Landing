(function () {
  const copyright = document.querySelector('.footer__year')

  const data = new Date()
  const year = data.getFullYear()

  copyright.textContent = year
})()
