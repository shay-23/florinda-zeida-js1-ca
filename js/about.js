function changeWord() {
    let change = document.getElementById("changeThe").innerHTML;
    let response = change.replace(/ the /g, " banana ".toLocaleUpperCase()).replace(/The /g, " Banana ".toLocaleUpperCase());
    document.getElementById("changeThe").innerHTML = response;
}

setTimeout(changeWord, 3000);