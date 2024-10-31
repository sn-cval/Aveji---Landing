import { disableScroll } from '../functions/disable-scroll.js';
import { enableScroll } from '../functions/enable-scroll.js';

(function(){
  const burger = document?.querySelector('.header__burger');
  const menu = document?.querySelector('.header__nav');
  const menuItems = document?.querySelectorAll('.header__item');
  const overlay = document?.querySelector('.header__overlay');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('header__burger--active');
    menu?.classList.toggle('header__nav--active');
    overlay?.classList.toggle('header__overlay--active')

    if (menu?.classList.contains('header__nav--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    overlay?.classList.remove('header__overlay--active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('header__burger--active');
      menu.classList.remove('header__nav--active');
      overlay?.classList.remove('header__overlay--active');
      enableScroll();
    });
  });
})();
