const itemDisplay = document.querySelector('#items');

filterItems = function() {
    search = document.getElementById('search').value;
    if(search == "") search = null;

    alert("Search: " + search);

    itemDisplay.innerHTML("");

    fetch("http://localhost:3000/listings/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            search: search
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data);
    })
    .catch(err => console.log(err));
}