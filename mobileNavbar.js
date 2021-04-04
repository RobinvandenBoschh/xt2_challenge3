// JavaScript voor de animatie trigger in het mobiele navigatiemenu
function toggleIcon(x) {
    x.classList.toggle('change');  // Het toevoegen en weghalen van de class change zorgt voor de animatie van
}


// JavaScript voor het openen en sluiten van het mobiele navigatiemenu (via het geanimeerde icoontje)
function openNav(x) {
    if(x.classList.contains('change')) {
        document.getElementById('mobileNavbar').style.width = '100%';
    } else {
        document.getElementById('mobileNavbar').style.width = '0px';
    }
}

// JavaScript voor het sluiten van het mobiele navigatiemenu (via het aanklikken van een link)
function closeNav() {
    document.getElementById('mobileNavbar').style.width = '0px';
    document.getElementsByClassName('iconContainer').classList.toggle('change');
}