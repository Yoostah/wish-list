import styled from "styled-components";
import { colors } from "../../assets/colors";

export const InputContainer = styled.div`
  display: flex;
  flex: 1;

  div.flex {
    display: flex;
    flex-direction: row;
    align-items: center;

    strong {
      margin-right: 10px;
    }

    input {
      padding: 5px;
      font-size: 15px;
      flex: 1;
      border: 1px solid rgba(1, 1, 1, 0.3);
    }
  }

  div.space {
    flex: 1;
    margin-left: 15px;
  }
`;

export const InputForm = styled.form`
  display: flex;
  background: white;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  margin-bottom: 15px;

  button {
    margin-left: 10px;
    flex: 1;
    max-width: 200px;
    border: 1px solid rgba(1, 1, 1, 0.3);

    outline: 0;

    background-color: ${colors.gray};
  }
`;
