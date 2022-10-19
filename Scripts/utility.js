// export class EmployeeModel{
//     constructor(){
        
//         this.name  = '';
//         this.age = 0;
//     }
// }

export function getQueryParams(url) {
    const paramArr = url.slice(url.indexOf('?') + 1).split('&');
    const params = {};
    paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
    })
    return params;
}