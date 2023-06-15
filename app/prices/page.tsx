/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ціни та умови замовлення",
};

import Image from "next/image";
import Container from "@components/Container";
import Section from "@components/Section";

import {
  ContentWrapper,
  ConditionsTitle,
  ConditionsTitleText,
  ConditionsText,
  PriceTitle,
  PriceTitleText,
  PriceText,
} from "@styles/styled/PricePage.styled";

const Prices: React.FC = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <PriceTitle>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
            <PriceTitleText>Розцінки на фотосесію</PriceTitleText>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
          </PriceTitle>
          <PriceText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, ratione aperiam quasi ad excepturi animi,
              reprehenderit sapiente tempore error mollitia non sequi
              voluptatibus suscipit odit quo aspernatur nihil quis provident
              natus! Possimus accusamus consectetur perspiciatis porro ratione
              aperiam itaque nesciunt, dolore qui! Assumenda, inventore numquam
              blanditiis rem, ut, cum dicta amet enim voluptates dolor labore
              voluptas. Suscipit aut doloribus tempore sapiente a officia,
              aspernatur recusandae veniam quisquam voluptatem necessitatibus
              harum minima deleniti reprehenderit quas at dolorum molestias.
              Nisi accusamus distinctio incidunt quis ex excepturi consequuntur
              iste unde veniam aspernatur. Nostrum consequatur, mollitia sequi
              corporis eius a hic, ea nobis totam recusandae libero iusto,
              repellat minima inventore non fugiat voluptatum repellendus fugit!
              Repellendus obcaecati debitis laborum nulla recusandae iure
              dolorum, tenetur unde iste dolores pariatur, sapiente totam vitae
              officiis porro maxime molestias delectus? Laboriosam officiis
              tenetur recusandae iure? Dignissimos architecto incidunt
              recusandae provident vel doloremque quasi molestias laudantium
              totam autem et beatae dolore, animi nobis, asperiores suscipit
              quos accusamus. Corrupti aspernatur adipisci reprehenderit
              temporibus illum molestias doloremque perferendis eius minima
              repudiandae, architecto, nemo id et dolorum pariatur, facilis
              vitae similique. Minima, omnis quas quaerat ut repudiandae
              similique commodi quod natus et voluptate alias, ratione minus
              placeat modi enim totam quisquam unde rerum cupiditate quis, non
              quidem maiores mollitia. Tempora, soluta illum aspernatur
              praesentium, pariatur nemo id at fugiat, sequi animi neque quia!
              Officia sit debitis nisi magni? Fugiat molestiae provident fugit,
              neque autem soluta esse velit non molestias vitae earum laboriosam
              voluptatem libero praesentium at quas nisi sed. Distinctio,
              consectetur enim.
            </p>
          </PriceText>
          <ConditionsTitle>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
            <ConditionsTitleText>
              Правила та умови бронювання фотосесій
            </ConditionsTitleText>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
          </ConditionsTitle>
          <ConditionsText>
            <p>
              Якщо Ви хочете замовити фотосесію або зацікавленні в отриманні
              додаткової інформації щодо наших послуг, вільних до замовлення дат
              у графіку фотосесій, інформації щодо проведення фотосесії, локацій
              чи є будь-які інші запитання - не соромтесь зв'язатись з нашими
              представниками.
            </p>
            <p>
              Для цього на сайті Вам доступні наші контакти: номери мобільного
              зв'язку та адреси соцмереж Instagram, Facebook чи Telegram.
            </p>
          </ConditionsText>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Prices;
