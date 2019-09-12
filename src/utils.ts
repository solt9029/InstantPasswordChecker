export default {
  localStorage: {
    addArrayItem: (key: string, value: string) => {
      const prevStr = localStorage.getItem(key);
      const prevArr = prevStr ? prevStr.split(',') : [];
      const arr = [...prevArr, value];
      console.log(arr);
      localStorage.setItem(key, arr.toString());
    },
  },
};
