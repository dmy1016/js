const arrOne = [0, 1, 2, 3, 4, 5];
/**
 * 第一个参数是要复制到数组的什么位置
 * 第二个参数是复制的元素从数组的哪个地方开始
 * 第三个参数是复制的元素从哪个地方结束，但是不包括这个位置
 * 如果 2，3参数为负数那么就是倒着取
 */
console.log(arrOne.copyWithin(0, 3, 5));

