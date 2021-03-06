const config = require('./config');

const {
  columns,
  rows,
  matchesRequired
} = config;

module.exports = isVertical;

/**
 * Are there matches found vertically?
 * @param {Array} grid Multimentional array containing the connect4 grid
 *
 * @return {Boolean}
 */
function isVertical(grid) {

  for (let x = 0; x < columns; x++) {

    // New stats (which piece was found and how many) for new column
    let found = 0;
    let foundPiece = 0;

    for (let y = 0; y < rows; y++) {

      // Current piece in this cell
      let piece = grid[x][y];

      // Go to next cell if current piece is 0
      if (piece === 0) {
        continue;
      }

      if (piece !== foundPiece) {
        found = 1;
        foundPiece = piece;
        continue;
      }

      // Increase number of found pieces
      found++;

      // More than 4 found pieces in a column?
      if (found >= matchesRequired) {
        return true;
      }
    }
  }

  // No matches found
  return false;
}
