class Api {
  constructor(baseUrl, userId) {
    this._baseUrl = baseUrl;
    this._id = userId;
  }

  _getResponseData(res) {
    this._res = res;

    if (!this._res.ok) {
      return Promise.reject(this._res);
    }

    return this._res.json();
  }

  async signInUser(userData) {
    const res = await fetch(`${this._baseUrl}/api-token-auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return this._getResponseData(res);
  }

  async checkAndGet(token) {
    const res = await fetch(`${this._baseUrl}/api/v1/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${token}`,
      },
    });

    return this._getResponseData(res);
  }
}

const api = new Api('https://emphasoft-test-assignment.herokuapp.com');

export default api;
