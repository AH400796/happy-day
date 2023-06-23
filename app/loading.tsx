"use client";

import Loader from "@components/Loader";
import { Wrapper } from "@styles/styled/Loading.styled";

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <Loader width={"100"} />
    </Wrapper>
  );
};
export default Loading;
