"use client";

import Image from "next/image";
import { Wrapper } from "@styles/styled/Error.styled";

const ErrorPage: React.FC = () => {
  return (
    <Wrapper>
      <h1>Error</h1>
      <p>Something goes wrong... </p>
      <p>Redirected to mainpage... </p>
    </Wrapper>
  );
};

export default ErrorPage;
