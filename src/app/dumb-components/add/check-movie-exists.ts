export function checkMovieExists(
  movieName: string,
  moviesArray: any[]
): boolean {
  //check if movie name exists, if so, return true....otherwise return false
  for (var movie of moviesArray) {
    if (movie.name.toLowerCase() == movieName.toLowerCase()) {
      return true;
    }
  }
  return false;
}
