"use client";

import { RotatingLines } from "react-loader-spinner";
import { Wrapper } from "@styles/styled/Loading.styled";

const Loader: React.FC<{ width: string }> = ({ width = "150" }) => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#4e6739"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
