export const list = () => {
  const data = window.localStorage.getItem('@rythym:notes');

  return data ? JSON.parse(data) : undefined;
};
