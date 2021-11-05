// Link: https://edabit.com/challenge/kDoi6Eob7KuELwjjp

// Create a function that takes a code of chess board square and return his color.

// Examples
// chessBoard("a1") ➞ "black"
// chessBoard("e5") ➞ "black"
// chessBoard("d1") ➞ "white"

// First solution (maybe not the best, brute force)
function chessBoard(pole) {
  const [letter, position] = pole.split('');
  const letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const firtP = isPair(letters[letter]);
  const secondP = isPair(position);

  if (firtP) {
    if (secondP) {
      return 'black';
    } else {
      return 'white';
    }
  } else {
    if (!secondP) {
      return 'black';
    } else {
      return 'white';
    }
  }
}

function isPair(num) {
  return num % 2 === 0;
}
