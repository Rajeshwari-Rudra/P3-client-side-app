console.log('INFO: Reading values in function');

        
            function euroConverter(){
            document.converter.dollar.value = document.converter.euro.value * 1.470
            document.converter.pound.value = document.converter.euro.value * 0.717
            document.converter.yen.value = document.converter.euro.value * 165.192
            }
            function dollarConverter(){
            document.converter.euro.value = document.converter.dollar.value * 0.680
            document.converter.pound.value = document.converter.dollar.value * 0.488
            document.converter.yen.value = document.converter.dollar.value * 112.36
            }
            function poundConverter(){
            document.converter.dollar.value = document.converter.pound.value * 2.049
            document.converter.euro.value = document.converter.pound.value * 1.394
            document.converter.yen.value = document.converter.pound.value * 230.27
            }
            function yenConverter(){
            document.converter.dollar.value = document.converter.yen.value * 0.0089
            document.converter.pound.value = document.converter.yen.value * 0.00434
            document.converter.euro.value = document.converter.yen.value * 0.00605
            }
            

console.log('INFO: Configuring event handlers');

window.addEventListener('load', (event) => {
  console.log('  Starting initialization ')
  if (localStorage.getItem('lastRad'))
  {
    inputElementRadius.value = localStorage.getItem('lastRad')
    console.log(`Stored radius = ${localStorage.lastRad}`)
  }
  console.log('Finished initialization')
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'calc')
  {
    const areaRad = calcAreaTest()
    localStorage.setItem('lastRad', areaRad)
  }
})

console.log('INFO: Done loading, waiting for an event'); 