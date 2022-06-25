async function fetchPosts(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=")
    if (!response.ok){
        throw new Error(`failed to fetch posts`)
    }
    return response.json();
}   