const cardName = document.getElementById("nameInput")
const cardEmail = document.getElementById("emailInput")
const cardProf = document.getElementById("profInput")
const cardAdd = document.getElementById("addBtn")
const cardList = document.getElementById("cardList")


cardAdd.addEventListener("click", ()=>{
    const nameText = cardName.value
    const emailText = cardEmail.value
    const profText = cardProf.value

    if(nameText === "" || emailText === "" || profText === "") return

    const li = document.createElement("li")
    li.innerText = `${nameText} - ${emailText} - ${profText}`

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.addEventListener("click", ()=>{
        cardList.removeChild(li)
    })

    cardList.appendChild(li)
    li.appendChild(removeBtn)
    cardName.value = ""
    cardEmail.value = ""
    cardProf.value = ""  
    li.style.border = "1px solid #ccc"
    li.style.borderRadius = "8px"
    li.style.padding = "10px"
    li.style.margin = "10px"
    li.style.backgroundColor = "#f9f9f9"
    li.style.display = "inline-block"
    li.innerHTML = `
        <div style="display: flex; flex-direction: column; ;">
            <p style="font-weight: bold; font-size: 1.2em; align-items:; justify-content: center; text-align: center">${nameText}</p>
            <hr style="width: 80%; border: 0; border-top: 1px solid #ccc; margin: 5px 0;">
            <p style="color: gray;">${emailText}</p>
            <p style="color: gray;">${profText}</p>
        </div>

        <button style="background-color: red; color: white; border: none; border-radius: 5px; padding: 5px 10px;">Remover</button>`
    const removeButton = li.querySelector("button")
    removeButton.addEventListener("click", () => {
        cardList.removeChild(li)
    })
})






