const separator = ' ';

const reverse = (fromIndex, toIndex, arr) => {
  // mirror swap entries.
  let temp;
  while (fromIndex < toIndex) {
    temp = arr[fromIndex];
    arr[fromIndex] = arr[toIndex];
    arr[toIndex] = temp;
    fromIndex++;
    toIndex--;
  }
}

const shouldReverseEntry = (index, arr) => {
  // Because we trim the input. If an IndexOutOfBounds exception happens here it must be thrown.
  return arr[index] === separator && arr[index + 1] !== separator;
}

const start = (arr) => {
  let currentStart = 0;
  // First we reverse the whole arr
  reverse(currentStart, arr.length - 1, arr);
  // Second we iterate over the reversed array
  for (let i = 0; i < arr.length; i++) {
    // Is this an end of an entry?
    if (shouldReverseEntry(i, arr)) {
      // start reversing for this entry & then update the current start.
      // we consider spaces to be part of the word and it will be reversed with it.
      // Ref: Spaces may be prepended to, or appended after, the sentence. Spaces
      // must not be truncated or removed.
      reverse(currentStart, i - 1, arr);
      currentStart = i + 1;
    }
  }
  // handle special case for the last word.
  reverse(currentStart, arr.length - 1, arr);
}

const input = process.argv[2];
const arr = Array.from(input.trim());
start(arr);

console.log(`Input: "${input}"`);
console.log(`Output: "${arr.join('')}"`);