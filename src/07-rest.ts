import { User, ROLES } from "./01-enum";
const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log(rta);
// ... REST PARAMS
export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.CUSTOMER);
