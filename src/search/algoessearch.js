var logger = require('./logger');
var fs = require('fs');
const lunr = require("lunr");

class AlgoesSearch {

    constructor(options) {
        if (options) {
            var opt = JSON.parse(JSON.stringify(options));
            logger.debug(JSON.stringify(opt));
            if (opt.root) {
                logger.debug('site folder ' + opt.root);
                this.siteFolder = opt.root;
                this.fileSeparator = '';
                if (this.siteFolder[this.siteFolder.length - 1] !== '/') {
                    this.fileSeparator = '/';
                }
                this.allpages = [];
                this.curPageIndex = -1;
                this.politePolicyInterval = 1000;// 5 seconds interval to load pages.
                this.productsFolder = this.siteFolder + this.fileSeparator + "catalog" + this.fileSeparator + "algorithms";
                this.allSitePages = 'src/search/algoes.json';
                this.siteIdxFile = 'src/search/algoes-index.json';
            }

            if (opt.loadIndex) {
                this.idx = this.loadindex();
            }
        }
    }

    fetchfiles(src) {
        var allpages = [];
        var files = fs.readdirSync(src);
        for (var i = 0; i < files.length; i++) {
            allpages.push(src + this.fileSeparator + files[i]);
        }
        return allpages;
    }

    fetchsubdirs(src) {
        var allpages = [];
        logger.debug(process.cwd() + '\\' + src);
        var dirs = fs.readdirSync(src);
        for (var i = 0; i < dirs.length; i++) {
            allpages.push(src + this.fileSeparator + dirs[i] + '/');
        }
        return allpages;
    }

    fetchAllProducts() {
        var allpages = [];
        var site = this.productsFolder;
        var allProductsFile = this.allSitePages;
        var dirs = this.fetchfiles(site);
        var totalProducts = 0;
        for (var i = 0; i < dirs.length; i++) {
            allpages.push({ "id": dirs[i], "title": "", "description": ""});
            totalProducts++;
        }
        fs.writeFileSync(allProductsFile, JSON.stringify(allpages));
        logger.debug('total products to process ' + allpages.length);
        return allpages;
    }

    fetchProductData(page) {
        var fileName = this.allSitePages;
        return new Promise((resolve, reject) => {
            logger.debug('loading product...' + page);
            var product = JSON.parse(fs.readFileSync(page));
            logger.debug(JSON.stringify(product));
            this.allpages[this.curPageIndex].id = product.url;
            this.allpages[this.curPageIndex].title = product.name;
            this.allpages[this.curPageIndex].description = product.description;
            logger.debug('file Name - ' + fileName);
            fs.writeFileSync(fileName, JSON.stringify(this.allpages));
            resolve(product);
        });
    }

    advanceProductDataCollection = async () => {
        ++this.curPageIndex;
        if (this.curPageIndex >= this.allpages.length) {
            logger.debug('cleaning timer');
            clearInterval(this.timer);
            this.createSiteIndex();
            return;
        }
        await this.fetchProductData(this.allpages[this.curPageIndex].id);   // set new news item into the ticker
        logger.debug('this.curPageIndex = ' + this.curPageIndex + ", Of = " + this.allpages.length);
    }

    startDataPrep = async () => {
        logger.debug('creating products metadata...')
        this.allpages = await this.fetchAllProducts();
        logger.debug('products fetched with size ... ' + this.allpages.length)
        this.timer = setInterval(this.advanceProductDataCollection, this.politePolicyInterval);
    }

    createSiteIndex() {
       fs.readFile(this.allSitePages, (err, data) => {
            if (err) {
                console.log('error reading file - ' + fileName);
                console.log(err.stack);
            }
            var products = JSON.parse(data);
            console.log('products size -' + products.length);
            try {
                var idx = lunr(function () {
                    this.ref('id')
                    this.field("title")
                    this.field("description")

                    for (let i = 0; i < products.length; i++) {
                        this.add(products[i])
                    }
                });
                var serializedIdx = JSON.stringify(idx);
                fs.writeFile(this.siteIdxFile, serializedIdx, (err) => {
                    if (err) throw err;
                    console.log('index written to file');
                });
            } catch (e) {
                console.log(e.stack);
                throw e;
            }
        });
    }

    loadindex() {
        var data = fs.readFileSync(this.siteIdxFile);
        var idx = lunr.Index.load(JSON.parse(data));
        this.allpages = JSON.parse(fs.readFileSync(this.allSitePages));

        return idx;
    }

    search(query) {
        try {
            var result = this.idx.search(query);
            return result.map((item) => {
                return this.allpages.find((p) => item.ref === p.id)
            })

        } catch (e) {
            console.log(e.stack);
            throw e;
        }
    }
}

const startDataPrep = async () => {
    var options = { root: 'public', loadIndex: false };
    var mini = new AlgoesSearch(options);
    mini.startDataPrep();
}

const search = async () => {
    var options = { root: 'public', loadIndex: true };
    var mini = new AlgoesSearch(options);
    console.log(JSON.stringify(mini.search('quicksort')));
}

search();