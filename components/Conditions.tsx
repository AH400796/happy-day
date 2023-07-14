import {
  ConditionsTitle,
  ConditionsText,
  QuestLink,
} from "@styles/styled/Conditions.styled";

const Conditions: React.FC = () => {
  return (
    <>
      <ConditionsTitle>Запис на фотосесію</ConditionsTitle>
      <ConditionsText>
        <p>
          Якщо Ви переглянули фотоколекції і визначились, які з них Вам припали
          до душі - не зволікайте, реєструйтесь на фотосесію! Для цього
          перейдіть за{" "}
          <QuestLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEbmF__mD-L9v6G9iM3s1ZplhUyKzWEZxI1xT53MVJRRHRFQ/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <b>посиланням</b>{" "}
          </QuestLink>
          і заповніть невеличку анкету учасниці (це необхідно для збору
          менеджером попередньої інформації). Надалі можете просто розслабитись,
          пофантазувати на тему майбутньої зйомки та очікувати дзвінка від
          нашого менеджера, який Вам незабаром перетелефонує. Він проконсультує
          Вас щодо конкретної колекції, відповість на ваші запитання, перегляне
          графік фотосесій, щоб обрати комфортні для Вас дату та час зйомки,
          детально розповість що, де і як відбуватиметься та як попередньо
          підготуватись до фотосесії.
        </p>
      </ConditionsText>
    </>
  );
};

export default Conditions;
