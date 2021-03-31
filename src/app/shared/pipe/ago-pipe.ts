import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appAgo' })
export class AgoPipe implements PipeTransform {
  transform(value: any): any {
    // 转换时间戳差值/1000 得到相差秒数
    const seconds = Math.floor(( +new Date() - +new Date(value) ) / 1000)
    if(seconds < 30) {
      return '刚刚'
    }

    const intervals = {
      年: 3600 * 24 * 365,
      个月: 3600 * 24 * 30,
      天: 3600 * 24,
      小时: 3600,
      分钟: 60,
      秒钟: 1
    }

    let diffTime = 0
    for (const key in intervals) {
      if (intervals.hasOwnProperty(key)) {
        const val = intervals[key];
        diffTime = Math.floor(seconds / val)
        if(diffTime > 0) {
          return `${diffTime} ${key}前`
        }
      }
    }
    return value
  }
}