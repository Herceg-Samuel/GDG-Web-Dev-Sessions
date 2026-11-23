// SELECTING ELEMENTS
const demoParagraph = document.getElementById("demo")
console.log(demoParagraph)
const heading = document.querySelector("#main-heading")
console.log(heading)
const allItems = document.querySelectorAll("#dynamic-list .item")
console.log(allItems)
const itemsByClass = document.getElementsByClassName("item")
console.log(itemsByClass)
const allParagraphs = document.getElementsByTagName("p")
console.log(allParagraphs)

const btn_text = document.getElementById('btn-text')
btn_text.addEventListener("click", function() {
    demoParagraph.innerHTML = "<strong> Strong </strong>"
    console.log(demoParagraph)
    demoParagraph.setAttribute("data-status", "update_value")
    console.log(demoParagraph)
})

// Styles
const btn_style = document.getElementById("btn-style")
btn_style.addEventListener("click", function() {
    const main_heading = document.getElementById("main-heading")
    // main_heading.style.color = 'red'
    main_heading.classList.toggle("highlight")
    main_heading.style.color = heading.style.color === "teal" ? "" : "teal";
})

// Adding children
let counter = allItems.length
const dynamic_list = document.querySelector("#dynamic-list")
const btn_add = document.getElementById("btn-add")
btn_add.addEventListener("click", function() {
    const new_item = document.createElement("li")
    new_item.className = "item"
    new_item.textContent = "item " + counter++
    dynamic_list.appendChild(new_item)
})

const btn_remove = document.getElementById("btn-remove")
btn_remove.addEventListener("click", function () {
    const last_element = dynamic_list.lastElementChild
    if(last_element) {
        dynamic_list.removeChild(last_element)
    }
})