const queryString = document.location.search;
const paramater = new URLSearchParams(queryString);

const name = paramater.get("name");

const url = "https://www.breakingbadapi.com/api/characters?name=" + name;

const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;
console.log(corsEnabledUrl);

async function getCharacterByName() {
    const tittle = document.querySelector("h2");
    const container = document.querySelector(".container_detail");

    try {
        const response = await fetch(corsEnabledUrl);
        const res = await response.json();
        tittle.innerHTML = res[0].name
        console.log(res);
        html = `<div class="card_detail">
                <div class="details-image">
                <img class="image" src="${res[0].img}"alt="${res[0].img}"/>
                </div>
                <div class="detail-details">
                    <div><p>Birthday:</p></div> <div class="value"><h3>${res[0].birthday}</h3></div>
                    <div><p>Status:</p></div> <div><h3>${res[0].status}</h3></div>
                    <div><p>Occupation:</p></div> <div><h3>${res[0].occupation}</h3></div>
                </div>
            </div>`;
        container.innerHTML = html;
    } catch (error) {
        tittle.innerHTML = "There is an error";
        console.log(error);
    } finally {
        const load = document.querySelector(".loading");
        load.style.display = "none";
        console.log("evrything is done!");
    }
}

getCharacterByName()