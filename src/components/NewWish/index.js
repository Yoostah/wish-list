import React, { useState } from "react";
import Datepicker, { registerLocale } from "react-datepicker";

import ptBR from "date-fns/locale/pt-BR";

import { InputForm, InputContainer } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ptBR", ptBR);

/* eslint-disable react/prop-types */
function NewWish({ handleAdd }) {
  const [input, setInput] = useState("");
  const [dataWish, setData] = useState(new Date());

  const addWish = (e) => {
    e.preventDefault();

    const dataFormatada = `${`0${dataWish.getDate()}`.substr(-2)}/${`0${
      dataWish.getMonth() + 1
    }`.substr(-2)}/${dataWish.getFullYear()}`;

    handleAdd(input, dataFormatada);
    setInput("");
  };
  return (
    <InputForm onSubmit={addWish}>
      <InputContainer>
        <div className="flex">
          <strong>Data:</strong>
          <Datepicker
            required
            selected={dataWish}
            onChange={(date) => setData(date)}
            locale="ptBR"
            dateFormat="P"
          />
        </div>

        <div className="flex space">
          <strong>Desejo:</strong>
          <input
            type="text"
            name="wish"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </InputContainer>
      <button type="submit">Cadastrar</button>
    </InputForm>
  );
}
/* eslint-enable react/prop-types */
export default NewWish;
