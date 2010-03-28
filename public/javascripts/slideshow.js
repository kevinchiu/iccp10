var kevin_server = "http://iccp10.heroku.com/"

var flickrshows = [],
flickrshow = function(t, s) {
    var _ = this;
    _.z = function(e, a, j, s, x) {
        if ('undefined' !== typeof _.t.q[x]) clearInterval(_.t.q[x]);
        _.t.q[x] = setInterval(function() {
            var i = Math.round(e.style[a].replace(/([a-zA-Z]{2})$/, ''));
            var k = Math.round(j - i);
            if ((Math.abs(k)) > 1) {
                e.style[a] = Math.floor(i + (k / 2)) + 'px';
            } else {
                e.style[a] = j + 'px';
                clearInterval(_.t.q[x]);
            }
        },
        s / 1.5);
    };
    _.x = function(o, t, f) {
        if (o.attachEvent) {
            o['e' + t + f] = f;
            o[t + f] = function() {
                o['e' + t + f](window.event, o);
            };
            o.attachEvent('on' + t, o[t + f]);
        } else {
            o.addEventListener(t, f, false);
        }
    };
    _.c = function() {
        if ((_.t.x === true) || (_.t.s === false)) {
            return;
        }
        _.t.s = false;
        _.z(_.y.b, 'top', _.y.t.offsetHeight, _.u.speed, 'b');
    };
    _.v = function() {
        if ((_.t.x === true) || (_.t.s === true)) {
            return;
        }
        _.t.s = true;
        _.z(_.y.b, 'top', _.y.t.offsetHeight - 40, _.u.speed, 'b');
    };
    _.b = function() {
        var i = _.y.i.childNodes[_.t.a].childNodes[0];
        if ('undefined' === typeof i) return;
        _.y.b.childNodes[3].innerHTML = (_.t.a + 1) + '/' + _.t.w + ' - ' + i.getAttribute('flickrshow-t');
    };
    _.n = function() {
        var li,
        im,
        cw,
        ch,
        nh,
        nw;
        li = _.y.i.getElementsByTagName('LI');
        for (var i in li) {
            if ('object' !== typeof li[i]) continue;
            im = li[i].getElementsByTagName('IMG');
            for (var j in im) {
                if ('object' !== typeof im[j]) continue;
                cw = im[j].offsetWidth;
                ch = im[j].offsetHeight;
                if (cw > ch) {
                    nw = _.y.t.offsetWidth + (_.y.t.offsetHeight / 100);
                    nh = Math.ceil((nw / cw) * ch);
                } else {
                    nh = _.y.t.offsetHeight + (_.y.t.offsetHeight / 100);
                    nw = Math.ceil((nh / ch) * cw);
                }
                try {
                    im[j].style.height = nh + 'px';
                    im[j].style.left = Math.round((_.y.t.offsetWidth - nw) / 2) + 'px';
                    im[j].style.position = 'absolute';
                    im[j].style.top = Math.round((_.y.t.offsetHeight - nh) / 2) + 'px';
                    im[j].style.width = nw + 'px';
                } catch(e) {}
            }
        }
    };
    _.m = function() {
        if (_.t.x === true) return;
        _.t.a = ((_.t.a - 1) < 0) ? _.t.w - 1: _.t.a - 1;
        _.z(_.y.i, 'left', '-' + (_.t.a * _.y.t.offsetWidth), _.u.speed, 'i');
        _.b();
    };
    _.q = function() {
        if (_.t.x === true) return;
        _.t.a = ((_.t.a + 2) > _.t.w) ? 0: _.t.a + 1;
        _.z(_.y.i, 'left', '-' + (_.t.a * _.y.t.offsetWidth), _.u.speed, 'i');
        _.b();
    };
    _.w = function() {
        if (_.t.e === false) {
            _.t.e = true;
            _.y.b.childNodes[2].style.backgroundImage = 'url(' + _.t.c + 'images/' + _.u.theme + '/is.png)';
            _.t.q['p'] = setInterval(function() {
                _.q();
            },
            _.u.interval);
        } else {
            _.t.e = false;
            _.y.b.childNodes[2].style.backgroundImage = 'url(' + _.t.c + 'images/' + _.u.theme + '/ip.png)';
            clearInterval(_.t.q['p']);
        }
    };
    _.e = function() {
        if ('object' !== typeof flickrshows[_.t.d]) return;
        clearInterval(_.t.q['json']);
        if ('undefined' !== typeof flickrshows[_.t.d]['error']) {
            _.y.w.innerHTML = '<p style="color:#A00;font:normal normal 400 12px/18px helvetica,arial,sans-serif;left:0;margin:0;padding:0;posiiton:absolute;text-align:center;top:0;width:100%">' + flickrshows[_.t.d]['error'] + '</p>';
        } else {
            _.t.w = flickrshows[_.t.d].length;
            for (var i in flickrshows[_.t.d]) {
                var im = document.createElement('img');
                im.setAttribute('flickrshow-t', flickrshows[_.t.d][i].title);
                im.setAttribute('flickrshow-u', flickrshows[_.t.d][i].url);
                im.setAttribute('rel', i);
                im.style.cursor = 'pointer';
                im.style.display = 'block';
                im.style.margin = '0';
                im.style.padding = '0';
                if ((_.y.t.offsetHeight > 500) || (_.y.t.offsetWidth > 500)) {
                    im.src = flickrshows[_.t.d][i].src_l + '?' + _.t.d;
                } else if ((_.y.t.offsetHeight < 240) || (_.y.t.offsetWidth < 240)) {
                    im.src = flickrshows[_.t.d][i].src_s + '?' + _.t.d;
                } else {
                    im.src = flickrshows[_.t.d][i].src_m + '?' + _.t.d;
                }
                var li = document.createElement('li');
                li.style.left = (i * _.y.t.offsetWidth) + 'px';
                li.style.height = _.y.t.offsetHeight + 'px';
                li.style.margin = '0';
                li.style.overflow = 'hidden';
                li.style.padding = '0';
                li.style.position = 'absolute';
                li.style.top = '0';
                li.style.width = _.y.t.offsetWidth + 'px';
                li.appendChild(im);
                _.y.i.appendChild(li);
                _.x(im, 'click',
                function(e, i) {
                    document.location.href = (('undefined' !== typeof i) ? i: e.target).getAttribute('flickrshow-u');
                });
                _.x(im, 'load',
                function(e, i) {
                    _.t.z++;
                    var il = Math.round((_.t.z / _.t.w) * 240);
                    _.z(_.y.l.childNodes[0], 'width', ((il <= 36) ? 36: il), 'i');
                    if (_.t.z === _.t.w) _.r();
                });
            }
        }
    };
    _.r = function() {
        _.n();
        _.b();
        _.y.w.removeChild(_.y.l);
        _.y.i.style.visibility = 'visible';
        _.t.x = false;
        if (_.u.autoplay === true) _.w();
    };
    _.t = {
        q: [],
        a: 0,
        z: 0,
        w: 0,
        s: false,
        x: true,
        e: false,
        d: Math.round(Math.random() * 1000000000000),
        c: kevin_server
    };
    _.y = {
        b: null,
        i: null,
        l: null,
        t: null,
        w: null
    };
    _.u = {
        autoplay: false,
        group: '',
        hide_buttons: false,
        interval: 3000,
        page: '1',
        per_page: '50',
        set: '',
        speed: 100,
        tags: '',
        theme: 'black',
        user: ''
    };
    _.y.t = document.getElementById(t);
    for (var i in _.u) {
        if ('undefined' !== typeof s[i]) _.u[i] = s[i];
    }
    var tc,
    ts;
    switch (_.u.theme) {
    case 'white':
        ca = '#FFF';
        cb = '#EEE';
        cc = '#DDD';
        cd = '#111';
        break;
    default:
        ca = '#000';
        cb = '#111';
        cc = '#222';
        cd = '#FFF';
        break;
    }
    _.y.t.innerHTML = '<div id="' + t + '-fs-w" style="background:transparent;height:' + _.y.t.offsetHeight + 'px;margin:0;overflow:hidden;padding:0;position:relative;width:' + _.y.t.offsetWidth + 'px"><div id="' + t + '-fs-l" style="background:' + cb + ';border-radius:12px;height:24px;left:50%;margin:-12px 0 0 -120px;overflow:hidden;padding:0;position:absolute;top:50%;width:240px;-moz-border-radius:12px;-webkit-border-radius:12px"><div id="' + t + '-fs-l-b" style="background:' + cc + ';border-radius:12px;height:24px;left:0;margin:0;padding:0;position:absolute;top:0;width:0;-moz-border-radius:12px;-webkit-border-radius:12px"></div></div><ul id="' + t + '-fs-i" style="background:transparent;height:' + _.y.t.offsetHeight + 'px;left:0;list-style:none;margin:0;padding:0;position:absolute;top:0;visibility:hidden;width:' + _.y.t.offsetWidth + 'px"></ul><div id="' + t + '-fs-b" style="background:transparent url(' + _.t.c + 'images/' + _.u.theme + '/b2.png);height:40px;margin:0;padding:0;position:absolute;top:' + _.y.t.offsetHeight + 'px;width:' + _.y.t.offsetWidth + 'px"><div id="' + t + '-fs-b-l" style="background:' + ca + ' url(' + _.t.c + 'images/' + _.u.theme + '/il.png) 50% 50% no-repeat;border-radius:12px;cursor:pointer;height:24px;left:auto;margin:0;padding:0;position:absolute;right:40px;top:8px;width:24px;-moz-border-radius:12px;-webkit-border-radius:12px"></div><div id="' + t + '-fs-b-r" style="background:' + ca + ' url(' + _.t.c + 'images/' + _.u.theme + '/ir.png) 50% 50% no-repeat;border-radius:12px;cursor:pointer;height:24px;left:auto;margin:0;padding:0;position:absolute;right:8px;top:8px;width:24px;-moz-border-radius:12px;-webkit-border-radius:12px"></div><div id="' + t + '-fs-b-p" style="background:' + ca + ' url(' + _.t.c + 'images/' + _.u.theme + '/ip.png) 50% 50% no-repeat;border-radius:12px;cursor:pointer;height:24px;left:8px;margin:0;padding:0;position:absolute;right:auto;top:8px;width:24px;-moz-border-radius:12px;-webkit-border-radius:12px"></div><p id="' + t + '-fs-b-d" style="background:transparent url(' + _.t.c + 'images/' + _.u.theme + '/b0.png);border-radius:12px;color:' + cd + ';font:normal normal 600 11px/24px helvetica,arial,sans-serif;height:24px;left:40px;margin:0;overflow:hidden;padding:0 0;position:absolute;right:auto;text-align:center;text-shadow:none;text-transform:capitalize;top:8px;width:' + (_.y.t.offsetWidth - 112) + 'px;-moz-border-radius:12px;-webkit-border-radius:12px">Title Goes Here</p></div></div>';
    _.y.w = _.y.t.childNodes[0];
    _.y.l = _.y.t.childNodes[0].childNodes[0];
    _.y.i = _.y.t.childNodes[0].childNodes[1];
    _.y.b = _.y.t.childNodes[0].childNodes[2];
    if (false === _.u.hide_buttons) {
        _.x(_.y.t, 'mouseover',
        function(e) {
            _.v();
        });
        _.x(_.y.t, 'mouseout',
        function(e) {
            _.c();
        });
        _.x(_.y.b.childNodes[0], 'click',
        function(e) {
            _.m();
        });
        _.x(_.y.b.childNodes[1], 'click',
        function(e) {
            _.q();
        });
        _.x(_.y.b.childNodes[2], 'click',
        function(e) {
            _.w();
        });
    }
    var j = document.createElement('script');
    j.type = 'text/javascript';
    j.src = _.t.c + 'refresh/get/' + _.t.d; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(j);
    _.t.q['json'] = setInterval(function() {
        _.e();
    },
    100);
    return {
        play: function() {
            _.w();
        },
        left: function() {
            _.m();
        },
        right: function() {
            _.q();
        }
    };
};