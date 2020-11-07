$('#joke').on('click', function () {
    $.ajax({
    url: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'application/json'        
    }
}).then(res => {
        $('#jokeGoesHere').html(res.joke);
    });
});