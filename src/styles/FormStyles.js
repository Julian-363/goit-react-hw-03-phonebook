import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-top: 5px;
`;

export const StyledButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #27ae60;
  }

  &:active {
    background-color: #1b5e20;
  }
`;
