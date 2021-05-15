//EVITANDO EVENT BUBBLING CON LA TECNICA DELEGATION
//ESTO ES DELEGATION
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {

    if(e.target.classList.contains('titulo')){
        console.log('Diste clic en titulo')
    }
    
    if(e.target.classList.contains('precio')){
        console.log('Diste clic en precio');
    }
    
    if(e.target.classList.contains('card')){
        console.log('Diste clic en el card')
    }
})