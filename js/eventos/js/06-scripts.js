/*EVENT BUBBLING: Es cuando presionamos en un evento pero ese evento se propaga por otros lugares
y nos da resultados no deseados*/
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo'); 

cardDiv.addEventListener('click', (e) => {
    //Detiene la propagacion del event bubbling
    e.stopPropagation(); 
    console.log('clic en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en el titulo');
});