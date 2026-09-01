const idElement = (value) => {
    const generate = value
    const h1 = document.querySelector(`${generate}`);
    h1.addEventListener('click', () => {
        alert('test click');
    })
}
idElement('p');






