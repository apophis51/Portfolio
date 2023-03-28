function million() {
    console.log("million");
}
console.log("test")
console.log("cleartext", jsoninput)
console.log("test2")

let cool = "yes"

let scrapedData = JSON.parse(jsoninput)
console.log(scrapedData)
console.log("test3")
let attach = document.querySelector(".results")
let currentComments = document.createElement("p")
currentComments.innerHTML = '<p>' + 'Total Traffic:' + '<span>' + cool + '</span>' + '</p/>'

for (let x in scrapedData) {
}

let text = "<table border='1'>"
  for (let x in scrapedData) {
    text += 
    "<tr><td>" +'<p>'+  x +'</p>' +
    '<p>'+ 'Name:'+ scrapedData[x].name+'</p>' +
    '<p>'+ 'Company:'+ scrapedData[x].company+'</p>' +
    '<p>'+ 'Conference:'+ scrapedData[x].conference+'</p>' +
    '<p>'+ 'Email:'+ scrapedData[x].email+'</p>' +
    '<p>'+ 'Linkedin'+ scrapedData[x].linkedin+'</p>' +
    '<p>'+ 'Phone:'+ scrapedData[x].phone+'</p>' +
    '<p>'+ 'Title:'+ scrapedData[x].title+'</p>' +
    '<p>'+ 'Type:'+ scrapedData[x].type+'</p>' +
    '<p>'+ 'Website:'+ scrapedData[x].website+'</p>' +
 "</td></tr>";
  }
  text += "</table>"    
attach.innerHTML = text







// attach.append( currentComments)
// attach.append( currentComments)

// attach.append("*************")
// attach.append("\n ##########")


document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        million();
    }
});