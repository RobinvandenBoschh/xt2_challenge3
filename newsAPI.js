// var request = 'https://spaceflightnewsapi.net/api/v2/articles?_limit=10';

fetch('https://spaceflightnewsapi.net/api/v2/articles?_limit=10')

.then(response => {
    console.log(response);
    createArticles(response);
})
.catch(err => {
    console.error(err);
});

function createArticles(response) {
    for(var i; i < response.length; i++) {
        // some text
    }
}