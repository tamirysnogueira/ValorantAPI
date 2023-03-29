import { allAgents } from "../API/contextAPI";

const containerAgentsChildren = document.getElementById('containerAgents').children

document.addEventListener('DOMContentLoaded', () => {
    const tl1 = new TimelineMax();
    tl1
        .fromTo(`#animation`, 1, {height: '100%', width: '100%'},{
            height: '400%', width: '200%',  delay: 3, ease: Expo.easeInOut
        })

        .fromTo(`#pageInitial`, 1, {display: 'flex'},{
            display: 'none',  delay: 0, ease: Expo.easeInOut
        })

        .fromTo('main', 1, 
        {opacity: '0'},
        {opacity: 1, ease: Power3.easeInOut
        }, '-=0.7')

        .fromTo('body', 1, 
        {overflowY: 'hidden'},
        {overflowY: 'auto', ease: Power3.easeInOut
        })

            .fromTo('#logoAndInfo', 0.7, 
                { y: 50, opacity: 0,},
                { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.3')
})


for (const children of containerAgentsChildren) {
    children.addEventListener('mouseover', ()=> {
        const infoAgents = children.children[1]

        const agents = allAgents().data

        for (const agent of agents) {
            if(agent.displayName === children.id){
                console.log('oi')
            }
        } 
    })
}



