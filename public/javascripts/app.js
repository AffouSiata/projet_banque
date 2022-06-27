
$('.slides').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
});






function fermer (){

    let pageferme = document.querySelector('.modal')
    let icon = document.querySelector('.espace')
    let modal = document.querySelector('#modalite')
    pageferme.style.display="none";
    icon.style.display="none"
    modal.style.display="none";
}
function connexion(){
    let cliq = document.querySelector('.modal')
    console.log("ccccccc",cliq);
    let modal = document.querySelector('#modalite')
    console.log("mmmmm",modal);
    let espace = document.querySelector('.espace')
    cliq.style.display="none";
    modal.style.display="block";
    espace.style.display="block";


    
}


function taper (){

    let affiche= document.querySelector('.modal')
    let espace = document.querySelector('.espace')
    
    affiche.style.display =  "block"
    espace.style.display="block";


    espace.addEventListener('submit',(e)=>{
    console.log("azerty",e.target);
    e.preventDefault();

})

}