import {
  ContactTitle,
  ContactText,
  QuestLink,
} from "@styles/styled/Contact.styled";

const Contact: React.FC = () => {
  return (
    <>
      <ContactTitle>{"Зв'яжіться з нами"}</ContactTitle>
      <ContactText>
        <p>
          Якщо Ви хочете замовити фотосесію або зацікавленні в отриманні
          додаткової інформації щодо наших послуг, вільних до замовлення дат у
          графіку, інформації щодо локацій проведення фотосесії чи у Вас є
          будь-які інші запитання - не соромтесь {"зв'язатись"} з нашими
          менеджерами.
        </p>
        <p>
          Для запису на фотосесію, перейдіть за{" "}
          <QuestLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEbmF__mD-L9v6G9iM3s1ZplhUyKzWEZxI1xT53MVJRRHRFQ/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <b>посиланням</b>
          </QuestLink>
          , заповніть анкету учасниці та очікуйте дзвінка менеджера, який Вам
          незабаром перетелефонує, проконсультує та дасть поради чи відповість
          на ваші запитання.
        </p>
        <p>
          Якщо ж Ви хочете отримати консультацію чи маєте якісь запитання -
          просто {"зв'яжіться"} з нами, скориставшись контактами, розміщеними на
          сайті (номерами мобільного {"зв'язку"} та адресами соцмереж{" "}
          <b>Instagram</b>, <b>Facebook</b> чи <b>Telegram</b>), і ми при з
          радістю відповімо Вам на усі ваші запитання.
        </p>
      </ContactText>
    </>
  );
};

export default Contact;
