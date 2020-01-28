let friendData = []
readJSON()
loadTable()
console.log("load script")

function loadTable() {
    console.log("Loading table")
    let friendTable = document.getElementById("friendTable")
    while(friendTable.children.length > 1) {
        friendTable.removeChild(friendTable.lastChild)
    }
    for (let i = 0; i < Object.values(friendData).length; i++) {

        console.log(i)
        let currentFriend = Object.values(friendData)[i]
        let newRow = document.createElement("tr")
        for (j = 0; j < Object.values(currentFriend).length; j++) {
            let newData = document.createElement("td")
            newData.innerHTML = Object.values(currentFriend)[j]
            newRow.appendChild(newData)
        }
        friendTable.appendChild(newRow)
    }
    console.log("finished loading table")
}

function addEntry() {
    let newForm = document.getElementById("formID").elements
    let newFriend = {name: newForm[0].value, steamName:newForm[1].value, switchCode:newForm[2].value, PSNName: newForm[3].value}
    newFriend.clearData
    friendData.push(newFriend)
    console.log(friendData)
    writeJSON()
    loadTable()
}

function writeJSON() {
    console.log("writing data")
    let friendJSON = JSON.stringify(friendData)
    localStorage.setItem("friendJSON", friendJSON)
    console.log("finished writing")
}

function readJSON() {
    console.log("reading data")
    let friendJSON = localStorage.getItem("friendJSON")
    friendData = JSON.parse(friendJSON)
    console.log("done reading")
}

function clearData() {
    friendData = [];
    writeJSON()
    loadTable()
    console.log("Data clear" + friendData)
}