module.exports = function (opts) {
    if (opts && typeof opts.appendChild === 'function') {
        opts = { target: opts }
    }
    if (!opts) opts = {};
    var target = opts.target || document.body;
    var chr = opts.chr || 'x';
    
    var container = document.createElement('div');
    container.style.width = '0px';
    container.style.height = '0px';
    container.style.overflow = 'hidden'; 
    target.appendChild(container);
    
    var div = document.createElement('div');
    div.style.display = 'inline-block';
    div.appendChild(document.createTextNode(chr));
    container.appendChild(div);
    
    var s = window.getComputedStyle(div);
    return {
        width: parseInt(s.width, 10),
        height: parseInt(s.height, 10)
    };
};
