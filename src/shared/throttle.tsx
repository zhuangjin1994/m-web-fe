export const throttle = (fn:Function,time:number) => {
    let timer: number | undefined = undefined;
    return (...agrs: any[])=>{
        if (timer) {
            return
        } else {
            fn(...agrs)
            timer = setTimeout(() => {
                timer = undefined
            }, time);
        }
    }
}