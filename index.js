function beInvisible(elementId) {
    const elementDoc = document.getElementById(elementId)
    elementDoc.style.visibility = "hidden"
    createVisibleButton(elementDoc)
}

function createVisibleButton(elementDoc) {
    const btn = document.createElement("button")
    btn.innerText = "Сделать текст видимым"
    btn.classList.add("button")
    document.body.appendChild(btn)
    btn.addEventListener("click", function () {
        if (elementDoc.parentElement) {
            elementDoc.style.visibility = "visible"
            btn.remove()
        }
        else
            btn.remove()
            alert("Текст уже удалён со страницы.")
    })
}
ё
const wrapper = document.getElementById("wrapper-text")

document.addEventListener("keydown", (function (key) {
    console.log(key.code)
    if (key.code == "Space")
        wrapper.remove()
        
}))