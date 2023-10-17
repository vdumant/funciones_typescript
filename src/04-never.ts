const withoutEnd = () => {
  while (true) {
    console.log('no pares de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es string';
  } else if (Array.isArray(input)) {
    return 'es array';
  }
  return fail('not match');
}

console.log(example('hola'));
console.log(example([1, 2, 3]));
