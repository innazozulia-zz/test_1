import React from "react";
import Block from "./Block";
import "./index.scss";

const Main = () => {
  // get json with currency
  const [rates, setRates] = React.useState({});
  // get currency FROM
  const [fromCurrency, setFromCurrency] = React.useState("UAH");
  // get currency  TO
  const [toCurrency, setToCurrency] = React.useState("USD");
  // get currency value FROM
  const [fromValueCurrency, setFromValueCurrency] = React.useState(0);
  // get currency value TO
  const [toValueCurrency, setToValueCurrency] = React.useState(0);

  // get json request

  React.useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        alert("Error!");
      });
  }, []);

  // change value FROM currency
  const onChangeFromValueCurrency = (value) => {
    const figure = value / rates[fromCurrency];
    const result = figure * rates[toCurrency];
    setFromValueCurrency(value);
    setToValueCurrency(result);
  };

  // get value  TO currency
  const onChangeToVallueCurrency = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setToValueCurrency(value);
    setFromCurrency(result);
  };

  return (
    <div className="wrapper">
      <Block
        value={fromValueCurrency}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromValueCurrency}
      />
      <Block
        value={toValueCurrency}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToVallueCurrency}
      />
    </div>
  );
};

export default Main;
