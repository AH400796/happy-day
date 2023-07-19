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
          Якщо ви хочете замовити фотосесію або отримати додаткову інформацію
          про наші послуги, вільні для замовлення дати в графіку, дані про
          локацію проведення фотосесії чи маєте будь-які запитання - не
          соромтесь, {"зв'яжіться"} з нашими менеджерами.
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
          , заповніть анкету учасниці, і наш менеджер незабаром вам
          перетелефонує, прокунсультує, дасть слушні поради чи відповість на
          запитання.
        </p>
        <p>
          Якщо ж вам потрібна консультація - просто {"зв'яжіться"} з нами за
          допомогою контактів, розміщеними на сайті (номерами мобільного{" "}
          {"зв'язку"} та адресами соцмереж <b>Instagram</b>, <b>Facebook</b> чи{" "}
          <b>Telegram</b>), і ми радо відповімо на всі ваші запитання.
        </p>
      </ContactText>
    </>
  );
};

export default Contact;
