import { uiModules } from 'ui/modules';
let module = uiModules.get('kibana');

var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};

module.constant('datepickerPluginLocales', {
    'pt-br': {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "AM",
                "PM"
            ],
            "DAY": [
                "Domingo",
                "Segunda-feira",
                "Ter\u00e7a-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "S\u00e1bado"
            ],
            "ERANAMES": [
                "Antes de Cristo",
                "Ano do Senhor"
            ],
            "ERAS": [
                "a.C.",
                "d.C."
            ],
            "FIRSTDAYOFWEEK": 6,
            "MONTH": [
                "Janeiro",
                "Fevereiro",
                "Mar\u00e7o",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            "SHORTDAY": [
                "Dom",
                "Seg",
                "Ter",
                "Qua",
                "Qui",
                "Sex",
                "S\u00e1b"
            ],
            "SHORTMONTH": [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez"
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "EEEE, d 'de' MMMM 'de' y",
            "longDate": "d 'de' MMMM 'de' y",
            "medium": "d 'de' MMM 'de' y HH:mm:ss",
            "mediumDate": "d 'de' MMM 'de' y",
            "mediumTime": "HH:mm:ss",
            "short": "dd/MM/yy HH:mm",
            "shortDate": "dd/MM/yy",
            "shortTime": "HH:mm"
        }, "NUMBER_FORMATS": {
            "CURRENCY_SYM": "R$",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": ".",
            "PATTERNS": [
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 3,
                    "minFrac": 0,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "",
                    "posPre": "",
                    "posSuf": ""
                },
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 2,
                    "minFrac": 2,
                    "minInt": 1,
                    "negPre": "-\u00a4",
                    "negSuf": "",
                    "posPre": "\u00a4",
                    "posSuf": ""
                }
            ]
        },
        "id": "pt-br",
        "pluralCat": function(n, opt_precision) {    if (n >= 0 && n <= 2 && n != 2) {        return PLURAL_CATEGORY.ONE;    }    return PLURAL_CATEGORY.OTHER;}
    }, en: {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "AM",
                "PM"
            ],
            "DAY": [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "MONTH": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "SHORTDAY": [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],
            "SHORTMONTH": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            "fullDate": "EEEE, MMMM d, y",
            "longDate": "MMMM d, y",
            "medium": "MMM d, y h:mm:ss a",
            "mediumDate": "MMM d, y",
            "mediumTime": "h:mm:ss a",
            "short": "M/d/yy h:mm a",
            "shortDate": "M/d/yy",
            "shortTime": "h:mm a"
        }, "NUMBER_FORMATS": {
            "CURRENCY_SYM": "$",
            "DECIMAL_SEP": ".",
            "GROUP_SEP": ",",
            "PATTERNS": [
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "macFrac": 0,
                    "maxFrac": 3,
                    "minFrac": 0,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "",
                    "posPre": "",
                    "posSuf": ""
                },
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "macFrac": 0,
                    "maxFrac": 2,
                    "minFrac": 2,
                    "minInt": 1,
                    "negPre": "(\u00a4",
                    "negSuf": ")",
                    "posPre": "\u00a4",
                    "posSuf": ""
                }
            ]
        },
        "id": "en-us",
        "pluralCat": function (n) {
            if (n == 1) {
                return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
        }
    }
});
