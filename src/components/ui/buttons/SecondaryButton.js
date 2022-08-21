import styled from '@emotion/styled';
import { TiUserDeleteOutline } from 'react-icons/ti';

export const SecondaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space.m};
  font-size: ${p => p.theme.fontSizes.s};
  border: none;
  border-radius: ${p => p.theme.radii.small};
  background-color: #e8eaeed0;
  box-shadow: 5px 5px 10px 0px rgba(149, 167, 173, 1);

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;

export const SecondaryButtonIcon = styled(TiUserDeleteOutline)`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
