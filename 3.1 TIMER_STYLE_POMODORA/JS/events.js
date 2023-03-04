import {
   buttonPlay,
   buttonPause,
   buttonStop,
   buttonSet,
   buttonSoungON,
   buttonSoungOFF,
} from "./elements.js"

export default function Events({
   controls, 
   timer,
   sounds

}){
   buttonPlay.addEventListener('click', function(){
      sounds.buttonPress()
      controls.play()
      timer.countDown()
   })
   
   buttonPause.addEventListener('click', function(){
      sounds.buttonPress()
      controls.pause()
      timer.hold()
   })
   
   buttonStop.addEventListener('click', function(){
      sounds.buttonPress()
      controls.reset()
      timer.updateDisplay()
   })
   
   buttonSet.addEventListener('click', function(){
      sounds.buttonPress()
      let newMinutes = controls.getMinutes()
   
      if (!newMinutes) {
         timer.reset()
         return
      }
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
   
   })
   
   buttonSoungON.addEventListener('click', function(){
      sounds.buttonPress()
      sounds.bgAudio.pause()
      controls.soungON()
   })
   
   buttonSoungOFF.addEventListener('click', function(){
      sounds.buttonPress()
      sounds.bgAudio.play()
      controls.soungOFF()
   })

   return {
      buttonPlay,
      buttonPause,
      buttonStop,
      buttonSet,
      buttonSoungON,
      buttonSoungOFF
   }
}