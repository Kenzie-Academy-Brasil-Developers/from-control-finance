function clickButton  () {
  
    var btns = document.querySelectorAll(".div-button .buttons-div ");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
    
        
        var current = document.getElementsByClassName("ativo")[0];
        this.classList.add("ativo");
        current.classList.remove("ativo");
      ;
      });
    }
  }
  clickButton()






  function closeRegister () {
   
    const buttonDelete = document.querySelectorAll('.button-trash')
    const divRegister = document.querySelector('.div-section-register')
    

   buttonDelete.forEach((button) => {
    button.addEventListener('click', () => {
      
        
      divRegister.remove()
  })
   })
 }
 closeRegister () 

 