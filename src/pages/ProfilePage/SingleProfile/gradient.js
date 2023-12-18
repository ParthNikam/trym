// Source: https://hypercolor.dev/
const gradients = [
  "linear-gradient(to bottom right, #001B79, #1640D6, #ED5AB3, #FF90C2)",
  "linear-gradient(to bottom right, #FFF3E2, #FFE5CA, #FA9884, #E74646)",
  "linear-gradient(to bottom right, #0802A3, #FF4B91, #FF7676, #FFCD4B)",
  "linear-gradient(to bottom right, #B799FF, #ACBCFF, #AEE2FF, #E6FFFD)",
  "linear-gradient(to bottom right, #0A2647, #144272, #205295, #2C74B3)",
  "linear-gradient(to bottom right, #FFBB5C, #FF9B50, #E25E3E, #C63D2F)",
  "linear-gradient(to bottom right, #48BB78, #4299E1, #9F7AEA)",
  "linear-gradient(to bottom right, #FB429D, #9F7AEA, #667EEA)",
  "linear-gradient(to bottom right, #93C5FD, #EF4444, #F59E0B)",
  "linear-gradient(to bottom right, #EF4444, #F472B6, #FBBF24)",
  "linear-gradient(to bottom right, #9AE6B4, #22D3EE, #4299E1)",
  "linear-gradient(to bottom right, #93C5FD, #667EEA)",
  "linear-gradient(to bottom right, #9AE6B4, #38A169)",
  "linear-gradient(to bottom right, #93C5FD, #3B82F6, #4299E1)",
];


/** Select a random gradient from the array of gradients based on a
 *  hash of the username string. If the username has already been hashed,
 *  reuse the same graident picked.
 */
export function getGradient(username) {
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  if (username) {
    const hash = hashCode(username);
    const index = hash % gradients.length;
    return gradients[Math.abs(index)];
  } else {
    return gradients[Math.floor(Math.random() * gradients.length)];
  }
}
