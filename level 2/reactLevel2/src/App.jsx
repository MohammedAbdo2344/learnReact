import { useReducer } from 'react'
import './App.css'
import './theme.css'

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "INCREASE_COUNT":
      return { ...state, startCount: state.startCount + 1 };
    case "Light_Theme":
      return { ...state, theme: action.newValue };
    case "Dark_Theme":
      return { ...state, theme: action.newValue };
    case "Gray_Theme":
      return { ...state, theme: action.newValue };
    case "Pink_Theme":
      return { ...state, theme: action.newValue };
    case "TOGGLETHEME":
      return { ...state, theme: state.theme?"":"Dark" };
    default:
      return state;
  }
};
const initialAllData = {
  name: "Mohammed Hassan",
  age: 18,
  startCount: 0,
  theme: "light"
}
function App() {
  const [allData, dispatch] = useReducer(reducer, initialAllData);


  return (
    <div className={`App ${allData.theme} `}>
      <button onClick={() => {dispatch({ type: "TOGGLETHEME" }) }} style={{ margin: "44px" }}>Toggle Theme</button>

      <label htmlFor="theme" className="theme">
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            defaultValue="dark"
            onClick={() => { dispatch({ type: "TOGGLETHEME" }) }}
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
        <button onClick={() => { dispatch({ type: "Light_Theme", newValue: "light" }) }} style={{ margin: "26px" }} >Light</button>
        <button onClick={() => { dispatch({ type: "Dark_Theme", newValue: "Dark" }) }} style={{ margin: "26px" }} >Dark</button>
        <button onClick={() => { dispatch({ type: "Gray_Theme", newValue: "Gray" }) }} style={{ margin: "26px" }} >Gray</button>
        <button onClick={() => { dispatch({ type: "Pink_Theme", newValue: "Pink" }) }} style={{ margin: "26px" }} >Pink</button>
      </div>
      <h2 style={{ margin: "66px" }}>My Name is {allData.name} </h2>
      <button onClick={() => { dispatch({ type: "CHANGE_NAME", newValue: "AboAbdo" }); }} >Change Name</button>
      <h2 style={{ margin: "66px" }}>My age is {allData.age} </h2>
      <button onClick={() => { dispatch({ type: "CHANGE_AGE", newValue: "23" }); }} >Change age</button>
      <br />
      <br />

      <button onClick={() => { dispatch({ type: "INCREASE_COUNT" }) }}> count is {allData.startCount}</button>
    </div>
  )
}

export default App
