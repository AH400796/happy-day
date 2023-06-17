import { Metadata } from "next";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { getFeedbacks } from "@utils/api";
import Container from "@components/Container";
import Section from "@components/Section";
import Hero from "@components/Hero";
import {
  ContentWrapper,
  AboutTitle,
  AboutTitleText,
  AboutText,
  ContactTitle,
  ContactTitleText,
  ContactText,
  FeedbackTitle,
  FeedbackTitleText,
  FeedbackText,
} from "@styles/styled/MainPage.styled";

export const metadata: Metadata = {
  title: "Твій щасливий день",
};

const Home = async () => {
  const response = await getFeedbacks();
  console.log(response.data);
  return (
    <Section>
      <Container>
        <ToastContainer />
        <ContentWrapper>
          <Hero />
          <AboutTitle>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
            <AboutTitleText>Наша місія</AboutTitleText>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
          </AboutTitle>
          <AboutText>
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
          </AboutText>
          <FeedbackTitle>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
            <FeedbackTitleText>Відгуки про нас</FeedbackTitleText>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
          </FeedbackTitle>
          <FeedbackText>
            <p>
              Якщо Ви хочете замовити фотосесію або зацікавленні в отриманні
              додаткової інформації щодо наших послуг, вільних до замовлення дат
              у графіку фотосесій, інформації щодо проведення фотосесії, локацій
              чи є будь-які інші запитання - не соромтесь {"зв'язатись"} з
              нашими представниками.
            </p>
            <p>
              Для цього на сайті Вам доступні наші контакти: номери мобільного
              {"зв'язку"} та адреси соцмереж Instagram, Facebook чи Telegram.
            </p>
          </FeedbackText>
          <ContactTitle>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
            <ContactTitleText>{"Як з нами зв'язатись"}</ContactTitleText>
            <Image
              src="/icons/icon_crown.svg"
              width={25}
              height={25}
              alt="crown"
              priority
            />
          </ContactTitle>
          <ContactText>
            <p>
              Якщо Ви хочете замовити фотосесію або зацікавленні в отриманні
              додаткової інформації щодо наших послуг, вільних до замовлення дат
              у графіку фотосесій, інформації щодо проведення фотосесії, локацій
              чи є будь-які інші запитання - не соромтесь {"зв'язатись"} з
              нашими представниками.
            </p>
            <p>
              Для цього на сайті Вам доступні наші контакти: номери мобільного
              {"зв'язку"} та адреси соцмереж Instagram, Facebook чи Telegram.
            </p>
          </ContactText>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Home;
