import * as ReactDOM from "react-dom"
import * as React from "react"
import { Tile } from "./components/Tile/Tile"
import "./index.css"

const wrapper = document.getElementById("root")
wrapper ? ReactDOM.render(<Tile text={"Click me!"} />, wrapper) : false
