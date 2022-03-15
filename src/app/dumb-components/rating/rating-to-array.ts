export function ratingToArray(rating: number): boolean[] {
  const ratingsArray: boolean[] = [false, false, false, false, false];

  if (rating == 0) return ratingsArray;

  for (let i = 0; i < rating; i++) {
    ratingsArray[i] = true;
  }
  return ratingsArray;
}
