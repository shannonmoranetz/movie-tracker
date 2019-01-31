export const fetchData = async (url) => {
  const response = await fetch(url);
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