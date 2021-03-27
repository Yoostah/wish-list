import React from "react";

import { ModalContainer } from "./styles";

function Modal({ children, ...rest }) {
  return <ModalContainer>{children}</ModalContainer>;
}

export default Modal;
