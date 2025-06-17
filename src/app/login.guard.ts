import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const logoutService=inject(AuthService);
const router=inject(Router)
  // if (!logoutService.logout()){
  //   return false;
  // }
  // else{
  //   router.navigate(['/login']);
  //   return true;
  // 
  if (logoutService.logout()) {
     return true;
 }
  return true;
};
