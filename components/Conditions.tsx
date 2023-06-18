import { FaCrown } from "react-icons/fa";
import {
  ConditionsTitle,
  ConditionsTitleText,
  ConditionsText,
} from "@styles/styled/Conditions.styled";

const Conditions: React.FC = () => {
  return (
    <>
      <ConditionsTitle>
        <FaCrown size={25} color={"#ffdd61"} />
        <ConditionsTitleText>
          Правила та умови бронювання фотосесій
        </ConditionsTitleText>
        <FaCrown size={25} color={"#ffdd61"} />
      </ConditionsTitle>
      <ConditionsText>
        <p>Умови</p>
        <p>Правила</p>
      </ConditionsText>
    </>
  );
};

export default Conditions;
