import {HttpInterceptorFn} from '@angular/common/http'
import { request } from 'http'

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
    console.log(req)
    return next(req)

}
