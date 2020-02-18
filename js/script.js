const api_Key = 'DwN6UmR071VUNKSIXcIg9dmrnEvcz6aA';
const search = document.getElementById('search');
function getSearchResults(search) {
    const found = fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + api_Key)
        .then(response => {
            response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
    return found;
};

