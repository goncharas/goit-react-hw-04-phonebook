import styled from 'styled-components';

export const ContactFormStyle = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding: 32px;
  border: 2px solid #290723;
  border-radius: 4px;
`;

export const LabelForm = styled.label`
  font-weight: 500;
  font-size: 20px;
  color: #290723;
`;

export const InputForm = styled.input`
  margin-top: 4px;
  outline: none;
  border: 2px solid #290723;
  border-radius: 4px;
  &:first-child {
    margin-bottom: 8px;
  }
`;

export const ButtonForAdd = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 8px;
  border: 2px solid #290723;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #21201e;
  background-color: #26f10fcf;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.12);
    color: #21201e;
  }
`;