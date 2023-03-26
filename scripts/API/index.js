import {allAgents, allMaps} from './contextAPI.js'
import {initAgents} from './contextAgents.js'

document.addEventListener('DOMContentLoaded', async () => {
    initAgents(await allAgents())
})


