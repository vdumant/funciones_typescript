let anyVar: any;
anyVar = true;
anyVar = 1;

let unknownVar: unknown;
unknownVar = true;
unknownVar = 1;
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
if (typeof unknownVar === 'boolean') {
  let isNew: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
