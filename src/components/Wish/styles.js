import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/colors";

const progressColor = (progress) => {
  if (progress < 20) {
    return colors.progress.initial;
  } else if (progress < 70) {
    return colors.progress.low;
  } else if (progress < 100) {
    return colors.progress.high;
  } else {
    return colors.progress.final;
  }
};

const fillProgress = (progress) => keyframes`
    from {
        width: 0%;
        background-color: ${progressColor(0)}
    }

    to {
        width: ${progress}%;
        background-color: ${progressColor(progress)}
    }
`;

export const WishContainer = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px 10px 10px;
  background-color: ${(props) =>
    props.progress === 100 ? colors["light-green"] : "rgba(255,255,255,.4)"};
  border-radius: 8px;
  text-transform: uppercase;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  > strong {
    font-size: 16px;
  }

  p {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 10px;

    div {
      flex: 1;
      align-items: flex-end;
      justify-content: space-between;

      > strong {
        font-size: 10px;
        margin-right: 10px;
      }

      span {
        color: orange;
        font-size: 10px;
        background-color: black;
        padding: 2px 4px;
        border-radius: 3px;
      }
    }

    svg {
      color: green;
    }
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  border-radius: 4px;
  margin: 15px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);

  strong {
    font-size: 8px;
  }
`;

export const ProgressIndicator = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 1px 2px;
  margin-right: 10px;
`;

export const ProgressBar = styled.span`
  background-color: ${(props) => progressColor(props.progress)};
  display: block;
  height: 5px;
  border-radius: 3px;
  animation-name: ${(props) => fillProgress(props.progress)};
  animation-duration: 2s;
  animation-iteration-count: 1;
  width: ${(props) => props.progress && `${props.progress}%`};
`;
