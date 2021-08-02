
const lunr = require("lunr");

import indexFile from '../../../public/algoes-index.json';
import productMetaFile from '../../../public/algoes.json';

class AlgoesWeb extends React.Component {

    constructor() {
        this.idx = this.loadindex();
        this.allProducts = productMetaFile;
        this.pageSize = 12;
        this.response = {
            'noOfPage': 0,
            'results': [],
            'status': 'fail',
            'time': '',
            'total': 0
        };
        //console.log('loaded in browser');
    }

    loadindex() {
        var idx = lunr.Index.load(indexFile);
        return idx;
    }

    search(query, page) {
        try {
            this.response.results = [];
            this.response.noOfPage = 0;
            this.response.status = 'fail';
            this.response.time = 0;
            this.response.total = 0;
            var t1 = Math.round(Date.now());
            //console.log('query from mini -' + query);
            var result = this.idx.search(query);
            var response = result.map((item) => {
                return this.allProducts.find((p) => item.ref === p.id)
            })
            var startIndex = page * this.pageSize;
            var endIndex = page * this.pageSize + this.pageSize;
            var sliced = response.slice(startIndex, endIndex);

            var t2 = Math.round(Date.now());
            var diff = ((t2 - t1) / 1000).toFixed(3);
            //console.log('response length from mini -' + result.length + ',diff-' + diff);
            this.response.results = sliced;
            this.response.noOfPage = (result.length / this.pageSize).toFixed(0);
            this.response.status = 'success';
            this.response.time = diff;
            this.response.total = result.length;
            return this.response;
        } catch (e) {
            console.log(e.stack);
            throw e;
        }
    }
}

export default AlgoesWeb;