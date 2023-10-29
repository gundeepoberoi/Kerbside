const itemDisplay = document.querySelector('#items');
const categoryDisplay = document.querySelector('#category');
const tagDisplay = document.querySelector('#tag');

initialSearch = function() {
    itemDisplay.innerHTML = "Loading scrap...";

    fetch("http://localhost:3000/listings/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            search: null,
            location: null,
            category: null,
            timestamp: null,
            mass: null,
            dimensions: null,
            tags: null
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.length == 0) alert("No items match your filters! Please try adjusting your spelling");
        else {
            itemDisplay.innerHTML = "";

            data.forEach(element => {

                item =  '<div class="col-md-4 mb-4">';
                item += '<div class="card">';
                item += '<img class="card-img-top image-fluid" src="/images/' + element.image + '" alt="Listing Image" style="width: 100%; height: 300px; object-fit: cover"><div class="card-body">';
                item += '<h5 class="card-title">' + element.title + '</h5>';
                item += '<p class="card-text">' + element.description + '</p>';
                item += '<div class="mb-2"><span class="badge bg-info">' + element.category + '</span></div><div class="row">';
                item += '<div class="row"><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/></svg></div><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suitcase" viewBox="0 0 16 16"><path d="M6 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 6 5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 10 5Z"/><path d="M6.5 0a.5.5 0 0 0-.5.5V3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 1.031 1.75A1.003 1.003 0 0 0 5 16a1 1 0 0 0 1-1h4a1 1 0 1 0 1.969-.25A2 2 0 0 0 13 13V5a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-.5-.5h-3ZM9 3H7V1h2v2Zm3 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8Z"/></svg></div><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16"><path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/><path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/></svg></div><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg></div></div><div class="row">';
                item += '<div class="col-3" style="font-size: 10px;">' + element.dimensions + '</div>';
                item += '<div class="col-3" style="font-size: 10px;">' + element.mass + '</div>';
                item += '<div class="col-3" style="font-size: 10px;">' + element.timestamp + '</div>';
                item += '<div class="col-3" style="font-size: 10px;">' + element.location + '</div>';
                item += '</div><br><a href="/details" class="btn btn-info">View Details</a></div></div></div>';

                itemDisplay.insertAdjacentHTML("beforeend", item);
            });
        }
    })
    .catch(err => console.log(err));
}

filterItems = function() {
    var search = document.getElementById('search').value;
    if(search == "") search = null;

    var category = document.getElementById('category').value;

    alert("Search: " + search);
    alert("Category: " + category);

    itemDisplay.innerHTML = "Loading scrap...";

    fetch("http://localhost:3000/listings/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            search: search,
            location: null,
            category: category,
            timestamp: null,
            mass: null,
            dimensions: null,
            tags: null
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.length == 0) alert("No items match your filters! Please try adjusting your spelling");
        else {
            itemDisplay.innerHTML = "";

            data.forEach(element => {

                var image = new Image();
                image.src = URL.createObjectURL(new Blob([element.image], {type: 'image/jpg'}));

                item =  '<div class="col-md-4 mb-4">';
                item += '<div class="card">';
                item += '<img class="card-img-top image-fluid" src="/images/' + element.image + '" alt="Listing Image" style="width: 100%; height: 300px; object-fit: cover"><div class="card-body">';
                item += '<h5 class="card-title">' + element.title + '</h5>';
                item += '<p class="card-text">' + element.description + '</p>';
                item += '<div class="mb-2"><span class="badge bg-info">' + element.category + '</span></div><div class="row">';
                item += '<div class="row"><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/></svg></div><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suitcase" viewBox="0 0 16 16"><path d="M6 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 6 5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 10 5Z"/><path d="M6.5 0a.5.5 0 0 0-.5.5V3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 1.031 1.75A1.003 1.003 0 0 0 5 16a1 1 0 0 0 1-1h4a1 1 0 1 0 1.969-.25A2 2 0 0 0 13 13V5a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-.5-.5h-3ZM9 3H7V1h2v2Zm3 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8Z"/></svg></div><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16"><path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/><path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/></svg></div><div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg></div></div><div class="row">';
                item += '<div class="col-3" style="font-size: 10px;">' + element.dimensions + '</div>';
                item += '<div class="col-3" style="font-size: 10px;">' + element.mass + '</div>';
                item += '<div class="col-3" style="font-size: 10px;">' + element.timestamp + '</div>';
                item += '<div class="col-3" style="font-size: 10px;">' + element.location + '</div>';
                item += '</div><br><a href="#" class="btn btn-info">View Details</a></div></div></div>';

                itemDisplay.insertAdjacentHTML("beforeend", item);
            });
        }
    })
    .catch(err => console.log(err));
}

loadCategories = function() {
    categoryDisplay.innerHTML = '<option value="Any" style="color:darkgreen">Any</option>';
    fetch("http://localhost:3000/listings/categories", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            categoryDisplay.insertAdjacentHTML("beforeend", ('<option value="' + element.category + '" style="color:darkgreen">' + element.category + '</option>'));
        })
    })
    .catch(err => console.log(err));
}

loadTags = function() {
    tagDisplay.innerHTML = '<option value="None" style="color:darkgreen">None</option>';
    fetch("http://localhost:3000/listings/tags", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            alert(element.tag);
            tagDisplay.insertAdjacentHTML("beforeend", ('<option value="' + element.tag +'" style="color:darkgreen">' + element.tag + '</option>'));
        })
    })
    .catch(err => console.log(err));
}

initialSearch();
loadCategories();
loadTags();