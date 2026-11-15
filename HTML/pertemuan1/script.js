const boderYellow = document.querySelector('.cointainer');
boderYellow.addEventListener('click', () => {
    let conditon = confirm('apakah kamuu orang');
    if(conditon === true){
        alert('kamu ryandra');
    }else{
        alert('kmu robot');
    }
})

