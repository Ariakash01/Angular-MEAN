import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
const routeArray = [
  { id: 0, routeName: "/app/add-employee" },
  { id: 1, routeName: "/app/employees" },
  { id: 2, routeName: "/app/project" }]

export const canActiveChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log("--------------DeActivate------------------");
  const url = routeArray.findIndex(route => route.routeName == state.url);
  console.log(url);
  if (url === -1) {
    return false;
  }
  else {
    return true;
  }

};
