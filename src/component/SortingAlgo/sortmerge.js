/*export const mergeSort= array => {
    if (array.length=== 1) return array;
    const midlleidx = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0,midlleidx));
    const sechalf = mergeSort(array.slice(midlleidx));
    const sortedArray = [];
    let i = 0,
    j=0;
    while (i<firstHalf.length && j<sechalf.length){
        if (firstHalf[i] < sechalf[j]){
            sortedArray.push(firstHalf[i++]);
        }else{
            sortedArray.push(sechalf[j++]);
        }
    }
    while(i<firstHalf.length) sortedArray.push(firstHalf[i++]);
    while(j<sechalf.length) sortedArray.push(sechalf[j++]);
    return sortedArray;
};*/
