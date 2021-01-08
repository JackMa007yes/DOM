window.dom = {
    find(Selector, scope) {
        return (document || scope).querySelectorAll(Selector)
    },

    style(node, name, value) {
        console.log('~~~~~')
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (name instanceof String) {
                return node.style.name
            } else if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },

    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },

}