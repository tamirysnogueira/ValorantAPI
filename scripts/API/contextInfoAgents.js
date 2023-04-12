function makeInfosOfAgent(agent){
    const allInfoAgents = document.getElementById('allInfoAgents')

    
}


function searchTheAgent(dataAgents, nameOfAgent){

    const agent = dataAgents.filter( agent => {
        if(nameOfAgent === agent.displayName) {
            return agent
        }
    })

    makeInfosOfAgent(agent)

}

function initAllInfoAgent(dataAgents, event){
    const divParent = event.parentNode
    const nameOfAgent = divParent.children[0].textContent

    searchTheAgent(dataAgents.data, nameOfAgent)

}

export {initAllInfoAgent}