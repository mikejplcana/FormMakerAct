const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button': appendButton(label,placeholder)
                    break

    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement('div')
    el.setAttribute('class', 'form-group my-2')

    let input = document.createElement('input')
    input.setAttribute('class', 'form-control mt-2')
    input.setAttribute('placeholder', placeholder)
    input.setAttribute('title', placeholder)

    let labelEl = document.createElement('label')
    labelEl.textContent = label
    labelEl.setAttribute('class', ' form-label mt-2')

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.setAttribute('class', 'form-control btn btn-danger btn-sm mt-2')
    deleteBtn.addEventListener('click', function() {
        el.remove()
    })

    el.append(labelEl)
    el.append(input)
    el.append(deleteBtn)

    document.querySelector("#elements").append(el) 
}


const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("div")
     el.setAttribute("class", "my-2")
    let input = document.createElement("input")
    input.setAttribute("class", "mt-2")
    input.setAttribute("placeholder", placeholder)
    input.setAttribute("type", "radio")
  
    let labelEl = document.createElement("label")
    labelEl.textContent = label;
  
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('class', 'btn btn-danger btn-sm m-4')
    deleteButton.addEventListener("click", () => {
      el.remove();
    });
  
    el.appendChild(input)
    el.appendChild(labelEl)
    el.appendChild(deleteButton)
  
    document.querySelector("#elements").appendChild(el);
  };
  
  const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("div")
    el.setAttribute("class", "my-2");
    let input = document.createElement("input")
    input.setAttribute("class", "mt-2")
    input.setAttribute("placeholder", placeholder)
    input.setAttribute("type", "button")
    input.setAttribute("value", label)
  
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('class', 'btn btn-danger  m-3')
    deleteButton.addEventListener("click", () => {
      el.remove();
    });
  
    el.appendChild(input);
    el.appendChild(deleteButton);
  
    document.querySelector("#elements").appendChild(el);
  };
  