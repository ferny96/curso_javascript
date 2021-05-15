/*QUE ES EL EVENT BUBBLING:es cuando presionamos en un evento pero ese evento se propaga por otros lugares
y nos da resultados no deseados*/
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo'); 

cardDiv.addEventListener('click', (e) => {

    e.stopPropagation();//EL EVENT BUBBLING SE EVITA CON e.stopPropagation();
    console.log('clic en card');
})

infoDiv.addEventListener('click', (e) => {

    e.stopPropagation();
    console.log('clic en info');
})

titulo.addEventListener('click', (e) => {

    e.stopPropagation();
    console.log('clic en titulo');
})