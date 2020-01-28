$(document).ready(function () {
    document.getElementById("callBtn").addEventListener("click", function () {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g1/Class04 - AJAX/students.json",
            success: function (response) {
                console.log("Request successful!");
                let responseObject = JSON.parse(response);
                console.log(responseObject);


                let headerOne = document.querySelector("h1");
                headerOne.innerHTML = "";
                headerOne.innerHTML = responseObject.academy;

                let ul = document.querySelector("ul");
                ul.innerHTML = "";
                for (const student of responseObject.students) {
                    let li = createElement("li");
                    li.innerText = student;
                    ul.appendChild(li);
                    
                }
            },

            error: function (response) {
                console.log("The request has failed: " + response.status);
                console.log(response.responseText);
            }
        })
    })
});
