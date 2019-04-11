const calcMonth = target => {
  const current = new Date().getMonth();
  const newMonth = current + target;
  return newMonth > 11 ? newMonth - 12 : newMonth;
};

export default calcMonth;
