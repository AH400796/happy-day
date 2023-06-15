"use client";

import Image from "next/image";
import { Wrapper } from "@styles/styled/Error.styled";

const ErrorPage: React.FC = () => {
  return (
    <Wrapper>
      <Image src="/404.svg" width={150} height={100} alt="404" />
    </Wrapper>
  );
};

export default ErrorPage;
