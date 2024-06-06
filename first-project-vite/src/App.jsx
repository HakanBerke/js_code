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
      return {...state, counter: state.counter + 1, lastUptaded: new Date().toLocaleString() }
    case "DECREMENT_BY_ONE":
      return {...state, counter: state.counter - 1, lastUptaded: new Date().toLocaleString() }
    case "INCREMENT":
      return {...state, counter: state.counter + action.payload.amount, lastUptaded: new Date().toLocaleString()}
    case "DECREMENT":
      return {...state, counter: state.counter - action.payload.amount, lastUptaded: new Date().toLocaleString()}
    case "SET_COUNTER": 
      return {...state, counter: action.payload.amount, lastUptaded: new Date().toLocaleString()}
    case "RESET":
      return { ...state, counter: 0, lastUptaded: new Date().toLocaleString()}
    default:
      break;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incByRef = createRef();
  const decByRef = createRef();
  const setByRef = createRef();


  return (
    <>
      <main>
        <p>Counter: {state.counter}</p>
        <p>Last Updated: {state.lastUptaded}</p>
        <br />

        <button onClick={() => dispatch({ type: "INCREMENT_BY_ONE" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT_BY_ONE" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <br /><br />

        <button onClick={() => dispatch({ type: "INCREMENT", payload: { amount: Number(incByRef.current.value)} })}>Inc By</button>
        <input type="text" placeholder="Increment Amount" ref={incByRef} />
        <br />
        <button onClick={() => dispatch({ type: "DECREMENT", payload: { amount: Number(decByRef.current.value)}})}>Dec By</button>
        <input type="text" placeholder="Decrement Amount" ref={decByRef} />
        <br />
        <button onClick={() => dispatch({type: "SET_COUNTER", payload: { amount: Number(setByRef.current.value)}})}>Set Counter</button>
        <input type="text" placeholder="Set Amount" ref={setByRef}/>
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