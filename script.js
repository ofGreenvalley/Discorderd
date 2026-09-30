const audio = document.getElementById('bgAudio');
const playBtn = document.getElementById('playBtn');

// Función para ingresar al espacio con transiciones
function enterSpace() {
    document.getElementById('landingScreen').style.opacity = '0';
    document.getElementById('landingScreen').style.visibility = 'hidden';
    document.getElementById('mainSpace').classList.add('active');
    
    // Intenta reproducir audio automáticamente
    audio.play().catch(error => {
        console.log("La reproducción automática requiere interacción previa del usuario.");
        playBtn.innerText = "▶";
    });
}

// Control del reproductor de Audio
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
}

// Alternar el menú desplegable principal (+)
function toggleMenu() {
    const menu = document.getElementById('menuOptions');
    const trigger = document.getElementById('menuTrigger');
    
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        trigger.innerText = "+";
        hideAllSubs();
    } else {
        menu.classList.add('open');
        trigger.innerText = "−";
    }
}

// Mostrar subsecciones del menú (About me / Friends)
function showSub(id) {
    hideAllSubs();
    const target = document.getElementById(id);
    target.style.display = 'block';
}

function hideAllSubs() {
    document.getElementById('aboutMe').style.display = 'none';
    document.getElementById('friends').style.display = 'none';
}

// Opción Come Back: Reinicia la vista al estado inicial
function resetSpace() {
    hideAllSubs();
    document.getElementById('menuOptions').classList.remove('open');
    document.getElementById('menuTrigger').innerText = "+";
    document.getElementById('mainSpace').classList.remove('active');
    document.getElementById('landingScreen').style.opacity = '1';
    document.getElementById('landingScreen').style.visibility = 'visible';
    audio.pause();
    playBtn.innerText = "▶";
}