// 1)	Напишите код, который находит наиболее часто используемый элемент массива.

// const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]
// let sortObj = {}
// let count, max = 0;
// let output = '';

// for (var i = 0; i < arr.length; i++) {
// 	if (sortObj[arr[i]] != true) {
// 		for (var j = i; j < arr.length; j++) {
// 			if (arr[i] == arr[j]) {
// 				count++;
// 			}
// 		}

// 		if (count > max) {
// 			max = count;
// 			output = arr[i] + " повторяется " + count + " раз";
// 		}
// 		count = 0;
// 	}
// 	sortObj[arr[i]] = true;
// }

// console.log(output)

// 2)	Напишите функцию removeItem которая  принимает коллбэк и удаляет определенный элемент из массива.

// const arr = [1, 4, 7, 5, 2, 3, 6, 7, 12, 2, 1, 7, 2]

// const removeItem = (comeback) => {
// 	comeback(12, arr);
// }

// const deletedNumber = (items, arr) => {
// 	let num = arr.lastIndexOf(items);
// 	return arr.splice(num, 9, arr)
// }

// console.log(arr)
// removeItem(deletedNumber);
// console.log(arr)






// Самостоятельнаяя работа
// 1)	Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1]

// const arr = [1, 2, 3]

// arr.reverse()

// console.log(arr)

// 3)	Напишите функцию  которая возвращает массив, элементы которого отсортированы по убыванию их значений 

const numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1]
function compareNumbers(arr) {
}

compareNumbers(numbers);