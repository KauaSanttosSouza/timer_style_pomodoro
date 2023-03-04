export default function Sounds() {
   const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
   const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
   const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

   function buttonPress() {
      buttonPressAudio.play()
   }

   function kitchen() {
      kitchenTimer.play()
   }

   bgAudio.loop = true;

   return {
      buttonPress,
      kitchen,
      bgAudio
   }
}