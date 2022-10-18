import './app.css'
// import App from './App.svelte'
import FancyLabel from './lib/FancyLabel.svelte'

const app = new FancyLabel({
  target: document.getElementById('app'),
  props: {
    name: "Saju",
    gender: "male"
  }
})

export default app
