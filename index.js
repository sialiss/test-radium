function changeOpacity(elemId) {
    const elemDoc = document.getElementById(elemId)
    elemDoc.classList.toggle("invisible")
}

const wrapper = document.getElementById("wrapper-text")

document.addEventListener("keydown", (function (key) {
    console.log(key.code)
    if (key.code == "Space")
        wrapper.remove()
        
}))