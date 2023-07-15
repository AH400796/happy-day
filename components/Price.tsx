/* eslint-disable react/no-unescaped-entities */

import { BsCheck } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import {
  PackageWrapper,
  PriceTitle,
  PriceText,
  PricePackage,
  Title,
  Text,
  FirstCol,
  FirstColTitle,
  SecondCol,
  PricePackageWrapper,
  Remark,
  Promo,
  OldPrice,
} from "@styles/styled/Price.styled";

const Price: React.FC = () => {
  return (
    <>
      <PriceTitle>Тарифні пакети</PriceTitle>
      <Remark>
        <PriceText>
          Ознайомтесь з доступними тарифними пакетами і послугами, що в них
          входять, та оберіть той, який Вам ідеально підійде!{" "}
        </PriceText>
      </Remark>

      <PricePackageWrapper>
        {/* GROUP VIP*/}
        <PricePackage>
          <PackageWrapper>
            <Title>
              <FirstColTitle>Пакет "GROUP VIP"</FirstColTitle>
              <SecondCol>
                {/* <Promo>
                  Акція!
                  <br /> 8 500
                </Promo>
                <OldPrice>9 500</OldPrice> */}
                8 500
              </SecondCol>
            </Title>
            <Text>
              <FirstCol>
                Групова професійна фотозйомка для дівчинки та її подружок в двох
                образах: основна колекція та "Домашній стиль" (до 5-ти подружок,
                90хв)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Послуги професійного візажиста усім дівчаткам (макіяж)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Послуги професійного перукаря усім дівчаткам (зачіска)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичний гардероб усім дівчаткам (одяг + взуття під обрану
                колекцію та халатики під "Домашній стиль")
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичні аксесуари усім дівчаткам (намисто, діадема, сережки,
                сонцезахисні окуляри та ін.)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Фотонабір (20 професійно оброблених у ретуші + усі відзняті
                фото)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Тематична фотокнига </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Подарунок 🎁 для Вашої принцеси та солодкі подаруночки 🍬 для
                подружок
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
          </PackageWrapper>
        </PricePackage>
        {/* GROUP STANDART */}
        <PricePackage>
          <PackageWrapper>
            <Title>
              <FirstColTitle>Пакет "GROUP STANDART" </FirstColTitle>
              <SecondCol>6 500</SecondCol>
            </Title>
            <Text>
              <FirstCol>
                Групова професійна фотозйомка для дівчинки та її подружок (до
                5-ти подружок, 60хв)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Послуги професійного візажиста усім дівчаткам (макіяж)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Послуги професійного перукаря усім дівчаткам (зачіска)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичний гардероб усім дівчаткам (одяг + взуття під обрану
                колекцію )
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичні аксесуари усім дівчаткам (намисто, діадема, сережки,
                сонцезахисні окуляри та ін.)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Фотонабір (15 професійно оброблених у ретуші + усі відзняті
                фото)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Тематична фотокнига </FirstCol>
              <SecondCol>
                <IoMdClose size={20} color={"#ec2929"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Подарунок 🎁 для Вашої принцеси та солодкі подаруночки 🍬 для
                подружок
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
          </PackageWrapper>
        </PricePackage>
        {/* VIP  */}
        <PricePackage>
          <PackageWrapper>
            <Title>
              <FirstColTitle>Пакет "VIP" </FirstColTitle>
              <SecondCol>
                {/* <Promo>
                  Акція!
                  <br /> 3 550
                </Promo>
                <OldPrice>4 000</OldPrice> */}
                3 900
              </SecondCol>
            </Title>
            <Text>
              <FirstCol>
                Індивідуальна професійна фотозйомка в двох образах: основна
                колекція та "Домашній стиль" (60хв)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Послуги професійного візажиста (макіяж)</FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Послуги професійного перукаря (зачіска)</FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичний гардероб (одяг + взуття під обрану колекцію та
                халатик під "Домашній стиль")
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичні аксесуари (намисто, діадема, сережки, сонцезахисні
                окуляри та ін.)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Фотонабір (10 професійно оброблених у ретуші + усі відзняті
                фото)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Тематична фотокнига </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Подарунок 🎁 для Вашої принцеси </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
          </PackageWrapper>
        </PricePackage>
        {/* STANDART  */}
        <PricePackage>
          <PackageWrapper>
            <Title>
              <FirstColTitle>Пакет "STANDART" </FirstColTitle>
              <SecondCol>2 800</SecondCol>
            </Title>
            <Text>
              <FirstCol>Індивідуальна професійна фотозйомка (30хв)</FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Послуги професійного візажиста (макіяж)</FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Послуги професійного перукаря (зачіска)</FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичний гардероб (одяг + взуття під обрану колекцію)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичні аксесуари (намисто, діадема, сережки, сонцезахисні
                окуляри та ін.)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Фотонабір (10 професійно оброблених у ретуші + усі відзняті
                фото)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Тематична фотокнига </FirstCol>
              <SecondCol>
                <IoMdClose size={20} color={"#ec2929"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Подарунок 🎁 для Вашої принцеси </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
          </PackageWrapper>
        </PricePackage>
        {/* MINIMAL */}
        <PricePackage>
          <PackageWrapper>
            <Title>
              <FirstColTitle>Пакет "MINIMAL" </FirstColTitle>
              <SecondCol>2 000</SecondCol>
            </Title>
            <Text>
              <FirstCol>Індивідуальна професійна фотозйомка (30хв)</FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Послуги професійного візажиста (макіяж)</FirstCol>
              <SecondCol>
                <IoMdClose size={20} color={"#ec2929"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Послуги професійного перукаря (зачіска)</FirstCol>
              <SecondCol>
                <IoMdClose size={20} color={"#ec2929"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичний гардероб (одяг + взуття під обрану колекцію)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Тематичні аксесуари (намисто, діадема, сережки, сонцезахисні
                окуляри та ін.)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>
                Фотонабір (10 професійно оброблених у ретуші + усі відзняті
                фото)
              </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Тематична фотокнига </FirstCol>
              <SecondCol>
                <IoMdClose size={20} color={"#ec2929"} />
              </SecondCol>
            </Text>
            <Text>
              <FirstCol>Подарунок 🎁 для Вашої принцеси </FirstCol>
              <SecondCol>
                <BsCheck size={25} color={"#1db937"} />
              </SecondCol>
            </Text>
          </PackageWrapper>
        </PricePackage>
      </PricePackageWrapper>
      <Remark>
        <PriceText>* Усі ціни вказані в гривнях.</PriceText>
        <PriceText>
          ** Крім вище згаданих послуг та подарунків перелічених в пакетах, усім
          дівчаткам залишаються тілесні колготи, які видаються для фотозйомки.
        </PriceText>
        <PriceText>
          *** За бажанням клієнти можуть приносити з собою свій <b>candy-bar</b>{" "}
          - власний набір солодощів для зйомки.
        </PriceText>
      </Remark>
    </>
  );
};

export default Price;
