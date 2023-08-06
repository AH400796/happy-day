"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Wrapper, Text } from "@styles/styled/Non-found.styled";

const Page404: React.FC = () => {
  const [redirectTime, setRedirectTime] = useState<number>(5);
  const router = useRouter();

  useEffect(() => {
    console.log("Error");
    setTimeout(() => router.push("/collections/tiffany"), 5000);
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
        Таку колекцію не знайдено. Ви будете перескеровані на іншу колекцію
        через {redirectTime} секунд
      </Text>
    </Wrapper>
  );
};

export default Page404;
