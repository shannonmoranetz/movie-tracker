export const fetchData = async (url1, url2) => {
  const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url1 + apiKey + url2);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(`Error fetching data: ${response.status}`);
  }
}