export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

export function cleanKeyword(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}