export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

// ?? --->SOLO null or undefined

const p1 = createProduct(1, false, 2);
console.log(p1);

