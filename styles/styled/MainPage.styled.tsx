"use client";

import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const AboutTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 5px 5px 10px 5px;

  border-radius: 10px 10px 0 0;
  background-color: #4e6739;
  color: #ffc803;

  @media screen and (min-width: 768px) {
    padding: 5px 10px 10px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 15px 15px 15px;
  }
`;

export const AboutTitleText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const AboutText = styled.div`
  padding: 20px 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  text-indent: 20px;
  column-count: 1;
  column-rule: 1px dotted #4e6739;

  border: 1px solid #4e6739;
  color: #4e6739;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    column-count: 2;
    column-gap: 40px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    column-count: 3;
    column-gap: 50px;
    font-size: 20px;
  }
`;

export const ContactTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 5px 5px 10px 5px;

  border-radius: 10px 10px 0 0;
  background-color: #4e6739;
  color: #ffc803;

  @media screen and (min-width: 768px) {
    padding: 5px 10px 10px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 15px 15px 15px;
  }
`;

export const ContactTitleText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const ContactText = styled.div`
  padding: 20px 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  text-indent: 20px;
  column-count: 1;
  column-rule: 1px dotted #4e6739;

  border: 1px solid #4e6739;
  color: #4e6739;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    column-count: 2;
    column-gap: 40px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    column-count: 3;
    column-gap: 50px;
    font-size: 20px;
  }
`;

export const FeedbackTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 5px 5px 10px 5px;

  border-radius: 10px 10px 0 0;
  background-color: #4e6739;
  color: #ffc803;

  @media screen and (min-width: 768px) {
    padding: 5px 10px 10px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 15px 15px 15px;
  }
`;

export const FeedbackTitleText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const FeedbackText = styled.div`
  padding: 20px 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  text-indent: 20px;
  column-count: 1;
  column-rule: 1px dotted #4e6739;

  border: 1px solid #4e6739;
  color: #4e6739;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    column-count: 2;
    column-gap: 40px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    column-count: 3;
    column-gap: 50px;
    font-size: 20px;
  }
`;
