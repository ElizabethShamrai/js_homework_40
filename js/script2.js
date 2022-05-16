'use strict';

void function (){
    let formData = localStorage.getItem('formData');
    formData = JSON.parse(formData);

    if(formData === null) return alert('Нет данных');

    const ul = document.createElement('ul');
    document.body.prepend(ul);
    
    for (const key in formData) {

        const li = document.createElement('li');
        ul.append(li);
        formData[key] === '' ? li.textContent = key + ': нет данных': li.textContent = key + ': ' + formData[key];

    }

}()