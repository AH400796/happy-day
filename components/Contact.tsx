import { FaCrown } from "react-icons/fa";
import {
  ContactTitle,
  ContactTitleText,
  ContactText,
} from "@styles/styled/Contact.styled";

const Contact: React.FC = () => {
  return (
    <>
      <ContactTitle>
        <FaCrown size={25} color={"#f78629"} />
        <ContactTitleText>{"ЗВ'ЯЖІТЬСЯ З НАМИ"}</ContactTitleText>
        <FaCrown size={25} color={"#f78629"} />
      </ContactTitle>
      <ContactText>
        <p>
          Якщо Ви хочете замовити фотосесію або зацікавленні в отриманні
          додаткової інформації щодо наших послуг, вільних до замовлення дат у
          графіку фотосесій, інформації щодо локацій проведення фотосесії чи у
          Вас є будь-які інші запитання - не соромтесь {"зв'язатись"} з нашими
          менеджерами.
        </p>
        <p>
          Скористайтесь для цього нашими контактами, розміщеними на сайті:
          номерами мобільного {"зв'язку"} та адресами соцмереж Instagram,
          Facebook чи Telegram. Ми з радістю надамо Вам будь яку інформацію, що
          Вас цікавить.
        </p>
      </ContactText>
    </>
  );
};

export default Contact;
