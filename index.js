let ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const saveButton = document.getElementById("save-btn")
const deleteButton = document.getElementById("delete-btn")
let links = []
const savedLinks = JSON.parse(localStorage.getItem("links"))

if (savedLinks) {
    links = savedLinks
    render(links)
}

function render(aList) {
    let linksList = ""
    for (i in aList) {
        linksList += `
        <li>
            <a target='_blank' href='https://${aList[i]}'>
                ${aList[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = linksList
}

saveButton.addEventListener("click", () => {
    let value = inputEl.value
    if (value != "") {
        links.push(value)
        localStorage.setItem('links', JSON.stringify(links))
        inputEl.value = ""
        render(links)
    }
})

deleteButton.addEventListener("dblclick", () => {
    localStorage.clear()
    links = []
    render(links)
})
