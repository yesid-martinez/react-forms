import { useState } from "react";

import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";

import SignContext from "./context/SignContext";

function App() {

  const [step, setStep] = useState("forgotpassword");

  return(
    <SignContext.Provider value={{step, setStep}}>
      <div className="container">
        {step === "signin" && <SignIn />}
        {step === "signup" && <SignUp />}
        {step === "forgotpassword" && <ForgotPassword />}
      </div>
      </SignContext.Provider>
  )
}

export default App;
