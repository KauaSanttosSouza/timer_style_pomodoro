export default function Timer({
   minutesDisplay,
   secondsDisplay,
   controls,
   sounds,
}) {
   let minutes = minutesDisplay.textContent
   let setTimerPause

   function updateDisplay(newMinutes, seconds) { 
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined ? 0 : seconds  
   
      minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
      secondsDisplay.textContent = String(seconds).padStart(2, '0')
      clearTimeout(setTimerPause)
   }
   
   function countDown() {
      setTimerPause = setTimeout(function(){
         let minutes = Number(minutesDisplay.textContent)
         let seconds = Number(secondsDisplay.textContent)
         const isFinished = minutes <= 0 && seconds <= 0
         updateDisplay(minutes, 0)
   
         if(isFinished) {
            sounds.kitchen() 
            updateDisplay()
            controls.reset()
            return
         }
   
         if(seconds <= 0){
            seconds = 60
            updateDisplay(--minutes, seconds)
         }
         
         updateDisplay(minutes, --seconds)

         countDown()
      }, 1000)
      
   }

   function hold() {
      clearTimeout(setTimerPause)
   }

   function reset() {
      updateDisplay(minutes, 0)
      clearTimeout(setTimerPause)
   }

   function updateMinutes(newMinutes) {
      minutes = newMinutes
   }
   return{
      updateDisplay, 
      countDown, 
      setTimeout,
      hold,
      updateMinutes,
      reset
   }
}


