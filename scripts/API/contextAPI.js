const baseURL = "https://valorant-api.com/v1";

async function getAPI(type){
    try {
        const response = await fetch(`${baseURL}/${type}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }

}

const allAgents = async () => {
    return await getAPI('agents')
}

const allMaps = async () => {
    return await getAPI('maps')
}

export {allAgents, allMaps}

