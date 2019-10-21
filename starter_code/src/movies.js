class MoviesOperations {
    // Turn duration of the movies from hours to minutes
    turnHoursToMinutes(movies) {
        let moviesMinutesDuration = movies.map(function (movie) {
                return typeof movie.duration !== "string" ? 0 :
                    movie.duration.split(" ")
                        .map(duration => duration.match(/\d+/)[0]);
            }
        );

        let minutes = moviesMinutesDuration.map(function (time) {
            if (time.length > 1) {
                return time[0] * 60 + time[1] * 1;
            } else if (time.toString().length < 1) {
                return parseInt(time) * 60
            } else if (time.toString().length > 1) {
                return parseInt(time)
            } else {
                return time[0] * 60
            }
        });

        let finalMovies = [];

        for (let i = 0; i < movies.length; i++) {
            movies[i].duration = minutes[i];
            finalMovies.push(movies[i]);
        }
        return finalMovies;
    }

// Get the average of all rates with 2 decimals
    ratesAverage(movies) {
        return movies.reduce((total, movie) => total + Number(movie.rate), 0) / movies.length;
    }

    // Get the average of Drama Movies

    dramaMoviesRate(movies) {
        let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
        let n = this.ratesAverage(dramaMovies);
        return dramaMovies.length > 0 ? this.roundToTwoDecimals(n) : undefined;
    }

    roundToTwoDecimals(n) {
        return Math.round(n * 100) / 100;
    }

// Order by time duration, in growing order

    orderByDuration(movies) {
        return movies.sort((a, b) => {
            let durationDifference = a.duration - b.duration;
            return durationDifference !== 0 ? durationDifference : a.title.localeCompare(b.title);
        });
    }

    // How many movies did STEVEN SPIELBERG

    howManyMovies(movies) {
        let ssMoviesCount = movies.filter(movie =>
            movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
        ).length;
        return movies.length > 0 ?
            "Steven Spielberg directed " + ssMoviesCount + " drama movies!" : undefined;
    }

    // Order by title and print the first 20 titles

    orderAlphabetically(movies) {
        return movies.map(movie => movie.title).sort().slice(0, 20)
    };

    // Best yearly rate average
    bestYearAvg(movies) {
        if (movies.length === 0) {
            return undefined;
        }
        const groupByYear = movies.reduce((accum, movie) => {
            if (!accum[movie.year]) {
                accum[movie.year] = []
            }
            ;
            accum[movie.year].push(movie.rate);
            return accum
        }, {});
        let years = Object.entries(groupByYear).map((e) => ({[e[0]]: e[1].reduce((total, rate) => Number(total) + Number(rate) / Number(e[1].length), 0)}));
        let bestRate = Math.max(...Object.entries(groupByYear).map(rate => rate[1]
            .reduce((accumulator, rate) => Number(accumulator) + Number(rate), 0) / rate[1].length));
        let bestYear = Object.assign(Object.keys(years.find(movie => Object.keys(movie).find(key => movie[key] === bestRate)))).toString();

        return "The best year was " + bestYear + " with an average rate of " + bestRate;
    }
}


module.exports = MoviesOperations;