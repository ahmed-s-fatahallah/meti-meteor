//  OFFSET BETWEEN OUTER ANGLES AND CIRCLE FOR YELLOW METEOR
export const ANGLES_TO_CIRCLE_OFFSET = 71;
export const METEORS_COUNTER = 1;
export const TURNS_COUNT = 5;

//  GENERATE RANDOM METEORS NUMBER BETWEEN 3-5
export const GENERATE_RND_METEORS_NUM = function () {
  const requiredMeteors = Math.trunc(Math.random() * (5 - 3 + 1) + 3);
  return requiredMeteors;
};

//  FOOTER GET YEAR FUCNTION FOR COPYRIGHT
export const GET_CURRENT_YEAR = function () {
  const year = new Date().getFullYear();
  return year;
};
