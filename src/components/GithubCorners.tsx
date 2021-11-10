import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import { APP_SOURCE_CODE_LINK } from '../config/CONSTANTS';

interface GithubCornersProps {
  
}

export const GithubCorners: React.FC<GithubCornersProps> = () => {
  return (
    <GitHubCorners
      href={APP_SOURCE_CODE_LINK}
      position="right"
      size={95}
    />
  );
}
