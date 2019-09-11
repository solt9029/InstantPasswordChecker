export default {
  localStorage: {
    addArrayItem: (key: string, value: string) => {
      const prevStr = localStorage.getItem(key);
      const prevArr = prevStr ? prevStr.split(',') : [];
      const arr = [...prevArr, value];
      localStorage.setItem(key, arr.toString());
    },
  },
};
