import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${colors.blue};
  padding: 20px;

  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;
