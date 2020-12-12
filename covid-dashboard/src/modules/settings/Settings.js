/**
 *
 * Author: Alex Malagor <seo.dnja@mail.com>
 *
 * Module function: Setting popup
 *
 * */

import settingsHTML from './settingsHTML';


export default function DefaultTemplate() {
  document.body.insertAdjacentHTML('beforeend', settingsHTML());

  // Заносим в переменные нужные элементы верстки
  const popup = document.querySelector('#popup');
  const form = document.forms.settings;
  // const population = el.querySelector('#setting-population');

  // Объявляем переменные-заглушки обработчиков событий
  let sendForm = null;

  // И прописываем методы присваивания функций обработчиков к нашим переменным
  function setSendForm(fn) {
    sendForm = fn;
  }

  function getFormData() {
    const country = form.country.value;
    const population = form.population.checked;
    const period = form.period.checked;
    const type = form.type.value;

    const data = {
      country,
      population,
      period,
      type,
    };
    sendForm(data);
  }

  function popupClick() {
    // console.log('Popup click');
  }

  function showPopup(top = 0, left = 0) {
    const popupWidth = popup.clientWidth;
    popup.style.top = `${top}px`;
    popup.style.left = `${left - popupWidth}px`;
    popup.classList.toggle('open');
  }

  // Add Events Listeners
  (function events() {
    popup.addEventListener('click', (event) => {
      const { target } = event;
      if (target === popup) return;
      popupClick();
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      getFormData();
      // showPopup();
    })
  })();


  // и по итогу возвращаем набор функций/интерфейс/API работы с этим модулем.
  return {
    showPopup,
    setHandler: {
      setSendForm,
    },
  };
}