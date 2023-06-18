import { FaCrown } from "react-icons/fa";
import {
  CollectionsWrapper,
  CollectionsTitle,
  CollectionsTitleText,
  CollectionsText,
} from "@styles/styled/Collections.styled";

const Collections: React.FC = () => {
  return (
    <CollectionsWrapper>
      <CollectionsTitle>
        <FaCrown size={25} color={"#ffdd61"} />
        <CollectionsTitleText>Колекції для фотосесій</CollectionsTitleText>
        <FaCrown size={25} color={"#ffdd61"} />
      </CollectionsTitle>
      <CollectionsText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem, ratione aperiam quasi ad excepturi animi,
          reprehenderit sapiente tempore error mollitia non sequi voluptatibus
          suscipit odit quo aspernatur nihil quis provident natus! Possimus
          accusamus consectetur perspiciatis porro ratione aperiam itaque
          nesciunt, dolore qui! Assumenda, inventore numquam blanditiis remt,
          quisquam unde rerum cupiditate quis, non quidem maiores mollitia.
          Tempora, soluta illum aspernatur praesentium, pariatur nemo id at
          fugiat, sequi animi neque quia! Officia sit debitis nisi magni? Fugiat
          molestiae provident fugit, neque autem soluta esse velit non molestias
          vitae earum laboriosam voluptatem libero praesentium at quas nisi sed.
          Distinctio, consectetur enim.
        </p>
      </CollectionsText>
    </CollectionsWrapper>
  );
};

export default Collections;
