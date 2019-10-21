const MoviesOperations = require('../../starter_code/src/movies');

describe('Turn duration of the movies - turnHoursToMinutes', function () {
    let moviesInfo;
    let movies;
    beforeEach(function () {
        movies = require('../../starter_code/src/data');
        moviesInfo = new MoviesOperations();
    });
    it('Defines turnHoursToMinutes', function () {
        expect(typeof moviesInfo.turnHoursToMinutes).toBe('function');
    });

    it('Should return an array', function () {
        expect(typeof moviesInfo.turnHoursToMinutes(movies)).toBe('object');
    });

    it('Should return a new array, not update the original one', function () {
        expect(moviesInfo.turnHoursToMinutes(movies) === movies).toBe(false);
    });

    it('The duration of the movie should be a number', function () {
        expect(typeof moviesInfo.turnHoursToMinutes(movies)[0].duration).toBe('number');
    });

    it('The duration of the movie should return the correct number to a short movie - 31 minutes', function () {
        let movieTry = [{duration: '0h 31min'}];
        expect(moviesInfo.turnHoursToMinutes(movieTry)[0].duration).toBe(31);
    });

    it('The duration of the movie should return the correct number for really long movie - 341 minutes', function () {
        let movieTry = [{duration: '5h 41min'}];
        expect(moviesInfo.turnHoursToMinutes(movieTry)[0].duration).toBe(341);
    });

    it('It should return the correct number when the duration is only in hours', function () {
        let movieTry = [{duration: '2h'}];

        expect(moviesInfo.turnHoursToMinutes(movieTry)[0].duration).toBe(120);
    });

    it('It should return the correct number when the duration is only in minutes', function () {
      let movieTry = [{ duration: '54min' }];

      expect(moviesInfo.turnHoursToMinutes(movieTry)[0].duration).toBe(54);
    });
});

describe('Get the average rate - ratesAverage', function () {
    let moviesInfo;
    let movies;
    beforeEach(function () {
        movies = require('../../starter_code/src/data');
        moviesInfo = new MoviesOperations();
    });
  it('Defines ratesAverage', function () {
    expect(typeof moviesInfo.ratesAverage).toBe('function');
  });

  it('You should return a number my friend! Check parseFloat method!', function () {
    expect(typeof moviesInfo.ratesAverage(movies)).toBe('number');
  });

  it('You should return the average rate of 2 movies with rate 8 each!', function () {
    expect(moviesInfo.ratesAverage([{ rate: 8 }, { rate: 8 }])).toBe(8);
  });

  it('It should be rounded to 2 decimals digits', function () {
    expect(moviesInfo.ratesAverage([{ rate: 8 }, { rate: 9 }, { rate: 9 }, { rate: 7 }])).toBeCloseTo(8.25, 2);
  });

  it('It should be rounded to nearest hundredths ', function () {
    expect(moviesInfo.ratesAverage([{ rate: 8 }, { rate: 9 }, { rate: 9 }])).toBeCloseTo(8.67, 2);
  });
});

describe('Average rate of Drama Movies - dramaMoviesRate', function () {
    let moviesInfo;
    let movies;
    beforeEach(function () {
        movies = require('../../starter_code/src/data');
        moviesInfo = new MoviesOperations();
    });
  it('Defines dramaMoviesRate', function () {
    expect(typeof moviesInfo.dramaMoviesRate).toBe('function');
  });

  it('You should return a number!', function () {
    expect(typeof moviesInfo.dramaMoviesRate(movies)).toBe('number');
  });

  it('Return the rate of a single element array!', function () {
    expect(moviesInfo.dramaMoviesRate([{ genre: ['Drama'], rate: 8 }])).toBe(8);
  });

  it('Return Average even if one of the movies does not have rate!', function () {
    expect(moviesInfo.dramaMoviesRate([{ genre: ['Drama'], rate: 8 }, { genre: ['Drama'], rate: '' }])).toBe(4);
  });

  it('It should return the average of the array!', function () {
    expect(moviesInfo.dramaMoviesRate([{ genre: ['Drama'], rate: 8 }, { genre: ['Drama'], rate: 9 }, { genre: ['Drama'], rate: 7 }])).toBe(8);
  });

  it('It should return the average of the array, float!', function () {
    expect(moviesInfo.dramaMoviesRate([{ genre: ['Drama'], rate: 9 }, { genre: ['Drama'], rate: 9 }, { genre: ['Drama'], rate: 7 }])).toBe(8.33);
  });

  it('Only Drama Movies! You should return the average of Drama movies only!', function () {
    expect(moviesInfo.dramaMoviesRate([{ genre: ['Drama'], rate: 8 }, { genre: ['Romance'], rate: 9 }, { genre: ['Drama'], rate: 7 }])).toBe(7.5);
  });

  it('Should return undefined if there is no Drama movie!', function () {
    expect(moviesInfo.dramaMoviesRate([{ genre: ['Action'], rate: 8 }, { genre: ['Romance'], rate: 9 }, { genre: ['Sci-Fi'], rate: 7 }])).toBe(undefined);
  });
});

describe('Order the movies by duration - orderByDuration', function () {
    let moviesInfo;
    let movies;
    beforeEach(function () {
        movies = require('../../starter_code/src/data');
        moviesInfo = new MoviesOperations();
    });
  it('Defines orderByDuration', function () {
    expect(typeof moviesInfo.orderByDuration).toBe('function');
  });

  it('Should return an array', function () {
    expect(typeof moviesInfo.orderByDuration(movies)).toBe('object');
  });

  it('Should return the element in a single element array', function () {
    expect(moviesInfo.orderByDuration([{ duration: 100 }])).toEqual([{ duration: 100 }]);
  });

  it('Return the new array in growing order', function () {
    expect(moviesInfo.orderByDuration([{ duration: 100 }, { duration: 180 }, { duration: 90 }])).toEqual([{ duration: 90 }, { duration: 100 }, { duration: 180 }]);
  });

  it('If two movies have the same length, order them alphabetically by their title', function () {
    expect(moviesInfo.orderByDuration([{ title: 'abc', duration: 180 }, { title: 'bac', duration: 90 }, { title: 'aab', duration: 90 }]))
        .toEqual([{ title: 'aab', duration: 90 }, { title: 'bac', duration: 90 }, { title: 'abc', duration: 180 }]);
  });
});

describe('Get how many movies - howManyMovies', function () {
    let moviesInfo;
    let movies;
    beforeEach(function () {
        movies = require('../../starter_code/src/data');
        moviesInfo = new MoviesOperations();
    });
  it('Defines howManyMovies', function () {
    expect(typeof moviesInfo.howManyMovies).toBe('function');
  });

  it('Should return an string', function () {
    expect(typeof moviesInfo.howManyMovies(movies)).toBe('string');
  });

  it('Should return undefined if the array is empty', function () {
    expect(moviesInfo.howManyMovies([])).toBe(undefined);
  });

  it('Return "Steven Spielberg directed 0 drama movies!" if he does not directed none of the movies in the array', function () {
    expect(moviesInfo.howManyMovies([
      {
        director: 'James McTeigue',
        genre: ['Action', 'Drama', 'Thriller']
      }
    ])).toBe('Steven Spielberg directed 0 drama movies!');
  });

  it('Only drama movies! Should return "Steven Spielberg directed 1 drama movies!"', function () {
    expect(moviesInfo.howManyMovies([
      {
        director: 'Steven Spielberg',
        genre: ['Action', 'Drama', 'Thriller']
      },
      {
        director: 'Steven Spielberg',
        genre: ['Action']
      }
    ])).toBe('Steven Spielberg directed 1 drama movies!');
  });

  it('Only Steven Spielberg movies! Should return "Steven Spielberg directed 2 drama movies!"', function () {
    expect(moviesInfo.howManyMovies([
      {
        director: 'Steven Spielberg',
        genre: ['Action', 'Drama', 'Thriller']
      },
      {
        director: 'James McTeigue',
        genre: ['Action', 'Drama']
      },
      {
        director: 'Karl Moses',
        genre: ['Thriller', 'Drama']
      },
      {
        director: 'Steven Spielberg',
        genre: ['Drama', 'Thriller']
      }
    ])).toBe('Steven Spielberg directed 2 drama movies!');
  });

  it('Should return "Steven Spielberg directed 4 drama movies!"', function () {
    expect(moviesInfo.howManyMovies(movies)).toBe('Steven Spielberg directed 4 drama movies!');
  });
});

describe('Order alphabetically - orderAlphabetically', function () {
    let moviesInfo;
    let movies;
    beforeEach(function () {
        movies = require('../../starter_code/src/data');
        moviesInfo = new MoviesOperations();
    });
  it('Defines orderAlphabetically', function () {
    expect(typeof moviesInfo.orderAlphabetically).toBe('function');
  });

  it('You should return an array', function () {
    expect(typeof moviesInfo.orderAlphabetically([])).toBe('object');
  });

  it('Only return the title of the movies! Each element should be a string', function () {
    expect(typeof moviesInfo.orderAlphabetically([{ title: 'aab' }])[0]).toBe('string');
  });

  it('If there are less than 20 elements, return all of them.', function () {
    var moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }];

    expect(moviesInfo.orderAlphabetically(moviesArr).length).toEqual(3);
  });

  it('If there are more than 20 elements, return only 20 of them.', function () {
    var moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }];

    expect(moviesInfo.orderAlphabetically(moviesArr).length).toEqual(20);
  });

  it('You should order them alphabetically.', function () {
    var moviesArr = [{ title: 'aab' }, { title: 'aaa' }, { title: 'abc' }, { title: 'acb' }, { title: 'abb' }];

    expect(moviesInfo.orderAlphabetically(moviesArr)).toEqual(['aaa', 'aab', 'abb', 'abc', 'acb']);
  });

  it('You should return the top20 after order them alphabetically.', function () {
    let moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aaa' }, { title: 'bbb' }, { title: 'anc' }, { title: 'kns' }, { title: 'zds' }, { title: 'pow' }, { title: 'gda' }, { title: 'res' }, { title: 'ter' }, { title: 'bca' }, { title: 'ccc' }, { title: 'bbt' }, { title: 'qas' }, { title: 'kmn' }, { title: 'frt' }, { title: 'afb' }, { title: 'agb' }, { title: 'apo' }, { title: 'poa' }, { title: 'cdf' }, { title: 'sea' }, { title: 'lom' }, { title: 'acs' }, { title: 'qas' }, { title: 'mns' }, { title: 'bvc' }, { title: 'gha' }, { title: 'lkj' }, { title: 'era' }, { title: 'ert' }, { title: 'tex' }, { title: 'zas' }, { title: 'pol' }];

    expect(moviesInfo.orderAlphabetically(moviesArr)).toEqual(['aaa', 'aab', 'acb', 'acs', 'afb', 'agb', 'anc', 'apo', 'bab', 'bbb', 'bbt', 'bca', 'bvc', 'ccc', 'cdf', 'era', 'ert', 'frt', 'gda', 'gha']);
  });
});

describe('Best year average - bestYearAvg', function () {
    let moviesInfo;
    let movies;
    beforeEach(function () {
        movies = require('../../starter_code/src/data');
        moviesInfo = new MoviesOperations();
    });
  it('Defines bestYearAvg', function () {
    expect(typeof moviesInfo.bestYearAvg).toBe('function');
  });

  it('Should return undefined if the array is empty', function () {
    expect(typeof moviesInfo.bestYearAvg([])).toEqual('undefined');
  });

  it('Should return the correct answer to a single element array', function () {
    expect(moviesInfo.bestYearAvg([{ year: '2007', rate: 8 }])).toEqual('The best year was 2007 with an average rate of 8');
  });

  it('Should return the correct answer to a multiple elements array', function () {
    expect(moviesInfo.bestYearAvg(movies)).toEqual('The best year was 1972 with an average rate of 9.2');
  });

  it('Should return the oldest year when there is a tie', function () {
    let newMoviesArr = [{ year: '2000', rate: 9 }, { year: '2000', rate: 8 }, { year: '1978', rate: 10 }, { year: '1978', rate: 7 }];
    expect(moviesInfo.bestYearAvg(newMoviesArr)).toEqual('The best year was 1978 with an average rate of 8.5');
  });
});
