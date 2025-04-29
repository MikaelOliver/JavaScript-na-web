
const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")
const filterInput = document.getElementById("filterInput")

addBtn.addEventListener("click", ()=>{

    const taskText = taskInput.value
    if(taskText === "") return
    
    const li = document.createElement("li")
    li.innerText = taskText

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.style.marginLeft = "10px"
    removeBtn.addEventListener("click", ()=>{
        taskList.removeChild(li)
    })

    taskList.appendChild(li)
    li.appendChild(removeBtn)
    taskInput.value = ""

})


filterInput.addEventListener("input", ()=> {
    const filterText = filterInput.value.toLowerCase()

    const tasks = taskList.querySelectorAll("li")

    tasks.forEach((task) => {
        const taskName = task.firstChild.textContent.toLowerCase()
        if (taskName.includes(filterText)) {
            task.classList.remove("hidden")
        }else {
            task.classList.add("hidden")
        }
    })


} )