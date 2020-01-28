document.getElementById("button").addEventListener('click', function () {


    fetch('https://api.myjson.com/bins/1fw7wm')
        .then((response) => {
            return response.json();
        })
        .then((dogs) => {
            addToTable(dogs)
        })
        .catch((error) => {
            console.log(error);
        })

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    let addToTable = (parsed) => {
        for (let dog of parsed) {
            let row = document.createElement("tr");

            let nameTD = document.createElement("td");
            row.appendChild(nameTD);
            nameTD.innerText = dog.name;

            let breedTD = document.createElement("td");
            row.appendChild(breedTD);
            breedTD.innerText = dog.breed;

            let hairTD = document.createElement("td");
            row.appendChild(hairTD);
            hairTD.innerText = dog.hair;

            let sizeTD = document.createElement("td");
            row.appendChild(sizeTD);
            sizeTD.innerText = dog.size;

            let ageTD = document.createElement("td");
            row.appendChild(ageTD);
            ageTD.innerText = age(dog.age);

            let colorTD = document.createElement("td");
            row.appendChild(colorTD);
            colorTD.innerText = dog.color;

            tbody.appendChild(row);
        }
    }

    function age(dogAge) {
        if (dogAge === 1) {
            return 'puppy'
        }
        return dogAge;
    }
})
