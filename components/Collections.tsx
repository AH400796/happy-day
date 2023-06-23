import {
  CollectionsWrapper,
  CollectionsTitle,
  CollectionsText,
} from "@styles/styled/Collections.styled";

const Collections: React.FC = () => {
  return (
    <CollectionsWrapper>
      <CollectionsTitle>Перегляньте наші колекції</CollectionsTitle>
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
