function getTime(time) {
  return new Date(Date.parse(time)).toLocaleString('ru-RU');
}

export default getTime;
