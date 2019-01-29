export const fetchData = async (url) => {
  const apiKeySuffix = `?api_key=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url + apiKeySuffix);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(`Error fetching data: ${response.status}`);
  }
}