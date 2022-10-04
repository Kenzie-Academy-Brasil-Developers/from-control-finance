    /* Desenvolva sua lógica aqui */
    let createRegister = (insertedValues) => {

      const {  value} = insertedValues

        let divSectionRegister = document.createElement('div')
        let p = document.createElement('p')
        let div = document.createElement('div')
        let button = document.createElement('button')
        let buttonTrash = document.createElement('button')
        let img = document.createElement('img')

        divSectionRegister.classList.add('div-section-register')
        section.classList.add('section-register')
        p.innerText = `R$ ${value}`
        div.classList.add('div-register')
        button.innerText = valuesCategory[0]
        button.classList.add('button-secao')
        buttonTrash.classList.add('button-trash')
        
      

        img.src = './assets/trash.svg'

        buttonTrash.append(img)
        div.append(button, buttonTrash) 
        divSectionRegister.append(p, div)

        return divSectionRegister      

    }

    let section = document.getElementById('section-register')

    let renderRegister = (register) => {
      
      

      register.forEach((element) => {
        let render = createRegister(element)
        section.append(render)
        
      });
    }

    renderRegister(insertedValues)

