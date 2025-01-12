export const formatLargeNumber = (number) => {
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = 0;

  while (number >= 1000) {
    number /= 1000;
    suffixNum++;
  }

  // Round to a specific number of decimal places (e.g., 1)
  const roundedNumber = number.toFixed(1);

  // Add the suffix
  return `${roundedNumber}${suffixes[suffixNum]}`;
}