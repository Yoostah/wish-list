import React, { memo } from "react";

import { FiCheck } from "react-icons/fi";
import {
  Container,
  WishContainer,
  ProgressContainer,
  ProgressBar,
  ProgressIndicator,
} from "./styles";

/* eslint-disable react/prop-types */
const Wish = memo(({ wish }) => {
  return (
    <WishContainer progress={wish.progress}>
      <strong>{wish.name}</strong>
      <Container>
        <div>
          <strong>Data Prevista: </strong>
          <span>{wish.date}</span>
        </div>

        {wish.progress === 100 && <FiCheck size={20} />}
      </Container>
      <ProgressContainer>
        <ProgressIndicator>
          <ProgressBar color="red" progress={wish.progress} />
        </ProgressIndicator>
        <strong>( {`${wish.progress}%`} )</strong>
      </ProgressContainer>
    </WishContainer>
  );
});
/* eslint-enable react/prop-types */
export default Wish;
