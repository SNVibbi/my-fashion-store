export const fetchProducts = async (page: number, limit: number) => {
  const res = await fetch(`/api/products?organization_id=1af3d7190adc400082a40d0228c1db00&Appid=R5NQLQO73Q45EKZ&Apikey=dece8d2742f1403485564a1d800b5ba420240713032401503053&page=${page}&limit=${limit}`);
  const data = await res.json();
  return data;
};

export const fetchProductById = async (id: number) => {
  const res = await fetch(`/api/products/${id}?organization_id=1af3d7190adc400082a40d0228c1db00&Appid=R5NQLQO73Q45EKZ&Apikey=dece8d2742f1403485564a1d800b5ba420240713032401503053`);
  const data = await res.json();
  return data;
};
