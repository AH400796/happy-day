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
        <CollectionsTitleText>Перегляньте наші колекції</CollectionsTitleText>
        <FaCrown size={25} color={"#ffdd61"} />
      </CollectionsTitle>
      <CollectionsText>
        <p>
          Ознайомтесь детальніше з нашими колекціями та оберіть собі ту, яка
          припаде до душі Вам та вашій дитині.
        </p>
      </CollectionsText>
    </CollectionsWrapper>
  );
};

export default Collections;