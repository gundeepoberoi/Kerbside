createConvo = function() {
    fetch("http://localhost:3000/details/create-convo", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer xoxb-6104746594806-6108474493109-en6maSCmjbz5V0OVZvwYtI3W'
        },
        body: JSON.stringify({
            name: "user1"
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message != null) alert(message);
        else if (data.error != null) alert(error);
        else alert("no response");
    })
    .catch(err => console.log(err));
}