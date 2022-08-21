import styled from '@emotion/styled';
import { HiOutlineUserAdd } from 'react-icons/hi';

export const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space.ml};
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  border-radius: ${p => p.theme.radii.small};
  background-color: #d6e0ecd0;
  box-shadow: 5px 5px 10px 0px rgba(149, 167, 173, 1);

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;

export const PrimaryButtonIcon = styled(HiOutlineUserAdd)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
