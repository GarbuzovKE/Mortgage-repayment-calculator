import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import Results from "./components/Results";
import { MortgageProvider } from "./context/MortgageContext";

function App() {
  return (
    <main className="bg-white w-full md:w-11/12 lg:w-[1000px] flex flex-col lg:flex-row md:rounded-xl shadow-xl h-auto md:h-auto lg:h-auto ">
      <MortgageProvider>
        <CalculatorForm />
        <Results />
      </MortgageProvider>
    </main>
  );
}

export default App;
