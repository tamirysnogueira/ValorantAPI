const baseURL = "https://valorant-api.com/v1";
const allThingsOfAPI = []

async function getAPI(type){
    try {
        const response = await fetch(`${baseURL}/${type}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }

}

document.addEventListener('DOMContentLoaded', async ()=> {
    const agents = await getAPI('agents')
    const maps = await getAPI('maps')
    
    allThingsOfAPI.push(agents, maps)

})

export default allThingsOfAPI

