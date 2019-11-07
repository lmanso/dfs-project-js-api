if (localStorage.getItem("data")) {
    data = localStorage.getItem("data");
    data = JSON.parse(data);
    // debugger;
    data.forEach(element => {
        // console.log(element.network.name)
        if(element.network !== null){
            let network = element.network.name;

            console.log(network);
            let slide = document.createElement('div')
            let image = document.createElement('img');
    
            if(network == "HBO" && element.image !== null) {
                image.src = element.image.medium;
            } else {
                image.src = "https://via.placeholder.com/210x295"
            }
            slide.appendChild(image);
    
            document.querySelector(".hbo").appendChild(slide);
        } else {

        }
      
    });
} else {
    const requestAwait = async () => {
        const response = await fetch(`http://api.tvmaze.com/shows`)
        const json = await response.json();
        data = JSON.stringify(json);
        localStorage.setItem("data", data);
        data = localStorage.getItem("data");
        data = JSON.parse(data);

        data.forEach(element => {
            if(element.network.name !== null){
                let network = element.network.name;
    
                console.log(network);
                let slide = document.createElement('div')
                let image = document.createElement('img');
        
                if (network !== null && network == "HBO") {
                    image.src = element.image.medium;
                } else {
                    image.src = "https://via.placeholder.com/210x295"
                }
                slide.appendChild(image);
        
                document.querySelector(".hbo").appendChild(slide);
            } else {
    
            }
        });
    }
    requestAwait();
}