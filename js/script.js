// fetch data from api
if (localStorage.getItem("data")) {
    data = localStorage.getItem("data");
    data = JSON.parse(data);
    data.forEach(element => {
        // debugger;
        if (element.id <= 9) {
            let parent = document.createElement('div')
            let title = document.createElement('div')
            let body = document.createElement('div');
            let summary = document.createElement('p')
            let image = document.createElement('img');
            let status = document.createElement('p');

            title.innerHTML = element.name;
            image.src = element.image.medium;
            summary.innerHTML = element.summary;
            status.innerHTML = element.status;

            parent.appendChild(title);
            parent.appendChild(body);
            body.appendChild(image);
            body.appendChild(summary);
            body.appendChild(status);

            parent.classList.add("card", "border-success", "mb-3");
            body.classList.add("card-body");
            title.classList.add("card-header");
            summary.classList.add("card-text");
            status.classList.add("card-status");

            document.querySelector('#cardContainer').appendChild(parent);
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
            let parent = document.createElement('div')
            let title = document.createElement('div')
            let body = document.createElement('div');
            let summary = document.createElement('p')
            let image = document.createElement('img');
            let status = document.createElement('p');

            title.innerHTML = element.name;
            image.src = element.image.medium;
            summary.innerHTML = element.summary;
            status.innerHTML = element.status;

            parent.appendChild(title);
            parent.appendChild(body);
            body.appendChild(image);
            body.appendChild(summary);
            body.appendChild(status);

            parent.classList.add("card", "border-success", "mb-3");
            body.classList.add("card-body");
            title.classList.add("card-header");
            summary.classList.add("card-text");
            status.classList.add("card-status");

            document.querySelector('#cardContainer').appendChild(parent);
        });
    }
    requestAwait();
}

// slide
fetch(' http://api.tvmaze.com/shows').then((response) => {
    response.json().then((data) => {
        data.forEach(element => {
            let rating = element.rating.average;
            // debugger;
            if (rating >= 9) {
                let slide = document.createElement('div')
                let image = document.createElement('img');

                image.src = element.image.medium;

                slide.appendChild(image);

                // slide.classList.add("swiper-slide");
                // if (element.id == 1) {
                //     slide.classList.add("swiper-slide-active");
                // } else {
                //     slide.classList.add("swiper-slide-next");
                // }

                document.querySelector(".swiper-wrapper").appendChild(slide);
            }
        })
    })
})

// search
document.querySelector('#submitSearch').addEventListener("click", () => {
    document.querySelector(".modal-body").innerHTML = "";
    let search = document.querySelector('#search').value;
    fetch(`http://api.tvmaze.com/search/shows?q=${search}`).then((response) => {
        response.json().then((data) => {
            data.forEach(element => {
                let image = document.createElement('img');
                if (element.show.image !== null) {
                    image.src = element.show.image.medium;
                } else {
                    image.src = "https://via.placeholder.com/210x295"
                }
                document.querySelector(".modal-body").appendChild(image);
            })
        })
    })
});

// focus search modal
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
// })