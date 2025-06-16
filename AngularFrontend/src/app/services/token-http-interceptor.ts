import { HttpInterceptorFn } from "@angular/common/http";

export const tokenHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  console.log("Token from localStorage:", token);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`  // correct spacing
      },
    });
  }

  return next(req);
};
