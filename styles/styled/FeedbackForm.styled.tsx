"use client";

import styled from "styled-components";
import { Form, Field } from "formik";

interface IStyledProps {
  "data-feedback"?: boolean;
}

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`;
export const RadioWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;

export const StyledForm = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const StyledInputLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  font-size: 16px;
  font-weight: 500;

  color: #4e6739;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledRadioLabel = styled.label`
  height: 25px;
  cursor: pointer;
`;

export const StyledRadioSection = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  font-size: 16px;
  font-weight: 500;

  color: #4e6739;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledInput = styled(Field)`
  width: 180px;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
  background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);

  color: #4e6739;

  border: none;
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #5b6652;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 180px;
  padding: 5px 10px;
  font-weight: 600;
  font-size: 14px;

  background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
  color: #4e6739;

  border-radius: 5px;
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #5b6652;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledRadioInput = styled.li<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props[`data-feedback`] ? "#f78629" : "#aaaaaa")};
`;

export const RadioInput = styled(Field)`
  display: none;
`;

export const ErrWrapper = styled.span`
  position: absolute;
  bottom: -19px;
  right: 0;
  padding: 0 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.35;
  border-radius: 3px;
  background-color: #f3e9c7;
  color: #ff1d1d;
`;

export const FeedbackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 140px;
  height: 35px;
  font-size: 14px;
  font-weight: 600;

  border-radius: 10px;
  background: #4e6739;
  border: 1px solid transparent;

  color: #ffdd61;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
    color: #f78629;
    border: 1px solid #f78629;
  }
`;
