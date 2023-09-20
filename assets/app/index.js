let formBirth = document.forms['birth']
let dayForm = formBirth.day
let monthForm = formBirth.month
let yearForm = formBirth.year






formBirth.addEventListener('submit', function(e){
  e.preventDefault();


    if(dayForm.value <= '0' && monthForm.value <= '0' && yearForm.value <= '0'){
      document.getElementById('req-1').style.display = 'block'
      dayForm.classList.add('errorInput')
      document.getElementById('lab-1').classList.add('errorLabel')

      document.getElementById('req-2').style.display = 'block'
      monthForm.classList.add('errorInput')
      document.getElementById('lab-2').classList.add('errorLabel')

      document.getElementById('req-3').style.display = 'block'
      yearForm.classList.add('errorInput')
      document.getElementById('lab-3').classList.add('errorLabel')
    }else{
      if (dayForm.value != '' && monthForm.value != '' && yearForm.value != ''){
        // boş değilse çalışır
        if (dayForm.value <= 31 && monthForm.value <= 12 && yearForm.value <=2023){
         
          //INNER HTML KISMI
          if(monthForm.value == 4|| monthForm.value == 6 || monthForm.value == 9 || monthForm.value == 11){
            if(dayForm.value >= 31){
              document.getElementById('val-1').style.display = 'block'
            }
          }else if(monthForm.value == 2) {
            if(dayForm.value > 29){
            document.getElementById('val-1').style.display = 'block'  
            }
          }

          yasHesaplama(dayForm.value, monthForm.value, yearForm.value)
        }else {
          
          // gün ay ve yıl yanlış girilirse
          document.getElementById('val-1').style.display = 'block'
          dayForm.classList.add('errorInput')
          document.getElementById('lab-1').classList.add('errorLabel')

          document.getElementById('val-2').style.display = 'block'
          monthForm.classList.add('errorInput')
          document.getElementById('lab-2').classList.add('errorLabel')

          document.getElementById('val-3').style.display = 'block'
          yearForm.classList.add('errorInput')
          document.getElementById('lab-3').classList.add('errorLabel')
        }
      }else {
      
      // gün ay yıl boşsa 
      document.getElementById('req-1').style.display = 'block'
      dayForm.classList.add('errorInput')
      document.getElementById('lab-1').classList.add('errorLabel')

      document.getElementById('req-2').style.display = 'block'
      monthForm.classList.add('errorInput')
      document.getElementById('lab-2').classList.add('errorLabel')

      document.getElementById('req-3').style.display = 'block'
      yearForm.classList.add('errorInput')
      document.getElementById('lab-3').classList.add('errorLabel')
    }
  }

  
  
  e.preventDefault();
})

function yasHesaplama(dayInput, monthInput, yearInput) {
  
  let newGun =  (dayInput)
  let newAy = (monthInput)
  let newYil = (yearInput)

  // const inputTarih = new Date(newYil, newAy - 1, newGun)
  
  var date = moment();

  const inputTarih = moment(`${newYil}-${newAy}-${newGun}`)

  var fark = moment.duration(date.diff(inputTarih));
  var yilFark = fark.years();
  var ayFark = fark.months();
  var gunFark = fark.days();

  const spanYilDiv = document.querySelector('.cizgi1')
  const spanAyDiv = document.querySelector('.cizgi2')
  const spanGunDiv = document.querySelector('.cizgi3')

  spanYilDiv.innerText = yilFark
  spanAyDiv.innerText = ayFark
  spanGunDiv.innerText = gunFark

  // const date = new Date(date.getFullYear(), date.getMonth())
  
  // var fark = Math.abs(date.getTime() - inputTarih.getTime());
  // var gunFark = Math.ceil(fark / (1000 * 3600 * 24));
  // var ayFark = Math.ceil(fark / (1000 * 3600 * 24 * 30));
  // var yilFark = Math.ceil(fark / (1000 * 3600* 24 * 365))
  // const spanYilDiv = document.querySelector('.cizgi1')
  // const spanAyDiv = document.querySelector('.cizgi2')
  // const spanGunDiv = document.querySelector('.cizgi3')

  // spanYilDiv.innerHTML = yilFark
  // spanAyDiv.innerHTML = ayFark
  // spanGunDiv.innerHTML = gunFark

  
}

