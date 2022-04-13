function addOutput(num){
  const display = document.getElementById("display")
  display.value=display.value+num
}

function calculate(){
  const display = document.getElementById("display")
  const result=eval(display.value)
  const displayResult = document.getElementById("result")
  displayResult.value=result
}

function reset(){
  const display=document.getElementById("display")
  display.value=""
  const displayResult=document.getElementById("result")
  displayResult.value=""
}

function del(){
  const display=document.getElementById("display")
  display.value=display.value.substring(0,display.value.length -1)
}
