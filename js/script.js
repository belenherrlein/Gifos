//Giphy tendencias
const apiKey = 'DwN6UmR071VUNKSIXcIg9dmrnEvcz6aA'
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=9`)
  .then(response => response.json())
  .then(json => {
    json.data
      .map(gif => gif.images.fixed_height.url)
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
      })
  })
  .catch(error => document.body.appendChild = error)

  //Gifos search
  const gifForm = document.querySelector(".container")[0];
gifForm.addEventListener("submit", fetchGiphs);

function fetchGiphs(e) {
    e.preventDefault();
    const searchTerm = document.querySelector("#textsearch").value;
    fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=4&api_key=${apiKey}`)
    .then((response) => {return response.json(); })
    .then((resp => {
        let dataArray = resp.data
        showGiphs(dataArray);
    }))
    .catch(err => console.log(err)); 
}

function showGiphs(dataArray) {
  const results = document.querySelector(".resultsGuifos");
  let output = document.createElement ('div')[0];
  dataArray.forEach((imgData) => {
    output += `<img src="${imgData.images.fixed_width.url}"/>` ;
  });
  document.querySelector('.resultsGuifos').innerHTML = output;
}
//themes//