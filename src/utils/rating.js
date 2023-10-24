export function getRatingColor(rating) {
  if (rating <= 4.0)
    return "red";
  else if (rating <= 7.0)
    return "yellow";
  else
    return "green";
}
