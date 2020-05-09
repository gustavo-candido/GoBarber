import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 10px;
  color: #312e38;
  background: #ff9000;
  font-weight: 500;
  padding: 0 16px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
