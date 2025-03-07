const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class myNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.base = null;
    }

    add(data) {
        this.base = addWithin(this.base, data);

        function addWithin(node, data) {
            if (!node)
                return new myNode(data);

            if (node.data === data)
                return node;

            if (data < node.data)
                node.left = addWithin(node.left, data);
            else
                node.right = addWithin(node.right, data);

            return node;
        }
    }

    has(data) {
        return searchWithin(this.base, data);

        function searchWithin(node, data) {
            if (!node)
                return false;

            if (node.data === data)
                return true;

            return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
        }
    }

    remove(data) {
        this.base = removeNode(this.base, data);

        function removeNode(node, data) {
            if (!node)
                return null;

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else
                if (node.data < data) {
                    node.right = removeNode(node.right, data);
                    return node;
                }
                else {
                    if (!node.left && !node.right)
                        return null;

                    if (!node.left) {
                        node = node.right;
                        return node;
                    }

                    if (!node.right) {
                        node = node.left;
                        return node;
                    }

                    let minFromRight = node.right;
                    while (minFromRight.left) {
                        minFromRight = minFromRight.left;
                    }

                    node.data = minFromRight.data;
                    node.right = removeNode(node.right, minFromRight.data);

                    return node;
                }
        }
    }

    min() {
        if (!this.base)
            return;

        let node = this.base;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.base)
            return;

        let node = this.base;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }

    root() {
        if (!this.base)
            return null;

        return this.base;
    }

    find(data) {
        return findWithin(this.base, data);

        function findWithin(node, data) {
            if (!node)
                return null;

            if (node.data === data)
                return node;

            return data < node.data ? findWithin(node.left, data) : findWithin(node.right, data);
        }
    }
}

module.exports = {
  BinarySearchTree
};