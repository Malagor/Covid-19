export const grades = {
  allWorld: {
    cases: [0, 100, 1000, 10000, 100000, 1000000],
    deaths: [0, 500, 1000, 5000, 10000, 100000],
    recovered: [0, 100, 1000, 10000, 100000, 1000000],
  },
  per100k: {
    cases: [0, 100, 1000, 10000, 100000, 500000],
    deaths: [0, 10, 30, 50, 70, 100],
    recovered: [0, 100, 1000, 10000, 100000, 500000],
  },
};

export const getGradesList = (type, population) => {
  return population ? grades.per100k[type] : grades.allWorld[type];
};


export const getGradeIndex = (num, type, population) => {
  const locPop = population ? 'per100k' : 'allWorld';
  let index = null;

  grades[locPop][type].forEach((el, idx) => {
    if (el > num) {
      if (index === null) {
        index = idx;
      }
    }
  });

  if (index === null){
    index = 6;
  }
  return index;
};
