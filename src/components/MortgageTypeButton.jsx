const MortgageTypeButton = ({ buttonName, handleTypeChange, mortgageType }) => {
  return (
    <label
      htmlFor={`mortgageType ${buttonName}`}
      className={`flex items-center border ${
        mortgageType === buttonName
          ? "border-lime bg-lime/10"
          : "hover:border-lime border-slate-500 "
      }  rounded-md p-3 cursor-pointer`}
      tabIndex="0"
    >
      <input
        type="radio"
        id={`mortgageType ${buttonName}`}
        name="mortgageType"
        className="hidden cursor-pointer"
        value={buttonName}
        onChange={handleTypeChange}
        checked={mortgageType === buttonName}
      />
      <span
        className={`radio-mark w-[17px] h-[17px] border-2 ${
          mortgageType === buttonName ? "border-lime" : "border-slate-500"
        } rounded-full flex items-center justify-center mr-3`}
      >
        {mortgageType === buttonName && (
          <span className="w-[8px] h-[8px] rounded-full bg-lime"></span>
        )}
      </span>
      <span className="font-bold text-slate-900">{buttonName}</span>
    </label>
  );
};
export default MortgageTypeButton;
