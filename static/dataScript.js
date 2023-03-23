function million() {
    console.log("million");
}
scrapedData = JSON.parse(jsoninput)
console.log(scrapedData)


document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        million();
    }
});