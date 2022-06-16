// Add your code here


function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            document.body.innerHTML = object['id']
        })
        .catch(function(error) {
            alert('Whoops');
            document.body.innerHTML = error.message
        })
};

/* when a POST is missing, you use .catch() to deal with the error as a result of POSt missing */

/*data goes here - needs to be a string cause the data being exchanged is seen as text using JSON.stringify - the key and value pairs are retained as strings*/


/* method: whether we are POST / PATCH / GET / DELETE-- > CRUD terminologies
headers: metadata of the data we want to send...contain info on data being setInterval.common headers to be used are "content-type => indicates format in whic the data is being sent in e.g JSON Format" */