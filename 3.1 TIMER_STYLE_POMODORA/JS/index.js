import Timer from "./timer.js"
import Controls from "./Controls.js"
import Events from "./events.js"
import Sounds from "./sound.js"

import {
   buttonPlay,
   buttonPause,
   buttonStop,
   buttonSet,
   buttonSoungON,
   buttonSoungOFF,
   minutesDisplay,
   secondsDisplay,
} from "./elements.js"

const sounds = Sounds()
const controls = Controls({
   buttonPlay,
   buttonPause,
   buttonSet,
   buttonStop,
   buttonSoungON,
   buttonSoungOFF
})

const timer = Timer({
   minutesDisplay,
   secondsDisplay,
   controls,
   sounds
})


Events({
   controls,
   timer,
   sounds,
})





