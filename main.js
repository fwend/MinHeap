class MinHeap {
  
    constructor(capacity, compare) {
        this.tree = Array(capacity);
        this.size = 0;
        this.capacity = capacity;
        this.compare = compare;
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    
    left(i) {
        return 2 * i + 1;
    }
    
    right(i) {
        return 2 * i + 2;
    }    

    insertKey(k) { 
        this.size++;
        
        if (this.size >= this.capacity) { 
            this.tree = this.tree.concat(Array(this.capacity));
            this.capacity = this.tree.length;
        } 
        
        this.tree[this.size - 1] = Number.POSITIVE_INFINITY;
        this.decreaseKey(this.size - 1, k);
    } 
  
    minHeapify(i) {

        const l = 2 * i + 1; 
        const r = 2 * i + 2; 

        let smallest = i; 

        if (l < this.size && this.compare(this.tree[l] , this.tree[smallest])) { 
            smallest = l; 
        }

        if (r < this.size && this.compare(this.tree[r] , this.tree[smallest])) { 
            smallest = r; 
        }

        if (smallest != i) 
        { 
            this.swap(i, smallest); 
            this.minHeapify(smallest); 
        } 
    }  
  
    extractMin() { 
        if (this.size > 0) {
            const min = this.tree[0];
            this.tree[0] = this.tree[this.size - 1];
            this.size--;
            this.minHeapify(0);
            return min;
        } else throw "tree is empty";
    }   
    
    decreaseKey(i, key) {
        this.tree[i] = key;
        while (i > 0 && this.compare(this.tree[i], this.tree[this.parent(i)])) { 
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }
  
    getMin() { 
        if (this.size > 0) {
            return this.tree[0];
        } else throw "tree is empty";
    } 
    
    getNode(i) {
        if (i < this.size) {
            return this.tree[i];
        } else throw "index out of bounds";
    }

    swap(i, j) {
        const tmp = this.tree[i];
        this.tree[i] = this.tree[j];
        this.tree[j] = tmp;    
    }
  
    display() {
        console.log(this.tree.slice(0, this.size));
    }
}

const arr = [9,8,7,6,5,4,3,2,1];

const minHeap = new MinHeap(arr.length, (a, b) => a < b);

for (const v of arr) {
    minHeap.insertKey(v);
}

minHeap.display();
console.log(minHeap.extractMin());
minHeap.display();
console.log(minHeap.extractMin());
minHeap.display();
console.log(minHeap.extractMin());
minHeap.display();