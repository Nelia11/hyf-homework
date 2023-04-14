import { movies }  from "./movies.js";
//1
const shortTitle = movies.filter(movie => movie.title.length < 3);
console.log(shortTitle);
//2
const longTitle = movies.filter(movie => movie.title.length > 60);
console.log(longTitle);
//3
const numberOfMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989).length;
console.log(`The number of movies made between 1980-1989 is: ${numberOfMovies}.`)
//4
const arrWithExtraTag = movies.map(movie => {
    if (movie.rating >= 7) {
        movie.tag = "Good";
    } else if (movie.rating >= 4 && movie.rating < 7) {
        movie.tag = "Average";
    } else if (movie.rating < 4) {
        movie.tag = "Bad";
    }
    return movie;
})
console.log(arrWithExtraTag[100]); // check the random element of array
//5
const higherThanSix = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(higherThanSix);
//6
const keywords = ["sUrFer", "AlIEN", "BeNjAmIn"];
const total = movies.filter(movie => {
    const title = movie.title.toLowerCase();
    return keywords.some(keyword => title.includes(keyword.toLowerCase()));
}).length;
console.log(`Total number of movies containing the keywords: ${total}.`);
//7
const wordDuplicatedFromTitle = movies.map(movie => {
    const arrayTitle = movie.title.split(" ");

    // select a random word from the title to duplicate
    const wordIndex = Math.floor(Math.random() * arrayTitle.length);
    const wordDuplicated = arrayTitle[wordIndex];

    return {
        ...movie,
        title: `${movie.title} : Harry Potter and ${wordDuplicated}`,
    };
})
console.log(wordDuplicatedFromTitle[688])
console.log(wordDuplicatedFromTitle[62])
console.log(wordDuplicatedFromTitle);
//8
const totalRating = movies.reduce((accumulator, movie) => accumulator + movie.rating, 0);
const averageRating = (totalRating / movies.length).toFixed(2);
console.log(`The average rating of all the movies is ${averageRating}.`);
//9
const countMoviesByTag = movies.reduce((accumulator, movie) => {
    if (movie.tag === "Good") {
      accumulator.goodMovies++;
    } else if (movie.tag === "Average") {
      accumulator.averageMovies++;
    } else if (movie.tag === "Bad") {
      accumulator.badMovies++;
    }
    return accumulator;
  }, 
  { goodMovies: 0,
    averageMovies: 0, 
    badMovies: 0 
  }
  );
  console.log(countMoviesByTag); 
