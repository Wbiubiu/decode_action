var _js = 'jsjiami.com.v7';
            const O = b;
            (function(c, d, e, f, g, h, i) {
                return c = c >> 0x7,
                h = 'hs',
                i = 'hs',
                function(j, k, l, m, n) {
                    const N = b;
                    m = 'tfi',
                    h = m + h,
                    n = 'up',
                    i += n,
                    h = l(h),
                    i = l(i),
                    l = 0x0;
                    const o = j();
                    while (!![] && --f + k) {
                        try {
                            m = parseInt(N(0x139, 'oWvP')) / 0x1 * (parseInt(N(0x166, '^FZI')) / 0x2) + parseInt(N(0x1b4, 'O1Oo')) / 0x3 * (-parseInt(N(0x1e2, 'WMPm')) / 0x4) + -parseInt(N(0x228, 'twXo')) / 0x5 + parseInt(N(0x1b9, '#vM7')) / 0x6 * (parseInt(N(0xd9, 'LDE*')) / 0x7) + -parseInt(N(0x1e4, 'K5pB')) / 0x8 * (parseInt(N(0x21f, 'twXo')) / 0x9) + parseInt(N(0x1d7, 'zPgI')) / 0xa * (-parseInt(N(0xd5, 'oWvP')) / 0xb) + -parseInt(N(0x167, 'Dx0d')) / 0xc * (-parseInt(N(0x10e, 'oWvP')) / 0xd);
                        } catch (p) {
                            m = l;
                        } finally {
                            n = o[h]();
                            if (c <= f)
                                l ? g ? m = n : g = n : l = n;
                            else {
                                if (l == g['replace'](/[HlTdMuDUtkSCKgBpfNbq=]/g, '')) {
                                    if (m === k) {
                                        o['un' + h](n);
                                        break;
                                    }
                                    o[i](n);
                                }
                            }
                        }
                    }
                }(e, d, function(j, k, l, m, n, o, p) {
                    return k = '\x73\x70\x6c\x69\x74',
                    j = arguments[0x0],
                    j = j[k](''),
                    l = '\x72\x65\x76\x65\x72\x73\x65',
                    j = j[l]('\x76'),
                    m = '\x6a\x6f\x69\x6e',
                    (0x1819d8,
                    j[m](''));
                });
            }(0x6280, 0xb0086, a, 0xc7),
            a) && (_js = 0xc7);
            const authorizedDomains = [O(0x227, 'VcTj'), O(0x102, 'oWvP')];
            function isDomainAuthorized(c) {
                const P = O;
                return authorizedDomains[P(0xe3, 'Dx0d')](c);
            }
            function getDomainFromUrl(c) {
                const Q = O
                  , d = document[Q(0xb6, '^FZI')]('a');
                return d[Q(0x186, 'TgQ6')] = c,
                d[Q(0x20d, '6@9a')];
            }
            function checkDomainAuthorization() {
                const R = O
                  , c = {
                    'xbhHS': function(e, f) {
                        return e(f);
                    },
                    'lYsoe': R(0x13d, '$6pi')
                }
                  , d = c['xbhHS'](getDomainFromUrl, window[R(0x1ae, 'zPgI')][R(0x1bb, '#vM7')]);
                if (!c[R(0x123, '#vM7')](isDomainAuthorized, d)) {
                    document[R(0x135, 'y^pi')]['innerHTML'] = c['lYsoe'];
                    throw new Error(R(0x10c, '$6pi'));
                }
            }
            checkDomainAuthorization();
            function isPC() {
                const S = O;
                return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[S(0x201, 'fYc[')](navigator[S(0x1d4, 'twXo')]);
            }
            function inIframe() {
                const T = O
                  , c = {
                    'RrUAD': function(d, e) {
                        return d !== e;
                    }
                };
                return c[T(0x1b0, 'KTZ#')](window[T(0x17f, 'WMPm')], window['top']);
            }
            isPC() && !inIframe() && (window[O(0xbd, '#vM7')][O(0x1a7, 'N@Z9')] = O(0x26b, 'RNQv'));
            let videos = []
              , currentVideoIndex = 0x0
              , touchStartY = 0x0
              , touchStartX = 0x0
              , isFirstPlay = !![]
              , isInitialLoad = !![]
              , isLoading = ![];
            const CACHE_SIZE = 0x5;
            let videoCache = new Map()
              , currentCategory = O(0x243, 'Dx0d');
            document['getElementById'](O(0x1a0, 'nXsu'))['addEventListener'](O(0x208, '02[M'), c => {
                const U = O
                  , d = {
                    'tTPCL': function(g) {
                        return g();
                    }
                }
                  , e = '2|4|0|5|1|3'[U(0x222, 'KTZ#')]('|');
                let f = 0x0;
                while (!![]) {
                    switch (e[f++]) {
                    case '0':
                        currentVideoIndex = 0x0;
                        continue;
                    case '1':
                        document['getElementById'](U(0x20b, '@o0E'))[U(0x214, 'oWvP')] = '';
                        continue;
                    case '2':
                        currentCategory = c['target'][U(0x147, 'RNQv')];
                        continue;
                    case '3':
                        d[U(0x126, ']76h')](loadVideos);
                        continue;
                    case '4':
                        videos = [];
                        continue;
                    case '5':
                        videoCache['clear']();
                        continue;
                    }
                    break;
                }
            }
            );
            async function ensureCachedVideos() {
                const V = O
                  , c = {
                    'MZnLJ': function(d, e) {
                        return d < e;
                    },
                    'vESQZ': function(d, e) {
                        return d > e;
                    },
                    'dBFjW': function(d, e) {
                        return d(e);
                    }
                };
                while (c[V(0x152, 'm[)u')](videoCache[V(0x1f1, 'RNQv')], CACHE_SIZE) && c[V(0xb7, 'VcTj')](videos[V(0x202, 'ukkJ')], videoCache[V(0x1c1, 'l1jC')])) {
                    const d = videoCache[V(0x1ef, 'N@Z9')];
                    await c[V(0x267, '4Jq(')](cacheVideo, d);
                }
            }
            async function cacheVideo(c) {
                const W = O
                  , d = {
                    'SoDEl': function(f, g) {
                        return f >= g;
                    },
                    'TOhon': function(f) {
                        return f();
                    },
                    'krEdY': W(0xc2, 'uJu('),
                    'oimah': function(f, g) {
                        return f + g;
                    }
                };
                if (videoCache[W(0xff, 'O1Oo')](c) || d[W(0x1ec, ']76h')](c, videos[W(0x229, 'W9wN')]))
                    return;
                const e = document['querySelector'](W(0x170, 'K5pB') + d[W(0x1c8, 'WMPm')](c, 0x1) + ')\x20video');
                if (!e)
                    return;
                return new Promise(f => {
                    const Z = W
                      , g = {
                        'BbdPW': function(i, j) {
                            const X = b;
                            return d[X(0x10a, '3v09')](i, j);
                        },
                        'tGEZs': function(i) {
                            const Y = b;
                            return d[Y(0x1a6, '3v09')](i);
                        },
                        'uPZve': function(i, j, k) {
                            return i(j, k);
                        }
                    };
                    e[Z(0xcf, 'ne8H')] = d[Z(0xfd, 'zPgI')],
                    e['load']();
                    const h = () => {
                        const a0 = Z;
                        g[a0(0x1b2, '4Jq(')](e[a0(0x22e, 'MU@(')], 0x3) ? (videoCache[a0(0x242, 'WHX]')](c, !![]),
                        g[a0(0x20e, '*uew')](f)) : g[a0(0x22a, '02[M')](setTimeout, h, 0xc8);
                    }
                    ;
                    h();
                }
                );
            }
            async function fetchVideosWithRetry(c, d, e=0x3e8) {
                const a1 = O
                  , f = {
                    'nHaBs': function(g) {
                        return g();
                    },
                    'HSEIo': function(g, h) {
                        return g(h);
                    },
                    'MIxAQ': function(g, h) {
                        return g === h;
                    },
                    'PrxxD': 'cDLhY',
                    'QGUHG': a1(0x1c4, 'K6^z'),
                    'UAqPT': function(g, h) {
                        return g === h;
                    },
                    'Qvmqs': a1(0x1a3, 'nXsu'),
                    'pMdWN': a1(0x144, '#vM7')
                };
                try {
                    const g = await f['HSEIo'](fetch, '../fetch_videos.php?category=' + c + '&count=10')
                      , h = await g['json']();
                    if (!Array[a1(0x1eb, 'K5pB')](h) || h['length'] === 0x0) {
                        if (f[a1(0x143, 'Dx0d')](f[a1(0x19a, 'zPgI')], a1(0x23a, 'ne8H')))
                            d[a1(0x221, ']76h')] = a1(0x138, 'RNQv');
                        else
                            throw new Error(f[a1(0x12d, 'V&NR')]);
                    }
                    return h;
                } catch (j) {
                    if (f[a1(0xca, 'TgQ6')](f[a1(0x103, 'F058')], f[a1(0x192, 'K5pB')]))
                        return console[a1(0x258, '02[M')](f[a1(0x1be, 'WHX]')], j),
                        await new Promise(k => setTimeout(k, e)),
                        fetchVideosWithRetry(c, d, e);
                    else
                        f[a1(0x21c, 'N@Z9')](d);
                }
            }
            async function loadVideos(c=0x3) {
                const a2 = O
                  , d = {
                    'judVX': function(e, f, g) {
                        return e(f, g);
                    },
                    'YWcNh': function(e, f) {
                        return e >= f;
                    },
                    'OAYwC': function(e) {
                        return e();
                    },
                    'pTyly': function(e, f, g) {
                        return e(f, g);
                    },
                    'ppptl': function(e, f) {
                        return e === f;
                    },
                    'KmsKK': 'NmDGM',
                    'CzTes': function(e, f, g) {
                        return e(f, g);
                    },
                    'RKqXY': function(e) {
                        return e();
                    },
                    'fHgbB': function(e, f) {
                        return e !== f;
                    },
                    'QsozQ': a2(0x163, 'm[)u')
                };
                if (isLoading)
                    return;
                isLoading = !![];
                isInitialLoad && d[a2(0x20c, 'l1jC')](showLoading);
                try {
                    if (d[a2(0x240, 'vprY')](d[a2(0x171, '6@9a')], d[a2(0x113, 'F058')])) {
                        const e = await d[a2(0x179, '^FZI')](fetchVideosWithRetry, currentCategory, c);
                        videos = videos[a2(0x273, 'y^pi')](e),
                        renderNewVideos(e),
                        await d[a2(0x1dd, 'l1jC')](ensureCachedVideos);
                    } else
                        i[a2(0x1d3, 'Dx0d')] ? o[a2(0x1a5, 'y^pi')]() : p[a2(0x11d, '2NpX')](),
                        d['judVX'](l, m, n[a2(0x1fd, 'uJu(')]);
                } finally {
                    d[a2(0x1b1, 'twXo')](a2(0x232, 'N@Z9'), d[a2(0x14f, 'ZWSW')]) ? (isInitialLoad && (hideLoading(),
                    isInitialLoad = ![]),
                    isLoading = ![]) : d[a2(0x17a, 'e2oM')](i[a2(0x19e, 'O1Oo')], 0x3) ? (o['set'](p, !![]),
                    d[a2(0x1f0, 'Wp)E')](q)) : d[a2(0x193, '@o0E')](r, s, 0xc8);
                }
            }
            function showLoading() {
                const a3 = O
                  , c = {
                    'FiRHH': 'flex'
                };
                document[a3(0x190, 'N@Z9')](a3(0x11f, '%HsJ'))[a3(0x172, 'VcTj')][a3(0x199, 'Ovi1')] = c[a3(0x1f2, 'VcTj')];
            }
            function hideLoading() {
                const a4 = O
                  , c = {
                    'xqoIl': a4(0x1ce, 'zPgI')
                };
                document[a4(0x188, 'm[)u')](c[a4(0x159, '3v09')])[a4(0x23b, 'nXsu')][a4(0x1c6, 'W9wN')] = a4(0x13f, '*uew');
            }
            function renderNewVideos(c) {
                const a5 = O
                  , d = {
                    'RLNHs': a5(0xe8, 'twXo'),
                    'sdViR': 'div',
                    'GjsnI': function(f, g) {
                        return f === g;
                    },
                    'vRFHa': a5(0x116, 'N@Z9'),
                    'hfRdB': 'hidden',
                    'VyXaH': function(f, g) {
                        return f - g;
                    },
                    'WQzIV': a5(0x107, 'y^pi'),
                    'HQOwX': 'none',
                    'glNzJ': function(f, g) {
                        return f + g;
                    },
                    'KyuRw': a5(0x191, 'y^pi')
                }
                  , e = document[a5(0xea, 'KTZ#')](d[a5(0x1c7, 'nXsu')]);
                c[a5(0x18a, '3v09')]( (f, g) => {
                    const a6 = a5;
                    if (a6(0x27a, 'WMPm') !== d[a6(0xce, '$6pi')]) {
                        const h = document[a6(0x129, '#vM7')](d[a6(0x217, '1SrV')]);
                        h[a6(0xe1, 'oWvP')] = 'video-wrapper\x20' + (d[a6(0x24e, 'Ovi1')](videos[a6(0x204, '$w*N')], c['length']) && d[a6(0x25e, '2NpX')](g, 0x0) ? d['vRFHa'] : ''),
                        h[a6(0x27e, 'N@Z9')] = a6(0xda, 'RNQv') + f['url'] + a6(0x149, 'W9wN') + (isFirstPlay ? '' : d[a6(0x14c, 'Wp)E')]) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22play-button\x22>▶</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22video-controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22control-button\x20play-pause-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M8\x205v14l11-7z\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22video-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>@' + f[a6(0x1c2, '$6pi')] + a6(0x277, 'Wp)E') + f['description'] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22video-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22likeVideo(' + (d['VyXaH'](videos['length'], c['length']) + g) + a6(0x10b, '@o0E') + (f['liked'] ? d[a6(0xcc, 'oWvP')] : d[a6(0x1de, 'K6^z')]) + a6(0x12f, '$6pi') + f['likes'] + a6(0xc9, '*uew') + f[a6(0x22c, '1#xR')][a6(0xde, 'y^pi')] + a6(0x137, 'KTZ#') + d['glNzJ'](videos[a6(0x202, 'ukkJ')] - c[a6(0x26e, 'e2oM')], g) + a6(0x213, 'ne8H'),
                        e[a6(0x1dc, 'TgQ6')](h);
                    } else
                        f(g, h);
                }
                ),
                setupVideoInteractions();
            }
            function setupVideoInteractions() {
                const a7 = O
                  , c = {
                    'KJoOX': function(e, f) {
                        return e !== f;
                    },
                    'gUxJM': a7(0x25b, 'e2oM'),
                    'ayMYF': function(e, f, g) {
                        return e(f, g);
                    },
                    'dqZrC': function(e, f) {
                        return e + f;
                    },
                    'mdWuT': function(e, f) {
                        return e === f;
                    },
                    'HsRol': a7(0x1e6, 'e2oM'),
                    'lxXwc': 'vSwQJ',
                    'XXFnp': 'video',
                    'EkEXR': a7(0x1f9, 'W9wN'),
                    'BAMBD': 'click',
                    'BkhNV': 'play',
                    'SbOmw': 'pause'
                }
                  , d = document['querySelectorAll'](a7(0x26a, 'm[)u'));
                d[a7(0xe2, 'Ovi1')]( (e, f) => {
                    const a9 = a7
                      , g = {
                        'cjQjl': function(h, i) {
                            const a8 = b;
                            return c[a8(0x1a8, 'wpn^')](h, i);
                        },
                        'zNxrG': a9(0x247, 'Ovi1'),
                        'Tztag': function(h, i) {
                            return h === i;
                        }
                    };
                    if (c[a9(0x164, 'LDE*')](c[a9(0x225, '$6pi')], c['lxXwc'])) {
                        const i = g[a9(0xc8, 'VcTj')](a9(0x109, 'oWvP') + g['cjQjl'](h, 0x1) + a9(0x1b3, 'KTZ#'));
                        i && (i['load'](),
                        k[l][a9(0xbb, 'e2oM')] = !![]);
                    } else {
                        const i = e[a9(0x1d5, 'V&NR')](c[a9(0x185, 'm[)u')])
                          , j = e[a9(0x1d9, 'y^pi')](a9(0x1ca, 'K6^z'))
                          , k = e[a9(0x1cf, 'Dx0d')](c[a9(0x237, 'wpn^')])
                          , l = e['querySelector']('.play-pause-button');
                        k && k[a9(0x169, 'N@Z9')](c['BAMBD'], m => {
                            const aa = a9;
                            m[aa(0x252, '@o0E')](),
                            startPlayback();
                        }
                        ),
                        l && l['addEventListener'](c[a9(0x145, 'twXo')], m => {
                            m['stopPropagation'](),
                            togglePlayPause(i, l);
                        }
                        ),
                        e['addEventListener'](c[a9(0x124, 'K6^z')], () => {
                            const ab = a9;
                            c['KJoOX'](ab(0x18f, 'O1Oo'), c[ab(0x1b5, 'WHX]')]) ? togglePlayPause(i, l) : f['classList']['toggle'](g[ab(0x1f7, '6@9a')], g[ab(0xd6, 'e2oM')](g, h));
                        }
                        ),
                        i[a9(0x11b, 'Dx0d')](c[a9(0x1c9, 'zPgI')], () => {
                            const ac = a9;
                            c[ac(0x1a9, 'vprY')](updatePlayPauseButton, l, ![]);
                        }
                        ),
                        i[a9(0xe0, 'wpn^')](c[a9(0x20f, 'VcTj')], () => {
                            updatePlayPauseButton(l, !![]);
                        }
                        );
                    }
                }
                );
            }
            function togglePlayPause(c, d) {
                const ad = O;
                c[ad(0xcd, 'wpn^')] ? c[ad(0xec, 'm[)u')]() : c['pause'](),
                updatePlayPauseButton(d, c['paused']);
            }
            function b(c, d) {
                const e = a();
                return b = function(f, g) {
                    f = f - 0xb2;
                    let h = e[f];
                    if (b['MWTawD'] === undefined) {
                        var i = function(n) {
                            const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                            let p = ''
                              , q = '';
                            for (let r = 0x0, s, t, u = 0x0; t = n['charAt'](u++); ~t && (s = r % 0x4 ? s * 0x40 + t : t,
                            r++ % 0x4) ? p += String['fromCharCode'](0xff & s >> (-0x2 * r & 0x6)) : 0x0) {
                                t = o['indexOf'](t);
                            }
                            for (let v = 0x0, w = p['length']; v < w; v++) {
                                q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);
                            }
                            return decodeURIComponent(q);
                        };
                        const m = function(n, o) {
                            let p = [], q = 0x0, r, t = '';
                            n = i(n);
                            let u;
                            for (u = 0x0; u < 0x100; u++) {
                                p[u] = u;
                            }
                            for (u = 0x0; u < 0x100; u++) {
                                q = (q + p[u] + o['charCodeAt'](u % o['length'])) % 0x100,
                                r = p[u],
                                p[u] = p[q],
                                p[q] = r;
                            }
                            u = 0x0,
                            q = 0x0;
                            for (let v = 0x0; v < n['length']; v++) {
                                u = (u + 0x1) % 0x100,
                                q = (q + p[u]) % 0x100,
                                r = p[u],
                                p[u] = p[q],
                                p[q] = r,
                                t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % 0x100]);
                            }
                            return t;
                        };
                        b['TXIQPV'] = m,
                        c = arguments,
                        b['MWTawD'] = !![];
                    }
                    const j = e[0x0]
                      , k = f + j
                      , l = c[k];
                    return !l ? (b['CCHzPr'] === undefined && (b['CCHzPr'] = !![]),
                    h = b['TXIQPV'](h, g),
                    c[k] = h) : h = l,
                    h;
                }
                ,
                b(c, d);
            }
            function updatePlayPauseButton(c, d) {
                const ae = O
                  , e = {
                    'WRGZp': function(f, g) {
                        return f === g;
                    },
                    'PWdcO': ae(0x184, 'fN(Z'),
                    'pelic': ae(0x128, 'fN(Z')
                };
                d ? c[ae(0xd3, '4Jq(')] = ae(0x11e, 'K6^z') : e['WRGZp'](e['PWdcO'], e[ae(0x158, 'N@Z9')]) ? e['delete'](f) : c['innerHTML'] = ae(0x21a, 'VcTj');
            }
            function startPlayback() {
                const af = O
                  , c = {
                    'liheZ': '.video-overlay',
                    'FTFss': af(0x118, 'K5pB'),
                    'eouer': '.video-wrapper',
                    'ryzmR': function(e) {
                        return e();
                    }
                };
                isFirstPlay = ![];
                const d = document[af(0x174, '#vM7')](c['eouer']);
                d[af(0x24f, '$w*N')](e => {
                    const ag = af
                      , f = e[ag(0xb4, '6@9a')](c[ag(0xeb, 'e2oM')]);
                    f && f[ag(0x108, 'wpn^')]['add'](c[ag(0x246, 'F058')]);
                }
                ),
                c['ryzmR'](playCurrentVideo);
            }
            async function playCurrentVideo() {
                const ah = O
                  , c = {
                    'kuyul': function(f, g) {
                        return f === g;
                    },
                    'SRfAZ': 'yATtq',
                    'jcUWq': '自动播放失败:',
                    'RlxZh': ah(0xe5, 'zPgI'),
                    'fhzcT': function(f, g) {
                        return f === g;
                    },
                    'DIYjm': 'TCGGS',
                    'vfdaW': ah(0x1fa, '3v09'),
                    'UrnrV': 'hidden',
                    'hEUSq': 'bitAL',
                    'QLOtk': function(f, g, h) {
                        return f(g, h);
                    },
                    'HTHzo': function(f, g, h) {
                        return f(g, h);
                    },
                    'FAqDy': ah(0xdf, '^FZI'),
                    'qKKgd': '.play-pause-button',
                    'WyCSt': function(f, g) {
                        return f < g;
                    },
                    'lbvsh': function(f) {
                        return f();
                    }
                }
                  , d = document['querySelectorAll'](c['FAqDy'])
                  , e = document['querySelectorAll'](c[ah(0x10d, '%HsJ')]);
                d[ah(0x1ed, 'ukkJ')]( (f, g) => {
                    const ai = ah
                      , h = {
                        'yhwso': c['UrnrV']
                    };
                    g === currentVideoIndex ? c['fhzcT'](c[ai(0x262, 'uJu(')], ai(0x200, '6@9a')) ? (e[ai(0xee, '%HsJ')](),
                    f()) : (f[ai(0x177, '*uew')]()[ai(0x19c, '02[M')](k => {
                        const aj = ai
                          , l = {
                            'NLxQZ': function(m, n) {
                                return m(n);
                            }
                        };
                        if (c[aj(0xf3, 'vprY')](c['SRfAZ'], 'yATtq')) {
                            console['error'](c['jcUWq'], k);
                            const m = f[aj(0xf9, 'nXsu')]['querySelector'](c['RlxZh']);
                            m && (c[aj(0x180, 'zPgI')]('TCGGS', c[aj(0x260, 'WHX]')]) ? m[aj(0x21b, 'O1Oo')]['display'] = c[aj(0x1f6, 'ukkJ')] : d[aj(0x27b, 'oWvP')][aj(0x1da, 'MU@(')](h['yhwso']));
                        } else
                            l[aj(0x25f, 'K6^z')](d, 0x3);
                    }
                    ),
                    c[ai(0xfc, 'N@Z9')](updatePlayPauseButton, e[g], ![])) : (f[ai(0x1cc, '%HsJ')](),
                    f[ai(0x130, 'VcTj')] = 0x0,
                    c[ai(0x189, ']76h')](updatePlayPauseButton, e[g], !![]));
                }
                );
                for (let f = 0x0; c[ah(0x1fe, 'F058')](f, currentVideoIndex); f++) {
                    videoCache[ah(0x1e7, '#vM7')](f);
                }
                await c[ah(0xc3, 'oWvP')](ensureCachedVideos);
            }
            document['addEventListener'](O(0x141, '02[M'), c => {
                const ak = O
                  , d = {
                    'MVPvY': ak(0x272, 'm[)u'),
                    'DTPAu': 'none',
                    'LvTfl': ak(0x254, '3v09'),
                    'pmLgy': function(i, j) {
                        return i - j;
                    },
                    'ReEhw': function(i, j) {
                        return i - j;
                    },
                    'bGFst': function(i, j) {
                        return i > j;
                    },
                    'CdrmI': function(i, j) {
                        return i >= j;
                    },
                    'TPyFq': function(i, j) {
                        return i(j);
                    },
                    'lhIGC': function(i, j) {
                        return i < j;
                    },
                    'RHpZT': function(i, j) {
                        return i === j;
                    },
                    'jYnHT': ak(0x18b, 'zPgI'),
                    'zAskj': ak(0xf6, 'ne8H'),
                    'DvpMG': '.video-wrapper',
                    'BNfZm': function(i) {
                        return i();
                    }
                }
                  , e = c[ak(0x16a, '2NpX')][0x0][ak(0x150, 'l1jC')]
                  , f = c[ak(0x15e, 'VcTj')][0x0][ak(0x106, '@o0E')]
                  , g = d[ak(0x119, '3v09')](touchStartY, e)
                  , h = d['ReEhw'](touchStartX, f);
                if (d[ak(0x24a, 'twXo')](Math[ak(0x18e, 'ZWSW')](g), Math[ak(0x26c, '*uew')](h)) && Math[ak(0xd0, '2NpX')](g) > 0x32) {
                    if (d['bGFst'](g, 0x0))
                        currentVideoIndex++,
                        d[ak(0x22b, 'wpn^')](currentVideoIndex, d['pmLgy'](videos[ak(0xd8, 'WHX]')], 0x2)) && d[ak(0x14e, 'fYc[')](loadVideos, 0x3);
                    else
                        d['lhIGC'](g, 0x0) && d['bGFst'](currentVideoIndex, 0x0) && (d['RHpZT'](d[ak(0x151, '*uew')], d[ak(0xed, 'l1jC')]) ? e['scrollBy'](0x0, f[ak(0x241, 'Wp)E')]) : currentVideoIndex--);
                    document[ak(0x207, 'V&NR')](d[ak(0x210, 'Ovi1')])['forEach']( (j, k) => {
                        const al = ak
                          , l = {
                            'KeWzp': d[al(0x236, 'KTZ#')],
                            'MvOrr': d[al(0x245, 'vprY')]
                        };
                        d[al(0x270, '^FZI')] === d[al(0x24c, 'RNQv')] ? j[al(0x112, '^FZI')]['toggle'](al(0x197, '02[M'), k === currentVideoIndex) : (f[al(0x13a, '02[M')]--,
                        g[al(0x1e9, 'VcTj')] = ![],
                        h[al(0x15f, '@o0E')](l[al(0x120, 'MU@(')], l['MvOrr']));
                    }
                    ),
                    d['BNfZm'](playCurrentVideo);
                }
            }
            );
            function likeVideo(c) {
                const am = O
                  , d = {
                    'JDliA': function(i, j) {
                        return i * j;
                    },
                    'enaXs': 'span',
                    'tmUFz': am(0xe7, 'fYc[')
                }
                  , e = videos[c]
                  , f = document['querySelectorAll'](am(0x155, '#vM7'))[d[am(0x1af, '2NpX')](c, 0x3)]
                  , g = f[am(0x278, '1#xR')](am(0x1b8, 'KTZ#'))
                  , h = f[am(0x276, 'TgQ6')](d[am(0x215, 'K6^z')]);
                !e['liked'] ? (e['likes']++,
                e[am(0x187, 'C2G4')] = !![],
                g[am(0x1df, '$6pi')](d['tmUFz'], 'red')) : (e['likes']--,
                e[am(0x1ee, 'Wp)E')] = ![],
                g[am(0x154, 'ne8H')](d['tmUFz'], am(0x261, 'WHX]'))),
                h[am(0x24d, 'MU@(')] = e['likes'];
            }
            function toggleComments() {
                const an = O
                  , c = {
                    'qJxXg': an(0x265, '2NpX'),
                    'dMzJf': function(e) {
                        return e();
                    },
                    'wLlqd': 'commentsOverlay',
                    'tyQpl': 'show',
                    'NIsMh': function(e, f) {
                        return e !== f;
                    },
                    'IGzUE': 'jBRgR',
                    'vHNpz': an(0x16e, '6@9a'),
                    'Yoizk': function(e) {
                        return e();
                    }
                }
                  , d = document[an(0x16f, '1#xR')](c[an(0x22d, 'C2G4')]);
                d[an(0x23e, 'Wp)E')]['toggle'](c[an(0x26d, '$w*N')]);
                if (d['classList'][an(0x1c5, 'WHX]')](c[an(0x1e8, 'y^pi')])) {
                    if (c['NIsMh'](c[an(0x271, '2NpX')], c[an(0x203, '2NpX')]))
                        c[an(0x223, 'Ovi1')](renderComments);
                    else {
                        const f = h['getElementById'](c['qJxXg'])
                          , g = f[an(0x132, 'ne8H')]['trim']();
                        g && (m[n]['comments'][an(0x1a2, '1SrV')]({
                            'username': '我',
                            'text': g
                        }),
                        f[an(0x226, 'oWvP')] = '',
                        c[an(0x1a4, 'fN(Z')](o),
                        p());
                    }
                }
            }
            function renderComments() {
                const ao = O
                  , c = {
                    'enxLg': function(g, h) {
                        return g(h);
                    },
                    'FNlUV': ao(0x1c0, '%HsJ'),
                    'KDpJD': function(g, h) {
                        return g === h;
                    },
                    'uJRLo': ao(0xbf, '3v09'),
                    'IphQF': ao(0xbe, '*uew'),
                    'epLpy': 'div',
                    'zFGKk': 'commentsList',
                    'PInKE': ao(0x1cd, '@o0E')
                }
                  , d = document['getElementById'](c['zFGKk'])
                  , e = document['getElementById'](c[ao(0x1d8, 'TgQ6')])
                  , f = videos[currentVideoIndex];
                d[ao(0x1c3, '2NpX')] = '',
                f['comments'][ao(0x196, '*uew')](g => {
                    const ap = ao
                      , h = {
                        'MUTqC': function(i, j) {
                            return c['enxLg'](i, j);
                        },
                        'nszRJ': c[ap(0x176, '@o0E')],
                        'pYBBP': ap(0x10c, '$6pi')
                    };
                    if (c[ap(0x206, '$6pi')](c[ap(0x12e, 'fN(Z')], c[ap(0xc7, '02[M')])) {
                        const j = h(i[ap(0x12c, '1#xR')][ap(0x142, 'm[)u')]);
                        if (!h['MUTqC'](j, j)) {
                            m[ap(0x266, 'zPgI')]['innerHTML'] = h[ap(0xc4, '%HsJ')];
                            throw new n(h['pYBBP']);
                        }
                    } else {
                        const j = document['createElement'](c[ap(0x165, 'fN(Z')]);
                        j['className'] = ap(0x218, '1SrV'),
                        j['textContent'] = g['username'] + ':\x20' + g[ap(0x14b, 'l1jC')],
                        d['appendChild'](j);
                    }
                }
                ),
                e['textContent'] = f[ao(0x1f3, 'TgQ6')][ao(0x16b, 'TgQ6')];
            }
            function addComment() {
                const aq = O
                  , c = {
                    'qeyJz': aq(0x17c, '$w*N')
                }
                  , d = document[aq(0x12b, 'K5pB')](c[aq(0x250, 'C2G4')])
                  , e = d['value'][aq(0x1ff, '@o0E')]();
                e && (videos[currentVideoIndex][aq(0xef, 'Ovi1')][aq(0x27c, '2NpX')]({
                    'username': '我',
                    'text': e
                }),
                d[aq(0x1bf, '@o0E')] = '',
                renderComments(),
                updateCommentCount());
            }
            function updateCommentCount() {
                const ar = O
                  , c = {
                    'Etlsg': function(f, g) {
                        return f + g;
                    },
                    'LSZoG': function(f, g) {
                        return f * g;
                    },
                    'RLNeF': 'span'
                }
                  , d = document[ar(0x174, '#vM7')]('.video-actions\x20.action-button')[c[ar(0x168, '@o0E')](c[ar(0x251, 'nXsu')](currentVideoIndex, 0x3), 0x1)]
                  , e = d[ar(0x17b, 'RNQv')](c[ar(0x19f, 'KTZ#')]);
                e[ar(0x131, '%HsJ')] = videos[currentVideoIndex][ar(0x1aa, 'LDE*')][ar(0x253, '%HsJ')];
            }
            function shareVideo(c) {
                const as = O
                  , d = {
                    'yXdmH': function(e, f) {
                        return e(f);
                    },
                    'NayLE': '分享功能待实现'
                };
                d[as(0x15c, 'K5pB')](alert, d[as(0x133, 'm[)u')]);
            }
            document[O(0xb3, 'RNQv')](O(0x117, 'zPgI'), c => {
                const at = O;
                touchStartY = c[at(0x234, 'W9wN')][0x0]['clientY'],
                touchStartX = c[at(0x238, 'Wp)E')][0x0][at(0xfa, '1SrV')];
            }
            ),
            document[O(0x1ba, 'fN(Z')](O(0x194, 'fYc['), c => {
                const au = O;
                c[au(0x239, 'vprY')]();
            }
            , {
                'passive': ![]
            });
            let preloadDistance = 0x3;
            async function preloadVideos(c) {
                const av = O
                  , d = {
                    'WsVIP': function(e, f) {
                        return e + f;
                    },
                    'luilJ': function(e, f) {
                        return e !== f;
                    },
                    'bppCS': av(0x256, 'WHX]'),
                    'uTqlt': av(0x182, '1#xR')
                };
                for (let e = c; e < d['WsVIP'](c, preloadDistance) && e < videos[av(0xf0, 'Dx0d')]; e++) {
                    if (!videos[e]['preloaded']) {
                        const f = document['querySelector'](av(0x146, 'l1jC') + d[av(0xd2, '*uew')](e, 0x1) + av(0x219, 'O1Oo'));
                        f && (d['luilJ'](d[av(0x175, 'oWvP')], d['uTqlt']) ? (f[av(0x195, 'KTZ#')](),
                        videos[e][av(0x235, '2NpX')] = !![]) : d[av(0x15b, 'm[)u')]['href'] = av(0x220, 'N@Z9'));
                    }
                }
            }
            async function loadVideos(c=0x3) {
                const aw = O
                  , d = {
                    'oZHpc': function(e, f) {
                        return e * f;
                    },
                    'vdPnt': aw(0xf8, 'e2oM'),
                    'iBUrl': 'fill',
                    'epziz': 'red',
                    'XmdJJ': aw(0x19b, '1#xR'),
                    'NojYA': function(e, f, g) {
                        return e(f, g);
                    },
                    'nldle': function(e, f) {
                        return e(f);
                    },
                    'fwGPH': function(e) {
                        return e();
                    }
                };
                if (isLoading)
                    return;
                isLoading = !![];
                if (isInitialLoad) {
                    if (d[aw(0x211, 'MU@(')] !== aw(0x11c, '$w*N'))
                        showLoading();
                    else {
                        const f = g[h]
                          , g = i[aw(0xdb, 'Dx0d')]('.video-actions\x20.action-button')[d['oZHpc'](j, 0x3)]
                          , h = g[aw(0x21e, 'm[)u')](aw(0x16c, '02[M'))
                          , i = g[aw(0x244, 'W9wN')](d[aw(0x231, 'oWvP')]);
                        !f['liked'] ? (f['likes']++,
                        f['liked'] = !![],
                        h['setAttribute'](d[aw(0x100, '$w*N')], d[aw(0x1bc, 'fYc[')])) : (f['likes']--,
                        f[aw(0xc0, 'WMPm')] = ![],
                        h['setAttribute'](aw(0x15d, 'ZWSW'), aw(0x173, '3v09'))),
                        i[aw(0x16d, 'K6^z')] = f[aw(0x121, 'RNQv')];
                    }
                }
                try {
                    const f = await d[aw(0xe4, 'WMPm')](fetchVideosWithRetry, currentCategory, c);
                    videos = videos['concat'](f),
                    renderNewVideos(f),
                    await d[aw(0x122, 'oWvP')](preloadVideos, videos['length'] - f['length']);
                } finally {
                    isInitialLoad && (d['fwGPH'](hideLoading),
                    isInitialLoad = ![]),
                    isLoading = ![];
                }
            }
            function a() {
                const aH = (function() {
                    return [_js, 'ldKljfspUjCipaMmDi.cptbogmN.kvp7BKDSTuHq==', 'FX7dJmkKWRO', 'rCotfmkWW7qvdCoweJxcNsK', 'DSoCjmoegG', 'uSkgW7WAWQ3dMa', 'mquVobqzWQu', 'na/cIcKI', 'smoJjmk8WOlcHmkdW4VdMa', 'mSk9qKNdIa', 'W4JdUmkUW4nU', 'dSoTWPJcSSkCjW', 'mSkMFKhdTG', 'gxBcGmoLCa', 'W6ldJ03dQSkvgCk1zMZdOxZdUSkxW64', 'emkMvCk5WP7cH8k5', 'W7pcRcHIvq', 'kbOoxSobW54Q', 'AmouFNmI', 'svFdUNq', 's8o8tgef', 'W6ZcRJmx', 'm3BcUCoixa', 'WOxcLX7dUd1AWPDR', 'sSksW61/WPBcMchcTgpdRJ47', 'CCoQW5JcICoaW5hdGmoRcenduhZdOW', 'obmyESo3', 'ASk+k8kKwq', 'j8kjtMxcSmooWQBdTalcRuFdGXaAW4RcRW', 'WOJdQWabWQ4EhCocWRXPw8kt', 'W6v6W7BdSG', 'F8k5gmk6xq', 'vSo0WOunWP7cRdC7cu3cPaK', 'W6ZcUNTifhG', 'WRXvWRzkkW', 'W7aFWO/cHa', 'wCkFnmkNCq', 'WQJdJttdMG', 'iHasFmouW5u', 'gmkmW75lW5q', 'WO3cG8ojnCkkW5u', 'W64sDMeBWP/cTa', 'FCoYemk7W4q', 'xCoIpvtdNdRcImohW4NdUqHrFaBcSSke', 'pdONW5uEWRO', 'cSkHE8k7WRZcLmkVW6ldG8oEW6iZW6NcOxS', 'DmkVzW9B', 'W7ieWOlcJaP6WPNcQhLKW5ZcOCoVqa', 'W4bjaIddVa', 'EmkFimkICmk1lr4', 'vhZcUmkRCW', 'jN3cPmoTyW', 'hfKmsXi', 'Emo5j8o4hG', 'W7WdWORcSsK', 'mmoqfK3dKCoosmkwqSouWONdUdXKwSo9pmoLoSkdb0dcRcLRgX7dQSkmqYbEydJcI8oTAmosW7NcNvddNmooWRHHWQfpW6FcPCkVWQ9gA1jBxuSkWQZdKSk5zcf1s8k0W5vfW4jAW6i1W5m3WRRcLgtdV8oqumoyW6HGFqrRCxDxW6bCaCk8W5BcOCoXW6/cJ8oKWRyxW4mCiSkXl8o+WRHbbtLDsYVcJZvTr8kIWRJdOSknumoxySojWPe0W5e7gmolW5qqn8kVWO5RWOpdVJRcP0FdLKJcTSoAzGVdLq3dIcpdVaVdVctcUCoKW6pdL15EtLnFW6S5rKRdR2a/WPOjy8k2BcD+WQFcJvbVkSoIpSkHW5n3dCoxCSkboCoaWRlcNSkWb8oeDIJcLSovWPfccdGkFSkUnG3dOfRcNeWAF8klW45kWQyhtdhdQCkVWQDQcvNcNhrXx8ohWQ7cR8oAnY0/WPJcGCkLyr5zW7jHe8odW7ilbH5GWOJcQCoyW47dI8oPWQDGeN7cGurbW53cLIVcP8okWP7dNmo+W73cSCo0isVdQmorermHWQddJKxdHLKNdCo6amkexgpcHwtcRmoGWORcGs/dNCoLvmkWtYHbfmkBW4DKW5SWWPCqWPjVnmoWW5ddJIRdVSo8nc8DFL7dLmkseSklwepcNJhdImoKB8kjW7z6ESkCumoYAbBdU8kOW49NyK0rDSoLBZ7cT8oZowalW73dMe3cQCk5WOCCW7RcLSoky8kgWP5keZNdISkpcGW9W7H3CxjeeHu+WO7cUIWlxmo9WRddPwa9WQewWQeylMVdNmkIjYW4W6FdSX9VW6WYW7GSuI9bfSotW4WgW5rbW7FcTCoqpWWIW4mvWO8hu8obWPXkW5SYamkgjYpdPCkxW77dHGOjoSkQsf3cU2WhW4HsWQmzESk+FYGZWQ7cQMpcQajEW68+BCobW5lcJXlcV8k3W6mHWRRdKCkTWQJdRwL4v8kPgxqdWRZdVdG9ohbLs0/dVZSWjW9RWRNcHSkVWQtcKL/dUCofW5/cLXH2WQLNt33dOfhcTqq2u8k4BSo2cCoaW6mHmx7cUSoAwGWXW4zBWQRcRCoZWQmtemosWRjcW5JdL8ogW53dUZTlW7xdJG0jW6CaWOZcLJ9Zx8odp8kBDX3cUKbLW4OuWQxcQSoOhmoiD8oocSkqW51zW6FdJ8koqXpdG2pcJ8oFkmo8WQFdG2CfW43cT8kREmoUW6mRW5LGFSo3WP9vW7SvF8oGhM/cLCoPgCkepHyJo8o1W5KA5yM55lIhW6ZcTmojvvnGE8oFWQNcRxxdGuO1WRenW71qd3WLt8orW7xdQuZcGbGmWOZcHSkYWQ3cNCk6bmobo8kUW7ibW7JdSahcPbxcOqVdVCo/iWHtqbpcML3cRSooifFcHePDag/dMmkGW5mhpSoQpthdK8opjgeWWQOgCCkVW5P3', 'nSoYW5/cImoxW7BcUCornG', 'uIhdOSklWPe', 'b8koduXu', 'jCoeWPnquq', 'nCopWQHuzSksWQu', 'F8oCxx7cRCo4WQW', 'FZ/dI8kGncZdHCkSfHFdTKVdHtxdSSolW7NdPvJcJSkmWR/cM8kPWQhcL8oGlSk6W6NcQ8kyAmoQW4qEASoGdSoeWOFdUmkUqxVdUK0uw8ocE8kpWPriWPVdHHJcQbpcLmkvWOGxqSkbW68cW5CLWR5az8onwCkSW5SDW6RcRYPOWOP4WPz/bSk4WOpdJ8oGgHnKsWrYl3H9WQ8ocYZdVSktpZDvW4HbW6JcTCkQWPddJ8o8smk/W4ZcIfFdGJhcRezxWPdcJchcI2b9WQpcG3lcTmk8WPJdUmkkD8oys3NcT8k+W47cTMNcILVcPr58W5JdI8ozW58', 'jCkiuNVcRa', 'vhBdOvpdQG', 'dHmsW4KU', 'zSkquJnKzbFcHCohiHpdVs8', 'FSohimokWO11WRKmySogk8kC', 'fu7dOW', 'W4NcRqjcs8oeWRiWWRW', 'f8kiAGG0', 'auavFd4', 'W4KRW6/cMmoXW5pcPCk1W5pcOH3dVHj3cCkC', 'FSofmSkEW6W', 'kCo9W53cMmoa', 'dxxcGCkUBhRcHmoGwbNcTqu', 'D8ofjmonWOXZWOqTzCo/omkU', 'W4RdVGihWQnB', 'kGiCW40C', 'zcldTduk', 'W7FdIutdOSkFwSk2zW', 'WRtcJCk5WQxdKG', 'uSoXiSowltBcLdPsAW', 'WRmWyx0iWQ7cSCkQWRG', 'q1FcNmkcC8okWPNdS0O', 'kCo4W6hcG8or', 'A0RdQ1xdTq', 'WO9fWOD8pmo9WQWKiq', 'W5ldTbKdWR9wda', 'hSk2W5vxW4hdUdOsdW', 'kCkUvHCz', 'yI3dGWar', 'CmosyhuUhCkM', 'WQldGLZdO8k7smocjCkwuZNdP8o0wW', 'FSkRrMtdPq', 'sxNdSMlcNW', 'jCosbxyTFXxcUmoKoWO', 'pSknsHes', 'z8orDgu1nmk8xaa', 'f8klqutdRq', 'WQldGeNdOCkY', 'BCotE3m0mmkWrHm+vG', 'WQK7EW', 'WRJcJCoEW6aM', 'W5FdRGKsWQ5GgSoBWQ1+qmksW4S', 'WPBdPgNdLmkR', 'WQ14WRnQla', 'ouWiBYpcIW', 'WQNcVJldUbq', 'emkqyW8', 'lCkYv8kiW4G', 'B8ooa8k7W6u', 'W5pcSr0una', 'vmoXo8ogfWRcJI9dymk9', 'h0upAbW', 'WOFcICovf8kFW57dHG', 'WRlcPmkSWP7dJa', 'DL7dKwhcVq', 'W7CzWONcMtvlWPNcTMXIW5tcU8oJxCo5', 'WPlcGX8FWOST', 'W45aW6tdK2i', 'zdKMjbSeWRFdOxvYW5y', 'WPityMem', 'WQNcS8ozW6KO', 'oIa0W5ql', 't8oDcgJdOW', 'W6TondVdLq', 'W6hdGSkSW5bh', 'vCoPE2mX', 'W7hcVN1iehTD', 'kCkUW4nvW6C', 'EqpdU8kcWRG', 'WP4xvNix', 'WRqXyx0', 'W7tcNLTOaa', 'uYRdR8kNWOmQ', 'vuJcMmkdqCoJWP3dSfS', 'amkHW4D4W4hdTdmsbuhcMspdKSk3W7m', 'j8k2i2e', 'gJJcOGK4', 'DL8qzYZdG0/cICkFuNO2WRpdQtzMWOFcGG', 'WRpdLf3dKmkOq8oyfCk/xcVdPSo9qsi1', 'oCktxIv4wf/cNSoqibFdOJGA', 'WRdcTYO', 'qvNcJG', 'WPxcN8o2iSks', 'W6BdQmkOW5j1WPa', 'xYFdTWeN', 'pMhdHmo/WPm', 'j8kdW4PUW6S', 'CCkmwY0', 'jCkWqvldUXS', 'rf7cKCkfyCoD', 'eSoEW73cNSoD', 'WPFcJrBdPYfNWOz0cfpcTJuq'].concat((function() {
                        return ['omksFsr4CSo1d1r2aSkhBwxdPmkQW4TmW6KuhKdcJMBdJXddV8oanCoTwSk0WRu', 'W6xdK0ZdVCkdz8kNEgJdSNJdSmkx', 'vCoAcCksW6S', 'vcS6nr4', 'pmoWW5dcNSowW7lcHmoVdG', 'hSkXW4nt', 'j3DCyvvaW5tcQtW+WPjOfYrEWQxcQW/dKhVdN13cOSkDFCkVemoTWPBcPZ/dU8oFtXzrzSo7W4ddJ8ovgJrTraOWWRFdKCklWQTtW5tcISoF4PAWWQBcVmo+W5jmWRVcQIONwZ5sWQZcRCoZtxDhW6zgW4JdT8oNtCkWWRZdKSk1WRlcPSkZlfvtzqpdMuHuFdNcKYmmwmkpW6C5lmktqveBW6mAWOSMnrXmW5NcUapdRmkvWOjBWRpcGmoaWR3dHSo5rG4Bg8ojWQZdQH8mxSoVFCk0W4JcQmoTtCkwW75nhHtdSxScWPZcHI98W6avWQ7cRt48xbNcM8kYWRldKmkOdGHuyGCYg8k8WRFcSeilAruZz8kxe8ksWPbyWRe3WO5ZW63dHmotWRW4W7WNrI4idSo2vMnFWRpcQJxdPI3cLmo7FXNcTIpdTuWKW7pcMCocBCkWW7SstmonW5tdNHNdTSkxW7lcKK7dRmkWW79oWQDTWPRdHmklEvvCW6VdRSkFm8ozkJKzW5eRaCkNpSkyW4rcvwKjW4jXsSoIWQ7dHmk/WRb/aGhcLalcIcXTjCkHhh9CWRtdSmovWQFcMq/dU0JcOIFcPZGhcbZdOY0QcHBcTexcMrFcKIFcMmonWODEBqVcO8o9W5baW4Kzl8k/emoqW4JcHmkEBSosW6VcPJJdU8kPW59AW4FdRazxBCkTW4NdVXi4afWplmo6ESoQWONcNSkJW5biW6tcJSkjxCovk3Dzl3r3WOxcNSouW6BdMLxdVfSyW7ddSJVcI8kczq9qW7ZdQCorWPNcKwRcG8kmFw/dSCkca8k3zNpdRGFcL0OxW4PilX3cG8o6mSk2W4G7WOaVW7FdGCo4W6ldG8oAWQOlWR7cJ2NcSd3dT0RcQNxdLvxcSSkSmGyla8oUk8knhf3cLfNcIdZcUY7dOqFcRIKEW7NdLSo8lNRdNCogW5hcG8opFvyUWQNdQCkdW799W6OwA8oPW4xdGaJcHq', 'u1ddRNtdQ0/dH3rN', 'mZCOW5WnWRC', 'W77cOY03lH1Ktmoimmo8W6zPv0VdHG', 'yCkfnSkKz8khjrFdOCo9oCoyW4K', 'WRKRFwOFWOJcKCkZWP3dIYC', 'ewxdTCo4WOTIm8oaW4HmCmk5cG', 'a1RcUmortG', 'mflcNmoIua', 'o8oZW4BcGW', 'W4NdUIqMWRS', 'W7RdV8kJW5LUWPNcUg13', 'WQ7dVN1eye4/wCohg8ovW5DR', 'bSoNWPFcTSkCk8kEWOm', 'vwJcPmk7Dq', 'W5nEW6hdM3q', 'Asa9jbe', 'hCk0ymkQ', 'W73cRNPu', 'm8o+W4FcNSon', 'WPdcLqSQWRu', 'bNZcMCoVEgdcP8o1', 'vSkNWPZdPCowsmorW43dObZcSWNdJCoiuSoLy8olWPr0eMNcQSkHW5/dGCo0nt/dLIpcTs8', 'fIiUW6O/', 'bgRcJSoYBv/cGmoGu1tcOGtcLW', 'hbtcJSkbyCoQW4BcLa/dSLT4WR/cILjDWPldVGmgWONdK0n9W77cKmoen8ogDa7cKmo/WPeMWOhcJtmYW53dLCk7oqJdJbldTCkzWPZdS0HAW6LVsWRcOCo8WPddLMFcR3CvWPpcHKldJJeQW60kztBcT2rBW4hdVCkfWR9/W4JcRv/cNCkEW70HA155sKWLq8oHvCoJWPldI8o6EKtcK8ohDmo0lfv9vMmtWOqnFSkqjX/dOgddPmkiuSk5tCoqWRtcTbioWRNcGGmhCSkWpSohcCoRgCovWR8Zi8kHhSozomoFWQ43pfBdJCkYm8oPWO3dVbOLhshcN8kHqmkuWRZdHKKBW6FdSGJdR8kuW7NdNH/cGNv+WOumW73dQSokDs7dVN7dPmkJWOfhW5fHWQJcSa/cTevtWRhdKCoSW7tdLMi8pHKkWOWDlWmBkCozWQ7cK8kGjmkoW7BdI3nzub1Fee41BSofWQzfhCo8WPtcMXZcQYfxWRhdTJhcKLhcTL/cOSodWP4OAclcG0VcLSk/jJ1cWQldI8oYWQ3dKbHhq0JcUSoaBmk8W7NdSNZdICovW6BcNZb9z8o9zZFdGCoGmgRcQYHlW67cKfOUBmkDW6lcIwP+W5e6W4qNEmkaWRNdSZOfgchdUSkKW6VdGSkfahVcJ17dHSoVW5eGgW9qW6SszqFdMZ14W7xcK8ouW4CTvmoGtxpcKCkQW77dQ0eCWPVcKWldM0OTWOxcLMtdV3npWQW5WPjje8kcWRjIAaSDW7tcIHhcV8koW7H4WRTvfCoxWPRdTSkmfLxcTCkoWOLvWPi2WOBcHNNcVtxcS8k4wNBcMJNdPZtdKHGLW5ldPNKep8oucmkIpYlcI2mHzCoUa8oYWR3cJSoNWQpdUqzDW6v1ECoBWPJcT8oeWRRcTKlcKKFcTmkLWOJcN3pdGSoyqSogWRldMSo0W5VcN8oSW5euA8khCMhdV2FcM8k+qCoKWOldH8okv2hdMSonWOnWWPhdGfvhWQddJSkYWPOFamoiqtOctmo+WRTzjqBdT8oooCo0iCobW5pdIcuvcMxcIXvmpmotamkKy2JdOZ7cJc7dNNVcVW4UlSkXW7ldLSknW6yogwtcLfmcE8oPC8ooWRSaWQ/cLLSSdgS8EIFcVCk4AYRdUXfoDCk4WRtdJ8oUW6pcRCkBWRpcQ8kRFg9JWQ/dGeamW47dIa', 'WRpcUqldHqW', 'cmkRW4j+W4/dUJy', 'cmonW4VcPmoZ', 'vYFdSYSMsW', 'zmo6lSk5W7m', 'ACkau0ldKSooxW', 'd8kMW4m', 'feJdQxxdVgJcVKLhW5LoWQVdJG', 'D0JcQ8k4ua', 'fXtcIGyDrbGCWO0', 't0ldKLvFArW2WOddQSoA', 'BmkVWOpdN8oGW7NcHCo6ghu', 'W57dT8kYW5rM', 'jmk9i11UWOa3W4awWRtcRMFcNmk9vmk/', 'WRy7yx8oWO4', 'aSozWQK6WPNdVWX0WQm', 'WPxdP2LsEfGQgmkKECkVWRiSgq7cLg3dKZZcJ8oeaSolW63cRCo8ibHFESkdxhO', 'WRRcJCosW7G2WOLkq8kEWRTBW5WAiCoUDG', 'tmoXlCovia0', 'xSkvW6v3WP8', 'kSk6qvBdRGC', 'xghdUCo9WPPOw8oCW4faBmkYda', 'rIldOH01sGVcUfFcOvpcNqBcL8o9fG', 'pmoWW5dcNSowW7dcJmoXhW', 'pKaoqZtcJvC', 'WQlcLSouW6y6WR5kxa', 'sYy8gdq', 'A8kVlNX9WOP0W5SSWRJcR3/cMmkQ', 'WR/dHYRdG8oPDayW', 'WRRdGsVdGG', 'jCk2qSkIW50', 'cH/cNbCSyYiLWQtdLSoC', 'a8kDCIqSFN0Um1nnmmobEq', 'W6BdPmkUW5bB', 'z8kjvJG', 'W7vjkdZdLq', 'WO3cKH4iWQ83W5FcRmovWOddKSovghZcJq', 'o0arAZdcGeVcMW', 'WQFcNCozW607WRi', 'smkOWOFcO8kAlCkAWOJdVr7dSfZcN8kAf8kRn8kOW5S4xtVcQmkHWOZcLCkMENtcKZlcSNJdMmklWQhdPhycBwFdQmouWRqbW7WngCozn2G/WQdcNXZdS0xdUJRdLL/dKxNdIH/cKrmrW4vPW7BdICk4W53cLvquW5PZWRnoW5ZdH8kFiCk3D23dLmoGWR3cKZpdVmkmW5ZcKmkFc3VcVSk2WPvTW5X4W64jmx/dV0xdNmo2WORcJsBcO8oaru82hmk7W7T4WP1hW7iFFWxdKSkJWRhcI3y3CMZcV03cNc4jomk8jvhdU8k4bSoGEConW4KPW4H1dGtdTJCAvmocWP1sW7zsWQe0WOBdL8kGW7NcPmoGhSkVlhOAnGbKW4hcKdNdKxfnWQyLW5hcJajdDf0gWR3cKmoLWQ7cG2RdNeFdLSkOW7a7W5hcRHf3mbnDEYtdTCkvlhhdTcanC8kfaGpcRmomsY0UWRtcOezWWRrFsSouW4DlWRi6W7xdH1BcNqvHW5tdOGZcSCkVW6WgWQ/dTfH4bCosWPFcNmoJWQ9CWOrQESouW5fNWPNdU2RdLqLNgmkgW7hcSWxcRc5kEv7cQLe1A17dPbezWOPQs18sWPPfWO4TyYHLWP7cV8kfW67cTSkUkSkGdCkoW43dGGdcRxm6W69SWPyIWOVdVLZcTCo+W59hB8kk', 'aSkDrNddOW', 'WRNdHuddOmkY', 'qSotgmkfW4moeColfs7cNq', 'uSkQD0VdRq', 'wmk2ywFdIW', 'WQdcRSk4WRNdK299', 'W7NdVCkNW5S', 'sMZdUwVcLmkniaOKWRzMnmo7', 'nComWQXCBCkiWOK', 'DmkkwIX4wqBcMG', 'A3ldJ2xdSG', 'lSkRaNXb', 'CsWLnq', 'pSkDwa', 'WOJcPmoYimks', 'd8oDW442WP3dMXHk', 'j8o2W5VdG8ksW4BcG8oYvefD', 'WRPAWPHOla', 'jXSsFSosW7uNxmkrW5tdPW', 'muesyYFcPMVcPCkM', 'W6CbWO/cJaTnWQ4', 'nmk6sW', 'rcRdPYSWyWZcV28', 'CCoQW5JcICoaW5hdGmoRcenduhZdO8oTWObjgmkKWPxcSLNcPhldGG', 'W5b5W5FdJ2e', 'WQ1pW4BcIGLyWOxcTtaNW5tcRmo+w8o4awVcKCoqwSk6W7qDjtigWPpdNrmyWPD1W7TAE8kxCcbTsSoKW4WRW61rEHC1qCk9W5lcHLJcRupcTmkSWOtcU8ozW67cOSoWb8k0dSk2W7RcMc7cRmo/WQFcPwpcLSodaCoEWRJcI8o8bZ9diSkuqmkHFCk8WR87W6a3W47dHSoezmk9WPtdOLifWQa', 'y8oyaCkeW7qjemongtRcJcJdMSo+W5pdSxRdSSox', 'WO/cRtOFWPS', 'ASkUW6FcPCoWW5pcMSoo', 'mSoDW7dcI8oQ', 'dSoRWOdcN8kQ', 'dSoHWOi', 'exVdSCoQWOXlh8oFW5K', 'WQbbWOzsfa', 'bmoNWPRcSG', 'zSosCw8', 'w13dThJdR2i', 'mCk2mNTWWPyTW5uOWQK', 'eCk8CmkVWONcIa', 'W7n7W5/dRxq', 'xCk/W7KyWOq', 'WQRcNmotW485WR9bw8k3WRfCW4CndSoNAa', 'WPpcRCo0hCk1', 'hSkLW4viW4S', 'pw/cO8oZW4jtaSkDsmoYyh4+FgBdMmkZW4xdPamsvaZcHeGwu0zHW6y4WRK6h8k5EqNcMSkNWPtcTK9qidqOWOuUW5VdR8okW7tcN8kxnCoZW5zwhe15f8o+d1JcHq/cUmkuBdGea2O8rLfEW6JdICk/fJhdNMrmWRvWospcLCoTnCkEamk2W6FcUrCEfmoGW7BcGtRdTSosp8kEWRGCou3cThBcKmkpv8kPx8owW7qJW5BdNCkFWO5UlrhdPcSWAXhdMmo4W63cQNG', 'WPlcIraCWPyRW5/cK8ocWOldGConegO', 'A8oXfmoija', 'W7pcRIixkW', 'mCoWW5xcGCoa', 'eSoQWPZcN8k7', 'Dq7dJSkrWQy', 'lSkIumkVWQy', 'W5tcLZXKDq', 'svhdJ3ddMG', 'B8koW7jKWQm', 'cCo6WPhcTSkCj8k0WOhcPvhdTKFcMq', 'W77cIctdGSoTAqf+WRfkraVcKdtdTNLYwsrkBGGlpxZcSHqrfX/dNCkYaxldTNqdqCokqmkAWPaIiLPCW5tdHCoIFSkRW6/cTSo8W4tdOComWRJdUfrXjZpdPMJcNebqWP7cJSoYrCkIWPBdTLldR8onDCk8pSoUW7FdRCobWQFcVLJdK1NcMCkzW4y5amkhW6lcHx7dKGhcPheUW74PW4rQW77cJCkGW4eAhLxcV8ojga7dLmkhWQSocMtdMreKWPTId2P4WQG0xSkuW7ddICoQcmodpXawWRZdS8kQxCoSW5D2W5pdNJlcNCk/W7SvWRzGW7pcOCkKWPFcMhmlWQFcKxrfWRJcVmkdWRXrumoyWPLmW6JcUmo0WQfekmkkwCkwWRlcLmk1WPziiCoIyKRcGIRcGZu1w8oEDILRFSklaCk+o8ocW53cIG8lbxmoW5O/p8oInmk7lSoEkCoNsmocWRqEESoI', 'hSkWymkoWOdcG8kTW7FdJmonW4e+W4NcQG', 'W7JdIuRdRSkoxCkTEG', 'FCoqdw7dOG', 'xmk3W5jEWPW', 'fmkwe8kfW7iofmoAtwlcIJNcImoOW5NdSM/dMmowcLuHWRSEWRxcJSokqmkQWQxdOMGYzmkbhfm0WR7cSCogW7nAgmoMkhHbBCoIASouWQJcJSoLWQ3dNmoHmZjaBSkwvmkDwSkyEsqMWRCJdmomWQldONqLWQLAwr9al1ddUhNdVYZcHmkBAclcH8oTW4Hef8k5fLqrxavIW5tcJ1HfWOnTtxBcVceaxNZdSgG2W6hcKmkjWOyax8oWW7SwESkDumkpWORdReldQmoLW4n9mmkMW5CPW4pdICo0WQuEBL8pW6xdHYrdqmkpDWJdVuRcRCkSv8kDWOnEg8oKnSohWPxcL8ovWQSwvSkxdmkwWR8jWQSSfgxdNCk6WRC/z20kvmo2umoHdtWhghzVC0Kof8kdFg4TlCkrbWCfFaCbs8oZEwOOhCkpWQJcQmoDWPZcRCoInCowWRlcPrOAWQiseJldHbBcK8kfuSoxCCojrralgmodbxuYW44nW7ZdH8klchJdUd/cNZ5vWRGEc3eMCWWDpaX7W6yGW4pcJhtcQdZcRrhcMHNcJw3dN8o3x8oSWOaFyf/dJghcO8kVW6L4WRuyWPxdO2JdHmkgB8k2cmkyACodnxFdThRcPSo4W6a1y0hdPSovemk4WQddIMxdKCoaW7ZcS3y', 'fMRcMCoYCwlcKCoyx1RcSW', 'WORcGWKmWRWQW5BcQmorWONdHW', 'B8ktwLVdMa', 'wCketG1y', 'W6aeWPa', 'jmkWs0G', 'E8k5we3dMG', 'wmoxDreHDs5bFqCVACkOpxmCsfH5CeZcSCkWWOZcVZldPY/dRt1Vc8o5W5hcLLfcymk6CSk/gZvJy8o1W5pdLSooW5GUWOG4nSo/W7VdSSkyWOhdRmkHaNZdQ8krW7ddSCkUB8oXl8oQWPtdQmoNaZtcO0z2W4vCWO3dQXP3WQZdQ8k4W6uSWOVdQ34', 'WPxdP2LsEfGQgmkKECkVWRiSgq7cLg3dKZZcJ8oeaSooW7lcRSk5ovfjF8kIdIddJ8kWW4H3fmk6FwGvDcNdHCkPWPNdHhlcKudcNcvHW6NcPsnKW4tcKs7dNJhdKJ7cO0BcHgrpWP90E106dWvOASkXbmojsmo5pgpdQCkaWReOWQBcVCk4lmkdBSoelCobWQtdOZVdU0FcV8oYW7nvW7abW7NdIW4TWQXIW4qEwSoXW6j7p0NdIM3dHrVcGGzPWPSGW5y4WOhdId/cS3q3WOpdQN1mrN4Rc8oOy8kEiN7cG8kQvCoD', 'BSkUWOBdM8kuWO3cUCoEf015tW', 'mZSTW54k', 'WRBdPwKrnbL5s8k5E8oUW7f4uehdMMdcKwNdM8kquCotWQBdT8ktBXGmkmoaqxJdKSkYW5H3bmk6B3WvzJ3dH8k3WRpdHhlcKudcNcvHW7xdTNuJW4tdKMlcN2lcGspcOqFdHZagW5aMjLuTceSUD8oLimkAh8kkANpdOmo0WRraWQddQ8k7lmozmCoiiSoqW7BdVgBcOXlcQq', 'WR/cL8oqW60JWR8', 'cSoEuCop5B+t5yIS5z6G5zkY5P2A6koR5O2H5PYp6k2f6zw05Q+y6AoP6z2544kzWOvjuMlcPW', 'W4/dTqifWQv7gSoEWQ91qa', 'tLtcK8ku', 'zqRdUCkKWRS', 'kZ0ZW5GrWRO+zq', 'F8kxuIC', 'WOBcSCopW4SE', '5yUk6l+16ksY6Agg5PsE5yA46zEOW5C'].concat((function() {
                            return ['dCk0xmk5W7G', 'WQf+mJpdMSkXWRWqcbNcNajpW6bhlIlcQ3SDeJpcQSoLFG', 'W6NcPIuhpq', 'eCkIC8ofoGFcOWjC', 'WOtcUW8mWRzadmkkW6PRxCkzW5ZcHsxcNwFcQSoviGeTW6xdQmktn0HAfa1hC8o4WPtcGuhcPmkytSkZlCkKW4/cTmksrCoHW5BdQe04CmkahNS2WPWiW7FcTxldMgJcKSoxW7jXESknc8o7B1NdMJ7cP1RdOSkfW7TPAdebvCofW4ZdUWeMWRjNhW05WO/cNtnIzcRdVMjBs8okn8oDWP52EdBcJCkOWPVdSSoFW7dcVSoFWQC4vGdcNZ/dP8oEWOxcSSouvIHEW6xdGCkxW7xcNtOuWQ4msgvKW58vW7byWQ/cUCoEDSkdsgldMwGtvHddJwFdICo8iCk7WQ83d8oYzuGJlSo3p8opW6eluHWigZS5W60oaCkwW6BcVCo/tCkNW5tdJcBdVt7cVGKpWPKromkHlCogW6SvW4VcUSomxSkol8oDWRddGmorsSkXsb/dSX1gWQnLAmocw0SKWRCC', 'wSkfDuBdJW', 'W7TTiYm', 'BmoBr3ie', 'tmo7iSow', 'WOJdUd7dQmo9', 'W7K8W6tcP8ow', 'W6XKmJldKCkQW4G', 'sMlcK8k5va', 'wSk/wq1x', 'WRvFW5hdN1qkWQlcHgbQW7/cOa', 'ASkxqM/dICoBsCkmhCkdWPZdVG', 'rmo+WP3cS8knlCoCWOZcO0JdUKBcG8kBuSoRiSkiW4a9xsFcP8oJWORcLCkGENe', 'n8ogWQLtDq', 'W4BdKea8WQ4mW5VcSmoC', 'sLVdRhJdUG', 'W7TNW7ZdG2e', 'W556ncBdIq', 'E8kkvcbPxH3cHW', 'amknCmkMWQq', 'W44MW6FcSq', 'fNFcISoUC2NcGCoywulcTqpcGgy', 'W7CiWPlcQbfnWOtcR29WW4hcQG', 'WPZcQ10z5B2Q5yUb5zY55zgW5P+A6kcb5O+z5P2G6kYk6zEY5Q2Z6AgN6z2m44gwtmkZcCkfxq', 'kraixSomW5GVumkyW4JdKxhdH2K', 'WRiKWQpcUt3cP3OZW47dOSoJjSkl', 'u8kxDtbk', 'v8klW48lWPW', 'tmknW4XIWOO', 'qcxdTCoZWQz0fCol', 'W7RdISkhWRL/W6OFvCkjWRzTW4ST', 'W4ezWORcMGi', 'w1RdPftdR2ldVu1NW5feWRRdMCkZzda', 'dCkSW5fvW4NdVdOJbedcSYxdH8kX', 'WORcNr3dSIXC', 'lcqH', 'qYRdU8kNWQeCtmojdCk8na', 'r8kYfSk1EG', 'W7pdG13dISkwuCkVCwpdPu7dPSkSWQO', 'v8kJFCkVWONcICoTW6xdKmoyW7m3W6xcVc/cHSkyyYTnsSo9rCo8WRu', 'w8kDimkDvq', 'bMVcKSoSCq', 'W615W73dRW', 'g8o9WPhcPCkreCkuWOhcPv/dP0BcN8kPhSkP', 'pCoSW4hcRSo2', 'W4iJWORcVdm', 'ufFcNmki', 'g8opW6v4WQRcHtBcKa', 'mw3dHmo8WOW', 'W5pdMSkLW7TP', 'W67cSIWaisTVvmoHoSo7W71+', 'WO/cG8oqeCkrW5ddGX9eW5i/WRmJrf4', 'WQG7AW', 'dNWfAtW', 'DIW6jW', 'i8kXpxTm', 'tSo1c8k0W6u', 'W5ZdV0hdPSk/', 'oSofWQTED8ku', 'sSkmW5rvWOK', 't8k9Cs9T', 'WO7cIHBdSW', 'WQ/cQmk+WRhdKG', 'CmkaqWrXuH/cJmomnsxdQXqm', 'W6JcLYrDvG', 'W6v5W6hdJ2ZdTci', 'l8k/h19W', 'umo3nmkOWOdcH8kZW6hcN8kBW6iKW7tcP3RcHSobAxnAvSo7r8k6WQpdSh3cJCkhWQ4mmtuKpG5TWRuBc8k9W7ymW5ddTCoNW7S6BcldUwXYW6XBWQueW4q4pSolWPZcOSkEW7NdGmkfW67cO3ynWOxcNhHcWRNdJuDUg8oupcL8cSorWRv0W5/dSHZcJSkbW5GcehbMD8owBmkUomoebSoIs8kUW5C8W4iJnNuYW77dKmk+WQZcMmo5pbKoDCohsXPGWRVcQfrTdhBcV8ksWRlcQrtdM8oUkSo1pKSLzCo+gSkwW4WEhSoyr8oWwSoClSoEhMdcLmogA3T4WQdcINDCycbcWP3dUSoCW4ngd8kqW6hcSmoQW6nLW6z9x8kQz8k+hghcRrtcHCotW7SIk07cTYq7W5hcJmkteL7cSWKWWOjMWQlcL8kUigzRxZNcJxjZWP7dKGDcF8kIW4VdP8o0W5/cGSkdddKsWRT/W68ADLqOothdGxGOBSkKWPaNaHVdIZfcrr/dJCoAgmkQWOP0vSkheMNdLCowW5hcGWytWPtdR3tdSSk+jWtcTSk7W5pcU8kTBvnVbaexWQtcMCkbW79+WQyyfHuFW5pcKCowW6WrWPnEWRf7WPNdOmkNWQjZWQVdPCo9W7S+WOtcKSo2W7T/i8o2WQ8XW7RdQIlcJxlcMqtdOmo8WPv3WPtcNwr5WPaTW6fGySoyWQHgW4SDW5xdLCkspSo0ztXEWQtdUGddMa7dUstdHCkHW7RdNmkSgvO4WOPUhmkVvrD0ASkXW4pdHSk6d8o/WQq+W7/dLSoEW5tcU8oJceOAWPJcVSoLWRFcJSoqyMZdV1xdHfKaW6mrWOivgCoFlKBdMmkRDtNdSCoTgSkYWQrxW6vGWQNdNXZdTCo1A8oYcuKUW6tdSCo4tdyBW6PsFgC3weX5WQVcNSoeW6JdTM/dSCo+tSk3WR1+cSoEWPRdSmowr1RdGf7dQM7dKColWPxcSmkrW4FcQmojtSkOWObiW4RdUmoGW5OuWOf5j3OvAZFcR8k5WOlcHYX4WQxdVcHFAKJdISoIdxSFySoDWRTIluHuW5yNW7BcHZhdJsWdEmk2v0qPhZRcH8ociI3dTCkitmo1vrBcTxiJW75NWOinW7ZcRSoDW4nNvSo/W6bkWPpdJaLrW4JcLc3cQmogWQZcMgqkWOWKW4NcGvGvWR8PWO4lW4xdSdpcJWaVhSodW4pcL8o4WOZcSSk2WOhcVH3cSJ/dKatdReVdSheuW5ntymk1DSkOW4yknmkrx8o4ymkFiW/cTq8squVdHCobW6BcMWRdV8kLyCoG5yIv5lU0hmkCvmkdEmkEW6ZdMNyxEtbsz8kwomoKB8oNWPztW5xdISkMWOxcTCk0WONcLq3dRSoIsHVcRSoIWRTfW6hdSsRdUty5vSkOj0pcMMiLfCktW74uWRCbW5DhFqddHmkGWRfFWPzUWQnWWRmmW4qOrCkvw8kuuWLummoiW5jRW5C', 'WR3dIZpdH8o6FW', 'W4KTW7G', 'p8k+wMhcHq', 'xvVdTftdTwldVLXfW4X1WRFdTCk5', 'mmk2s1tdTsZdKSoPDCkptNOCrW', 'kmkJECk6WP8', 'W7q5WP/cHrW', 'WQJdHZldJCoKDX01W7y', 'cmkxzWu', 'rLtcJ8k0yCoNWPa', 'pJeYW5ipWRO', 'W6miWPlcRaLCWPVcO2nXW7FcTSodvG', 'peypDJNcJ0y', 'fCkRp2bC', 'W6xdNNRdGCkE', 'pdmYW5Gr', 'WRpcU8o0W4y7', 'jmkzsNpcSmooWRFdUrpcQW', 'nSk0saqg', 'wwZdV2VcNCkwfX8sWR5Vp8oSW6q', 'WOHpWOb7oq', 'jSovWRzr', 'q2xdN0hcGa', 'tCkWW7PyWPu', 'nSkZtKG', 'W5DzW7VdPwm', 'uKZdPxC', 'qZFdNcOa', 'WRpdIxtdJmky', 'wCkaW7utWQ3dMbTR', 'q0tdGvxdSG', 'W7JcVN1ya3vipNX+wW', 'W6jYW5ZdJgi', 'kCk2jhLSWOW2W5O', 'jmkaW5XsW68', 'nSkkuYae', 'kCk9DSkzW74', 'pbJcGdm4', 'tCoyCaGKFN8', 'z8ofhYhdSCkRW7BdUstcJgNdQqu', 'WR0lD1i3', 'W63cRMTjce9DjNbYqsqUW6uXqq', 'WRVdNLFdSmkSBSoIlmk/', 'f8koyq', 'wmk/W4BdOmoycSkwWRZcHKBdVG', 'smkzW6rxWOxcKZVcG0ddSIm7emkTWPHr', 'aSo6WPhcSq', 'WRNdMd3dH8o2', 'gmopWReJW4ldHqhcMMNdMJC5', 'WQOtA080', 'W7imWORcNaa', 'W4lcJKbg5B6S5yIi5z2N5zor5P6E6kgm5OY75P+I6k+o6zE95Q6h6Aox6zYh44kJWQj4qXZcMq', 'W7XHiti', 'q8ofbCkdW64aeSoA', 'b8kQW55EW5ZdKqO6jW', 'EsdcO8kLWOmFs8ozsmkKktP7m2BcNmoYWPhcPqnadrZcL0zaqeS', 'WRKXywWBWO/cI8ku', 'W4ldSH8qWRTsbG', 'CxtdVLZcJq', 'AIa7ib0', 'b8kYl1zo', 'gtNdQSk3WOCCd8oshSk3mJj/jq', 'W4tcOHHg', 'WO7cHWqlWPO', 'W6CcWOVcHabxWOlcHwjWW5VcUW', 'kCk2jNXXWOS+W7SSWRJcR3/cMmkQ', 'WRRcJCosW7G2WOLkq8kEWRTBW5WA', 'WQ47D2W', 'xfldPwK', 'W57dJeBdJCko', 'WRVcMCocW7KQWR4', 'oSkgDmkjW70HWOGpCW', 'xCoIpvtdNdRcImohW4NdUqHrFa', 'BJFdOmkzWOC', 'DmoHCs4OWOajW5mBWO/cRW', 'WRBcSr3dNH0', 'n8kQsKpdOZZdMmoRzmknu3Sl', 'qCoWjW', 'rmorj8o4mG', 'WOFcIapdSdzqWQbWbfZcPG', 'W51dkG/dPG'];
                        }()));
                    }()));
                }());
                a = function() {
                    return aH;
                }
                ;
                return a();
            }
            ;document[O(0x269, 'vprY')](O(0xdd, 'fN(Z'), c => {
                const ax = O
                  , d = {
                    'VHgvN': ax(0x134, '@o0E'),
                    'oaHFl': ax(0xf7, 'C2G4'),
                    'BWJTL': 'commentsList',
                    'ccubf': ax(0x1f4, 'fN(Z'),
                    'ZuLpR': function(e) {
                        return e();
                    },
                    'KXAeP': ax(0x18d, 'fYc['),
                    'dFolj': ax(0x1e1, 'LDE*'),
                    'cJPNF': function(e, f) {
                        return e + f;
                    },
                    'MBLsx': function(e, f) {
                        return e - f;
                    },
                    'QTnuw': function(e, f) {
                        return e === f;
                    },
                    'xCkEe': ax(0x14a, 'ne8H'),
                    'KjEqO': function(e, f) {
                        return e >= f;
                    },
                    'bKncg': ax(0x125, 'K5pB'),
                    'yzADk': function(e, f) {
                        return e(f);
                    },
                    'bfLLT': function(e, f) {
                        return e < f;
                    },
                    'JjoBt': function(e, f) {
                        return e > f;
                    },
                    'mAAfO': ax(0x24b, '$6pi'),
                    'EMwbD': ax(0x1f5, 'oWvP'),
                    'HenLl': function(e, f) {
                        return e(f);
                    },
                    'HxLld': function(e, f) {
                        return e + f;
                    }
                };
                if (c[ax(0x274, '*uew')] > 0x0) {
                    if (d['QTnuw'](d['xCkEe'], d[ax(0x181, '$6pi')])) {
                        currentVideoIndex++;
                        if (d['KjEqO'](currentVideoIndex, videos[ax(0xdc, 'MU@(')] - 0x2)) {
                            if (d[ax(0x23f, 'y^pi')](d[ax(0x257, 'Dx0d')], d[ax(0x136, 'ne8H')]))
                                d[ax(0x1ab, 'N@Z9')](loadVideos, 0x3);
                            else {
                                const f = {
                                    'REzwY': d[ax(0x1e0, 'MU@(')],
                                    'QATrW': d[ax(0xba, 'W9wN')]
                                }
                                  , g = h['getElementById'](d[ax(0x216, 'zPgI')])
                                  , h = i[ax(0x198, '@o0E')](d[ax(0x1a1, 'F058')])
                                  , i = j[k];
                                g[ax(0x22f, 'WHX]')] = '',
                                i[ax(0xfb, 'm[)u')]['forEach'](r => {
                                    const ay = ax
                                      , s = g['createElement'](f[ay(0x140, 'K6^z')]);
                                    s['className'] = f[ay(0x21d, '02[M')],
                                    s[ay(0xf4, '$6pi')] = r['username'] + ':\x20' + r[ay(0x1d0, 'WHX]')],
                                    g[ay(0x255, 'WMPm')](s);
                                }
                                ),
                                h[ax(0xe9, '4Jq(')] = i['comments'][ax(0xd8, 'WHX]')];
                            }
                        }
                    } else
                        f[ax(0x242, 'WHX]')](g, !![]),
                        d[ax(0x23d, 'KTZ#')](h);
                } else {
                    if (d['bfLLT'](c[ax(0x263, 'K6^z')], 0x0) && d[ax(0x1d2, '1#xR')](currentVideoIndex, 0x0)) {
                        if (ax(0x1d6, 'K6^z') !== d[ax(0x10f, 'oWvP')]) {
                            const h = u['createElement'](ax(0x111, '#vM7'));
                            h[ax(0x230, '*uew')] = ax(0x1ea, '1#xR') + (v[ax(0xb2, '02[M')] === w['length'] && x === 0x0 ? d[ax(0xf5, 'ne8H')] : ''),
                            h[ax(0x105, 'Ovi1')] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<video\x20src=\x22' + y['url'] + ax(0x12a, 'fYc[') + (z ? '' : d[ax(0x25a, 'l1jC')]) + ax(0x27d, 'WMPm') + A['username'] + ax(0xc6, '#vM7') + B[ax(0x1ac, 'uJu(')] + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22video-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22likeVideo(' + d[ax(0x259, 'V&NR')](C['length'] - D['length'], E) + ax(0x13b, 'RNQv') + (F['liked'] ? ax(0x17d, 'WHX]') : ax(0x114, '#vM7')) + ax(0xf1, '#vM7') + G['likes'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22toggleComments()\x22\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20class=\x22action-icon\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2011.5a8.38\x208.38\x200\x200\x201-.9\x203.8\x208.5\x208.5\x200\x200\x201-7.6\x204.7\x208.38\x208.38\x200\x200\x201-3.8-.9L3\x2021l1.9-5.7a8.38\x208.38\x200\x200\x201-.9-3.8\x208.5\x208.5\x200\x200\x201\x204.7-7.6\x208.38\x208.38\x200\x200\x201\x203.8-.9h.5a8.48\x208.48\x200\x200\x201\x208\x208v.5z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + H[ax(0xe6, 'fYc[')]['length'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22shareVideo(' + d[ax(0x20a, 'm[)u')](d[ax(0x275, 'oWvP')](I['length'], J[ax(0x183, '1SrV')]), K) + ax(0x18c, 'K5pB'),
                            L['appendChild'](h);
                        } else
                            currentVideoIndex--;
                    }
                }
                document[ax(0x1b6, 'uJu(')](d[ax(0xb8, 'VcTj')])['forEach']( (h, i) => {
                    const az = ax;
                    h['classList'][az(0x13c, 'Dx0d')](az(0x197, '02[M'), d[az(0x25c, 'Wp)E')](i, currentVideoIndex));
                }
                ),
                !isFirstPlay && playCurrentVideo(),
                d['HenLl'](preloadVideos, d['HxLld'](currentVideoIndex, 0x1));
            }
            );
            async function playCurrentVideo() {
                const aA = O
                  , c = {
                    'fNxqA': function(f, g) {
                        return f === g;
                    },
                    'afljv': function(f, g, h) {
                        return f(g, h);
                    },
                    'TWbkT': aA(0xd1, 'N@Z9'),
                    'tbmxR': function(f, g) {
                        return f(g);
                    }
                }
                  , d = document['querySelectorAll'](c['TWbkT'])
                  , e = document[aA(0x1f8, 'O1Oo')](aA(0x268, 'Ovi1'));
                d[aA(0xcb, '2NpX')]( (f, g) => {
                    const aB = aA;
                    c['fNxqA'](g, currentVideoIndex) ? (f['play'](),
                    c[aB(0x156, '1SrV')](updatePlayPauseButton, e[g], ![])) : (f['pause'](),
                    f[aB(0xb5, 'WHX]')] = 0x0,
                    c['afljv'](updatePlayPauseButton, e[g], !![]));
                }
                ),
                c[aA(0x1e5, 'y^pi')](preloadVideos, currentVideoIndex + 0x1);
            }
            window[O(0xd7, 'zPgI')](O(0x14d, 'MU@('), () => {
                const aC = O
                  , c = {
                    'OFAmL': aC(0x160, ']76h'),
                    'gPafL': function(e) {
                        return e();
                    },
                    'vTkoU': function(e, f) {
                        return e !== f;
                    },
                    'VSyoi': aC(0x15a, 'l1jC'),
                    'soOaC': aC(0x1e3, '4Jq('),
                    'xCCLt': function(e, f) {
                        return e(f);
                    },
                    'DBiAy': aC(0x110, '#vM7'),
                    'BpcgV': aC(0x1d1, 'N@Z9')
                }
                  , d = /MicroMessenger/i[aC(0xfe, 'WMPm')](navigator[aC(0x264, '*uew')]);
                if (d) {
                    if ('cXlkh' !== c[aC(0xf2, 'y^pi')])
                        document[aC(0x161, 'ukkJ')]('wechatOverlay')['style']['display'] = c['BpcgV'];
                    else {
                        e[aC(0x115, 'Wp)E')][aC(0x1b7, 'vprY')] = c[aC(0x248, 'TgQ6')];
                        throw new f('Unauthorized\x20domain');
                    }
                } else
                    loadVideos()[aC(0x249, 'KTZ#')]( () => {
                        const aE = aC
                          , f = {
                            'LFpDx': function(g) {
                                const aD = b;
                                return c[aD(0x11a, 'LDE*')](g);
                            }
                        };
                        if (c['vTkoU'](c[aE(0x17e, 'Ovi1')], c[aE(0x127, 'N@Z9')]))
                            c[aE(0x19d, 'Dx0d')](preloadVideos, 0x0);
                        else {
                            const h = {
                                'adOFo': function(i) {
                                    return f['LFpDx'](i);
                                }
                            };
                            e[aE(0x224, 'ZWSW')](aE(0x279, '$6pi'), i => {
                                const aF = aE;
                                i[aF(0x209, 'K5pB')](),
                                h[aF(0x1ad, '3v09')](g);
                            }
                            );
                        }
                    }
                    );
            }
            ),
            window['addEventListener'](O(0x25d, 'uJu('), c => {
                const aG = O
                  , d = {
                    'dEdJf': function(e, f) {
                        return e === f;
                    },
                    'xaqYd': function(e, f) {
                        return e === f;
                    },
                    'KMxvI': aG(0x1fb, '6@9a'),
                    'xnlXL': 'gwdUp',
                    'UTUfH': aG(0xb9, 'oWvP')
                };
                if (d[aG(0x1db, 'MU@(')](c[aG(0x1cb, ']76h')][aG(0x233, 'F058')], 'up'))
                    d[aG(0x26f, 'wpn^')](d['KMxvI'], d[aG(0x212, '@o0E')]) ? d-- : window[aG(0xc5, 'VcTj')](0x0, window[aG(0x104, 'ukkJ')]);
                else
                    c[aG(0xc1, 'K5pB')]['direction'] === d['UTUfH'] && window['scrollBy'](0x0, -window[aG(0x13e, 'W9wN')]);
            }
            );
            var version_ = 'jsjiami.com.v7';
