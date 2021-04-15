export function PostData(userData) {
    let baseUrl = 'http://localhost:8000/posts';
    return new Promise((resolve, reject) => {
        fetch(baseUrl, {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch((error) => {
                reject(error);
            });
    })
}