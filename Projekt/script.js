const API_KEY = '2e75f0b8169c11f38331f670cd8f9f51';

	const searchButtonTitle = document.getElementById('searchButtonTitle');
	const searchButtonGenre = document.getElementById('searchButtonGenre');
	const searchTitle = document.getElementById('searchTitle');
	const searchGenre = document.getElementById('searchGenre');
	const searchShow = document.getElementById('searchShow');
	const topMovies = document.getElementById('topMovies');
	let genreValue = 0;

	
	
const searchMovieByTitle = (query) => {
	let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
	
	
	fetch(url)
	.then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Zle cos');
	})
	.then(data => {
		displayMoviesTitle(data.results);
	})
	.catch(error => {
		console.error('Cos zepsute:', error);
	});
};

const displayMoviesTitle = (movies) => {
		
	movies.forEach(movie => {
		if (movie.poster_path) {

			const movieShow = document.createElement('div');
			movieShow.classList.add('moviePhoto');

			const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

			movieShow.innerHTML = `
				<img src="${imageUrl}" data-movie-id="${movie.id}">
				<p>${movie.title}</p>
				<p>${movie.overview}</p>
				<p>${movie.release_date}</p>
				<p>${searchGenre.value}</p>
				<p>${movie.title}</p>
				<a href="https://www.themoviedb.org/movie/${movie.id}">Link</a>
				<p>${movie.vote_average}</p>
				<a href="https://www.themoviedb.org/movie/${movie.id}/images/backdrops">Gallery</a>
				<a href="https://www.themoviedb.org/movie/${movie.id}/videos">Trailer</a>
				<div>
				<input type="number" id="Rate${movie.id}">
				<button class="btn btn-warning"  onclick="Rate(${movie.id})">Rate</button>
				</div>`;
				searchShow.appendChild(movieShow);
		}
	});
};
searchButtonTitle.addEventListener('click', () => {
	const query = searchTitle.value;
	searchMovieByTitle(query);
});

const searchMovieByGenre = (genre) => {
	let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
	
	fetch(url)
	.then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Zle cos');
	})
	.then(data => {
		displayMoviesGenre(data.results);
	})
	.catch(error => {
		console.error('Cos zepsute:', error);
	});
};

	
	const displayMoviesGenre = (movies) => {
		
		movies.forEach(movie => {
			if (movie.poster_path) {

                const movieShow = document.createElement('div');
				movieShow.classList.add('moviePhoto');

				const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

				movieShow.innerHTML = `
					<img src="${imageUrl}" data-movie-id="${movie.id}">
					<p>${movie.title}</p>
					<p>${movie.overview}</p>
					<p>${movie.release_date}</p>
					<p>${searchGenre.value}</p>
					<p>${movie.title}</p>
					<a href="https://www.themoviedb.org/movie/${movie.id}">Link</a>
					<p>${movie.vote_average}</p>
					<a href="https://www.themoviedb.org/movie/${movie.id}/images/backdrops">Gallery</a>
					<a href="https://www.themoviedb.org/movie/${movie.id}/videos">Trailer</a>
					<div>
					<input type="number" id="Rate${movie.id}">
					<button class="btn btn-warning"  onclick="Rate(${movie.id})">Rate</button>
					</div>`;
				
				searchShow.appendChild(movieShow);
			}
		});
	};
	searchButtonGenre.addEventListener('click', () => {
						
			if(searchGenre.value=="Action"){
				genreValue = 28;
			}else if(searchGenre.value=="Animation"){
				genreValue = 16;
			}else if(searchGenre.value=="Comedy"){
				genreValue = 35;
			}else if(searchGenre.value=="Music"){
				genreValue = 10402;
			}else if(searchGenre.value=="War"){
				genreValue = 10752;
			}

		searchMovieByGenre(genreValue);
	});

	fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Network response was not ok.');
		})
		.then(data => {
			displayPopularMovies(data.results);
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
		});


const Rate = (id) =>{
		
	let rating = document.getElementById("Rate"+id).value;
	if(rating < 1 || rating > 10){
		alert("Podaj ocene od 1-10")
	}else{
	const options = {
		method: 'POST',
		headers: {
		accept: 'application/json',
		'Content-Type': 'application/json;charset=utf-8',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc1ZjBiODE2OWMxMWYzODMzMWY2NzBjZDhmOWY1MSIsInN1YiI6IjY1NjY2OWRmM2Q3NDU0MDEwYmUxMDcwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V894TXLtoca5CxuObyOfRdqE8Ha77Qphe60fj0FvJc0'
		},
		body: JSON.stringify({ value: rating })
	};

	fetch("https://api.themoviedb.org/3/movie/"+id+"/rating", options)
	.then(response => response.json())
	.then(response => {console.log(response);})
	.catch(err => console.error(err));
	}
}
const displayPopularMovies = (movies) => {
	movies.slice(0, 5).forEach(movie => {
		if (movie.poster_path) {
			const movieShow = document.createElement('div');
			movieShow.classList.add('moviePhoto');

			const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

			movieShow.innerHTML = `
				<img src="${imageUrl}">
				`;

		topMovies.appendChild(movieShow);
		}
	});
};
