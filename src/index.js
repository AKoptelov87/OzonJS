'use strict';

// start чекбокс
const checkboxes = document.querySelectorAll('.filter-check_checkbox');

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked')
        } else {
            this.nextElementSibling.classList.remove('checked')
        }
    })
});

// end чекбокс

// start корзина
const modalCart = document.querySelector('.cart'),
    btnOpenCart = document.getElementById('cart'),
    btnCloseCart = modalCart.querySelector('.cart-close');

// кнопка открыть корзину
btnOpenCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// кнопка закрыть корзину
btnCloseCart.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
});

// end корзина

// start добавление товара
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
   const btn = card.querySelector('button');

   btn.addEventListener('click', () => {
       const cardClone = card.cloneNode(true);
       cartWrapper.appendChild(cardClone);
       cartEmpty.remove();
       showData();
   })
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}

// end

// start

// end