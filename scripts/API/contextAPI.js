
let maps = []

const baseURL = "https://valorant-api.com/v1";

async function context(){
    try {
            fetch(`${baseURL}/agents`)
                .then ((res) => {
                    return res.json()
                })

                .then ((data) => {
                    console.log(data)
                })

        
        
    } catch (error) {
        console.log(error)
    }

}

document.addEventListener('DOMContentLoaded', ()=> {
    context()
})

