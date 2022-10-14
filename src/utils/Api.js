class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  getUserData() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers
      })
        .then(res => this._check(res))
  }

  getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'GET',
        headers: this._headers
      })
        .then(res => this._check(res))
  }


  patchUserData(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      })
        .then(res => this._check(res))
        
  }

  patchAvatar(link) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: link
        })
      })
        .then(res => this._check(res))
  }


  addNewCard(data) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
        .then(res => this._check(res))
  }

  removeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._check(res))
  }
  

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => this._check(res))
  }

  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._check(res))
  }

    

  _check(res) {
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(res);
  }
  
}  


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
      authorization: 'ccf50a2a-0bfe-45bb-ba00-99b5825eb2e5',
      'Content-Type': 'application/json'
  }
});

export default api;

