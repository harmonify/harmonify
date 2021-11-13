import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import { APP } from '../config/APP';

interface GithubCornersProps {
  
}

export const GithubCorners: React.FC<GithubCornersProps> = () => {
  return (
    <GitHubCorners
      bgColor="#f07400"
      href={APP.src}
      position="right"
      size={120}
      className="z-50"
    />
  );
}
