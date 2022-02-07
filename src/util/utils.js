export const getLetterCount = (str) => {
    const obj = {};
    for(let x = 0; x < str.length; x++) {
        let l = str.charAt(x)
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    return obj;
}