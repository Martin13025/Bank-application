import React, { useState } from "react";
import "./Calc2.css";

function calculateMortgage(cost, initialPayment, term) {
  const annualRate = 3.5;
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

function Calc2() {
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
    console.log(`Monthly Payment: ${monthlyPayment}
        and Total Payment ${totalPayment}`);
  };

  return (
    <div className="Calc2">
      <h3>Car loan calculator</h3>
      <p>The annual Rate on a car loan - 3,5%</p>
      <div className="kredit">
        <h3>
          The amount of car loans <br />
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
          {monthlyPayment} doolars and Total Payment: {totalPayment}{" "}
          рублей
        </p>
      </div>
    </div>
  );
}

export default Calc2;
