import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { FaCrown } from "react-icons/fa";
import { getFeedbacks } from "@utils/api";
import Container from "@components/Container";
import Section from "@components/Section";
import Hero from "@components/Hero";
import FeedbackList from "@components/FeedbackList";
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
  Anchor,
} from "@styles/styled/MainPage.styled";

export const metadata: Metadata = {
  title: "Твій щасливий день",
};

type El = {
  userName: string;
  userFeedback: string;
  rating: string;
};
const Home = async () => {
  const response = await getFeedbacks();
  const averageRating: number =
    response.data.reduce((acc: number, el: El) => {
      return acc + Number(el.rating);
    }, 0) / response.data.length;
  const roundedAverageRating =
    averageRating % Number(averageRating.toFixed(0)) > 0
      ? averageRating.toFixed(1)
      : averageRating.toFixed(0);
  return (
    <Section>
      <Container>
        <ToastContainer />
        <ContentWrapper>
          <Hero />
          <AboutTitle>
            <FaCrown size={25} color={"#ffc803"} />
            <AboutTitleText>Наша місія</AboutTitleText>
            <FaCrown size={25} color={"#ffc803"} />
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
            <FaCrown size={25} color={"#ffc803"} />
            <FeedbackTitleText>
              Ваші відгуки про нас -{"  "} {roundedAverageRating}/5
              <FaCrown size={25} color={"#ffc803"} />
            </FeedbackTitleText>
            <FaCrown size={25} color={"#ffc803"} />
          </FeedbackTitle>
          <div>
            <FeedbackText>
              <p>
                В цій секції ви можете ознайомитись з відгуками наших клієнтів
                та людей, що хотіли скористатись нашими послугами, але чомусь
                передумали. Якщо ж ви хочете залишити свій відгук - запрошуємо
                скористатись <Anchor href={`#feedBack`}> формою відгуку</Anchor>{" "}
                внизу сторінки.
              </p>
            </FeedbackText>

            <FeedbackList feedbacks={response.data} />
          </div>

          <ContactTitle>
            <FaCrown size={25} color={"#ffc803"} />
            <ContactTitleText>{"Як з нами зв'язатись"}</ContactTitleText>
            <FaCrown size={25} color={"#ffc803"} />
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
