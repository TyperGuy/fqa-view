import styled from 'styled-components';

export const CustomContainer = styled.div<{ dir: string }>`
  width: 700px;
  display: flex;
  flex-direction: ${({ dir }) => dir};
  align-items: center;
  justify-content: space-between;
  padding: 8px 5px;
`;
