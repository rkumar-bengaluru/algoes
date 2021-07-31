class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }

    add(d) {
        if (this.next === null) {
            this.next = new Node();
            this.next.data = d;
            return;
        }
        var c = this.next;
        while (c.next != null) {
            c = c.next;
        }
        c.next = new Node();
        c.next.data = d;
    }

    reverse() {
        var p, c, n;
        c = this.next;
        while (c != null) {
            n = c.next;
            c.next = p;
            p = c;
            c = n;
        }
        this.next = p;
    }

    print(message) {
        var c = this.next;
        var res = '';
        while (c != null) {
            res += c.data + '--'
            c = c.next;
        }
        console.log(message + ' ' + res);
    }
}

var ll = new Node();
ll.add('d1');
ll.add('d2');
ll.add('d3');
ll.print('input ');
ll.reverse();
ll.print('output');
