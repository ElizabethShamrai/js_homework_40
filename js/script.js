'use strict';

void function (){
    const form = document.querySelector('#form');
    const inputSelector =  'input, select, textarea';
    const dataKey = 'formData';

    form.addEventListener('submit', event => {
        event.preventDefault();

        let inputs = Array.from(event.target.querySelectorAll(inputSelector));

            let data = inputs.reduce(
                (accum, item) => {
                    accum[item.name] = item.value;
                    return accum;
                },
                {}
            )

            data = JSON.stringify(data); 
            localStorage.setItem(dataKey, data);
    })

    document.addEventListener('DOMContentLoaded', () => {
        let data = localStorage.getItem(dataKey);
        if(!data) return;
        data = JSON.parse(data);

        let inputs = Array.from(form.querySelectorAll(inputSelector));

        inputs.forEach(item => {
            try{
                item.value = data[item.name]
            } catch (err){
                console.log(err)
            }
        })

        console.log(inputs)
    })

}()