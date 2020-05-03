const urlBreakingBad = "https://www.breakingbadapi.com/api/characters";

async function getBreakingBad() {
    try {
        const response = await fetch(urlBreakingBad);
        const jsonResult = await response.json();
        displayCharacters(jsonResult);
    } catch (error) {
        console.log(error + "Something is wrong");
    } finally {
        const load = document.querySelector(".loading");
        load.style.display = "none";
        console.log("evrything is done!");
    }
}

getBreakingBad();

function displayCharacters(names) {
    const container = document.querySelector(".container");
    let html = "";
    for (let i = 0; i < names.length; i++) {
        console.log("html", html);
        if (i === 12) {
            break;
        }
        html += `<div class="card">
                        <img class="image" src="${names[i].img}" alt="${names[i].name}"/>
                        <div class="details">
                            <h2 class="name">${names[i].name}</h2>
                            <p>Nickname:<b class="nickname"> ${names[i].nickname}</b></p>
                            <p>Portrayed:<b> ${names[i].portrayed}</b></p>
                            <a class="btn btn-primary" href="details.html?name=${names[i].name}">Details</a>
                        </div>
                    </div>`;
    }

    container.innerHTML = html;
}