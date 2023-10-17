export function parseStr(input:string):string[];
export function parseStr(input:string[]):string;
export function parseStr(input:number):boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join();
//   } else {
//     return input.split('');
//   }
// }
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join();
  } else if(typeof input === 'string') {
    return input.split('');
  } else if(typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('Nico');
rtaArray.reverse();
console.log('array', rtaArray);

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
console.log('string', rtaStr);

