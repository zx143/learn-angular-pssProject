import { InjectionToken } from '@angular/core'

export * from './home-service'
// 避免重复字符串冲突
export const token = new InjectionToken<string>('baseURL')