

// let buf1 = Buffer.from('麓一老师');
// let buf2 = buf1.slice(0, 6);
// Buffer.isBuffer(buf1);
// console.log(buf2.toString());

let buf1 = Buffer.from([0xe9, 0xba]);
let buf2 = Buffer.from([0x93, 0xe4, 0xb8, 0x80]);

let bigBuffer = Buffer.concat([buf1, buf2], 6);

console.log(bigBuffer.toString());


let buf3 = Buffer.from('麓一');
let buf4 = Buffer.from('sadasd');
let bigBuffer2 = Buffer.alloc(6); // 分配6个字节
// 第一个0, 表示从0这个位置开始拷贝
// 第二和第三个数字，表示拷贝从几到几的长度。
buf1.copy(bigBuffer, 0, 0, 3);
buf2.copy(bigBuffer, 2, 4, 6);
console.log(bigBuffer.toString());