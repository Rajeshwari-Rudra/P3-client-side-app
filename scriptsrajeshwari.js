/*console.log('INFO: Reading interaction.js');

console.log('INFO: Getting access to elements');

const inputElementRadius = document.getElementById("radius")
const inputElementResult = document.getElementById("result")

const calcVolume = () => { 
  
  const textRad = inputElementRadius.value;
  const Radius = parseFloat(textRad);

  const Result = 2 * Math.PI * (Radius * Radius);
  inputElementResult.innerHTML = "Result: " + Result;
  return Radius;
}

const calcAreaTest = (radius) => {

  return 2 * Math.PI * (radius * radius);
}
*/

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