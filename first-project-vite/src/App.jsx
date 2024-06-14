import "./App.css";
import Header from "./components/shared/header/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";
import { StudentProvider } from "./contexts/student/StudentContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/shared/landing-page/LandingPage";
import StudentListPage from "./pages/app/student/student-list-page/StudentListPage";
import NewStudentPage from "./pages/app/student/new-student-page/NewStudentPage";
import NotFoundPage from "./components/shared/not-found-page/NotFoundPage";
import { createRef, useReducer } from "react";

const initialState = { counter: 0 , error: null, lastUptaded: new Date().toLocaleString()}

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return { error: null, counter: state.counter + 1, lastUpdated: new Date().toLocaleString() }
    case "DECREMENT_BY_ONE":
      return { error: null, counter: state.counter - 1, lastUpdated: new Date().toLocaleString() }
    case "INCREMENT":
      return { error: null, counter: state.counter + action.payload.amount, lastUpdated: new Date().toLocaleString() }
    case "DECREMENT":
      return { error: null, counter: state.counter - action.payload.amount, lastUpdated: new Date().toLocaleString() }
    case "SET_COUNTER":
      return { error: null, counter: action.payload.amount, lastUpdated: new Date().toLocaleString() }
    case "RESET":
      return { error: null, counter: 0, lastUpdated: new Date().toLocaleString() }
    case "ERROR":
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incByRef = createRef();
  const decByRef = createRef();
  const setCounterRef = createRef();

  const handleIncrement = () => {
    if (isNaN(incByRef.current.value) || incByRef.current.value === "") {
      dispatch({ type: "ERROR", payload: { error: "Increment value must be a number" } })
    }
    else {
      dispatch({ type: "INCREMENT", payload: { amount: Number(incByRef.current.value) } })
      incByRef.current.value = null;
    }
  }

  const handleDecrement = () => {
    if (isNaN(decByRef.current.value) || decByRef.current.value === "") {
      dispatch({ type: "ERROR", payload: { error: "Decrement value must be a number" } })
    }
    else {
      dispatch({ type: "DECREMENT", payload: { amount: Number(decByRef.current.value) } })
      decByRef.current.value = null;
    }
  }

  const handleSetCounter = () => {
    if (isNaN(setCounterRef.current.value) || setCounterRef.current.value === "") {
      dispatch({ type: "ERROR", payload: { error: "Counter value must be a number" } })
    }
    else {
      dispatch({ type: "SET_COUNTER", payload: { amount: Number(setCounterRef.current.value) } })
      setCounterRef.current.value = null;
    }
  }

  const handleReset = () => {
    dispatch({ type: "RESET" });
    incByRef.current.value = null;
    decByRef.current.value = null;
    setCounterRef.current.value = null;
  }


  return (
    <>
      <main>
        <p>Counter: {state.counter}</p>
        <p>Last Updated: {state.lastUpdated}</p>
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        <br />

        <button onClick={() => dispatch({ type: "INCREMENT_BY_ONE" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT_BY_ONE" })}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <br /><br />

        <button onClick={handleIncrement}>Inc By</button>
        <input type="text" placeholder="Increment Amount" ref={incByRef} />
        <br />
        <button onClick={handleDecrement}>Dec By</button>
        <input type="text" placeholder="Decrement Amount" ref={decByRef} />
        <br />
        <button onClick={handleSetCounter}>Set Counter</button>
        <input type="text" placeholder="Set Amount" ref={setCounterRef} />
      </main>
    </>
  )
}

export default App;
{/* <Router>
        <StudentProvider>
            <Header />
          <main>
            <br />
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/studentList" element={<StudentListPage/>}></Route>
              <Route path="/studentList/new" element={<NewStudentPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </main>
        </StudentProvider>
      </Router> */}