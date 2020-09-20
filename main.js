// Set language
var user_lang = (navigator.language || navigator.userLanguage || navigator.browserLanguage).substring(2, length);

changeSiteLang(user_lang);


function dropDownLang(lang_option) {
    user_lang = lang_option.value;
    changeSiteLang(user_lang);
}

function changeSiteLang(user_lang) {
    switch (user_lang) {

        case "de":
            document.getElementById("lng_downloadFile").textContent = (
                "Datei Herunterladen");

            document.getElementById("lng_fastTxt").textContent = (
                "Wird automatisch auf einen Server in Ihrer Nähe umgeleitet. Blitzschnelle Download-Geschwindigkeiten.");

            document.getElementById("lng_stableTxt").textContent = (
                "Stabile Download-Plattform für alle Dateien und Dienste. Download mit Vertrauen.");

            document.getElementById("lng_secureTxt").textContent = (
                "Sichere Protokolle und erstklassige Antiviren-Software. Alle Dateien sind für Sie gesichert.");

            document.getElementById("lng_humanVer").textContent = (
                "Menschliche Verifizierung");

            document.getElementById("lng_mdlBody").textContent = (
                "Vor dem Herunterladen dieser Datei bestätigen Sie bitte, dass Sie ein Mensch sind. Dies kann durch die Vervollständigung einer der folgenden Angebote erfolgen. Der Download wird nach dem Abschluss des Verifikationsprozesses starten.");

            document.getElementById("lng_mdlFooter").textContent = (
                "Bitte geben Sie gültige Informationen ein. Andernfalls wird der Download nicht starten.");

            break;

        case "nl":
            document.getElementById("lng_downloadFile").textContent = (
                "Bestand Downloaden");

            document.getElementById("lng_fastTxt").textContent = (
                "Automatisch doorgestuurd naar een server bij u in de buurt. Bliksemsnelle downloadsnelheden.");

            document.getElementById("lng_stableTxt").textContent = (
                "Stabiel downloadplatform voor alle bestanden en diensten. Download met vertrouwen.");

            document.getElementById("lng_secureTxt").textContent = (
                "Veilige protocollen en hoogwaardige antivirussoftware. Alle bestanden zijn voor u beveiligd.");

            document.getElementById("lng_humanVer").textContent = (
                "Menselijke Verificatie");

            document.getElementById("lng_mdlBody").textContent = (
                "Voor u dit bestand kunt downloaden, zult u moeten aantonen dat u geen robot bent door één van onderstaande aanbiedingen te voltooien. De download start direct nadat het verificatieproces voltooid is.");

            document.getElementById("lng_mdlFooter").textContent = (
                "Voer geldige informatie alleen in bij het invullen van een offerte, anders start het downloaden niet.");

            break;

        case "it":
            document.getElementById("lng_downloadFile").textContent = (
                "Scarica il File");

            document.getElementById("lng_fastTxt").textContent = (
                "Reindirizzato automaticamente ad un server vicino a voi. Velocità di download fulminea.");

            document.getElementById("lng_stableTxt").textContent = (
                "Piattaforma di download stabile per tutti i file e servizi. Scaricare con fiducia.");

            document.getElementById("lng_secureTxt").textContent = (
                "Protocolli sicuri e software antivirus al top della gamma. Tutti i file sono protetti per voi.");

            document.getElementById("lng_humanVer").textContent = (
                "Verifica Umano");

            document.getElementById("lng_mdlBody").textContent = (
                "Per poter scaricare questo file, vi preghiamo di verificare che siete umani completando una semplice offerta sottostante. Il Download si avvierà dopo aver completato il procedimento di verifica.");

            document.getElementById("lng_mdlFooter").textContent = (
                "Vi preghiamo di inserire informazioni valide solo dopo il completamento di un’offerta altrimenti il download non si avvierà.");

            break;

        case "pt":
            document.getElementById("lng_downloadFile").textContent = (
                "Descarregar Ficheiro");

            document.getElementById("lng_fastTxt").textContent = (
                "Reencaminhado automaticamente para um servidor perto de si. Velocidades de descarga rápida de relâmpagos.");

            document.getElementById("lng_stableTxt").textContent = (
                "Plataforma de descarregamento estável para todos os ficheiros e serviços. Descarregar com confiança.");

            document.getElementById("lng_secureTxt").textContent = (
                "Protocolos seguros e software anti-vírus de topo de gama. Todos os ficheiros são seguros para si.");

            document.getElementById("lng_humanVer").textContent = (
                "Verificação Humana");

            document.getElementById("lng_mdlBody").textContent = (
                "A fim de descarregar este ficheiro, por favor verifique se é humano, completando uma simples oferta abaixo. O descarregamento começará depois de ter concluído o processo de verificação.");

            document.getElementById("lng_mdlFooter").textContent = (
                "Por favor, introduza informações válidas apenas quando completar uma oferta, caso contrário o descarregamento não terá início.");

            break;

        case "es":
            document.getElementById("lng_downloadFile").textContent = (
                "Descargar Archivo");

            document.getElementById("lng_fastTxt").textContent = (
                "Redireccionado automáticamente a un servidor cercano a ti. Velocidades de descarga rapidísimas.");

            document.getElementById("lng_stableTxt").textContent = (
                "Plataforma de descarga estable para todos los archivos y servicios. Descarga con confianza.");

            document.getElementById("lng_secureTxt").textContent = (
                "Protocolos seguros y software anti-virus de primera línea. Todos los archivos están asegurados para ti.");

            document.getElementById("lng_humanVer").textContent = (
                "Verificación Humana");

            document.getElementById("lng_mdlBody").textContent = (
                "Antes de descargar este archivo, por favor confirma que eres un ser humano completando una pequeña prueba debajo. La descarga comenzará luego de que hayas completado el proceso de verificación.");

            document.getElementById("lng_mdlFooter").textContent = (
                "Por favor ingresa solamente información válida cuando estés completando una prueba o de otro modo la descarga no comenzará.");

            break;

        case "fr":
            document.getElementById("lng_downloadFile").textContent = (
                "Télécharger le Fichier");

            document.getElementById("lng_fastTxt").textContent = (
                "Redirigé automatiquement vers un serveur proche de vous. Vitesse de téléchargement ultra rapide.");

            document.getElementById("lng_stableTxt").textContent = (
                "Plateforme de téléchargement stable pour tous les fichiers et services. Téléchargement en toute confiance.");

            document.getElementById("lng_secureTxt").textContent = (
                "Protocoles sécurisés et logiciels anti-virus haut de gamme. Tous les fichiers sont sécurisés pour vous.");

            document.getElementById("lng_humanVer").textContent = (
                "Verification des Droits");

            document.getElementById("lng_mdlBody").textContent = (
                "Avant de télécharger ce fichier, s’il vous plait confirmez que vous êtes un humain en complétant une offre simple ci-dessous. Le téléchargement va démarreraprès que vous complétiez le procès de confirmation.");

            document.getElementById("lng_mdlFooter").textContent = (
                "S’il vous plait entrez des informations valides seulement quand vous complétez une offre, sinon, le téléchargement ne démarrera pas.");

            break;

        default:
            document.getElementById("lng_downloadFile").textContent = (
                "Download File");

            document.getElementById("lng_fastTxt").textContent = (
                "Automatically redirected to a server near you. Lightning fast download speeds.");

            document.getElementById("lng_stableTxt").textContent = (
                "Stable download platform for all files and services. Download with confidence.");

            document.getElementById("lng_secureTxt").textContent = (
                "Secure protocols and top-of-the-line anti virus software. All files are secured for you.");

            document.getElementById("lng_humanVer").textContent = (
                "Human Verification");

            document.getElementById("lng_mdlBody").textContent = (
                "In order to download this file, please verify that you are human by completing one simple offer below. Download will start after you have completed the verification process.");

            document.getElementById("lng_mdlFooter").textContent = (
                "Please enter valid information only when completing an offer or else the download will not start.");

            break;
    }
}



// Get the modal
var modal = document.getElementById("myModal");

// Get modal-content
var modal_content = document.getElementsByClassName("modal-content")[0]

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal_content.style.animation = 'shake 0.5s';
    modal_content.style.animationIterationCount = '1';
}


// When the user hovers to x  button to close
span.onmousemove = function () {
    modal_content.style.animation = 'none';
    modal_content.style.animationIterationCount = 'none';
    modal_content.style.animationName = 'none';
    modal_content.style.animationDuration = 'none';
}


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal_content.style.animation = 'shake 0.5s';
//         modal_content.style.animationIterationCount = '1';
//     }
// }

// modal.onmouseout = function (event) {
//     if (event.target == modal) {
//         modal_content.style.animation = 'none';
//         modal_content.style.animationIterationCount = 'none';
//         modal_content.style.animationName = 'none';
//         modal_content.style.animationDuration = 'none';
//     }
// }


// Remove bootstrap btn-danger styling
// document.getElementsByClassName('btn')[0].classList.remove('btn-danger');


