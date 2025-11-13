const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  // <div class="text-center mb-5" id="books">
  // using fetch
  fetch(url)
	.then(response => response.json())
	.then(books => {
		// loop for multiple books
		books.forEach(book => {
			let book_from_doc = document.createElement('div');
			book_from_doc.classList.add('book');

			// formatting HTML presentation
			book_from_doc.innerHTML = `
				<h2>${book.name}</h2>
				<p>by ${book.authors.join(', ')}</p>
				<p>${new Date(book.released).getFullYear()}</p>
				<p>${book.numberOfPages} pages</p>
			`;

			// add to the app
			app.appendChild(book_from_doc);
		});

	/*
	.catch(error => {
		console.error('Sorry, the request could not be completed :(');
	});
	*/
	
	// center and styling
	app.style.display = "flex";
	app.style.flexDirection = "column";
	app.style.alignItems = "center";
	});
};


fetchData(url);
