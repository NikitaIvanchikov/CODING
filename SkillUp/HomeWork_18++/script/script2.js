function rangeNumbers (a,b) {
  if (a < b) {
    for (; a < b; a++) {
      if ((a % 2) == 1) console.log (a)
    }
  }
};

rangeNumbers (2,30);