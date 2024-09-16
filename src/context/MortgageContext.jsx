import { createContext, useState } from "react";

const MortgageContext = createContext({});

export const MortgageProvider = ({ children }) => {
  const [showResults, setShowResults] = useState(false);
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [showAmountError, setShowAmountError] = useState(false);
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [showTermError, setShowTermError] = useState(false);
  const [mortgageRate, setMortgageRate] = useState("");
  const [showRateError, setShowRateError] = useState(false);
  const [mortgageType, setMortgageType] = useState("");
  const [showTypeError, setShowTypeError] = useState(false);
  const [repayment, setRepayment] = useState(null);

  return (
    <MortgageContext.Provider
      value={{
        showResults,
        setShowResults,
        mortgageAmount,
        setMortgageAmount,
        showAmountError,
        setShowAmountError,
        mortgageTerm,
        setMortgageTerm,
        showTermError,
        setShowTermError,
        mortgageRate,
        setMortgageRate,
        showRateError,
        setShowRateError,
        mortgageType,
        setMortgageType,
        showTypeError,
        setShowTypeError,
        repayment,
        setRepayment,
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
};
export default MortgageContext;
