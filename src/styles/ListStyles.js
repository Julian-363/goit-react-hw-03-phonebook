import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  max-width: 900px;
  padding-left: 430px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
