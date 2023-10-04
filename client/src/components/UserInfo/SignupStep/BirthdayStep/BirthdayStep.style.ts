import { Flex } from '@/components/common/Flex/Flex';
import styled from 'styled-components';

export const BirthdayTitle = styled.h3`
  color: ${({ theme }) => theme.color.primary};
`;

export const BirthdayWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 2rem;
  gap: 1rem;
`;

export const BirthdayBody = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
