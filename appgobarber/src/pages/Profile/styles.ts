import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 64px;
  z-index: 1;
  /* Increase button area */
  padding: 0 15px 15px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 93px;
  margin-top: 64px;
  align-self: center;
`;
