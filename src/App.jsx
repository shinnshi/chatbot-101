import React, { Component } from 'react'
import './assets/styles/index.css'
import defaultDataset from "./dataset"
import './assets/styles/style.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }
  render() {
    return (
      <section className="c-section">
        <div className="c-box">

        </div>
      </section>
    )
  }
}
