import { AuthorInterface } from './AuthorInterface';

export interface AppInterface {
  name: string,
  description: string,
  version: string,
  src: string,
  homepage: string,
  author: AuthorInterface,
};

