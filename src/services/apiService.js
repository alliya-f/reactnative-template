import {BASE_URL} from '@env';

import AsyncStorage from '@react-native-async-storage/async-storage';

const simulateLogout = () => {
  AsyncStorage.removeItem('accessToken');
  AsyncStorage.removeItem('refreshToken');
  window.location.reload();
};

const accessRefreshCycle = async () => {
  const accessResponse = await apiPost('/auth/token/verify/', {
    token: AsyncStorage.getItem('accessToken'),
  });
  if (accessResponse.status !== 200) {
    const refreshResponse = await apiPost('/auth/token/refresh/', {
      refresh: AsyncStorage.getItem('refreshToken'),
    });
    if (refreshResponse.status === 200) {
      const responseJSON = await refreshResponse.json();
      AsyncStorage.setItem('accessToken', responseJSON.access);
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

export const apiGet = async url => {
  const response = await fetch(BASE_URL + url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });

  return await response;
};

export const apiPost = async (url, data) => {
  console.log(BASE_URL, '   ', url, '    ', data);
  const response = await fetch(BASE_URL + url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return response;
};

export const apiPostAuthenticated = async (url, data) => {
  if (!accessRefreshCycle()) {
    simulateLogout();
  }

  const response = await fetch(BASE_URL + url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${AsyncStorage.getItem('accessToken')}`,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return await response;
};

export const apiGetAuthenticated = async url => {
  const result = await accessRefreshCycle();
  if (result === false) {
    simulateLogout();
  }

  const response = await fetch(BASE_URL + url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${AsyncStorage.getItem('accessToken')}`,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return await response;
};

export const apiDeleteAuthenticated = async url => {
  const result = await accessRefreshCycle();
  if (result === false) {
    simulateLogout();
  }

  const response = await fetch(BASE_URL + url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${AsyncStorage.getItem('accessToken')}`,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return await response;
};

export const apiPatchAuthenticated = async (url, data) => {
  if (!accessRefreshCycle()) {
    simulateLogout();
  }

  const response = await fetch(BASE_URL + url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${AsyncStorage.getItem('accessToken')}`,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  return await response;
};

export const apiPatchFileAuthenticated = async (url, data) => {
  if (!accessRefreshCycle()) {
    simulateLogout();
  }

  const response = await fetch(BASE_URL + url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      Authorization: `JWT ${AsyncStorage.getItem('accessToken')}`,
    },
    body: data, // body data type must match "Content-Type" header
  });

  return await response;
};
