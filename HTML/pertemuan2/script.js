const judul = document.getElementById('judul');
const paragraft = document.getElementById('paragraft');
let aktif = false;

const button = document.getElementById('button');
button.addEventListener('click', () => {
    aktif = !aktif;

    if(aktif){
        console.log(`${aktif}`);
        judul.innerHTML = "Element True";
        paragraft.style.color = "blue";
        document.body.style.backgroundColor = "yellow";
    }else {
        console.log(`${aktif}`);
        judul.innerHTML = "Elemet False";
        paragraft.style.color = "yellow";
        document.body.style.backgroundColor = "pink";
    }
})
