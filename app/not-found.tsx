"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Wrapper, Text } from "@styles/styled/Error.styled";

const Page404: React.FC = () => {
  const [redirectTime, setRedirectTime] = useState<number>(5);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 5000);
  }, [router]);

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(
      () =>
        setRedirectTime((prevState: number) => {
          if (prevState > 0) {
            return prevState - 1;
          }
          return prevState;
        }),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Image src="/404.svg" width={150} height={100} alt="404" />
      <Text>
        Таку сторінку не знайдено. Ви будете перенаправлені на головну сторінку
        через {redirectTime} секунд
      </Text>
    </Wrapper>
  );
};

export default Page404;
