// Modules
import styled from "styled-components";

// EventsFaqs
export const EventFaqsContent = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
    float: none;
    margin: 0 auto;
  }
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

// EventsFaqsContainer
export const EventAnswerQuestions = styled.div`
  @media (min-width: 400px) and (max-width: 600px) {
    display: flex;
    padding-left: 20px;
  }
  margin: 5px 0 0 0;
  li {
    list-style: none;
  }
  ul {
    list-style-position: inside;
    padding-left: 0;
    list-style-type: none;
  }
`;

// EventsFaqsAnswer
export const EventsFaqsAnswerDiv = styled.div`
  @media (min-width: 400px) and (max-width: 600px) {
    width: 400px;
  }
  width: 80%;
`;
export const EventsFaqsAnswerContent = styled.div`
  @media (min-width: 400px) and (max-width: 600px) {
    border-right: none;
  }
  display: flex;
  flex-direction: column;
  max-width: 684px;
  border-right: thin solid #ebebeb;
  padding-right: 40px;
  margin-right: 40px;
`;

export const FaqsAnswerHeader = styled.h2`
  margin-bottom: 16px;
  color: #172a58;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
`;

export const FaqsAnswerText = styled.span`
  color: #5c5c5c;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`;
