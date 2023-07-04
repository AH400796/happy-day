"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Wrapper, Text, ResetBtn } from "@styles/styled/Error.styled";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Wrapper>
      <Image src="/error.svg" width={150} height={100} alt="404" />
      <Text>
        Вибачте, трапилась помилка. Спробуйте повторити свою дію ще раз.
      </Text>
      <ResetBtn type="button" onClick={() => reset()}>
        Повторити
      </ResetBtn>
    </Wrapper>
  );
};

export default ErrorPage;
