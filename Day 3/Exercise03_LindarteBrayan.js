var deleteNode = function(root, key) {
    if(root == null) return null;

    if(root.val === key) {
        return !root.left ? root.right : !root.right ? root.left : (() => {
            let x = root.right;
            while (x.left) x = x.left;
            root.val = x.val;
            root.right = deleteNode(root.right, root.val);
            return root; 
        })();
    }

    root.val > key ? root.left = deleteNode(root.left, key) : root.right = deleteNode(root.right, key);
    return root;
};
