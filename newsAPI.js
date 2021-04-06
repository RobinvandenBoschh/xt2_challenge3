// Alle code in dit bestand is 100% zelf geschreven, zonder voorbeeld te hebben gebruikt. Ik heb alleen de documentatie van Spaceflight News API, uitleg op w3schools en het forum van StackOverflow gebruikt.


// Laadt eenmalig 20 artikelen bij het laden van de pagina.
fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=20', {'method': 'GET'})

.then(function(response) {
    if(!response.ok) throw Error(response.statusText);
    return response.json();
})
.then(function(response) {
    //console.log(response);
    createArticles(response);	
});


function createArticles(response) {
    var amount = parseInt(response['length']);
    var months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec');
    //console.log(amount);
    for (var i = 0; i < amount; i++) {   
        document.getElementById('articleContainer').innerHTML += "<div class='newsArticle' id='article" + i +"'><div class='imageContainer' id='imageContainer" + i + "'></div><div class='headerContainer' id='headerContainer" + i + "'></div><div class='dateContainer' id='dateContainer" + i + "'></div><div class='textContainer' id='textContainer" + i + "'></div><div class='sourceContainer' id='sourceContainer" + i + "'></div></div>";
        var articleImageUrl = response[i]['imageUrl'];
        document.getElementById('imageContainer'+i).innerHTML = "<img class='articleImage' src='" + articleImageUrl + "' />";
        var articleTitle = response[i]['title'];
        document.getElementById('headerContainer'+i).innerHTML = "<h3 class='articleTitle'>" + articleTitle + "</h3>";
        var articlePublicationDate = response[i]['publishedAt'];
        var articleYear = articlePublicationDate.slice(0,4);
        var articleMonthInt = articlePublicationDate.slice(5);
        var articleMonthName = months[parseInt(articleMonthInt)-1];
        var articleDay = articlePublicationDate.substring(8, 10);
        var articleDate = articleDay + " " + articleMonthName + " " + articleYear;
        var articleTime = response[i]['publishedAt'].slice(11,19);
        document.getElementById('dateContainer'+i).innerHTML = "<p class='publicationDate'>" + articleTime + "<br />" + articleDate + "</p>";
        var articleSummary = response[i]['summary'];
        document.getElementById('textContainer'+i).innerHTML = "<p class='summary'>" + articleSummary + "</p>";
        var articleSourceName = response[i]['newsSite'];
        var articleSourceUrl = response[i]['url'];
        document.getElementById('sourceContainer'+i).innerHTML = "<a class='articleSource' href='" + articleSourceUrl + "'>" + articleSourceName + "</a>";
    }
}


function clearArticles() {
    document.getElementById('articleContainer').innerHTML = "";
}


function changeContent(clicked_id) {
    switch(clicked_id) {
        case 'buttonBlogs':
            fetch('https://test.spaceflightnewsapi.net/api/v2/blogs?_limit=20', {'method': 'GET'})

            .then(function(response) {
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(function(response) {
                //console.log(response);
                clearArticles();
                createArticles(response);	
            });
            document.getElementById('buttonBlogs').classList.add('active');
            if (document.getElementById('buttonArticles').classList.contains('active')) {
                document.getElementById('buttonArticles').classList.remove('active');
            }
            if (document.getElementById('buttonReports').classList.contains('active')) {
                document.getElementById('buttonReports').classList.remove('active');
            }
            break;
        case 'buttonReports':
            fetch('https://test.spaceflightnewsapi.net/api/v2/reports?_limit=20', {'method': 'GET'})
            .then(function(response) {
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(function(response) {
                //console.log(response);
                clearArticles();
                createArticles(response);	
            });
            document.getElementById('buttonReports').classList.add('active');
            if (document.getElementById('buttonArticles').classList.contains('active')) {
                document.getElementById('buttonArticles').classList.remove('active');
            }
            if (document.getElementById('buttonBlogs').classList.contains('active')) {
                document.getElementById('buttonBlogs').classList.remove('active');
            }
            break;
        default: // Bij error of anders, en bij articles (startpunt)
            fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=20', {'method': 'GET'})

            .then(function(response) {
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(function(response) {
                //console.log(response);
                clearArticles();
                createArticles(response);	
            });
            document.getElementById('buttonArticles').classList.add('active');
            if (document.getElementById('buttonReports').classList.contains('active')) {
                document.getElementById('buttonReports').classList.remove('active');
            }
            if (document.getElementById('buttonBlogs').classList.contains('active')) {
                document.getElementById('buttonBlogs').classList.remove('active');
            }
    }
}

/*function searchForArticles() {
    if(document.getElementById('searchArticles').value) {
        var searchInput = document.getElementById('searchArticles').value;    
        if (document.getElementById('buttonArticles').classList.contains('active')) {
            fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=10&_contains=' + searchInput, {'method': 'GET'})

                .then(function(response) {
                    if(!response.ok) throw Error(response.statusText);
                    return response.json();
                })
                .then(function(response) {
                    console.log(response);
                    clearArticles();
                    createArticles(response);
                });
        }
        if (document.getElementById('buttonBlogs').classList.contains('active')) {
            fetch('https://test.spaceflightnewsapi.net/api/v2/blogs?_limit=10&_contains=' + searchInput, {'method': 'GET'})

                .then(function(response) {
                    if(!response.ok) throw Error(response.statusText);
                    return response.json();
                })
                .then(function(response) {
                    console.log(response);
                    clearArticles();
                    createArticles(response);
                });
        }
        if (document.getElementById('buttonReports').classList.contains('active')) {
            fetch('https://test.spaceflightnewsapi.net/api/v2/reports?_limit=10&_contains=' + searchInput, {'method': 'GET'})

                .then(function(response) {
                    if(!response.ok) throw Error(response.statusText);
                    return response.json();
                })
                .then(function(response) {
                    console.log(response);
                    clearArticles();
                    createArticles(response);
                });
        }
    } else {
        alert('Type some keywords!');
    }   
}

document.getElementById('submitSearch').onclick = function(){ searchForArticles() };*/