/* eslint-disable camelcase */
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_BACKEND;

const axiosInstance = axios.create({
    baseURL: `${API_URL}/api/`,
    headers: {
        Accept: 'application/json',
    },
    withCredentials: true,
    timeout: 15000,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 426) {
                clearCache();
                window.location.reload(true);
            }
            /*             if (error.response.status === 401) {
                clearCache();
                window.location.reload(true);
            } */
        }
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('csrftoken');
        if (token)
            // eslint-disable-next-line no-param-reassign
            config.headers['X-CSRFToken'] = token;

        return config;
    },
    (error) => Promise.reject(error),
);

function clearCache() {
    localStorage.removeItem('csrftoken');
    if (caches) {
        caches.keys().then((names) => {
            names.map((m) => {
                caches.delete(m);
                return null;
            });
        });
    }
}

function getResOk(response) {
    if (
        response.statusText === 'OK' ||
        response.statusText === 'Created' ||
        response.status === 204
    ) {
        return {
            success: true,
            data: response.data,
        };
    }
    return {
        success: false,
        data: response.data,
    };
}

function getResError(error) {
    const errors = [];
    error.response.data.errors.map(e => {
        errors.push(e)
    })

    return {
        success: false,
        error: {errors},
    };
}

const login = async (email, password) => {
    let res;
    await axiosInstance
        .post('auth/session/login/', {
            email,
            password,
        })
        .then((response) => {
            res = getResOk(response);
            getCSRF();
        })
        .catch((error) => {
            const errorMsg = error?.response?.data?.errors;
            clearCache();
            res = getResError(errorMsg);
        });
    return res;
};

const getSession = async () => {
    let res;
    await axiosInstance
        .get('sessions/status/')
        .then((response) => {
            res = getResOk(response);
        })
        .catch((error) => {
            clearCache();
            res = getResError(error);
        });
    return res;
};

const getCSRF = async () => {
    let res;
    await axiosInstance
        .get('auth/session/get-csrf/')
        .then((response) => {
            localStorage.setItem('csrftoken', response.headers['x-csrftoken']);
            res = { success: true, data: response.headers['x-csrftoken'] };
        })
        .catch((error) => {
            clearCache();
            res = getResError(error);
        });
    return res;
};

const logout = async () => {
    let res;
    await axiosInstance
        .get('auth/session/logout/', {})
        .then((response) => {
            clearCache();
            res = getResOk(response);
        })
        .catch((error) => {
            res = getResError(error);
        });
    return res;
};

const getTasks = async () => {
    let res;
    await axiosInstance
        .get('budget/tasks/', {})
        .then((response) => {
            clearCache();
            res = getResOk(response);
        })
        .catch((error) => {
            res = getResError(error);
        });
    return res;
}

const createTask = async (identifier, name, price, description) => {
    let res;
    await axiosInstance
        .post('budget/tasks/', {identifier, name, price, description})
        .then((response) => {
            clearCache();
            res = getResOk(response);
        }).catch((error) => {
            res = getResError(error);
        });
    console.log(res);
    return res;
}

const deleteTask = async (id) => {
    let res;
    await axiosInstance
        .delete(`budget/tasks/${id}/`, {})
        .then((response) => {
            res = getResOk(response);
        })
        .catch((error) => {
            res = getResError(error);
        });
    return res;
}

export const frontendApiService = {
    login,
    getSession,
    getCSRF,
    logout,
    getTasks,
    createTask,
    deleteTask
};

