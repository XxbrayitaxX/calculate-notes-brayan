// const btnGreat = document.querySelector('#btnGreat')

// btnGreat.addEventListener('click', great)

// function great () {
  //   alert(username.value)
  // }
  
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const btnPredecir = document.getElementById('btn-Predecir')
  const response = document.getElementById('resultado')
  
  btnCalculate.addEventListener('click', calculateNote )

  function calculateNote(event) {

    event.preventDefault()

    let note1 = Number(data1.value)        
    let note2 = Number(data2.value)        
    let note3 = Number(data3.value)
    
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)
    // template string o template literal

    if (result<3.5) {
      response.style.color='black'
      response.style.fontWeight=800
      response.textContent = `perdio la materia`  
    }

    if (result>=3.5 && result<=4.5) {
      response.style.color='orange'
      response.textContent = `gano la materia`  
    }

    if (result>4.5) {
      response.style.color='green'
      response.textContent = `su nota es sobresaliente`  
    }

  }

  btnPredecir.addEventListener('click',missing)

  function missing(){

    let note1 = Number(data1.value)        
    let note2 = Number(data2.value)  

    let result2 = (note1 * 0.3) + (note2 * 0.3)

  
  }


  




