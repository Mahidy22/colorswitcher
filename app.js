// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// console.log(buttons);


// buttons.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === 'red'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id
//         }
//         if(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id
//         }
//     })
// })




let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button')

buttons.forEach((btn)=>{
    btn.addEventListener('click',(i)=>{
        if(i.target.id === 'grey'){
            body.style.backgroundColor = i.target.id
        }
        if(i.target.id === 'red'){
            body.style.backgroundColor = i.target.id
        }
        if(i.target.id === 'blue'){
            body.style.backgroundColor = i.target.id
        }
        if(i.target.id === 'yellow'){
            body.style.backgroundColor = i.target.id
        }
    })
})







