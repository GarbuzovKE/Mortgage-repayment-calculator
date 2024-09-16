import { useContext, useEffect } from "react";
import MortgageContext from "../context/MortgageContext";
import MortgageTypeButton from "./MortgageTypeButton";
import IconCalculator from "/src/assets/icon-calculator.svg";

const CalculatorForm = () => {
  const {
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
    setShowResults,
    setRepayment,
  } = useContext(MortgageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let localShowResult = true;
    if (!mortgageAmount) {
      setShowAmountError(true);
      localShowResult = false;
    }
    if (!mortgageTerm) {
      setShowTermError(true);
      localShowResult = false;
    }
    if (!mortgageRate) {
      setShowRateError(true);
      localShowResult = false;
    }
    if (!mortgageType) {
      setShowTypeError(true);
      localShowResult = false;
    }
    if (localShowResult) {
      setShowResults(true);
    }
  };

  const handleClear = (e) => {
    setMortgageAmount("");
    setMortgageTerm("");
    setMortgageRate("");
    setMortgageType("");
    setShowResults(false);
  };

  const handleTypeChange = (e) => {
    setMortgageType(e.target.value);
  };

  const handleRepayment = (e) => {
    setRepayment(
      (+mortgageAmount *
        ((+mortgageRate / 12 / 100) *
          (1 + +mortgageRate / 12 / 100) ** (+mortgageTerm * 12))) /
        ((1 + +mortgageRate / 12 / 100) ** (+mortgageTerm * 12) - 1)
    );
  };

  useEffect(() => {
    setShowTermError(false);
  }, [mortgageTerm]);

  useEffect(() => {
    setShowAmountError(false);
  }, [mortgageAmount]);

  useEffect(() => {
    setShowRateError(false);
  }, [mortgageRate]);

  useEffect(() => {
    setShowTypeError(false);
  }, [mortgageType]);

  return (
    <section id="calculator" className="lg:w-1/2 p-8">
      <form className="flex flex-col gap-3 lg:gap-6" onSubmit={handleSubmit}>
        <div className="mb-2 flex flex-col lg:flex-row lg:justify-between">
          <h1 className="font-bold text-slate-900 text-xl">
            Mortgage Calculator
          </h1>
          <button
            type="button"
            className="underline decoration-dotted w-fit"
            onClick={handleClear}
          >
            Clear all
          </button>
        </div>

        {/* Mortgage Amount */}
        <label
          htmlFor="mortgageAmount"
          className={`block relative ${showAmountError ? "mb-6" : ""}`}
        >
          <p>Mortgage Amount</p>
          <input
            type="text"
            className={`w-full border-[1px] border-slate-300 rounded-md py-2 pl-14 font-bold text-slate-900 cursor-pointer hover:border-slate-900 focus:border-lime focus:outline focus:outline-1 focus:outline-lime peer ${
              showAmountError && "border-redError"
            }`}
            id="mortgageAmount"
            onChange={(e) => {
              setMortgageAmount(e.target.value.replace(/\D/g, ""));
            }}
            value={mortgageAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
          <span
            className={`absolute left-[1px] bottom-[1px] top-[25px] px-4 py-2 rounded-l-md bg-bgFormDet font-bold peer-focus:bg-lime ${
              showAmountError && "bg-redError text-white"
            }`}
          >
            £
          </span>
          {showAmountError && (
            <p className="absolute bottom-[-24px] text-redError">
              This field is required
            </p>
          )}
        </label>

        <div className="flex flex-col lg:flex-row w-full gap-3">
          {/* Mortgage Term */}
          <label
            htmlFor="mortgageTerm"
            className={`block relative lg:w-1/2 ${
              showTermError ? "mb-6" : ""
            } ${showRateError ? "lg:mb-6" : ""}`}
          >
            <p>Mortgage Term</p>
            <input
              type="number"
              className={`w-full border-[1px] border-slate-300 rounded-md py-2 pl-4 pr-16 font-bold text-slate-900 cursor-pointer hover:border-slate-900 focus:border-lime focus:outline focus:outline-1 focus:outline-lime peer ${
                showTermError && "border-redError"
              }`}
              id="mortgageTerm"
              min="5"
              max="35"
              onChange={(e) => setMortgageTerm(e.target.value)}
              value={mortgageTerm}
            />
            <span
              className={`absolute right-0 bottom-0 top-[25px] px-4 py-2 rounded-r-md bg-bgFormDet font-bold peer-focus:bg-lime ${
                showTermError && "bg-redError text-white"
              }`}
            >
              years
            </span>
            {showTermError && (
              <p className="absolute bottom-[-24px] text-redError">
                This field is required
              </p>
            )}
          </label>

          {/* Interest Rate */}
          <label
            htmlFor="mortgageRate"
            className={`block relative lg:w-1/2 ${
              showRateError ? "mb-6" : ""
            } ${showTermError ? "lg:mb-6" : ""}`}
          >
            <p>Interest Rate</p>
            <input
              type="number"
              className={`w-full border-[1px] border-slate-300 rounded-md py-2 pl-4 pr-16 font-bold text-slate-900 cursor-pointer hover:border-slate-900 focus:border-lime focus:outline focus:outline-1 focus:outline-lime peer ${
                showRateError && "border-redError"
              }`}
              id="mortgageRate"
              onChange={(e) => setMortgageRate(e.target.value)}
              value={mortgageRate}
            />
            <span
              className={`absolute right-[1px] bottom-[1px] top-[25px] px-4 py-2 rounded-r-md bg-bgFormDet font-bold peer-focus:bg-lime ${
                showRateError && "bg-redError text-white"
              }`}
            >
              %
            </span>
            {showRateError && (
              <p className="absolute bottom-[-24px] text-redError">
                This field is required
              </p>
            )}
          </label>
        </div>
        {/* Mortgage Type */}
        <div className="flex flex-col gap-2">
          <span>Mortgage Type</span>

          <MortgageTypeButton
            buttonName="Repayment"
            handleTypeChange={handleTypeChange}
            mortgageType={mortgageType}
          ></MortgageTypeButton>

          <MortgageTypeButton
            buttonName="Interest Only"
            handleTypeChange={handleTypeChange}
            mortgageType={mortgageType}
          ></MortgageTypeButton>

          {showTypeError && (
            <p className="text-redError">This field is required</p>
          )}
        </div>
        <button
          className="block bg-lime hover:bg-lime/30 font-bold lg:w-3/4 rounded-full p-4 text-slate-900"
          onClick={handleRepayment}
        >
          <img
            src={IconCalculator}
            alt="Calculator icon"
            className="inline-block mr-2"
          />
          Calculate Repayment
        </button>
      </form>
    </section>
  );
};
export default CalculatorForm;
