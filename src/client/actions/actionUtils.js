import fetch from "cross-fetch";

export function getData(url, authToken) {
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (authToken) {
        header.Authorization = `Bearer ${authToken}`;
    }

    return fetch(url, {headers: header})
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res
            } else {
                const error = new Error(res.statusText || res.status)
                error.response = res
                throw error;
            }
        }).then(response => response.json())
}

export function postData(url, data, authToken) {
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (authToken) {
        header.Authorization = `Bearer ${authToken}`;
    }

    return fetch(url, {
        method: "post",
        headers: header,
        //make sure to serialize your JSON body
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status >= 200 && res.status < 300) {
            return res
        } else {
            const error = new Error(res.statusText || res.status)
            error.response = res
            throw error;
        }
    }).then(response => response.json())
}