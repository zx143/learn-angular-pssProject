import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 在请求头添加重复参数(每个请求都需要)
    const modifiedReq = req.clone({
      setParams: {
        cookie: environment.myCookie
      }
    })
    return next.handle(modifiedReq);
  }
}