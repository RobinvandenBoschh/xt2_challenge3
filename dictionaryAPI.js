function searchWord() {
    var searchInput = document.getElementById('keyWord').value;
    document.getElementById('searchedWord').innerHTML = searchInput;

    getDefinition(searchInput);
}

function getDefinition(searchInput) {
    fetch('https://wordsapiv1.p.rapidapi.com/words/' + searchInput + '/definitions', {
	    'method': 'GET',
	    'headers': {
		    'x-rapidapi-key': 'e04d8a071fmsh02059a69f9ca529p1fa3f7jsnf444d0e4fb64',
		    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
	    }
    })
    .then(response => {
        console.log(response);
        //return response;
    })
    .catch(err => {
        console.error(err);
    });

    //document.getElementById('definition').innerHTML = response;
    //document.getElementById('definition0').innerHTML = response.definitions;
    //document.getElementById('definition1').innerHTML = definitions[1].definition;
    //document.getElementById('definition2').innerHTML = definitions[2].definition;
}   