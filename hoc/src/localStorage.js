import { v4 as uuidv4 } from "uuid";

const write = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const read = (key) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return [];
  }
  return JSON.parse(data);
};

export const create = (key, data) => {
  const allData = read(key);
  data.id = uuidv4();
  allData.push(data);
  write(key, allData);
};

export const destroy = (key, id) => {
  const allData = read(key);
  const filtered = allData.filter((d) => d.id !== id);
  write(key, filtered);
};

export const edit = (key, data, id) => {
  const allData = read(key);
  const edited = allData.map((d) =>
    d.id === id ? { ...d, ...data, id: id } : { ...d }
  );
  write(key, edited);
};
