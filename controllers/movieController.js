const Movie  = require("../models/movie");


// =============Controller TO Find All Shows=========
const allShows = async (req, res) => {
   const shows = await Movie.find({})
    res.status(200).json({shows:shows})
};

// ===Controller To Find Only All The Series=======
const allSeries = async (req, res) => {
 const series = await Movie.find({ type: "series"});
  res.status(200).json({shows: series})
};

//======Controller To Find Only All The Movies
const allMovies = async (req, res) => {
const movies = await Movie.find({type: "movie"});
res.status(200).json({shows: movies})
};


module.exports = {allShows, allSeries, allMovies};