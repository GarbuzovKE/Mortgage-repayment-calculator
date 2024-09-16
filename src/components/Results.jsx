import ResultPct from "/src/assets/illustration-empty.svg";
import MortgageContext from "../context/MortgageContext";
import { useContext } from "react";

const Results = () => {
  const { mortgageAmount, mortgageTerm, mortgageType, showResults, repayment } =
    useContext(MortgageContext);

  return (
    <section
      id="results"
      className="bg-[#133040] w-full lg:w-1/2 p-6 flex flex-col gap-4 lg:rounded-r-xl lg:rounded-bl-[70px] lg:justify-start justify-center"
    >
      {showResults && repayment ? (
        <>
          <h2 className="text-white font-bold text-2xl">Your results</h2>
          <p className="text-slate-400">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="bg-[#0e2431] p-6 rounded-md border-t-4 border-t-lime">
            <span className="text-sm">Your monthly repayments</span>
            <span className="block text-lime font-bold text-[2.45rem] lg:text-[3.5rem] pt-2 pb-6 border-b border-slate-500">
              £{repayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            {mortgageType === "Repayment" ? (
              <>
                <span className="block mt-6 text-sm">
                  Total you'll repay over the term
                </span>
                <span className="block mt-2 text-white font-bold ">
                  £{" "}
                  {(+repayment * 12 * mortgageTerm)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </>
            ) : (
              <>
                <span className="block mt-6 text-sm">
                  Total amount of interest you'll pay over the term
                </span>
                <span className="block mt-2 text-white font-bold ">
                  £{" "}
                  {(+repayment * 12 * mortgageTerm - mortgageAmount)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col flex-grow justify-center">
          <div className="flex justify-center mt-2 h-40">
            <img src={`${ResultPct}`} alt="Result picture"></img>
          </div>
          <h2 className="text-white text-xl mb-2 text-center">
            Results shown here
          </h2>
          <p className="text-slate-300 text-sm text-center">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </section>
  );
};
export default Results;
