let ulEl = document.getElementById("ul-el")
let inputEl = document.getElementById("input-el")
let saveButton = document.getElementById("save-btn")
let links = []

saveButton.addEventListener("click", () => {
    let value = inputEl.value
    if (value != "") {
        links.push(value)
        inputEl.value = ""
        renderLinks()
    }
})

function renderLinks() {
    let linksList = ""
    for (i in links) {
        linksList += `
        <li>
            <a target='_blank' href='https://${links[i]}'>
                ${links[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = linksList
}