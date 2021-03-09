const getValues = (from, to, array) => {

}

const snailArrays = simpleArray => {
  let xOrigin = 0;
  let yOrigin = 0;
  let xEnd = simpleArray.length;
  let yEnd = simpleArray[0].length;
  let values = [];

  while(xOrigin < xEnd && yOrigin < yEnd) {
    let from = [xOrigin, yOrigin];
    let to = [xEnd, yOrigin]
    values = [...values, getValues( from, to, simpleArray)];
    ++yOrigin;
    from = [...to];
    to = [xEnd, yEnd];
    values = [...values, getValues( from, to, simpleArray)];
    --xEnd;
    from = [...to];
    to = [xOrigin, yEnd];
    values = [...values, getValues( from, to, simpleArray)];
    --yEnd;
    from = [...to];
    to = [xOrigin, yOrigin];
    values = [...values, getValues( from, to, simpleArray)];
    ++xOrigin;
  };

  return values;
};

module.exports = {
  snailArrays,
  getValues
};