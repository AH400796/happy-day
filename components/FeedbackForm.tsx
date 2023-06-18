"use client";

import { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { notify } from "@utils/notification";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { createFeedback } from "@utils/api";

import {
  FormWrapper,
  RadioWrapper,
  StyledForm,
  StyledInputLabel,
  StyledRadioLabel,
  StyledInput,
  StyledTextarea,
  ErrWrapper,
  RadioInput,
  StyledRadioSection,
  StyledRadioInput,
  FeedbackBtn,
  BtnWrapper,
} from "../styles/styled/FeedbackForm.styled";

const FeedbackSchema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "Не менше 2 символів")
    .required("Вкажіть своє ім'я"),
  userFeedback: yup
    .string()
    .min(10, "Не менше 10 символів")
    .required("Залиште відгук"),
  rating: yup.number().required("Вкажіть свою оцінку"),
});

const initialValues = {
  userName: "",
  userFeedback: "",
  rating: "",
};

type Values = {
  userName: string;
  userFeedback: string;
  rating: string;
};

const initialRatings = [1, 2, 3, 4, 5];

const FeedbackForm: React.FC = () => {
  const [feedbackRating, setFeedbackRating] = useState<number>(0);

  const handleOnSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    try {
      const response = await createFeedback(values);
      if (response.status === 201) {
        notify("success", "Ваш відгук успішно опублікований!");
      }
    } catch (error) {
      notify("error", "Ваш відгук не опублікований");
    }
    resetForm();
    setFeedbackRating(0);
  };

  const handleOnClick = (el: number): void => {
    setFeedbackRating(el);
  };

  const handleOnResetClick = (resetForm: Function): void => {
    resetForm();
    setFeedbackRating(0);
  };

  return (
    <FormWrapper id="feedBack">
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ values, handleChange, handleBlur, resetForm, errors, touched }) => {
          return (
            <StyledForm>
              <StyledInputLabel>
                {`Ваше ім'я:`}
                <StyledInput type="text" name="userName" placeholder="Ім'я" />
                {errors.userName && touched.userName && (
                  <ErrWrapper>{errors.userName}</ErrWrapper>
                )}
              </StyledInputLabel>
              <StyledInputLabel>
                Ваш відгук:
                <StyledTextarea
                  name="userFeedback"
                  rows={3}
                  placeholder="Залиште кілька слів..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userFeedback}
                />
                {errors.userFeedback && touched.userFeedback && (
                  <ErrWrapper>{errors.userFeedback}</ErrWrapper>
                )}
              </StyledInputLabel>
              <StyledRadioSection>
                Ваша оцінка:
                <RadioWrapper>
                  {initialRatings.map((el) => {
                    const isGreater: boolean = feedbackRating >= el;
                    return (
                      <StyledRadioInput
                        key={el}
                        onClick={() => handleOnClick(el)}
                        data-feedback={isGreater}
                      >
                        <StyledRadioLabel>
                          <FaCrown size={25} color={"inherit"} />
                          <RadioInput
                            type="radio"
                            name="rating"
                            value={el}
                            checked={Number(values.rating) === el}
                          />
                        </StyledRadioLabel>
                      </StyledRadioInput>
                    );
                  })}
                </RadioWrapper>
                {errors.rating && touched.rating && (
                  <ErrWrapper>{errors.rating}</ErrWrapper>
                )}
              </StyledRadioSection>
              <BtnWrapper>
                <FeedbackBtn
                  type="button"
                  onClick={() => handleOnResetClick(resetForm)}
                >
                  Очистити
                </FeedbackBtn>
                <FeedbackBtn type="submit">Надіслати</FeedbackBtn>
              </BtnWrapper>
            </StyledForm>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};

export default FeedbackForm;
