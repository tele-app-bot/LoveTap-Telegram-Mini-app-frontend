export const  isAllObjects = (arr:any[])=> {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === undefined) {
            return false;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object') {
            return false;
        }
    }
    
    return true;
}
