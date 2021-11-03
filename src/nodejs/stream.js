var fs = require('fs');

const fetchAllProducts = async (destDir) => {
    let files = await getAllFiles(destDir);
}

async function readAllFiles(destDir,files) {
    return new Promise((resolve, reject) => {
        files.forEach(file => {
            fs.readFile(destDir + '/' + file, (err, data) => {
                if (err) {
                    throw new Error('no such file ' + file);
                }
                var product = JSON.parse(data);
                console.log(product.sku);
            });
        });
        resolve(files);
    });
}

async function getAllFiles(destDir) {
    fs.readdir(destDir, (err, files) => {
        if (err) {
            throw new Error('no such dir ' + destDir);
        }
        await readAllFiles(destDir,files);
    });
}




fetchAllProducts('products-01');