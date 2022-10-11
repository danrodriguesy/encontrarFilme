window.onload = function(){
    const btnEncontrarFilme = document.getElementById('btnEncontrarFilme');

    btnEncontrarFilme.addEventListener('click', function(){
        function returnFilms(){
            let random = Math.floor(Math.random() * 900) + 1;
            //fetch('https://api.themoviedb.org/3/movie/'+random+'?api_key=5e5f3c422a6d2a80304e9130507f359e')
            fetch('https://api.themoviedb.org/3/movie/'+random+'?api_key=5e5f3c422a6d2a80304e9130507f359e&language=pt')
                .then(response => {
                    response.json()
                    .then(data => getMovie(data))
                    .catch(err => console.log(err))
                    
                })
                
        }
        returnFilms();
        function getMovie(data){
            if(data.status_code == 34){
                document.getElementById('randomMovie').innerHTML = '';
                let movieNotFound = '<div id="movieNotFound">Ops... Filme não encontrado, tente novamente!</div>';
                document.getElementById('randomMovie').innerHTML = movieNotFound;
            } else {
                document.getElementById('randomMovie').innerHTML = '';
                let htmlArray = [];
                htmlArray.push('<img src="https://image.tmdb.org/t/p/original'+data.poster_path+'">');
                htmlArray.push('<br />');
                htmlArray.push('<div id="container">');
                htmlArray.push('<div id="title">'+data.title+'</div>');
                htmlArray.push('<div id="description">'+data.overview+'</div>');
                htmlArray.push('</div>');
                let infosMovie = htmlArray.join(' ');
                document.getElementById('randomMovie').innerHTML = infosMovie;
            }
        }
    });
};