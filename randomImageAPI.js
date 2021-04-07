function getRandomImage()  {
    setInterval(function() {
        var areaWidth = Math.round(parseInt(document.getElementById('images').offsetWidth)/100)*100;
        var areaHeight = Math.round(parseInt(document.getElementById('images').offsetHeight)/100)*100;
        var loadImage = 'https://picsum.photos/' + areaWidth + '/' + areaHeight;
        // API voor random Unsplash foto's
        document.getElementById('randomImageContainer').innerHTML =  '<img id=\"randomImage\" src=\"' + loadImage + '?random=10\" \/>';
    }, 2000);
}

getRandomImage();