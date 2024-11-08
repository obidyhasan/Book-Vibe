export const getItemFromLocalStorage = (key) => {
  const getData = localStorage.getItem(key);
  if (getData) {
    return JSON.parse(getData);
  } else {
    return [];
  }
};

export const checkIsExits = (id, key) => {
  const getData = getItemFromLocalStorage(key);

  if (getData.includes(id)) {
    return true;
  } else {
    return false;
  }
};

export const addItemToLocalStorage = (data, key) => {
  const getData = getItemFromLocalStorage(key);

  getData.push(data);
  localStorage.setItem(key, JSON.stringify(getData));
};
