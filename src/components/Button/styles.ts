import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  loading?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
    `}

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
