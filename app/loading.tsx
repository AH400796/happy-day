"use client";

import { RotatingLines } from "react-loader-spinner";
import { Wrapper } from "@styles/styled/Loading.styled";

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#4e6739"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </Wrapper>
  );
};

export default Loading;
