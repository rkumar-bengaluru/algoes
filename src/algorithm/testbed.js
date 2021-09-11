const fs = require('fs');
var stream = fs.createWriteStream('products.json', {flags: 'a'});
/**
     * Demonstration of async await with a real world example of 
     * scanning a dir with millions of files. read the json content 
     * of each file and print the sku of the file sequentially.
     * 
     * @param {large dir to scan} dir 
     */
 const scanDir = async (dir) => {
  console.log('start scanning');
  // await with promise on reading the 
  // files in the destination directory
  var files = await new Promise((resolve, reject) => {
      fs.readdir(dir, (err, files) => {
          if (err) {
              reject(files);
          }
          resolve(files);
      });
  });
  console.log('there are ' + files.length + ' in the dir');
  stream.write('[');
  // one approach if for each file sequentially the content.
  for (var i = 0; i <= files.length - 1; i++) {
      // another await inside async function to read the 
      // content of file and return sku.
      let sku = await new Promise((resolve, reject) => {
          fs.readFile(dir + '\\' + files[i], (err, data) => {
              if (err) {
                  reject(files);
              }
              var p = JSON.parse(data);
              stream.write(JSON.stringify({ "id": dir + '\\' + files[i], "title": "", "description": "", "aggregateRating": {}, "image": '' }));
              stream.write(',');
              resolve(p.sku);
          });
      });
      // sequentially print each sku
      console.log('sku of the product is ' + sku);
  }
  stream.write(']');
  stream.end();
  // finally scanning is complete.
  console.log('scanning done...');
}

scanDir('E:\\2021\\localshop\\data\\catalog\\grocery\\catalog\\products-01');