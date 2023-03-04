export default function Controls({
   buttonPlay,
   buttonPause,
   buttonSet,
   buttonStop,
   buttonSoungON,
   buttonSoungOFF,
   timer
}){
   
   function reset() {
      buttonPlay.classList.remove('hide')
      buttonPause.classList.add('hide')
      
      buttonStop.classList.add('hide')
      buttonSet.classList.remove('hide')
   }
   
   function play() {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
   
      buttonSet.classList.add('hide')
      buttonStop.classList.remove('hide')
   }
   
  function pause(){
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
   }
   
   function stop(){
      reset()
   }
   
   function getMinutes(){
      let newMinutes = prompt("Digite o tempo desejado")
      if (!newMinutes){
         return false
      }   

      return newMinutes
   }
   
   function soungON(){
      buttonSoungON.classList.add('hide')
      buttonSoungOFF.classList.remove('hide')
   }
   
  function soungOFF(){
      buttonSoungON.classList.remove('hide')
      buttonSoungOFF.classList.add('hide')
   }

   return {
      reset,
      play,
      pause,
      stop,
      getMinutes,
      soungON,
      soungOFF
   }
}