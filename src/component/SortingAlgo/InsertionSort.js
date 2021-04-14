/* base code of insertion sort
export const insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }

    return inputArr;
};
*/



export function insertionSort(inputArr){
  const animations = [];
  insertionHelper(inputArr,animations);
  return animations;
};
//173 182 108 191 114 75 164 44 125 132
function insertionHelper(array,animations){

  let length = array.length;
  for (let i = 1; i < length; i++) {
      let key = array[i];


      let j = i - 1;

      while (j >= 0 && array[j] > key) {

          animations.push([j+1, j]);
          animations.push([j+1, j]);
          animations.push([j + 1, array[j]]);
          //animations.push([j, array[j - 1]]);
          array[j + 1] = array[j];

          if (j>0){
          animations.push([j, j]);
          animations.push([j, j]);
          animations.push([j, key]);
        }

        j = j - 1;
      }
      animations.push([j+1, i]);
      animations.push([j+1, i]);
      animations.push([j + 1, key]);
      array[j + 1] = key;
  }

  return animations;


}
