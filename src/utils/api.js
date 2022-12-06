const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  // eslint-disable-next-line no-underscore-dangle
  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { token } } = responseJson;

    return token;
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;

    return user;
  }

  async function seeAllUser() {
    const response = await _fetchWithAuth(`${BASE_URL}/users`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { users } } = responseJson;
    return users;
  }

  async function seeOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { user } } = responseJson;
    return user;
  }

  async function getOwnthread() {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function createThread({ title, body, category }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { thread } } = responseJson;

    return thread;
  }

  async function seeAllThread() {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { threads } } = responseJson;

    return threads;
  }

  async function seeDetailThread(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { detailThread } } = responseJson;

    return detailThread;
  }

  async function createComment({ id, content }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    const responseJson = await response.json();
    console.log(responseJson);

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { comment } } = responseJson;

    return comment;
  }

  async function seeLeaderBoards() {
    const response = await _fetchWithAuth(`${BASE_URL}/leaderboards`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { leaderboards } } = responseJson;

    return leaderboards;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    seeAllUser,
    seeOwnProfile,
    getOwnthread,
    createThread,
    seeAllThread,
    seeDetailThread,
    createComment,
    seeLeaderBoards,
  };
})();

export default api;
