export async function GetData(userData) {
    const url = 'http://localhost:8000/posts';
    const response = await fetch(url);
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === userData.name) {
            console.log("Match")
            return data[i]
        }
    }
    return "false"
}