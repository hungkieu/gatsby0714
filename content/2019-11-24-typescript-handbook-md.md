---
title: Typescript Handbook
date: 2019-11-24T07:00:06.111Z
cover: /assets/1_mn6bos7s6qbao15pmnryoa.png
slug: typescript-handbook
category: translate
tags:
  - translate
  - typescript
---
# Introduction
Để một chương trình có thể hữu ích, chúng ta cần phải làm việc với nhiều loại dữ liệu đơn gian: số, văn bản, cấu trúc dữ liệu, các giá trị boolean, ... Trong Typescript, chúng tôi hỗ trợ đầy đủ các loại dữ liệu mà bạn cần trong Javascript, cùng các loại dữ liệu khác giúp bạn trong các vấn đề kèm theo.

# Boolean
Kiểu dữ liệu cơ bản nhất là giá trị true/false, được gọi là giá trị boolean trong Javascript and Typescript

```ts
let isDone: boolean = false;
```

# Number

Giống như trong Javascript, tất cả các giá trị số trong TypeScript đều là giá trị floating point. Những giá trị này có kiểu dữ liệu là Number. Ngoài kiểu số thập lục phân và số thập phân, TypeScript cũng hỗ trợ hệ nhị phân và hệ bát phân được giới thiệu trong ECMAScript 2015.

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

# String

Việc viết một chương trình bằng JavaScript cho các trang web và trên máy chủ có một phần giống nhau cơ bản nữa là xử lý các kiểu dữ liệu văn bản. Giống như trong các ngôn ngữ khác, chúng tôi sử dụng kiểu dữ liệu string để chỉ các loại dữ liệu văn bản này. Và giống như trong JavaScript, TypeScript cũng sử dụng giấu nháy kép (") và dấu nháy đơn (') trong việc bao quanh các dữ liệu string.

```ts
let color: string = "blue";
color = 'red';
```

Bạn cũng có thể sử dụng template strings để có thể viết trên nhiều dòng và nhúng các biểu thức. Các giá string được bao quanh bởi dấu backtick/backquote (\`), và các biểu thực thì có dạng ${expression}.

```ts
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
```

Đoạn code trên tương đương với biến sentence được khai báo như sau:
```
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

# Array 

TypeScript, giống như Javascript, cho phép bạn làm việc với các mảng giá trị. Kiểu dữ liệu mảng có thể được viết theo một hoặc hai cách. Cách đầu tiên, bạn sử dụng kiểu dữ liệu của phần tử và theo sau là dấu [] để biểu thị một mảng chỉ chứ dữ liệu có kiểu dữ liệu của phần tử:

```ts
let numbers: number[] = [1,2,3,4,5];
```
    
Cách thứ hai bạn sử dụng kiểu dữ liệu Array\<elemType>:

```ts
let numbers: Array<number> = [1,2,3,4,5];
```
# Tuple

Kiểu dữ liệu Tuple cho phép bạn diễn tả một mảng với một số lượng cố định các phần tử có kiểu dữ liệu. Nhưng không cần giống nhau. Ví dụ, bạn có thể muốn có một cặp giá trị string và một number:

```ts
// Declare a tuple type
// Khai báo một tuple
let x: [string, number];
// Initialize it
// Khởi tạo nó
x = ["hello", 10]; // OK
// Initialize it incorrectly
// Khởi tạo nó theo cách không chính xác
x = [10, "hello"]; // Error
```

Khi truy cập vào một phần tử với giá trị index đã biết, kiểu dữ liệu chính xác sẽ được lấy:

```ts
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
```

Lấy giá trị của phần tử nằm có chỉ mục bên ngoài số lượng được khai báo ban đầu sẽ không thành công cùng với một lỗi:
```ts
x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.

console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
```
# Enum

Một tiện ích bổ sung cho các bộ dữ liệu tiêu chuẩn từ JavaScript là enum. Giống như C#, một enum là một cách giúp cho các bộ giá trị số trở nên dễ hiểu.
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
Theo mặc định, enum đánh số phần tử bắt đầu là 0. Bạn có thể thay một cách thủ công để đặt gía trị cho từng phần tử. Ví dụ, bạn có thể bắt đầu là 1 thay vì 0 trong ví dụ trước:
```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```
Hay thậm chí đặt cho tất cả các giá trị trong enum:
```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

Một tính năng tiện dụng của enum là bạn cũng có thể từ giá trị số để lấy giá trị có tên tương ứng trong enum. Ví dụ, nếu bạn có giá trị nhưng không chắc có giá trị nào tương ứng với enum ở trên, bạn có thể tìm tên tương ứng:

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
```
# Any
Bạn có thể cần mô tả một kiểu dữ liệu cho một biến mà bạn không biết khi viết mã cho ứng dụng. Các giá trị này có thể đến từ một nội dung động,.. từ ứng bên thứ 3. Trong trường hợp này, bạn muốn bỏ qua việc kiểm tra kiểu dữ liệu và để giá trị này vược qua compile-time check. Để làm điều đó, chúng tôi gán nhãn nó với kiểu dữ liệu là any:
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

Kiểu dữ liệu any là một cách hữu ích để làm việc với các đoạn mã JavaScript có sẵn, cho phép bạn đơn giản là đặt kiểu dữ liệu hay bỏ qua việc kiểm tra kiểu dữ liệu trong quá trình biên dịch. Bạn có thể muốn sử dụng Object theo vai trò tương tự, như trong các ngôn ngữ khác. Tuy nhiên, các biến có kiểu dữ liệu Object chỉ có thể cho phép bạn gán bất kỳ giá trị nào cho chúng. Bạn không thể gọi tùy một phương thức trên chúng, thậm chí nó có tồn tại:

```ts
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:

Kiểu dữ liệu any cũng có thể hữu ích nếu bạn muốn mô tả kiểu dữ liệu mà bạn chỉ biết một phần của nó. Ví dụ, nếu bạn có một mảng các giá trị với kiểu dữ liệu khác nhau:
```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```

# Void
Void là một kiểu dữ liệu trái ngược với any, một kiểu dữ liệu mô tả dữ liệu không có kiểu dữ liệu nào ^^
```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

Bạn không nên khai báo kiểu dữ liệu này cho một biến mà thay vào đó có thể sử dụng null hoặc undefined cho chúng sẽ hữu ích hơn.

# Null and Undefined
Trong TypeScript, cả undefined và null đều có kiểu dữ liệu là undefined và null cho cả 2. Giống như void, chúng hoàn toàn không hữu ích nếu chỉ sử dụng một mình:
```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

Mặc định null và undefined là kiểu dữ liệu thứ hai của tất cả các kiểu dữ liệu khác. Điều đó có nghĩa là bạn có thể gán giá trị null và undefined cho một số biến ví dụ có kiểu dữ liệu là number.
Tuy nhiên, khi sử dụng --strictNullChecks, null và undefined chỉ có được gán cho giá trị có kiểu dữ liệu là any và kiểu dữ liệu tương ứng của chúng. Điều này giúp tránh đi một số lỗi phổ biến.

Trong trường hợp bạn muốn một biến có thể vừa là string vừa là null hoặc undefined, bạn có thể sử dụng kiểu dư liệu kết hợp `string | null | undefined`.
# Never
Kiểu dữ liệu này mô tả kiểu giá trị không bao giờ xảy ra. Chẳng hạn, never được khai báo cho hàm luông trả về một exception hoặc hàm không bao giờ return.
```ts
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```

# Object
Object là kiểu dữ liệu đại diện cho các giá trị không phải kiểu dữ liệu nguyên thủy ^^ không phải number, string, boolean, symbol, null hoặc undefined.

Có một ví dụ phù hợp là hàm Object.create:
```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

# Type assertions
Đôi khi sẽ có một số trường hợp bạn biết nhiều hơn về kiểu giá trị của một biến so với TypeScript. Type assertion sẽ cho phép bạn mô tả nó với trình biên dịch.
Có hai cách để khai báo Type assertions:
```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
Cách thứ hai sử dụng từ khóa as:
```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
