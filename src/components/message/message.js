var div = document.createElement("div");
div.setAttribute('name', 'visui-message');

var timeout = null;

export default {
    tip: function (msg, time, opts, callback) {
        clearTimeout(timeout);
        
        div.innerHTML = msg;
        if (opts && opts.className) {
            div.className = `visui-message ${opts.className}`;
        } else {
            div.className = `visui-message`;
        }
        if (opts && opts.style && Object.prototype.toString.call(opts.style) === '[object Object]') {
            Object.keys(opts.style).forEach(styleName => {
                div.style[styleName] = opts.style[styleName];
            });
        }
        document.body.appendChild(div);

        timeout = setTimeout(() => {
            document.body.removeChild(div);
            callback && callback();
        }, time || 2000);
    }
}