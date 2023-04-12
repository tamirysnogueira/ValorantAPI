import {allAgents, allMaps} from './contextAPI.js'
import {initAgents} from './contextAgents.js'
import { initAllInfoAgent } from './contextInfoAgents.js'

document.addEventListener('DOMContentLoaded', async () => {
    initAgents(await allAgents())

    const infoAgents = document.querySelectorAll('.openInfoAgent')

    for(let infoAgent of infoAgents){
        infoAgent.addEventListener('click', async (event) => {
            initAllInfoAgent(await allAgents(), event.target)
        })
    }

    
})






