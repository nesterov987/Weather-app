export const getTime=(time:string):string => {
    return time.split(' ')[1].slice(0,5)
}