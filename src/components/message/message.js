var div = document.createElement("div");
div.setAttribute('name', 'visui-message');
div.className = 'visui-message';

var timeout = null;

export default {
    tip: function (msg, time) {
        clearTimeout(timeout);
        div.innerHTML = msg;
        document.body.appendChild(div);
        timeout = setTimeout(() => {
            document.body.removeChild(div);
        }, time || 2000);
    }
}