//Evitando el event bubbling con la tecnica delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {

    //delegation
    if(e.target.classList.contains('titulo')){
        console.log('Diste clic en titulo');
    }

    if(e.target.classList.contains('precio')){
        console.log('Diste clic en precio');
    }

    if(e.target.classList.contains('card')){
        console.log('Diste clic en card');
    }
   
})