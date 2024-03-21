let ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const saveButton = document.getElementById("save-btn")
const deleteButton = document.getElementById("delete-btn")
const addTabButton = document.getElementById("tab-btn")
let links = []
const savedLinks = JSON.parse(localStorage.getItem("links"))
saveButton.disaled = true
if (savedLinks) {
    links = savedLinks
    render(links)
}

function addToList(link) {
    links.push(link)
    localStorage.setItem('links', JSON.stringify(links))
    render(links)
}

function render(aList) {
    let linksList = ""
    for (i in aList) {
        linksList += `
        <li>
            <a target='_blank' href='${aList[i]}'>
                ${aList[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = linksList
}

saveButton.addEventListener("click", () => {
    let value = inputEl.value
    if (value != "") {
        addToList(value)
        inputEl.value = ""
    }
})

deleteButton.addEventListener("dblclick", () => {
    localStorage.clear()
    links = []
    render(links)
})

addTabButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        addToList(tabs[0].url)
    })
})