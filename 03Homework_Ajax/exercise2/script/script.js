

$(document).ready(function () {
    document.getElementById("callBtn").addEventListener("click", function () {
        let tbody = document.getElementById("tbody");
        $.ajax({
            url:  "https://swapi.co/api/people/1",
            success: function (response) {
                console.log("Request successful!");
                let responseObject = JSON.parse(response);
                console.log(response);

                
                let headerOne = document.querySelector("h1");
                headerOne.innerHTML = "";
                headerOne.innerHTML = response.name;
                let tbody = document.getElementById("tbody")
                let tr = document.createElement("tr");
                let td_1 = document.createElement("td");
                let td_2 = document.createElement("td");
                let td_3 = document.createElement("td");
                let td_4 = document.createElement("td");
                
                
                td_1.innerText = response.height;
                td_2.innerText = response.mass;
                td_3.innerText = response.hair_color;
                td_4.innerText = response.eye_color;
               
        
                tr.appendChild(td_1);
                tr.appendChild(td_2);
                tr.appendChild(td_3);
                tr.appendChild(td_4);
        
                tbody.appendChild(tr);
                    
                
            },

            error: function (response) {
                console.log("The request has failed: " + response.status);
                console.log(response.responseText);
            }
        })
    })
});
