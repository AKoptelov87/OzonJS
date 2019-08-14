'use strict';

//чекбокс
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