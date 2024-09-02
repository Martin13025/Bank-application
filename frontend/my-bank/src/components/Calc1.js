import React, { useState } from "react";
import "./Calc1.css";

function calculateMortgage(cost, initialPayment, term) {
  const annualRate = 9.6;
  const loanAmount = cost - initialPayment;
  const monthlyRate = annualRate / 12 / 100;
  const totalRate = Math.pow(1 + monthlyRate, term * 12);
  const monthlyPayment =
    (loanAmount * monthlyRate * totalRate) / (totalRate - 1);

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(monthlyPayment * term * 12),
  };
}

function Calc1() {
  const [cost, setCost] = useState(0);
  const [initialPayment, setInitialPayment] = useState(0);
  const [term, setTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const handleCalculate = () => {
    const { monthlyPayment, totalPayment } = calculateMortgage(
      cost,
      initialPayment,
      term
    );
    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    console.log(`Month Payment: ${monthlyPayment}
        and Total Payment ${totalPayment}`);
  };

  return (
    <div className="Calc1">
      <h3>Mortgage calculator</h3>
      <p>The annual mortgage rate - 9,6%</p>
      <div className="kredit">
        <h3>
          The amount of the mortgage <br />
          (in dollars)
        </h3>
      </div>
      <div className="div2">
        <input type="number" onChange={(e) => setCost(e.target.value)}></input>
      </div>
      <div className="kredit">
        <h3>
          Initial <br />
          payment <br />
          (in dollars)
        </h3>
      </div>
      <div className="div2">
        <input
          type="number"
          onChange={(e) => setInitialPayment(e.target.value)}
        ></input>
      </div>
      <div className="kredit">
        <h3>
          Loan term <br />
          (in years)
        </h3>
      </div>
      <div className="div2">
        <input type="number" onChange={(e) => setTerm(e.target.value)}></input>
      </div>
      <button className="styleButton" onClick={handleCalculate}>
        Calculate
      </button>

      <div className="kredit">
        <h3>Monthly payment</h3>
        <p>
          {monthlyPayment} dollars and The total amount of the mortgage: {totalPayment} dollars
        </p>
      </div>
    </div>
  );
}

export default Calc1;
