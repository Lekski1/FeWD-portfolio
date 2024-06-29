function t(t) {
    const e = Object.prototype.toString.call(t);
    return t instanceof Date || "object" == typeof t && "[object Date]" === e ? new t.constructor(+t) : "number" == typeof t || "[object Number]" === e || "string" == typeof t || "[object String]" === e ? new Date(t) : new Date(NaN);
}

function e(t, e) {
    return t instanceof Date ? new t.constructor(e) : new Date(e);
}

const n = 6048e5, r = 864e5;

let a = {};

function o() {
    return a;
}

function i(e, n) {
    const r = o(), a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = t(e), u = i.getDay(), s = (u < a ? 7 : 0) + u - a;
    return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}

function u(t) {
    return i(t, {
        weekStartsOn: 1
    });
}

function s(n) {
    const r = t(n), a = r.getFullYear(), o = e(n, 0);
    o.setFullYear(a + 1, 0, 4), o.setHours(0, 0, 0, 0);
    const i = u(o), s = e(n, 0);
    s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0);
    const c = u(s);
    return r.getTime() >= i.getTime() ? a + 1 : r.getTime() >= c.getTime() ? a : a - 1;
}

function c(e) {
    const n = t(e);
    return n.setHours(0, 0, 0, 0), n;
}

function d(e) {
    const n = t(e), r = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
    return r.setUTCFullYear(n.getFullYear()), +e - +r;
}

function l(e) {
    if (!(n = e, n instanceof Date || "object" == typeof n && "[object Date]" === Object.prototype.toString.call(n) || "number" == typeof e)) return !1;
    var n;
    const r = t(e);
    return !isNaN(Number(r));
}

const h = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};

function m(t) {
    return (e = {}) => {
        const n = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[n] || t.formats[t.defaultWidth];
    };
}

const f = {
    date: m({
        formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy"
        },
        defaultWidth: "full"
    }),
    time: m({
        formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        defaultWidth: "full"
    }),
    dateTime: m({
        formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}"
        },
        defaultWidth: "full"
    })
}, g = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};

function w(t) {
    return (e, n) => {
        let r;
        if ("formatting" === (n?.context ? String(n.context) : "standalone") && t.formattingValues) {
            const e = t.defaultFormattingWidth || t.defaultWidth, a = n?.width ? String(n.width) : e;
            r = t.formattingValues[a] || t.formattingValues[e];
        } else {
            const e = t.defaultWidth, a = n?.width ? String(n.width) : t.defaultWidth;
            r = t.values[a] || t.values[e];
        }
        return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
}

function b(t) {
    return (e, n = {}) => {
        const r = n.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], o = e.match(a);
        if (!o) return null;
        const i = o[0], u = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], s = Array.isArray(u) ? function(t, e) {
            for (let n = 0; n < t.length; n++) if (e(t[n])) return n;
            return;
        }(u, (t => t.test(i))) : function(t, e) {
            for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return n;
            return;
        }(u, (t => t.test(i)));
        let c;
        c = t.valueCallback ? t.valueCallback(s) : s, c = n.valueCallback ? n.valueCallback(c) : c;
        return {
            value: c,
            rest: e.slice(i.length)
        };
    };
}

var y;

const p = {
    code: "en-US",
    formatDistance: (t, e, n) => {
        let r;
        const a = h[t];
        return r = "string" == typeof a ? a : 1 === e ? a.one : a.other.replace("{{count}}", e.toString()), 
        n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
    },
    formatLong: f,
    formatRelative: (t, e, n, r) => g[t],
    localize: {
        ordinalNumber: (t, e) => {
            const n = Number(t), r = n % 100;
            if (r > 20 || r < 10) switch (r % 10) {
              case 1:
                return n + "st";

              case 2:
                return n + "nd";

              case 3:
                return n + "rd";
            }
            return n + "th";
        },
        era: w({
            values: {
                narrow: [ "B", "A" ],
                abbreviated: [ "BC", "AD" ],
                wide: [ "Before Christ", "Anno Domini" ]
            },
            defaultWidth: "wide"
        }),
        quarter: w({
            values: {
                narrow: [ "1", "2", "3", "4" ],
                abbreviated: [ "Q1", "Q2", "Q3", "Q4" ],
                wide: [ "1st quarter", "2nd quarter", "3rd quarter", "4th quarter" ]
            },
            defaultWidth: "wide",
            argumentCallback: t => t - 1
        }),
        month: w({
            values: {
                narrow: [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ],
                abbreviated: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                wide: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
            },
            defaultWidth: "wide"
        }),
        day: w({
            values: {
                narrow: [ "S", "M", "T", "W", "T", "F", "S" ],
                short: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
                abbreviated: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                wide: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
            },
            defaultWidth: "wide"
        }),
        dayPeriod: w({
            values: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mi",
                    noon: "n",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                }
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mi",
                    noon: "n",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                }
            },
            defaultFormattingWidth: "wide"
        })
    },
    match: {
        ordinalNumber: (y = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: t => parseInt(t, 10)
        }, (t, e = {}) => {
            const n = t.match(y.matchPattern);
            if (!n) return null;
            const r = n[0], a = t.match(y.parsePattern);
            if (!a) return null;
            let o = y.valueCallback ? y.valueCallback(a[0]) : a[0];
            return o = e.valueCallback ? e.valueCallback(o) : o, {
                value: o,
                rest: t.slice(r.length)
            };
        }),
        era: b({
            matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [ /^b/i, /^(a|c)/i ]
            },
            defaultParseWidth: "any"
        }),
        quarter: b({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [ /1/i, /2/i, /3/i, /4/i ]
            },
            defaultParseWidth: "any",
            valueCallback: t => t + 1
        }),
        month: b({
            matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [ /^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i ],
                any: [ /^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i ]
            },
            defaultParseWidth: "any"
        }),
        day: b({
            matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [ /^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i ],
                any: [ /^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i ]
            },
            defaultParseWidth: "any"
        }),
        dayPeriod: b({
            matchPatterns: {
                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^a/i,
                    pm: /^p/i,
                    midnight: /^mi/i,
                    noon: /^no/i,
                    morning: /morning/i,
                    afternoon: /afternoon/i,
                    evening: /evening/i,
                    night: /night/i
                }
            },
            defaultParseWidth: "any"
        })
    },
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};

function M(n) {
    const a = t(n), o = function(t, e) {
        const n = c(t), a = c(e), o = +n - d(n), i = +a - d(a);
        return Math.round((o - i) / r);
    }(a, function(n) {
        const r = t(n), a = e(n, 0);
        return a.setFullYear(r.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
    }(a));
    return o + 1;
}

function v(r) {
    const a = t(r), o = +u(a) - +function(t) {
        const n = s(t), r = e(t, 0);
        return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), u(r);
    }(a);
    return Math.round(o / n) + 1;
}

function x(n, r) {
    const a = t(n), u = a.getFullYear(), s = o(), c = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, d = e(n, 0);
    d.setFullYear(u + 1, 0, c), d.setHours(0, 0, 0, 0);
    const l = i(d, r), h = e(n, 0);
    h.setFullYear(u, 0, c), h.setHours(0, 0, 0, 0);
    const m = i(h, r);
    return a.getTime() >= l.getTime() ? u + 1 : a.getTime() >= m.getTime() ? u : u - 1;
}

function P(r, a) {
    const u = t(r), s = +i(u, a) - +function(t, n) {
        const r = o(), a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, u = x(t, n), s = e(t, 0);
        return s.setFullYear(u, 0, a), s.setHours(0, 0, 0, 0), i(s, n);
    }(u, a);
    return Math.round(s / n) + 1;
}

function k(t, e) {
    return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0");
}

const S = {
    y(t, e) {
        const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
        return k("yy" === e ? r % 100 : r, e.length);
    },
    M(t, e) {
        const n = t.getMonth();
        return "M" === e ? String(n + 1) : k(n + 1, 2);
    },
    d: (t, e) => k(t.getDate(), e.length),
    a(t, e) {
        const n = t.getHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
          case "a":
          case "aa":
            return n.toUpperCase();

          case "aaa":
            return n;

          case "aaaaa":
            return n[0];

          default:
            return "am" === n ? "a.m." : "p.m.";
        }
    },
    h: (t, e) => k(t.getHours() % 12 || 12, e.length),
    H: (t, e) => k(t.getHours(), e.length),
    m: (t, e) => k(t.getMinutes(), e.length),
    s: (t, e) => k(t.getSeconds(), e.length),
    S(t, e) {
        const n = e.length, r = t.getMilliseconds();
        return k(Math.trunc(r * Math.pow(10, n - 3)), e.length);
    }
}, D = "midnight", W = "noon", T = "morning", C = "afternoon", Y = "evening", E = "night", N = {
    G: function(t, e, n) {
        const r = t.getFullYear() > 0 ? 1 : 0;
        switch (e) {
          case "G":
          case "GG":
          case "GGG":
            return n.era(r, {
                width: "abbreviated"
            });

          case "GGGGG":
            return n.era(r, {
                width: "narrow"
            });

          default:
            return n.era(r, {
                width: "wide"
            });
        }
    },
    y: function(t, e, n) {
        if ("yo" === e) {
            const e = t.getFullYear(), r = e > 0 ? e : 1 - e;
            return n.ordinalNumber(r, {
                unit: "year"
            });
        }
        return S.y(t, e);
    },
    Y: function(t, e, n, r) {
        const a = x(t, r), o = a > 0 ? a : 1 - a;
        if ("YY" === e) {
            return k(o % 100, 2);
        }
        return "Yo" === e ? n.ordinalNumber(o, {
            unit: "year"
        }) : k(o, e.length);
    },
    R: function(t, e) {
        return k(s(t), e.length);
    },
    u: function(t, e) {
        return k(t.getFullYear(), e.length);
    },
    Q: function(t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case "Q":
            return String(r);

          case "QQ":
            return k(r, 2);

          case "Qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });

          case "QQQ":
            return n.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });

          case "QQQQQ":
            return n.quarter(r, {
                width: "narrow",
                context: "formatting"
            });

          default:
            return n.quarter(r, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    q: function(t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case "q":
            return String(r);

          case "qq":
            return k(r, 2);

          case "qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });

          case "qqq":
            return n.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });

          case "qqqqq":
            return n.quarter(r, {
                width: "narrow",
                context: "standalone"
            });

          default:
            return n.quarter(r, {
                width: "wide",
                context: "standalone"
            });
        }
    },
    M: function(t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case "M":
          case "MM":
            return S.M(t, e);

          case "Mo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });

          case "MMM":
            return n.month(r, {
                width: "abbreviated",
                context: "formatting"
            });

          case "MMMMM":
            return n.month(r, {
                width: "narrow",
                context: "formatting"
            });

          default:
            return n.month(r, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    L: function(t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case "L":
            return String(r + 1);

          case "LL":
            return k(r + 1, 2);

          case "Lo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });

          case "LLL":
            return n.month(r, {
                width: "abbreviated",
                context: "standalone"
            });

          case "LLLLL":
            return n.month(r, {
                width: "narrow",
                context: "standalone"
            });

          default:
            return n.month(r, {
                width: "wide",
                context: "standalone"
            });
        }
    },
    w: function(t, e, n, r) {
        const a = P(t, r);
        return "wo" === e ? n.ordinalNumber(a, {
            unit: "week"
        }) : k(a, e.length);
    },
    I: function(t, e, n) {
        const r = v(t);
        return "Io" === e ? n.ordinalNumber(r, {
            unit: "week"
        }) : k(r, e.length);
    },
    d: function(t, e, n) {
        return "do" === e ? n.ordinalNumber(t.getDate(), {
            unit: "date"
        }) : S.d(t, e);
    },
    D: function(t, e, n) {
        const r = M(t);
        return "Do" === e ? n.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : k(r, e.length);
    },
    E: function(t, e, n) {
        const r = t.getDay();
        switch (e) {
          case "E":
          case "EE":
          case "EEE":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });

          case "EEEEE":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });

          case "EEEEEE":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });

          default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    e: function(t, e, n, r) {
        const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case "e":
            return String(o);

          case "ee":
            return k(o, 2);

          case "eo":
            return n.ordinalNumber(o, {
                unit: "day"
            });

          case "eee":
            return n.day(a, {
                width: "abbreviated",
                context: "formatting"
            });

          case "eeeee":
            return n.day(a, {
                width: "narrow",
                context: "formatting"
            });

          case "eeeeee":
            return n.day(a, {
                width: "short",
                context: "formatting"
            });

          default:
            return n.day(a, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    c: function(t, e, n, r) {
        const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case "c":
            return String(o);

          case "cc":
            return k(o, e.length);

          case "co":
            return n.ordinalNumber(o, {
                unit: "day"
            });

          case "ccc":
            return n.day(a, {
                width: "abbreviated",
                context: "standalone"
            });

          case "ccccc":
            return n.day(a, {
                width: "narrow",
                context: "standalone"
            });

          case "cccccc":
            return n.day(a, {
                width: "short",
                context: "standalone"
            });

          default:
            return n.day(a, {
                width: "wide",
                context: "standalone"
            });
        }
    },
    i: function(t, e, n) {
        const r = t.getDay(), a = 0 === r ? 7 : r;
        switch (e) {
          case "i":
            return String(a);

          case "ii":
            return k(a, e.length);

          case "io":
            return n.ordinalNumber(a, {
                unit: "day"
            });

          case "iii":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });

          case "iiiii":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });

          case "iiiiii":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });

          default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    a: function(t, e, n) {
        const r = t.getHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
          case "a":
          case "aa":
            return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting"
            });

          case "aaa":
            return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();

          case "aaaaa":
            return n.dayPeriod(r, {
                width: "narrow",
                context: "formatting"
            });

          default:
            return n.dayPeriod(r, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    b: function(t, e, n) {
        const r = t.getHours();
        let a;
        switch (a = 12 === r ? W : 0 === r ? D : r / 12 >= 1 ? "pm" : "am", e) {
          case "b":
          case "bb":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            });

          case "bbb":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();

          case "bbbbb":
            return n.dayPeriod(a, {
                width: "narrow",
                context: "formatting"
            });

          default:
            return n.dayPeriod(a, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    B: function(t, e, n) {
        const r = t.getHours();
        let a;
        switch (a = r >= 17 ? Y : r >= 12 ? C : r >= 4 ? T : E, e) {
          case "B":
          case "BB":
          case "BBB":
            return n.dayPeriod(a, {
                width: "abbreviated",
                context: "formatting"
            });

          case "BBBBB":
            return n.dayPeriod(a, {
                width: "narrow",
                context: "formatting"
            });

          default:
            return n.dayPeriod(a, {
                width: "wide",
                context: "formatting"
            });
        }
    },
    h: function(t, e, n) {
        if ("ho" === e) {
            let e = t.getHours() % 12;
            return 0 === e && (e = 12), n.ordinalNumber(e, {
                unit: "hour"
            });
        }
        return S.h(t, e);
    },
    H: function(t, e, n) {
        return "Ho" === e ? n.ordinalNumber(t.getHours(), {
            unit: "hour"
        }) : S.H(t, e);
    },
    K: function(t, e, n) {
        const r = t.getHours() % 12;
        return "Ko" === e ? n.ordinalNumber(r, {
            unit: "hour"
        }) : k(r, e.length);
    },
    k: function(t, e, n) {
        let r = t.getHours();
        return 0 === r && (r = 24), "ko" === e ? n.ordinalNumber(r, {
            unit: "hour"
        }) : k(r, e.length);
    },
    m: function(t, e, n) {
        return "mo" === e ? n.ordinalNumber(t.getMinutes(), {
            unit: "minute"
        }) : S.m(t, e);
    },
    s: function(t, e, n) {
        return "so" === e ? n.ordinalNumber(t.getSeconds(), {
            unit: "second"
        }) : S.s(t, e);
    },
    S: function(t, e) {
        return S.S(t, e);
    },
    X: function(t, e, n) {
        const r = t.getTimezoneOffset();
        if (0 === r) return "Z";
        switch (e) {
          case "X":
            return q(r);

          case "XXXX":
          case "XX":
            return F(r);

          default:
            return F(r, ":");
        }
    },
    x: function(t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case "x":
            return q(r);

          case "xxxx":
          case "xx":
            return F(r);

          default:
            return F(r, ":");
        }
    },
    O: function(t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + O(r, ":");

          default:
            return "GMT" + F(r, ":");
        }
    },
    z: function(t, e, n) {
        const r = t.getTimezoneOffset();
        switch (e) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + O(r, ":");

          default:
            return "GMT" + F(r, ":");
        }
    },
    t: function(t, e, n) {
        return k(Math.trunc(t.getTime() / 1e3), e.length);
    },
    T: function(t, e, n) {
        return k(t.getTime(), e.length);
    }
};

function O(t, e = "") {
    const n = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60), o = r % 60;
    return 0 === o ? n + String(a) : n + String(a) + e + k(o, 2);
}

function q(t, e) {
    if (t % 60 == 0) {
        return (t > 0 ? "-" : "+") + k(Math.abs(t) / 60, 2);
    }
    return F(t, e);
}

function F(t, e = "") {
    const n = t > 0 ? "-" : "+", r = Math.abs(t);
    return n + k(Math.trunc(r / 60), 2) + e + k(r % 60, 2);
}

const H = (t, e) => {
    switch (t) {
      case "P":
        return e.date({
            width: "short"
        });

      case "PP":
        return e.date({
            width: "medium"
        });

      case "PPP":
        return e.date({
            width: "long"
        });

      default:
        return e.date({
            width: "full"
        });
    }
}, j = (t, e) => {
    switch (t) {
      case "p":
        return e.time({
            width: "short"
        });

      case "pp":
        return e.time({
            width: "medium"
        });

      case "ppp":
        return e.time({
            width: "long"
        });

      default:
        return e.time({
            width: "full"
        });
    }
}, B = {
    p: j,
    P: (t, e) => {
        const n = t.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
        if (!a) return H(t, e);
        let o;
        switch (r) {
          case "P":
            o = e.dateTime({
                width: "short"
            });
            break;

          case "PP":
            o = e.dateTime({
                width: "medium"
            });
            break;

          case "PPP":
            o = e.dateTime({
                width: "long"
            });
            break;

          default:
            o = e.dateTime({
                width: "full"
            });
        }
        return o.replace("{{date}}", H(r, e)).replace("{{time}}", j(a, e));
    }
}, z = /^D+$/, L = /^Y+$/, Q = [ "D", "DD", "YY", "YYYY" ];

const G = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, X = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $ = /^'([^]*?)'?$/, A = /''/g, I = /[a-zA-Z]/;

function J(e, n, r) {
    const a = o(), i = a.locale ?? p, u = a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, s = a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0, c = t(e);
    if (!l(c)) throw new RangeError("Invalid time value");
    let d = n.match(X).map((t => {
        const e = t[0];
        if ("p" === e || "P" === e) {
            return (0, B[e])(t, i.formatLong);
        }
        return t;
    })).join("").match(G).map((t => {
        if ("''" === t) return {
            isToken: !1,
            value: "'"
        };
        const e = t[0];
        if ("'" === e) return {
            isToken: !1,
            value: _(t)
        };
        if (N[e]) return {
            isToken: !0,
            value: t
        };
        if (e.match(I)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
        return {
            isToken: !1,
            value: t
        };
    }));
    i.localize.preprocessor && (d = i.localize.preprocessor(c, d));
    const h = {
        firstWeekContainsDate: u,
        weekStartsOn: s,
        locale: i
    };
    return d.map((t => {
        if (!t.isToken) return t.value;
        const r = t.value;
        (function(t) {
            return L.test(t);
        }(r) || function(t) {
            return z.test(t);
        }(r)) && function(t, e, n) {
            const r = function(t, e, n) {
                const r = "Y" === t[0] ? "years" : "days of the month";
                return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
            }(t, e, n);
            if (console.warn(r), Q.includes(t)) throw new RangeError(r);
        }(r, n, String(e));
        return (0, N[r[0]])(c, r, i.localize, h);
    })).join("");
}

function _(t) {
    const e = t.match($);
    return e ? e[1].replace(A, "'") : t;
}

const R = document.getElementById("get_comic_button"), U = document.getElementById("email"), V = document.getElementById("comic_response"), K = document.getElementById("comic_name"), Z = document.getElementById("comic_description"), tt = document.getElementById("comic_img"), et = document.getElementById("comic_date");

R.addEventListener("click", (async () => {
    const t = U.value;
    V.style.display = "none";
    try {
        const e = await async function(t) {
            const e = new URLSearchParams({
                email: t
            }), n = await fetch(`https://fwd.innopolis.university/api/hw2?${e.toString()}`), r = await n.text(), a = (new DOMParser).parseFromString(r, "text/html");
            return a.body.textContent?.trim() || "";
        }(t), n = await async function(t) {
            const e = await fetch(`https://fwd.innopolis.university/api/comic?id=${t}`), n = await e.json();
            return n;
        }(e);
        !function(t) {
            K.textContent = t.safe_title, Z.textContent = t.alt, tt.src = t.img, tt.alt = t.alt, 
            et.textContent = `Date of publication: ${J(new Date(`${t.year}-${t.month}-${t.day}`), "PPP")}`;
        }(n), V.style.display = "flex";
    } catch (t) {
        console.error("Error fetching comic:", t);
    }
}));
