function makeTheAgentsDiv(agents) {
    const containerAgents = document.getElementById('containerAgents')
    
    for (const agent of agents) {
        containerAgents.innerHTML += `
            <div id="${agent.displayName}">
                <img src="${agent.fullPortrait}" alt="Image of ${agent.displayName}">
                <p>${agent.displayName}</p>

            </div>
        
        `

        const containerAgent = document.getElementById(`${agent.displayName}`)
        containerAgent.style.backgroundColor = `#${agent.backgroundGradientColors[0]}`
        
    }

}

function searchTheAgents(agents){
    const nameOfAgents = ['Gekko']

    const arrayOfAgents = agents.filter( agent => {
        for (const nameAgent of nameOfAgents) {
            if(nameAgent === agent.displayName) {
                return agent
            }
        }
    })

    makeTheAgentsDiv(arrayOfAgents)

}

function initAgents(allAgents) {
    const allDataAgents = allAgents.data

    searchTheAgents(allDataAgents)
}

export {initAgents}