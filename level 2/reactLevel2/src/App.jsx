import { useState } from 'react'
import './App.css'
import './theme.css'

function App() {
  let [name, setName] = useState("Mohammed Hassan");
  let [age, setAge] = useState(18);
  let [count, setCount] = useState(0);
  let [theme, setTheme] = useState("");


  return (
    <div className={`App ${theme}`}>
      <button onClick={() => { setTheme(theme === "" ? "Dark" : "") }} style={{ margin: "44px" }}>Toggle Theme</button>

      <label htmlFor="theme" className="theme">
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            defaultValue="dark"
            onClick={() => { setTheme(theme === "" ? "Dark" : "")}}
          />
          <span className="theme__fill" />
          <span className="theme__icon">
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
            <span className="theme__icon-part" />
          </span>
        </span>
      </label>


      <div>
        <button onClick={() => { setTheme("") }} style={{ margin: "26px" }} >Light</button>
        <button onClick={() => { setTheme("Dark") }} style={{ margin: "26px" }} >Dark</button>
        <button onClick={() => { setTheme("Gray") }} style={{ margin: "26px" }} >Gray</button>
        <button onClick={() => { setTheme("Pink") }} style={{ margin: "26px" }} >Pink</button>
      </div>
      <h2 style={{ margin: "66px" }}>My Name is {name} </h2>
      <button onClick={() => { setName("AbdoAbdo") }} >Change Name</button>
      <h2 style={{ margin: "66px" }}>My age is {age} </h2>
      <button onClick={() => { setAge(23) }} >Change age</button>
      <br />
      <br />

      <button onClick={() => { setCount(count + 1) }}> count is {count}</button>
    </div>
  )
}

export default App
