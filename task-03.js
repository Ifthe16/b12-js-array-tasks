/* Task-03 */
const books = ['physics', 'chemistry', 'biology', 'computer science', 'mathematics', 'higher mathematics', 'javascript'];
console.log(books);

const checkBook = books.includes('javascript');

if (checkBook) {
    console.log("JavaScript book is present in the array.");
}
else {
    console.log("JavaScript book is not present in the array.");
}
