export const throttle = < T extends ((...agrs:unknown[])=> any) > (fn:T,time:number) => {
    let timer: number | undefined = undefined;
    let result:ReturnType<T>
    return (...agrs: Parameters<T>)=> {
        if (timer) {
            return result
        } else {
            result = fn(...agrs)
            timer = setTimeout(() => {
                timer = undefined
            }, time);
            return result
        }
    }
}