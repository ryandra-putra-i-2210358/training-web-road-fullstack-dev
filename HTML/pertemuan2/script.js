const judul = document.getElementById('judul');
const paragraft = document.getElementById('paragraft');
const boddy = document.getElementsByTagName('body');

let aktif = false;

const button = document.getElementById('button');
button.addEventListener('click', () => {
    aktif = !aktif;

    if(aktif){
        judul.innerHTML = "Element True";
        paragraft.style.color = "blue";
        document.body.style.backgroundColor = "yellow";
    }else {
        judul.innerHTML = "Elemet False";
        paragraft.style.color = "yellow";
        document.body.style.backgroundColor = "pink";
    }
})

