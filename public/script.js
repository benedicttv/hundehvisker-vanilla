const btHamburgerMenu = document.getElementById('hamburge-menu');
const menuHundehvisker = document.getElementById('menu-hundehvisker');
const btMenuMobil = document.getElementById('bt-menu-mobil')

var menuActive = false;

btHamburgerMenu.addEventListener('click', ()=>{
    if(menuActive == false){
        menuHundehvisker.style.display = 'block';
        btMenuMobil.src = 'https://www.hundehvisker.no/wp-content/uploads/2023/12/close_FILL0_wght400_GRAD0_opsz24.svg'
    }else{
        menuHundehvisker.style.display = 'none';
        btMenuMobil.src = 'https://www.hundehvisker.no/wp-content/uploads/2023/12/menu_FILL0_wght400_GRAD0_opsz24.svg'
    }
    menuActive = !menuActive;
});

const corsAnywhere = 'http://cors.io:80';

const apiUrl = 'https://apidoc.ticketco.events/';
const authToken = 'aspxASyMK8eyAzibkpWq';

const requestOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
        'Origin': 'http://127.0.0.1:5500',
    },
};

fetch(corsAnywhere + apiUrl, requestOptions)
.then(response => response.json())
.then(data => console.log('Datos obtenidos:', data))
.catch(error => console.error('Error en la solicitud:', error));



/* 

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 850){
        menuHundehvisker.style.display = 'none';
        menuHundehvisker.style.display = 'block';
    }
}) */