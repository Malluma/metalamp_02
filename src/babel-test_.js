
const unused = 42;

export default () =>{
	const arr = Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
	console.log(`babel-test array [1,2,3]: ${arr}`)
}
