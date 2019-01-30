export const fetchData = async (url1, url2) => {
  const apiKey = `?api_key=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(url1 + apiKey + url2);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(`${response.statusText} - Status ${response.status}`);
  }
}

export const postData = async (urlSuffix, options) => {
  const url = 'http://localhost:3000/api/users' + urlSuffix;
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(`${response.statusText} - Status ${response.status}`);
  }
}