const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const btn = document.getElementById("btn")


burger.addEventListener('click', () =>{

    if(nav.style.display === 'block'){
        nav.style.display = 'none';
        btn.style.display = 'none';
    }else{
        nav.style.display = 'block';
        btn.style.display = 'block';
    }
});

nav.addEventListener('click', ()=>{
    nav.style.display = 'none';
    btn.style.display = 'none';
})