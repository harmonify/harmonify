import { APP } from '../config/APP';

export function getRoles() : string | null {
  let roles = null;

  if (APP.author.roles) {
    roles = APP.author.roles
      .reduce((acc, curr) => {
        return acc + ', ' + curr;
      });
  }
  
  return roles;
}
