export const BASE_URL = 'http://localhost:3000';

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const getAboutInfo = (token) => {
  return fetch(`${BASE_URL}/mvbabout`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const editAboutInfo = (token, title, about1, about2, image) => {
  return fetch(`${BASE_URL}/mvbabout`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      token,
      title,
      about1,
      about2,
      image,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const addArticle = async (token, name, title, subtitle, image, link) => {
  const res = await fetch(`${BASE_URL}/mvbarticles`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      title,
      subtitle,
      image,
      link,
    }),
  });
  const data = await res.json();
  return data;
};

export const getArticles = (token) => {
  return fetch(`${BASE_URL}/mvbarticles`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const editArticle = (articleId, name, title, subtitle, image, link) => {
  return fetch(`${BASE_URL}/mvbarticles`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      articleId,
      name,
      title,
      subtitle,
      image,
      link,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteArticles = (articleId) => {
  return fetch(`${BASE_URL}/mvbarticles/${articleId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const getMaquette = () => {
  return fetch(`${BASE_URL}/mvbmaquette`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteMaquette = (maquetteId) => {
  return fetch(`${BASE_URL}/mvbmaquette/${maquetteId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const addMaquette = async (name, image) => {
  const res = await fetch(`${BASE_URL}/mvbmaquette`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      image,
    }),
  });
  const data = await res.json();
  return data;
};
