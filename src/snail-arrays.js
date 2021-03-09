const getValues = (from, to, array) => {
  let values = [];

  if(from[0] < to[0] || from[1] < to[1]){
    for (let row = from[0]; row <= to[0]; row++) {
      for (let column = from[1]; column <= to[1]; column++) {
        values = [...values, array[row][column]];
      };
    };
  } else {
    for (let row = from[0]; row >= to[0]; row--) {
      for (let column = from[1]; column >= to[1]; column--) {
        values = [...values, array[row][column]];
      };
    };
  }

  return values;
};

const snailArrays = simpleArray => {
  let xOrigin = 0;
  let yOrigin = 0;
  let xEnd = simpleArray.length - 1;
  let yEnd = simpleArray[0].length - 1;
  let values = [];

  while(xOrigin < xEnd && yOrigin < yEnd) {
    let from = [xOrigin, yOrigin];
    let to = [xOrigin, yEnd]
    values = [...values, ...getValues( from, to, simpleArray)];
    ++xOrigin;
    from = [xOrigin, yEnd];
    to = [xEnd, yEnd];
    values = [...values, ...getValues( from, to, simpleArray)];
    --yEnd;
    from = [xEnd, yEnd];
    to = [xEnd, yOrigin];
    values = [...values, ...getValues( from, to, simpleArray)];
    --xEnd;
    if(xEnd > 0) {
      from =  [xEnd, yOrigin];
      to = [xOrigin, yOrigin];
      values = [...values, ...getValues( from, to, simpleArray)];
    }
    ++yOrigin;
  };

  if(xOrigin <= xEnd && yOrigin <= yEnd){
    values = [...values, ...getValues([xOrigin, yOrigin], [xEnd, yEnd], simpleArray)]
  };

  return values;
};

module.exports = {
  snailArrays,
  getValues
};