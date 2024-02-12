// On créer un liste ou l'on stock les chemin d'acces au image du slider

var images = ["image/image-Slide/1.png", "image/image-Slide/2.png", "image/image-Slide/3.png"];

var index = 0;


// création de la fonction
function changeImage(n) {
    index += n;
    // si 
    if (index < 0) { index = images.length-1; }
    // si on dépasse la limite de la liste alors on revient au début de celle-ci
    if (index >= images.length) { index = 0; }
    // on remplace le chemin d'accès par le nouveau
    document.getElementById('ImageSlide').src = images[index];
}

// interval qui appelle la fonction toutes les 4s pour faire un défilement automatique

setInterval('changeImage(1)', 4000);
