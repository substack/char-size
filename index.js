module.exports = function (target) {
    if (!target) target = document.body;
    
    var container = document.createElement('div');
    container.style.width = '0px';
    container.style.height = '0px';
    container.style.overflow = 'hidden'; 
    target.appendChild(container);
    
    var div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style['font-family'] = 'monospace';
    div.appendChild(document.createTextNode('x'));
    container.appendChild(div);
    
    var s = window.getComputedStyle(div);
    return {
        width: parseInt(s.width, 10),
        height: parseInt(s.height, 10)
    };
};
