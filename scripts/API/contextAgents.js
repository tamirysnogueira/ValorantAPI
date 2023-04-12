//construir a div dos agentes

function makeTheAgentsDiv(agents) {
    const containerAgents = document.getElementById('containerAgents')
    
    for (const agent of agents) {
        containerAgents.innerHTML += `
            <div id="${agent.displayName}">
                <img src="${agent.fullPortrait}" alt="Image of ${agent.displayName}">
                
                <div class='infoAgents'>
                    <span>${agent.displayName}</span>
                    <p>${agent.description}</p>

                    <button class='openInfoAgent'>See More</button>
                </div>
            </div>
        
        `
        
    }

    styleDivAgent(agents, containerAgents)

}

//estilizar a div dos agentes e fazer as animações nas imagens

function styleDivAgent(agents, containerAgents) {

    function effect(opacity, height, background, child) {
        for (const agent of agents) {
            if(agent.displayName === child.id){
                const infoAgents = child.querySelector('.infoAgents')
                const imgOfAgent = child.children[0]
                
                infoAgents.style.opacity = `${opacity}`
                infoAgents.style.height = `${height}`

                if(background === 'none'){
                    infoAgents.style.backgroundColor = 'none'
                    imgOfAgent.style.animation = 'out 0.5s forwards'

                } else {
                    infoAgents.style.backgroundColor = `#${agent.backgroundGradientColors[0]}`
                    imgOfAgent.style.animation = 'move 0.5s forwards'

                }

            }
            
        }

    }
    
    for (const child of containerAgents.children) {
        child.addEventListener('mouseover', () => {
            effect('1', '100%', 'background', child)
        })

        child.addEventListener('mouseout', () => {
            effect('0', '0', 'none', child)
        })
    }

}

//procurar na API os seguintes agentes do array e depois criar suas divs

function searchTheAgents(agents){
    const nameOfAgents = ['Gekko', 'Viper']

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