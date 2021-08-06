export const updateTime = (currentTime) => {
  const hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  const timeString = hours + ":" + minutes;
  return timeString;
}

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
}
