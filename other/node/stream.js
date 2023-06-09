const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, '../../package.json'), 'utf-8', function(err, data) {
//     fs.writeFile(path.resolve(__dirname, '../../cc.json'), data, function(err) {
//         console.log('写入成功');
//     })
// });

// const zlib = require('zlib');
// fs.createReadStream(path.resolve(__dirname, '../package.json'))
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream(path.resolve(__dirname, '../package.json.gz')));

// const res = fs.createReadStream(path.resolve(__dirname, '../../package.json'), {
const res = fs.createReadStream(path.resolve(__dirname, '../promise.md'), {
    flags: 'r',
    start: 0,
    // end: 20,
    highWaterMark: 5, // 默认是 64K
    autoClose: true,
    emitClose: true,
});
let arr = [];
res.on('open', fd => console.log('fd', fd));
res.on('data', data => {
    // console.log('data', data);
    arr.push(data);
});
res.on('end', () => {
    console.log('end', Buffer.concat(arr).toString())
    fs.writeFile(path.resolve(__dirname, '../../cc2.md'), Buffer.concat(arr), function(err) {
        console.log('写入成功');
    })
});
res.on('close', () => console.log('close'));
res.on('error', () => console.log('error'));