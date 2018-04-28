import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import { Provider } from "react-redux"
import store from "./store"
// import createPalette from "material-ui/styles/palette"
// import { blueGrey, red } from "material-ui/colors"
import "react-dates/lib/css/_datepicker.css"

// const theme = createMuiTheme({
//   palette: createPalette({
//     primary: blueGrey, // Purple and green play nicely together.
//     error: red
//   })
// })

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ffffff",
      main: "#cfd8dc",
      dark: "#9ea7aa",
      contrastText: "#000"
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
