import React from 'react';
import { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({ photo, alt }) => {
  return (
    <img
      src={photo}
      alt={'Avatar user' && alt}
      width="40px"
      height="40px"
      loading="lazy"
    />
  );
};

export default Avatar;
