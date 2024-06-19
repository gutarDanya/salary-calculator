export const baseTestUrl = 'http://localhost:3001';

export function checkValidity (...arg: any) {
    if (arg.some((input: any) => {return !input.inputValid === true})) {
        return true
    } else {
        return false
    }
}