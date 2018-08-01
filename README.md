# showIndices
Returns all the indices (zero-based positions) in the string where each character is found

The function should return all the indices (zero-based positions) in the string
where each character is found. So for each letter, we are returning
(potentially) multiple numbers to represent all the places in the string that it shows up.

"hello" will result in
{
 h: [0],
 e: [1],
 l: [2, 3],
 o: [4]
}
