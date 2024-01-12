function ufToItem(ufs) {
  return ufs.map((uf) => ({
    label: uf.sigla,
    value: uf.sigla,
  }));
}

function cityToItem(cities) {
  return cities.map((city) => ({
    label: city.nome,
    value: city.nome,
  }));
}

export const localsAdapter = {
  ufToItem,
  cityToItem,
};
