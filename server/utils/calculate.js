/**
 *
 * @param {Date} entry
 * @return {number} calculated bill
 */
function calculateFair(entry) {
  const checkOutTime = new Date();

  const secondsElapsed = (checkOutTime - entry) / 1000;
  const hours = Math.ceil(secondsElapsed / (60 * 60));

  const charge = hours <= 3 ? hours * 20 : 3 * 20 + (hours - 3) * 5;
  return charge;
}

module.exports = { calculateFair };
