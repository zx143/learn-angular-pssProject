export function Emoji() {
  return (target: object, key: string) => {
    let val = target[key]

    const getter = () => {
      return val
    }

    const setter = (value: string): string => {
      return  val = `😳 ${value} 😳`
    }

    // 使用defineProperty进行劫持
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}

export function Confirmable(message: string) {
  return (target: object, key:string, descriptor: PropertyDescriptor) => {
    // console.log('descriptor', descriptor.value);
    const original = descriptor.value
    descriptor.value = (...args: any)=> {
      const allow: boolean = window.confirm(message)
      if(allow) {
        const result = original.apply(this, args)
        return result
      }
      return null
    }
    return descriptor
  }
}