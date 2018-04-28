import React, { Component } from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import EventsList from "./pages/Events/list"
import mixpanel from "mixpanel-browser"

class App extends Component {
  componentDidMount() {
    mixpanel.init("8ff42263c2247bda2a4c3cb374675eca")
    mixpanel.track("app mounted")
  }
  render() {
    return (
      <div className="App pb5">
        <NavBar />
        <EventsList />
      </div>
    )
  }
}

export default App
