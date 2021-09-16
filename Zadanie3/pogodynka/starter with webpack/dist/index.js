/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: #051622; }\n\n.lewe {\n  float: left;\n  width: 79%;\n  height: 900px;\n  border-radius: 20px;\n  background: url(\"https://cdn.staticcrate.com/stock-hd/effects/footagecrate-4k-stormcloud4-prev-full.png\") no-repeat fixed center;\n  background-size: cover;\n  margin-top: 60px; }\n\n.prawe {\n  float: right;\n  width: 20%;\n  height: 900px;\n  border-radius: 20px;\n  background: #2F3044; }\n\n.sendBtn {\n  float: right; }\n\n.weatherPlace {\n  margin: 10%;\n  background: #12151F;\n  border-radius: 10px;\n  max-width: 300rem;\n  text-align: center;\n  color: #05F4B7; }\n\n.stopka {\n  position: absolute;\n  bottom: 0;\n  width: 99%;\n  height: 20px;\n  background: #646C79;\n  border-radius: 4px;\n  text-indent: 20px; }\n\n.cityList_obj {\n  background: #28559A;\n  margin: 1%;\n  text-align: center; }\n\n.kafelek {\n  margin: 10px;\n  width: 240px;\n  height: 150px;\n  border-radius: 20px;\n  background: #63BCE5;\n  text-align: center;\n  float: left; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const getWeather_1 = __webpack_require__(/*! ./getWeather */ "./src/getWeather.ts");
class App {
    constructor() {
        this.login = 'asd';
        this.pasta = `Mój stary to fanatyk wędkarstwa. Pół mieszkania zajebane wędkami, najgorzej. Średnio raz w miesiącu ktoś wdepnie w leżący na ziemi haczyk czy kotwicę i trzeba wyciągać w szpitalu, bo mają zadziory na końcu. W swoim dwudziestodwuletnim życiu już z 10 razy byłem na takim zabiegu. Tydzień temu poszedłem na jakieś losowe badania, to baba z recepcji jak mnie tylko zobaczyła, to kazała buta ściągać xD, bo myślała, że znowu hak w nodze.

    Druga połowa mieszkania zajebana „Wędkarzem Polskim”, „Światem Wędkarza”, „Super Karpiem” xD itp. Co tydzień ojciec robi objazd po wszystkich kioskach w mieście, żeby skompletować wszystkie wędkarskie tygodniki. Byłem na tyle głupi, że nauczyłem go into internety, bo myślałem, że trochę pieniędzy zaoszczędzimy na tych gazetkach, ale teraz nie dosyć, że je kupuje, to jeszcze siedzi na jakichś forach dla wędkarzy i kręci gównoburze z innymi wędkarzami o najlepsze zanęty itp. Potrafi drzeć mordę do monitora albo wypierdolić klawiaturę za okno. Kiedyś ojciec mnie wkurwił, to założyłem tam konto i go trollowałem, pisząc w jego tematach jakieś losowe głupoty, typu „karasie jedzo guwno”. Matka nie nadążała z gotowaniem bigosu na uspokojenie. Aha, ma już na forum rangę SUM, za najebanie 10 tysięcy postów.
    
    Jak jest ciepło, to co weekend zapierdala na ryby. Od jakichś pięciu lat w każdą niedzielę jem rybę na obiad, a ojciec pierdoli o zaletach jedzenia tego wodnego gówna. Jak się dostałem na studia, to stary przez tydzień pierdolił, że to dzięki temu, że jem dużo ryb, bo zawierają fosfor i mózg mi lepiej pracuje.
    
    Co sobotę budzi ze swoim znajomym Mirkiem całą rodzinę o czwartej w nocy, bo hałasują, pakując wędki, robiąc kanapki itd.
    
    Przy jedzeniu zawsze pierdoli o rybach i za każdym razem temat schodzi w końcu na Polski Związek Wędkarski, ojciec sam się nakręca i dostaje strasznego bólu dupy durr, niedostatecznie zarybiajo, tylko kradno hurr, robi się przy tym cały czerwony i odchodzi od stołu, klnąc, i idzie czytać Wielką Encyklopedię Ryb Rzecznych, żeby się uspokoić.
    
    W tym roku sam sobie kupił na święta ponton. Oczywiście do wigilii nie wytrzymał, tylko już wczoraj go rozpakował i nadmuchał w dużym pokoju. Ubrał się w ten swój cały strój wędkarski i siedział cały dzień w tym pontonie na środku mieszkania. Obiad (karp) też w nim zjadł [cool][cześć].
    
    Jak któregoś razu, jeszcze w podbazie czy gimbazie, miałem urodziny, to stary jako prezent wziął mnie ze sobą na ryby w drodze wyjątku. Super prezent kurwo.
    
    Pojechaliśmy gdzieś w pizdu za miasto, dochodzimy nad jezioro, a ojcu już się oczy świecą i oblizuje wargi, podniecony. Rozłożył cały sprzęt i siedzimy nad wodą, i patrzymy na spławiki. Po pięciu minutach mi się znudziło, więc włączyłem discmana, to mnie ojciec pierdolnął wędką po głowie, że ryby słyszą muzykę z moich słuchawek i się płoszą. Jak się chciałem podrapać po dupie, to zaraz krzyczał szeptem, żebym się nie wiercił, bo szeleszczę i ryby z wody widzą, jak się ruszam, i uciekają. Sześć godzin musiałem siedzieć w bezruchu i patrzeć na wodę jak w jakimś jebanym Guantanamo. Urodziny mam w listopadzie, więc jeszcze do tego było zimno jak sam skurwysyn. W pewnym momencie ojciec odszedł kilkanaście metrów w las i się spierdział. Wytłumaczył mi, że trzeba w lesie pierdzieć, bo inaczej ryby słyszą i czują.
    
    Gdyby mnie na długość ręki dopuścili do wszystkich ryb w Polsce, tobym wziął i zapierdolił.
    
    Wspomniałem, że ojciec ma kolegę Mirka, z którym jeździ na ryby. Kiedyś towarzyszem wypraw rybnych był hehe Zbyszek. Człowiek o kształcie piłki z wąsem i 365 dni w roku w kamizelce BOMBER. Byli z moim ojcem prawie jak bracia, przychodził z żoną Bożeną na Wigilie do nas itd. Raz ojciec miał imieniny, Zbysio przyszedł na hehe kielicha. Najebali się i oczywiście cały czas gadali o wędkowaniu i rybach. Ja siedziałem u siebie w pokoju. W pewnym momencie zaczęli drzeć na siebie mordę, czy generalnie lepsze są szczupaki, czy sumy.
    
    WEŹ MNIE NIE WKURWIAJ ZBYCHU, WIDZIAŁEŚ TY KIEDYŚ, JAKIE SZCZUPAK MA ZĘBY? CHAPS I RĘKA UJEBANA!
    
    KURWA TADEK SUMY W POLSCE PO 80 KILO WAŻĄ, TWÓJ SZCZUPAK TO IM MOŻE NASKOCZYĆ.
    
    CO TY MI O SUMACH PIERDOLISZ, JAK LEDWO UKLEJĘ POTRAFISZ Z WODY WYCIĄGNĄĆ. SZCZUPAK TO JEST KRÓL WODY JAK LEW JEST KRÓL DŻUNGLI.
    
    No i aż się zaczęli nakurwiać, zapasy na dywanie w dużym pokoju, a ja z matką musieliśmy ich rozdzielać. Od tego czasu zupełnie zerwali kontakt. W zeszłym roku zadzwoniła żona Zbysia, że Zbysio spadł z rowerka, i zaprasza na pogrzeb. Odebrała akurat matka, złożyła kondolencje, odkłada słuchawkę i mówi o tym ojcu, a ojciec
    
    I BARDZO KURWA DOBRZE.
    
    Tak go za tego suma znienawidził.
    
    Wspominałem też o arcywrogu mojego starego, czyli Polskim Związku Wędkarskim. Stał się on kompletną obsesją ojca i jak na przykład w telewizji mówią, że gdzieś było trzęsienie ziemi, to stary zawsze mamrocze pod nosem, że powinni w końcu coś o tych skurwysynach z PZW powiedzieć. Gazety niewędkarskie też przestał czytać, bo miał ból dupy, że o wędkarstwie polskim ani aferach w PZW nic się nie pisze.
    
    Szefem koła PZW w mojej okolicy jest niejaki pan Adam. Jest on dla starego uosobieniem całego zła wyrządzonego polskim akwenom przez Związek i ojciec przez wiele lat toczył z nim wojnę. Raz poszedł na jakieś zebranie wędkarskie, na którym występował Adam, i stary wrócił do domu z podartą koszulą, bo siłą go usuwali z sali, takie tam inby odpierdalał.
    
    Po klęsce w starciu fizycznym ze zbrojnym ramieniem PZW ojciec rozpoczął partyzantkę internetową, polegającą na szkalowaniu PZW i Adama na forach lokalnych gazet. Napierdalał na niego jakieś głupoty, typu że Adam był tajnym współpracownikiem UB albo że go widział na ulicy, jak komuś gwoździem samochód rysował itd. Nie nauczyłem ojca into TOR, więc skończyło się bagietami za szkalowanie i stary musiał zapłacić Adamowi dwa tysiące złotych..
    
    Jak płacił, to przez tydzień w domu się nie dało żyć, ojciec kurwił na przekupne sądy, PZW, Adama i w ogóle cały świat. Z jego pierdolenia wynikało, że PZW jak jacyś masoni rządzi całym krajem, pociąga za sznurki i ma wszędzie układy. Przeliczał też te dwa tysiące na wędki, haczyki czy łódki i dostawał strasznego bólu dupy, ile on by mógł na przykład zanęty waniliowej za te 2k kupić (kilkaset kilo).
    
    Stary jakoś w zeszłym roku stwierdził, że koniecznie musi mieć łódkę do połowów, bo niby wypożyczanie za drogo wychodzi i wszyscy go chcą oszukać.
    
    SYNEK, NA WODZIE TO SIĘ PRAWDZIWE OKAZY ŁAPIE! TAM JEST ŻYWIOŁ!
    
    Ale nie było go stać ani nie miał jej gdzie trzymać, a hehe frajerem to on nie jest, żeby komuś płacić za przechowywanie, więc zgadał się z jakimiś wędkarzami z okolicy, że kupią łódkę na spółkę, ona będzie stała u jakiegoś Janusza, który ma dom, a nie mieszkanie w bloku jak my, na podjeździe, na przyczepie, którą ten Janusz ma, i się będą tą łódką dzielili albo będą jeździć łowić razem.
    
    Na początku ta kooperatywa szła nawet nieźle, ale w któryś weekend ojciec się rozchorował i nie mógł z nimi jechać, i miał o to olbrzymi ból dupy. Jeszcze ci jego koledzy dzwonili, że ryby biorą jak pojebane, więc mój ojciec tylko leżał czerwony ze złości na kanapie i sapał z wkurwienia. Sytuację jeszcze pogarszało to, że nie miał na kogo zwalić winy, co zawsze robi. W końcu doszedł do wniosku, że to niesprawiedliwe, że oni łowią bez niego, bo przecież po równo się zrzucali na łódkę i w niedzielę wieczorem, jak te Janusze już wróciły z wyprawy, wyszedł nagle z domu.
    
    Po godzinie wraca i mówi do mnie, że muszę mu pomóc z czymś przed domem. Wychodzę na zewnątrz, a tam nasz samochód z przyczepą i łódką xD. Pytam, skąd on ją wziął, a on mówi, że Januszowi zajebał z podjazdu przed domem, bo oni go oszukali, i żebym łapał z nim łódkę, i wnosimy do mieszkania xD. Na nic się zdało tłumaczenie, że zajmie cały duży pokój. Na szczęście łódka nie zmieściła się w drzwiach do klatki, więc stary stwierdził, że on ją przed domem zostawi.
    
    Za pomocą jakichś łańcuchów, co były na łódce, i mojej kłódki od roweru przypiął ją do latarni i zadowolony chce iść wracać do mieszkania, a tu nagle przyjeżdżają dwa samochody z Januszami współwłaścicielami, którzy się domyślili, gdzie ich własność może się znajdować xD. Zaczęła się nieziemska inba, bo Janusze drą mordy, dlaczego łódkę ukradł i że ma oddawać, a ojciec się drze, że oni go oszukali i on 500 złotych się składał, a nie pływał w ten weekend. Ja starałem się załagodzić sytuację, żeby ojciec od nich nie dostał wpierdolu, bo było blisko.
    
    Po kilkunastu minutach sytuacja wyglądała tak:
    
    – Mój ojciec leży na ziemi, kurczowo trzyma się przyczepy i krzyczy, że nie odda.
    
    – Janusze krzyczą, że ma oddawać.
    
    – Jeden Janusz ma rozjebany nos, bo próbował leżącego ojca odciągnąć od łódki za nogę i dostał drugą nogą z kopa.
    
    – Dwóch policjantów ciągnie ojca za nogi i mówi, że jedzie z nimi na komisariat, bo pobił człowieka.
    
    – We wszystkich oknach dookoła stoją sąsiedzi.
    
    – Moja stara płacze i błaga ojca, żeby zostawił łódkę, a policjantów, żeby go nie aresztowali.
    
    – Ja: smutnazaba.psd.
    
    W końcu policjanci oderwali starego od łodzi. Ja podałem Januszom kod do kłódki rowerowej i zabrali łódkę, rzucając wcześniej staremu 500 złotych i mówiąc, że nie ma już do łódki żadnego prawa i lepiej dla niego, żeby się nigdy na rybach nie spotkali. Matka ubłagała policjantów, żeby nie aresztowali ojca. Janusz, co dostał w mordę butem, powiedział, że on się nie będzie pierdolił z łażeniem po komisariatach i ma to w dupie, tylko ojca nie chce więcej widzieć.
    
    Stary do tej pory robi z Januszami gównoburzę na forach dla wędkarzy, bo założyli tam specjalny temat, gdzie przestrzegali przed robieniem jakichkolwiek interesów z moim ojcem. Obserwowałem ten temat i widziałem, jak mój ojciec nieudolnie porobił trollkonta:
    
    Szczepan54
    
    Liczba postów: 1
    
    Ten temat założyli jacyś idioci! Znam użytkownika stary_anona od dawna i to bardzo porządny człowiek i wspaniały wędkarz! Chcą go oczernić bo zazdroszczą złowionych okazów!
    
    Potem jeszcze używał tych trollkont do prześladowania niedawnych kolegów od łódki. Jak któryś z nich zakładał jakiś temat, to ojciec się tam wpierdalał na trollkoncie i na przykład pisał, że chujowe ryby łapie i widać, że nie umie łowić xD.
    
    Z tych samych trollkont udzielał się w swoich tematach i jak na przykład wrzucał zdjęcia złapanych przez siebie ryb, to sam sobie pisał NOOOO GRATULUJĘ OKAZU! WIDAĆ, ŻE DOŚWIADCZONY ŁOWCA! a potem się z tego cieszył i kazał oglądać mi i starej, jak go chwalą na forum.
    
    
    
    
    CZĘŚĆ DRUGA (nieoficjalna, od innego autora)
    
    Po tych całych zamieszkach z Januszami w domu było jeszcze gorzej. Ojciec siedział głównie na necie i nadal robił gównoburze z innymi. Zły był bo nie miał żadnego kolegi z którym mógłby jeździć na ryby, a jak wiadomo zawsze jak z kimś się jeździ to i koszta są mniejsze. Wymyslił więc tzw, "Rodzinne wędkowanie" w ramach intergracji z rodziną. I musieliśmy z matką z nim jeździć na ryby. Szczególnie lubił zabierać nas na wieczorne wypady na brzanę. Bo to wędkę trzyma sie w ręku , palec na żyłce i nie trzeba głupich dzwonków które płoszą ryby. Kupował ser żółty na te brzany po 40zł za kilogram a my musieliśmy żreć Pasztet Mazowiecki z chlebem. Powiem szczerze że nawet polubiłem wędkowanie , bo jak już musiałem siedzieć na tych rybach to chciałem żeby to jakiś sens miało i starałem się coś złowić.Ojciec jak kiedyś złowiłem kilka brzan to robił zdjęcia i wstawiał na różnych forach i chwalił sie synem. Niektórzy rzeczywiście mu gratulowali że ma spoko syna itd . A sam sobie jeszcze kadził jako szczepan 54 pisząc że - Niedaleko pada jabłko od jabłoni i widać że syn czerpie wspaniałe wzorce które odziedziczył po ojcu- wspaniałym wędkarzu :) Ja w tym czasie dostałem pracę w sklepie Zoologiczno- Wędkarskim. Ojciec dumny był ze mnie i często przychodził do sklepu. Nie za bardzo lubiłem jak przychodził bo zawsze się wcinał w rozmowę z klientami , zawsze służąć "dobrymi radami" typu- Nie kupuj pan tej zanęty bo jest chujowa i szkoda na nią kasy , tylko weź pan tę bo na nią biorą ładne ryby i jak pan nie wierzysz to wejdź pan na forum " Superkarp" i znajdź użytkownika Stary Anona i zobaczysz pan jakie on ryby łapie. W tym czasie Janusz zaczął brać udział w zawodach wędkarskich i nawet mu nieźle szło. Ojciec wsciekał się jak cholera że taki cap wygrywa zawody i na pewno rywalizuje z totalnymi beztalenciami wedkarskimi skoro tak dobrze mu idzie. Mówiłem mu czasem że przychodzi do sklepu i za wygrane talony wybiera jakieś haczyki spławiki itd. I pewnego razu jak karmiłem rybki i nie patrzyłem co robi to on zajebał mi wszystkie haczyki Hamakatsu nr 12 i 14. Nie widziałem kiedy to zrobił i uwierzcie mi że w nocy te wszystkie haczyki stępił i podrzucił następnego dnia. I Janusz kiedyś przyszedł i za talon zabrał te wszystkie haczyki. I zrobił się dym bo Janusz przegrał następne zawody z kretesem i na forum napisal żeby nie kupować haczyków w " moim " sklepie bo szmelc sprzedają itd. Stary chodził dumny jak paw że zaszkodził Januszowi i na forum jako szczepan 54 pisał mu- że nie haczyk krupa tylko wędkarz dupa :) Ja musiałem oczywiście zapłacić ze swoich pieniędzy za te haki bo sprawa doszła do włascicicielki sklepu. W tym czasie poznałem dziewczynę. Miała na imię Anka. Przychodziła do sklepu i kupowała pokarm dla rybek. I jakoś tak się stało że zostaliśmy parą. Ładną miała buzię i cycki też fajne tylko miała gube nogi i spory brzuch. Ale jak to mówią - Lepsza sikorka na ptaku niz gołąb na dachu , czy jakoś tak to szło. Anka pozwalała tylko na sex na tę drugą dziurę bo obawiała się ciąży. Trudno ale jakoś z krzyża trzeba było spuścić.
    
    Pewnego razu przyprowadziłem ją do domu i przedstawiam ojcu. Tato to jest moja dziewczyna Ania i chętnie pojedzie z nami na ryby kiedyś. Nie wiedziałem że ojciec był nawalony jak stodoła. Odwrócił się i zarechotał jak żaba i krzyknął: Nie ma mowy synu żeby ona z nami jechała na ryby bo jest gruba a jak dobrze wiesz grube ludzie się pocą i smierdzą a to płoszy ryby. I jeszcze zarechotał ponownie i krzyknął 2 razy - Anka Grycanka, Anka Grycanka. Myślałem że się ze wstydu spalę przez tego jełopa że takiej siary mi narobił. Anka na szczęście nie wkurwiła się za bardzo i jakoś nie miała do mnie pretensji. W tym czasie ojciec przez forum poznał nowego kolegę po kiju niejakiego Heńka Malinowskiego lat 62. Mówił mi że to taka bratnia dusza i wspaniały kompan nad wodą. I mieliśmy z matką trochę luzu bo dogadywali się z tym Heńkiem doskonale. Matka z wdzięczności kupiła mu aparat foto żeby miał czym zdjęcia ryb robić. I wszystko było super tylko że na chyba 5 wyprawie stary zalał wodą ten aparat. Niby działał tylko te zdjęcia robił takie trochę zamazane i jakby czarno białe. Ale ojciec się tym nie przejął. I pewnego razu zobaczył jak Janusz wstawił zdjęcia swojego syna jak łowi okonie na spinning. I że on też nie będzie gorszy i że zdjęcia ze mną i szczupakami wstawi. I zamówił na necie takie coś
    
    http ://? gaby . com. pl / ? produkty
    
    2 szczupaki i jedego karpia. I jak przyszły to wieczorem zabrał mnie nad wodę i wziął ten spieprzony aparat i zaczął zdjęcia mi robić. Myślałem że się ze wstydu spalę i że jestem skończony. Ale uwierzcie mi że te barany na tym forum uwierzyły. Fakt że stary siedział pół nocy w jakiś fotoszopach i zrobił te zdjęcia tak że trudno było się zkapować że to poduszki a nie ryby prawdziwe. Jeszcze kilka razy korzystał z tych poduszek głównie z karpia bo sam się chwalił że niby tak mu dobrze idzie. :)
    
    Janusz się wściekł za te szczupy bo ojciec mu dogryzał że jego synek jakieś okonki łapie a ja niby takie piękne szczupy. A naprawdę do czego zdolny jest mój stary przekonałem się kiedy Janusz napisał na forum że jedzie w sobotę na mega łowy i ma zanęcone miejsce od 3 dni. Ojciec wiedział i ja tez gdzie ta miejscówa bo byłem z nim tam kilka razy. I stary jak to wyczytał w piątek to wieczorem poleciał do piwnicy i przyniósł 2 dechy długie na jakieś 1,5m i sporo gwoździ takich z 10cm. I zaczął o 21 prać te gwoździe w tę dechę , po czym wywalił wędki z pokrowca i władował te dechy do pokrowca i gdzieś pojechał. Padało wtedy mocno. I wrócił około 1 w nocy i oczy mu błyszczały i był megazadowolony. Potem Janusz pisał na forum że wyprawa nie doszła do skutku bo przebił wszystkie koła i nie dojechał na łowisko. Ciekawi jesteście jak można przebić 4 koła na raz? Z moim ojcem wszystko jest możliwe. Tam jak sie jedzie na to łowisko to jest taka dróżka z koleinami i trzeba uważać żeby nie zawisnąc autem. I jak popada w tych koleinach zbiera sie woda. Stary umocował te dechy do ziemi w tych kałużach tak że nie było widać i chcąć nie chcąc Janusz wjechał i przebił 4 koła. Wiedziałem że ze starym nie można zaczynać bo to się źle kończy. Tak był wściekły za tę łodkę.
    
    Kiedyś jak stary miał urodziny to kupiliśmy mu z matką spodniobuty marki Promil- Olsztyn. Takie ciężke czarne mocne u mnie w sklepie. Ojciec się cieszył jak dziecko. Był u niego wtedy Heniek Malinowki i nieźle popili. Stary oczywiście ubrał te spodniobuty, nalał wody do wanny i siedział ze 3 godziny sprawdzając czy nie ciekną. Heniek w tym czasie przybił gwoździa w pokoju. Przyszła do mnie Anka i chciała się wysikać. Wyobraźcie sobie jej minę jak weszła do łazienki i zobaczyła pijanego starego w wannie pełnej wody w spodnibutach. ( mamy kibel z łazienką - małe mieszkanie). :D Stary wezwał mnie i ją do tej łazienki i powiedział że Anka ma schudnąć bo on nie nadąży ryb łapać jak już się ochajtamy dla nas wszystkich. I uwierzcie Anka wzięła to sobie do serca i w ciągu 2 miesięcy schudła 20kilo. Wyglądała pięknie, laska z niej się zrobiła super i każdy mi jej zazdrościł. :wub: Stary jak ją zobaczył kiedyś to gały wytrzeszczył i powiedział że waliłby jak Reksio pieczątki i że może z nami na ryby jeździć. I pojechaliśmy. I wszystko było super , pogoda piękna, ciepło , wypadzik z Anką na małe bara bara do lasku. Słowem cud wyprawa. Matka zadowolona i wsio git. Do pewnego momentu jak ojciec zaciął coś ładnego i musiałem wejść do wody żeby mu podebrac rybę. A z resztą zobaczcie sami Anka kręciła komórką
    
    http://www.youtube.com/watch?v=OcwejJNd7pw
    
    Stary wsciekł się i nie gadał z nami cały tydzień. Zaczął jeździć na ryby z Heńkiem i nawet im nieźle szło. Do czasu jak Heniek na forum nie napisał że złowił o pół cm większego leszcza niż mój stary. Fakt był pół centa większy ale prawdę mówiąc leszcz ojca był sporo grubszy. I tak zaczęła sie kolejna wojna. Heniek kończył 62 lata i miał nick na forum HM 62. I na urodziny przyszedł do mojego sklepu i zakupił sobie wypas sprzęt. Kołowrotek Daiwa Claudia i wedkę DR. Agon HM62. Dziwny zbieg okoliczności nie sądzicie? Powiedziałem staremu że Heniek zostawił dzisiaj w sklepie jakieś 1500zł. Starego wnerwiło to strasznie i dawaj na forum. Heniek oczywiście wstawił już zdjęcia w dziale " Spuszczajmy się nad nowym sprzetem" :lol: I stary napisał mu że do takiego 62 letniego Hama (org. tekst starego) nie pasuje taka ładna Claudia :)
    
    I znów się zaczęło " rodzinne wędkowanie" Musieliśmy z matką jechać na mega wyprawę ze starym. Niby wszystko było przygotowane ( mieliśmy jechać skoro świt w sobotę i wrócić pod wieczór w niedzielę) i stary powiedział że trzeba się porządnie wyspać bo na tym łowisku nie dane nam będzie spać bo takie ryby są. I poszliśmy spać około 21-ej. I w nocy staremu przypomniało się że nie nałapał rosówek a tam sumy są jak byki. I około północy czuję jak coś kłuje mnie w dupę. Obudziłem się i zobaczyłem jak stary budzi mnie kłując w dupę spławikiem z kolca jeżozwierza i mówi żebym brał latarkę i idziemy łapac rosówki. I qrwa pech chciał że kumple wracali z imprezy i widzieli jak ze starym w piżamach z latarkami łapiemy rosówy na trawniku. Ale mieli polewę. :( Z nim zawsze jakaś mina wyjdzie. No i pojechaliśmy nad Wisłę na taka długą tamę ( ostrogę jak kto woli). Powiedziałbym wam gdzie dokładnie bo piękna głęboka woda ale stary by mnie zabił. Na końcu tej tamostrogi była taka tyczka bita w dno która wskazuje jaki jest stan wody czy gdzie koryto idzie czy coś dla łodek żeby nie wjebać się na tamę. No i wszystko fajnie. Ojciec w spodniobutach gotowy popijał nalewkę. My z matką siedzimy cicho. Wędki na grunta zarzucone. Cud miód i orzeszki. Bolki biją pięknie ale jakos brań nie ma. Pytałem starego po co siedzi w tych spodniobutach na wybetonowanej tamie. A on że synu trzeba być przygotowanym na wszystko nawet na wejście za rybą do wody. I najlepiej zebym siedział cicho bo zaraz się zacznie. I siedzimy. Żałowałem że Anka z nami nie pojechała bo poszedlbym z nią w krzaki pod pretekstem zebrania wiecej drewna na ognisko. :) Ale nic. Staremu się przykimało i nagle dzwonek na jego wędce zaczął dzwonić. Stary zaspany podleciał do głowki i ( tu z matką zbaranielismy) wyrwał tę tykę do mierzenia wody, zaciął mocno i drugą ręka zaczął szukać kołowrotka. Nie dało rady. Dostaliśmy z matką jakiejś głupawki. Tarzaliśmy się ze śmiechu jakies 20 minut. Ryba oczywiście na tej prawdziwej wędce zwiała. Stary czerwony ze wstydu i złości że wyszedł na idiotę zarządził że zmieniamy łowisko bo tu przez nasz głupi śmiech wszystko przepłoszone. Jakbyśmy wiedzieli że tak będzie to siedzielibyśmy cicho jak mysz pod miotłą. Cholera na tę opaskę którą sobie stary wybrał było jakieś 1 km dalej przez krzaki i prawie ścieżki nie było. Jeszcze stary wymyslił ze zabieramy ognisko bo on nie będzie tracił czasu na rozpalanie ognia bo rosa jest i wszystko wilgotne. Myślicie że żartuję? Nie znacie mojego starego jeszcze. Jak był się wylać to zauważył w rogu tamy taki duży baniak( pewnie powódź przyniosła). I przywlekliśmy ten baniak i stary władował ognisko do baniaka i dawaj idziemy. Dobrze że mieliśmy ze starym takie rękawice kevlarowe do podbierania sumów bo ręce by nam poparzyło. Najbardziej mi było szkoda matki. Objuczona 3 gruntówkami, podbierakiem, zanętami , przynętami i całym tym majdanem musiała wlec to przez krzaki po scieżce której prawie nie było. My ze starym nieśliśmy baniak z ogniskiem. Jak odpoczywaliśmy trochę to stary szedł i przynosił gałęzie żeby dołożyć do baniaka. I wtedy nastąpiła druga mina tej wyprawy. W tych spodniobutach stary przyciągnął sobie mocno te szelki. I jak szedł po drewno to chciał przeskoczyc taki rówek. A że ślisko już było po rosie to mało nie wyjebał i poleciał tak że aż przykucnął. Spodniobuty wtedy nie wytrzymały i pięknie jakby nożem obciął, gumiaki oderwało od nogawek. Aż mnie trzęsło ze śmiechu ale jakoś się powstrzymałem żeby stary czegoś głupiego nie wymyslił. Zaczął się wkurwiać że teraz to gówno robią a nie sprzęt i że ten Promil- Olsztyn to chuj nie firma. Jakoś po prawie 1,5 godziny dotarliśmy na opaskę z klatkami. Ładne miejsce ( rano stwierdziłem) i dawaj łowimy. Baniak z ogniskiem przy krzaczkach żeby ryby światła nie widziały.Stary założył najwiekszą rosówkę i sruuuu. I mówi do mnie. Widzisz synu - tak rzuciłem że nawet nie słychac było gdzie do wody spadło. Ale nic mu nie brało. Ja złowiłem suma 76cm, brzane krótką , i ładnego leszcza 47cm. Staremu nic nie brało. Matka nie łowiła bo padła ze zmęczenia i spała. Na moje sugestie żeby stary sprawdził czy przynętę nie objadło powiedział że nie bo już drugi raz taki rzut mu się nie uda. A najlepsze było rano jak się okazało że stary źle ocenił ( po Nalewce) gdzie woda a gdzie ląd i przynęta całą noc wisiała na drzewie. Rosówka była wyschnięta już mocno :D . Starego mało szlag nie trafił i zapowiedział że jedziemy do domu. Matka zadowolona z takiego obrotu sprawy na sam koniec złowiła jeszcze pięknego leszcza czym nieźle wkurwiła starego bo pobiła jego rekord :) . To była chyba najbardziej nieudana wyprawa dla starego w jego życiu. Po tym wszystkim zapowiedział że będzie łowił na spinning bo w tym jest przyszłość i że szczupaków i sandaczy w domu nie zabraknie. Na tamtych forach dostał bany dożywotnio bo jeszcze kłócił się z jakimś Murgrabią Beczkowskim o byle co. Wiem tylko że zarejestrował się na Jerbait.pl ale na razie jest grzeczny. Przywlekł do piwnicy pół kubika lipy wysuszonej i gadał że będzie robił woblery. Bo synu jak mowił nie ma to jak złowić drapieżnika na własnoręcznie zrobioną przynętę. Ma farby, kleje, drut na razie powyciągał z bombek choinkowych i mamy choinkę bez bombek. Matka się wkurzyła ale stary powiedział że po Nowym Roku kupi drut na Allegro i powpina z powrotem w te bombki. Na jerkbait.pl mówił mi że jest grzeczny i głupot nie wypisuje, bo musi od chłopaków wysępić tajemnice jak się robi wobki na szczupy i sandały bo na bolki nie chce bo są chujowe w smaku. Tylko gadał mi że i tam gówno wiedzą bo była jakaś kłotnia która wędka lepsza , czy ta z Boronu czy z Grafitu? A przecież on wie najlepiej że najlepsza jest z Kevlaru bo miał żyłkę marki Sneck Kevlar Line i 0,20 wytrzymywała 8,6kg. I niech mu teraz znajdą taką mocną cienką żyłkę. Ale nie będzie na razie robił gównoburz bo jest sezon martwy i nie wkurwiają go zdjęcia ryb bo nikt prawie nic nie łowi i jest ok. Tak że uważajcie na użytkownika Stary Anona bo on wam jeszcze pokaże. On jest do wszystkiego zdolny powinnien to każdy wiedzieć po przeczytaniu tego opowiadania. Tak że wszystkim użytkownikom Jerkbait.pl. życzę żebyście nie spotkali mojego starego nad wodą. I samych przyjemnych chwil z wędką w ręku w Nowym 2013 Roku.
    
    To jest moje opowiadanie i najlepiej żebym wygrał wedkę bo mam słabą.
    
    A i jeszcze jedno. Stary na pewno przeczyta moje opowiadanie i się wkurwi na mnie. Ale nie dbam o to. Musiałem się rozstać z Anką bo dowiedziałem się że przez to schudła bo zjadła jakieś tabletki z tasiemcem, a to wszystko przez mojego starego bo dokuczał jej że gruba jest :(
    
    Niektóre dziewczyny sa jednak naprawdę głupie. Tak bardzo chciała jechać z nami na ryby że postąpiła tak drastycznie. Do czego może doprowadzić wędkarstwo? Brak słów.
    
    
    Edit. Stary przeczytał to wszystko i na innych forach z trolkonta namawia innych żeby nie głosowali na moje opowiadanie i żebym nic nie wygrał :(. Szkoda. Pozdrawiam Riqelme.`;
        this.i = 0;
        this.addForm = document.querySelector('.weatherPlace');
        this.leftDiv = document.querySelector('.lewe');
        this.rightDiv = document.querySelector('.prawe');
        this.cityListDiv = document.querySelector('.cityList');
        if (localStorage.getItem('pogoda1')) {
            console.log(this.getData);
            this.cityList = this.getData();
            this.i = this.cityList.length;
            this.cityList.forEach(element => {
                this.addCity(element);
                this.appendCityDiv(element);
                this.changeData();
            });
        }
        else {
            this.cityList = [];
        }
    }
    start() {
        console.log(this.cityListDiv.innerText);
        this.pushForm(this.addForm);
        this.changeData();
    }
    pushForm(form) {
        if (form === null) {
            return;
        }
        else {
            form.onsubmit = () => {
                if (form === null) {
                    return;
                }
                else {
                    let input = document.querySelector('.city');
                    let city = this.createObject(input.value);
                    this.cityList.push(city);
                    console.log(this.cityList);
                    console.log(city.pressure);
                    this.cityList.forEach(element => {
                        console.log(typeof (element.description));
                    });
                    input.value = '';
                    this.addCity(this.cityList[this.i]);
                    this.appendCityDiv(this.cityList[this.i]);
                    this.changeData();
                    this.saveData();
                    this.i++;
                }
            };
        }
    }
    createObject(city) {
        let obj = new getWeather_1.getWeather(city);
        return obj;
    }
    addCity(city) {
        let div = document.createElement('div');
        div.innerText = city.city;
        div.classList = 'cityList_obj';
        this.cityListDiv.appendChild(div);
    }
    appendCityDiv(city) {
        let div = document.createElement('div');
        div.classList = 'kafelek';
        let cityDiv = document.createElement('div');
        cityDiv.innerText = city.city;
        let countryDiv = document.createElement('div');
        countryDiv.innerText = city.country;
        let weatherDiv = document.createElement('div');
        weatherDiv.innerText = city.weather;
        let descriptionDiv = document.createElement('div');
        descriptionDiv.innerText = city.description;
        let windDiv = document.createElement('div');
        windDiv.innerText = city.pressure + "hPa";
        let temperatureDiv = document.createElement('div');
        temperatureDiv.innerText = city.temperature + " °C";
        div.appendChild(cityDiv);
        div.appendChild(countryDiv);
        div.appendChild(weatherDiv);
        div.appendChild(descriptionDiv);
        div.appendChild(windDiv);
        div.appendChild(temperatureDiv);
        this.leftDiv.appendChild(div);
    }
    changeData() {
        let divs = document.querySelectorAll('.kafelek');
        divs.forEach((element, i) => {
            element.childNodes[1].textContent = this.cityList[i].country;
            element.childNodes[2].textContent = this.cityList[i].weather;
            element.childNodes[3].textContent = this.cityList[i].description;
            element.childNodes[4].textContent = this.cityList[i].pressure + "hPa";
            element.childNodes[5].textContent = this.cityList[i].temperature + " °C";
        });
    }
    saveData() {
        localStorage.setItem('pogoda1', JSON.stringify(this.cityList));
    }
    getData() {
        return JSON.parse(localStorage.getItem('pogoda1'));
    }
}
exports.App = App;
exports.AAA = 10;


/***/ }),

/***/ "./src/getWeather.ts":
/*!***************************!*\
  !*** ./src/getWeather.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class getWeather {
    constructor(city) {
        this.apiKey = "a8543b8a81ea0bba50748b2a9f6269c0";
        this.city = city;
        this.getWeatherData();
    }
    getWeatherData() {
        return __awaiter(this, void 0, void 0, function* () {
            const opURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
            const weatherResponse = yield fetch(opURL);
            const weatherData = yield weatherResponse.json();
            console.log(weatherData);
            this.getData(weatherData);
        });
    }
    getData(data) {
        this.weather = data.weather[0].main;
        this.description = "Opis: " + data.weather[0].description;
        this.country = "Miasto" + data.sys.country;
        this.pressure = "Ciśnienie: " + data.main.pressure;
        this.temperature = "Temperatura: " + Math.round(data.main.temp - 273.15);
        this.humidity = "Wilgotność: " + data.main.humidity;
    }
}
exports.getWeather = getWeather;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const hello = "yep, it's workin still sick";
const app = new app_1.App();
app.start();


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9nZXRXZWF0aGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzPzRlNTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFG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LElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDeEQsQ0FBQztDQUdKO0FBdENELGdDQXNDQzs7Ozs7Ozs7Ozs7Ozs7O0FDekNELCtEQUE0QjtBQUM1QiwwREFBcUI7QUFFckIsTUFBTSxLQUFLLEdBQUcsNkJBQTZCLENBQUM7QUFFNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQ05aLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsaU1BQThGOztBQUVoSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogIzA1MTYyMjsgfVxcblxcbi5sZXdlIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDc5JTtcXG4gIGhlaWdodDogOTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL2Nkbi5zdGF0aWNjcmF0ZS5jb20vc3RvY2staGQvZWZmZWN0cy9mb290YWdlY3JhdGUtNGstc3Rvcm1jbG91ZDQtcHJldi1mdWxsLnBuZ1xcXCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWFyZ2luLXRvcDogNjBweDsgfVxcblxcbi5wcmF3ZSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA5MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMkYzMDQ0OyB9XFxuXFxuLnNlbmRCdG4ge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLndlYXRoZXJQbGFjZSB7XFxuICBtYXJnaW46IDEwJTtcXG4gIGJhY2tncm91bmQ6ICMxMjE1MUY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWF4LXdpZHRoOiAzMDByZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzA1RjRCNzsgfVxcblxcbi5zdG9wa2Ege1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDk5JTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6ICM2NDZDNzk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWluZGVudDogMjBweDsgfVxcblxcbi5jaXR5TGlzdF9vYmoge1xcbiAgYmFja2dyb3VuZDogIzI4NTU5QTtcXG4gIG1hcmdpbjogMSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ua2FmZWxlayB7XFxuICBtYXJnaW46IDEwcHg7XFxuICB3aWR0aDogMjQwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6ICM2M0JDRTU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmbG9hdDogbGVmdDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBwdXNoRm9ybSB9IGZyb20gXCIuL3B1c2hGb3JtXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0V2VhdGhlclwiO1xuaW1wb3J0IHsgSVdlYXRoZXIgfSBmcm9tIFwiLi9JV2VhdGhlclwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBsb2dpbjpzdHJpbmcgPSAnYXNkJ1xuICAgIHBhc3RhOiBzdHJpbmcgPSBgTcOzaiBzdGFyeSB0byBmYW5hdHlrIHfEmWRrYXJzdHdhLiBQw7PFgiBtaWVzemthbmlhIHphamViYW5lIHfEmWRrYW1pLCBuYWpnb3J6ZWouIMWacmVkbmlvIHJheiB3IG1pZXNpxIVjdSBrdG/FmyB3ZGVwbmllIHcgbGXFvMSFY3kgbmEgemllbWkgaGFjenlrIGN6eSBrb3R3aWPEmSBpIHRyemViYSB3eWNpxIVnYcSHIHcgc3pwaXRhbHUsIGJvIG1hasSFIHphZHppb3J5IG5hIGtvxYRjdS4gVyBzd29pbSBkd3Vkemllc3RvZHd1bGV0bmltIMW8eWNpdSBqdcW8IHogMTAgcmF6eSBiecWCZW0gbmEgdGFraW0gemFiaWVndS4gVHlkemllxYQgdGVtdSBwb3N6ZWTFgmVtIG5hIGpha2llxZsgbG9zb3dlIGJhZGFuaWEsIHRvIGJhYmEgeiByZWNlcGNqaSBqYWsgbW5pZSB0eWxrbyB6b2JhY3p5xYJhLCB0byBrYXphxYJhIGJ1dGEgxZtjacSFZ2HEhyB4RCwgYm8gbXnFm2xhxYJhLCDFvGUgem5vd3UgaGFrIHcgbm9kemUuXG5cbiAgICBEcnVnYSBwb8WCb3dhIG1pZXN6a2FuaWEgemFqZWJhbmEg4oCeV8SZZGthcnplbSBQb2xza2lt4oCdLCDigJ7FmndpYXRlbSBXxJlka2FyemHigJ0sIOKAnlN1cGVyIEthcnBpZW3igJ0geEQgaXRwLiBDbyB0eWR6aWXFhCBvamNpZWMgcm9iaSBvYmphemQgcG8gd3N6eXN0a2ljaCBraW9za2FjaCB3IG1pZcWbY2llLCDFvGVieSBza29tcGxldG93YcSHIHdzenlzdGtpZSB3xJlka2Fyc2tpZSB0eWdvZG5pa2kuIEJ5xYJlbSBuYSB0eWxlIGfFgnVwaSwgxbxlIG5hdWN6ecWCZW0gZ28gaW50byBpbnRlcm5ldHksIGJvIG15xZtsYcWCZW0sIMW8ZSB0cm9jaMSZIHBpZW5pxJlkenkgemFvc3pjesSZZHppbXkgbmEgdHljaCBnYXpldGthY2gsIGFsZSB0ZXJheiBuaWUgZG9zecSHLCDFvGUgamUga3VwdWplLCB0byBqZXN6Y3plIHNpZWR6aSBuYSBqYWtpY2jFmyBmb3JhY2ggZGxhIHfEmWRrYXJ6eSBpIGtyxJljaSBnw7N3bm9idXJ6ZSB6IGlubnltaSB3xJlka2FyemFtaSBvIG5hamxlcHN6ZSB6YW7EmXR5IGl0cC4gUG90cmFmaSBkcnplxIcgbW9yZMSZIGRvIG1vbml0b3JhIGFsYm8gd3lwaWVyZG9sacSHIGtsYXdpYXR1csSZIHphIG9rbm8uIEtpZWR5xZsgb2pjaWVjIG1uaWUgd2t1cndpxYIsIHRvIHphxYJvxbx5xYJlbSB0YW0ga29udG8gaSBnbyB0cm9sbG93YcWCZW0sIHBpc3rEhWMgdyBqZWdvIHRlbWF0YWNoIGpha2llxZsgbG9zb3dlIGfFgnVwb3R5LCB0eXB1IOKAnmthcmFzaWUgamVkem8gZ3V3bm/igJ0uIE1hdGthIG5pZSBuYWTEhcW8YcWCYSB6IGdvdG93YW5pZW0gYmlnb3N1IG5hIHVzcG9rb2plbmllLiBBaGEsIG1hIGp1xbwgbmEgZm9ydW0gcmFuZ8SZIFNVTSwgemEgbmFqZWJhbmllIDEwIHR5c2nEmWN5IHBvc3TDs3cuXG4gICAgXG4gICAgSmFrIGplc3QgY2llcMWCbywgdG8gY28gd2Vla2VuZCB6YXBpZXJkYWxhIG5hIHJ5YnkuIE9kIGpha2ljaMWbIHBpxJljaXUgbGF0IHcga2HFvGTEhSBuaWVkemllbMSZIGplbSByeWLEmSBuYSBvYmlhZCwgYSBvamNpZWMgcGllcmRvbGkgbyB6YWxldGFjaCBqZWR6ZW5pYSB0ZWdvIHdvZG5lZ28gZ8Ozd25hLiBKYWsgc2nEmSBkb3N0YcWCZW0gbmEgc3R1ZGlhLCB0byBzdGFyeSBwcnpleiB0eWR6aWXFhCBwaWVyZG9sacWCLCDFvGUgdG8gZHppxJlraSB0ZW11LCDFvGUgamVtIGR1xbxvIHJ5YiwgYm8gemF3aWVyYWrEhSBmb3Nmb3IgaSBtw7N6ZyBtaSBsZXBpZWogcHJhY3VqZS5cbiAgICBcbiAgICBDbyBzb2JvdMSZIGJ1ZHppIHplIHN3b2ltIHpuYWpvbXltIE1pcmtpZW0gY2HFgsSFIHJvZHppbsSZIG8gY3p3YXJ0ZWogdyBub2N5LCBibyBoYcWCYXN1asSFLCBwYWt1asSFYyB3xJlka2ksIHJvYmnEhWMga2FuYXBraSBpdGQuXG4gICAgXG4gICAgUHJ6eSBqZWR6ZW5pdSB6YXdzemUgcGllcmRvbGkgbyByeWJhY2ggaSB6YSBrYcW8ZHltIHJhemVtIHRlbWF0IHNjaG9kemkgdyBrb8WEY3UgbmEgUG9sc2tpIFp3acSFemVrIFfEmWRrYXJza2ksIG9qY2llYyBzYW0gc2nEmSBuYWtyxJljYSBpIGRvc3RhamUgc3RyYXN6bmVnbyBiw7NsdSBkdXB5IGR1cnIsIG5pZWRvc3RhdGVjem5pZSB6YXJ5Ymlham8sIHR5bGtvIGtyYWRubyBodXJyLCByb2JpIHNpxJkgcHJ6eSB0eW0gY2HFgnkgY3plcndvbnkgaSBvZGNob2R6aSBvZCBzdG/FgnUsIGtsbsSFYywgaSBpZHppZSBjenl0YcSHIFdpZWxrxIUgRW5jeWtsb3BlZGnEmSBSeWIgUnplY3pueWNoLCDFvGVieSBzacSZIHVzcG9rb2nEhy5cbiAgICBcbiAgICBXIHR5bSByb2t1IHNhbSBzb2JpZSBrdXBpxYIgbmEgxZt3acSZdGEgcG9udG9uLiBPY3p5d2nFm2NpZSBkbyB3aWdpbGlpIG5pZSB3eXRyenltYcWCLCB0eWxrbyBqdcW8IHdjem9yYWogZ28gcm96cGFrb3dhxYIgaSBuYWRtdWNoYcWCIHcgZHXFvHltIHBva29qdS4gVWJyYcWCIHNpxJkgdyB0ZW4gc3fDs2ogY2HFgnkgc3Ryw7NqIHfEmWRrYXJza2kgaSBzaWVkemlhxYIgY2HFgnkgZHppZcWEIHcgdHltIHBvbnRvbmllIG5hIMWbcm9ka3UgbWllc3prYW5pYS4gT2JpYWQgKGthcnApIHRlxbwgdyBuaW0gemphZMWCIFtjb29sXVtjemXFm8SHXS5cbiAgICBcbiAgICBKYWsga3TDs3JlZ2/FmyByYXp1LCBqZXN6Y3plIHcgcG9kYmF6aWUgY3p5IGdpbWJhemllLCBtaWHFgmVtIHVyb2R6aW55LCB0byBzdGFyeSBqYWtvIHByZXplbnQgd3ppxIXFgiBtbmllIHplIHNvYsSFIG5hIHJ5YnkgdyBkcm9kemUgd3lqxIV0a3UuIFN1cGVyIHByZXplbnQga3Vyd28uXG4gICAgXG4gICAgUG9qZWNoYWxpxZtteSBnZHppZcWbIHcgcGl6ZHUgemEgbWlhc3RvLCBkb2Nob2R6aW15IG5hZCBqZXppb3JvLCBhIG9qY3UganXFvCBzacSZIG9jenkgxZt3aWVjxIUgaSBvYmxpenVqZSB3YXJnaSwgcG9kbmllY29ueS4gUm96xYJvxbx5xYIgY2HFgnkgc3ByesSZdCBpIHNpZWR6aW15IG5hZCB3b2TEhSwgaSBwYXRyenlteSBuYSBzcMWCYXdpa2kuIFBvIHBpxJljaXUgbWludXRhY2ggbWkgc2nEmSB6bnVkemnFgm8sIHdpxJljIHfFgsSFY3p5xYJlbSBkaXNjbWFuYSwgdG8gbW5pZSBvamNpZWMgcGllcmRvbG7EhcWCIHfEmWRrxIUgcG8gZ8WCb3dpZSwgxbxlIHJ5Ynkgc8WCeXN6xIUgbXV6eWvEmSB6IG1vaWNoIHPFgnVjaGF3ZWsgaSBzacSZIHDFgm9zesSFLiBKYWsgc2nEmSBjaGNpYcWCZW0gcG9kcmFwYcSHIHBvIGR1cGllLCB0byB6YXJheiBrcnp5Y3phxYIgc3plcHRlbSwgxbxlYnltIHNpxJkgbmllIHdpZXJjacWCLCBibyBzemVsZXN6Y3rEmSBpIHJ5YnkgeiB3b2R5IHdpZHrEhSwgamFrIHNpxJkgcnVzemFtLCBpIHVjaWVrYWrEhS4gU3plxZvEhyBnb2R6aW4gbXVzaWHFgmVtIHNpZWR6aWXEhyB3IGJlenJ1Y2h1IGkgcGF0cnplxIcgbmEgd29kxJkgamFrIHcgamFraW3FmyBqZWJhbnltIEd1YW50YW5hbW8uIFVyb2R6aW55IG1hbSB3IGxpc3RvcGFkemllLCB3acSZYyBqZXN6Y3plIGRvIHRlZ28gYnnFgm8gemltbm8gamFrIHNhbSBza3Vyd3lzeW4uIFcgcGV3bnltIG1vbWVuY2llIG9qY2llYyBvZHN6ZWTFgiBraWxrYW5hxZtjaWUgbWV0csOzdyB3IGxhcyBpIHNpxJkgc3BpZXJkemlhxYIuIFd5dMWCdW1hY3p5xYIgbWksIMW8ZSB0cnplYmEgdyBsZXNpZSBwaWVyZHppZcSHLCBibyBpbmFjemVqIHJ5Ynkgc8WCeXN6xIUgaSBjenVqxIUuXG4gICAgXG4gICAgR2R5YnkgbW5pZSBuYSBkxYJ1Z2/Fm8SHIHLEmWtpIGRvcHXFm2NpbGkgZG8gd3N6eXN0a2ljaCByeWIgdyBQb2xzY2UsIHRvYnltIHd6acSFxYIgaSB6YXBpZXJkb2xpxYIuXG4gICAgXG4gICAgV3Nwb21uaWHFgmVtLCDFvGUgb2pjaWVjIG1hIGtvbGVnxJkgTWlya2EsIHoga3TDs3J5bSBqZcW6ZHppIG5hIHJ5YnkuIEtpZWR5xZsgdG93YXJ6eXN6ZW0gd3lwcmF3IHJ5Ym55Y2ggYnnFgiBoZWhlIFpieXN6ZWsuIEN6xYJvd2llayBvIGtzenRhxYJjaWUgcGnFgmtpIHogd8SFc2VtIGkgMzY1IGRuaSB3IHJva3UgdyBrYW1pemVsY2UgQk9NQkVSLiBCeWxpIHogbW9pbSBvamNlbSBwcmF3aWUgamFrIGJyYWNpYSwgcHJ6eWNob2R6acWCIHogxbxvbsSFIEJvxbxlbsSFIG5hIFdpZ2lsaWUgZG8gbmFzIGl0ZC4gUmF6IG9qY2llYyBtaWHFgiBpbWllbmlueSwgWmJ5c2lvIHByenlzemVkxYIgbmEgaGVoZSBraWVsaWNoYS4gTmFqZWJhbGkgc2nEmSBpIG9jenl3acWbY2llIGNhxYJ5IGN6YXMgZ2FkYWxpIG8gd8SZZGtvd2FuaXUgaSByeWJhY2guIEphIHNpZWR6aWHFgmVtIHUgc2llYmllIHcgcG9rb2p1LiBXIHBld255bSBtb21lbmNpZSB6YWN6xJlsaSBkcnplxIcgbmEgc2llYmllIG1vcmTEmSwgY3p5IGdlbmVyYWxuaWUgbGVwc3plIHPEhSBzemN6dXBha2ksIGN6eSBzdW15LlxuICAgIFxuICAgIFdFxbkgTU5JRSBOSUUgV0tVUldJQUogWkJZQ0hVLCBXSURaSUHFgUXFmiBUWSBLSUVEWcWaLCBKQUtJRSBTWkNaVVBBSyBNQSBaxJhCWT8gQ0hBUFMgSSBSxJhLQSBVSkVCQU5BIVxuICAgIFxuICAgIEtVUldBIFRBREVLIFNVTVkgVyBQT0xTQ0UgUE8gODAgS0lMTyBXQcW7xIQsIFRXw5NKIFNaQ1pVUEFLIFRPIElNIE1PxbtFIE5BU0tPQ1pZxIYuXG4gICAgXG4gICAgQ08gVFkgTUkgTyBTVU1BQ0ggUElFUkRPTElTWiwgSkFLIExFRFdPIFVLTEVKxJggUE9UUkFGSVNaIFogV09EWSBXWUNJxIRHTsSExIYuIFNaQ1pVUEFLIFRPIEpFU1QgS1LDk0wgV09EWSBKQUsgTEVXIEpFU1QgS1LDk0wgRMW7VU5HTEkuXG4gICAgXG4gICAgTm8gaSBhxbwgc2nEmSB6YWN6xJlsaSBuYWt1cndpYcSHLCB6YXBhc3kgbmEgZHl3YW5pZSB3IGR1xbx5bSBwb2tvanUsIGEgamEgeiBtYXRrxIUgbXVzaWVsacWbbXkgaWNoIHJvemR6aWVsYcSHLiBPZCB0ZWdvIGN6YXN1IHp1cGXFgm5pZSB6ZXJ3YWxpIGtvbnRha3QuIFcgemVzesWCeW0gcm9rdSB6YWR6d29uacWCYSDFvG9uYSBaYnlzaWEsIMW8ZSBaYnlzaW8gc3BhZMWCIHogcm93ZXJrYSwgaSB6YXByYXN6YSBuYSBwb2dyemViLiBPZGVicmHFgmEgYWt1cmF0IG1hdGthLCB6xYJvxbx5xYJhIGtvbmRvbGVuY2plLCBvZGvFgmFkYSBzxYJ1Y2hhd2vEmSBpIG3Ds3dpIG8gdHltIG9qY3UsIGEgb2pjaWVjXG4gICAgXG4gICAgSSBCQVJEWk8gS1VSV0EgRE9CUlpFLlxuICAgIFxuICAgIFRhayBnbyB6YSB0ZWdvIHN1bWEgem5pZW5hd2lkemnFgi5cbiAgICBcbiAgICBXc3BvbWluYcWCZW0gdGXFvCBvIGFyY3l3cm9ndSBtb2plZ28gc3RhcmVnbywgY3p5bGkgUG9sc2tpbSBad2nEhXprdSBXxJlka2Fyc2tpbS4gU3RhxYIgc2nEmSBvbiBrb21wbGV0bsSFIG9ic2VzasSFIG9qY2EgaSBqYWsgbmEgcHJ6eWvFgmFkIHcgdGVsZXdpemppIG3Ds3dpxIUsIMW8ZSBnZHppZcWbIGJ5xYJvIHRyesSZc2llbmllIHppZW1pLCB0byBzdGFyeSB6YXdzemUgbWFtcm9jemUgcG9kIG5vc2VtLCDFvGUgcG93aW5uaSB3IGtvxYRjdSBjb8WbIG8gdHljaCBza3Vyd3lzeW5hY2ggeiBQWlcgcG93aWVkemllxIcuIEdhemV0eSBuaWV3xJlka2Fyc2tpZSB0ZcW8IHByemVzdGHFgiBjenl0YcSHLCBibyBtaWHFgiBiw7NsIGR1cHksIMW8ZSBvIHfEmWRrYXJzdHdpZSBwb2xza2ltIGFuaSBhZmVyYWNoIHcgUFpXIG5pYyBzacSZIG5pZSBwaXN6ZS5cbiAgICBcbiAgICBTemVmZW0ga2/FgmEgUFpXIHcgbW9qZWogb2tvbGljeSBqZXN0IG5pZWpha2kgcGFuIEFkYW0uIEplc3Qgb24gZGxhIHN0YXJlZ28gdW9zb2JpZW5pZW0gY2HFgmVnbyB6xYJhIHd5cnrEhWR6b25lZ28gcG9sc2tpbSBha3dlbm9tIHByemV6IFp3acSFemVrIGkgb2pjaWVjIHByemV6IHdpZWxlIGxhdCB0b2N6ecWCIHogbmltIHdvam7EmS4gUmF6IHBvc3plZMWCIG5hIGpha2llxZsgemVicmFuaWUgd8SZZGthcnNraWUsIG5hIGt0w7NyeW0gd3lzdMSZcG93YcWCIEFkYW0sIGkgc3Rhcnkgd3LDs2NpxYIgZG8gZG9tdSB6IHBvZGFydMSFIGtvc3p1bMSFLCBibyBzacWCxIUgZ28gdXN1d2FsaSB6IHNhbGksIHRha2llIHRhbSBpbmJ5IG9kcGllcmRhbGHFgi5cbiAgICBcbiAgICBQbyBrbMSZc2NlIHcgc3RhcmNpdSBmaXp5Y3pueW0gemUgemJyb2pueW0gcmFtaWVuaWVtIFBaVyBvamNpZWMgcm96cG9jesSFxYIgcGFydHl6YW50a8SZIGludGVybmV0b3fEhSwgcG9sZWdhasSFY8SFIG5hIHN6a2Fsb3dhbml1IFBaVyBpIEFkYW1hIG5hIGZvcmFjaCBsb2thbG55Y2ggZ2F6ZXQuIE5hcGllcmRhbGHFgiBuYSBuaWVnbyBqYWtpZcWbIGfFgnVwb3R5LCB0eXB1IMW8ZSBBZGFtIGJ5xYIgdGFqbnltIHdzcMOzxYJwcmFjb3duaWtpZW0gVUIgYWxibyDFvGUgZ28gd2lkemlhxYIgbmEgdWxpY3ksIGphayBrb211xZsgZ3dvxbpkemllbSBzYW1vY2jDs2Qgcnlzb3dhxYIgaXRkLiBOaWUgbmF1Y3p5xYJlbSBvamNhIGludG8gVE9SLCB3acSZYyBza2/FhGN6ecWCbyBzacSZIGJhZ2lldGFtaSB6YSBzemthbG93YW5pZSBpIHN0YXJ5IG11c2lhxYIgemFwxYJhY2nEhyBBZGFtb3dpIGR3YSB0eXNpxIVjZSB6xYJvdHljaC4uXG4gICAgXG4gICAgSmFrIHDFgmFjacWCLCB0byBwcnpleiB0eWR6aWXFhCB3IGRvbXUgc2nEmSBuaWUgZGHFgm8gxbx5xIcsIG9qY2llYyBrdXJ3acWCIG5hIHByemVrdXBuZSBzxIVkeSwgUFpXLCBBZGFtYSBpIHcgb2fDs2xlIGNhxYJ5IMWbd2lhdC4gWiBqZWdvIHBpZXJkb2xlbmlhIHd5bmlrYcWCbywgxbxlIFBaVyBqYWsgamFjecWbIG1hc29uaSByesSFZHppIGNhxYJ5bSBrcmFqZW0sIHBvY2nEhWdhIHphIHN6bnVya2kgaSBtYSB3c3rEmWR6aWUgdWvFgmFkeS4gUHJ6ZWxpY3phxYIgdGXFvCB0ZSBkd2EgdHlzacSFY2UgbmEgd8SZZGtpLCBoYWN6eWtpIGN6eSDFgsOzZGtpIGkgZG9zdGF3YcWCIHN0cmFzem5lZ28gYsOzbHUgZHVweSwgaWxlIG9uIGJ5IG3Ds2fFgiBuYSBwcnp5a8WCYWQgemFuxJl0eSB3YW5pbGlvd2VqIHphIHRlIDJrIGt1cGnEhyAoa2lsa2FzZXQga2lsbykuXG4gICAgXG4gICAgU3RhcnkgamFrb8WbIHcgemVzesWCeW0gcm9rdSBzdHdpZXJkemnFgiwgxbxlIGtvbmllY3puaWUgbXVzaSBtaWXEhyDFgsOzZGvEmSBkbyBwb8WCb3fDs3csIGJvIG5pYnkgd3lwb8W8eWN6YW5pZSB6YSBkcm9nbyB3eWNob2R6aSBpIHdzenlzY3kgZ28gY2hjxIUgb3N6dWthxIcuXG4gICAgXG4gICAgU1lORUssIE5BIFdPRFpJRSBUTyBTScSYIFBSQVdEWklXRSBPS0FaWSDFgUFQSUUhIFRBTSBKRVNUIMW7WVdJT8WBIVxuICAgIFxuICAgIEFsZSBuaWUgYnnFgm8gZ28gc3RhxIcgYW5pIG5pZSBtaWHFgiBqZWogZ2R6aWUgdHJ6eW1hxIcsIGEgaGVoZSBmcmFqZXJlbSB0byBvbiBuaWUgamVzdCwgxbxlYnkga29tdcWbIHDFgmFjacSHIHphIHByemVjaG93eXdhbmllLCB3acSZYyB6Z2FkYcWCIHNpxJkgeiBqYWtpbWnFmyB3xJlka2FyemFtaSB6IG9rb2xpY3ksIMW8ZSBrdXBpxIUgxYLDs2RrxJkgbmEgc3DDs8WCa8SZLCBvbmEgYsSZZHppZSBzdGHFgmEgdSBqYWtpZWdvxZsgSmFudXN6YSwga3TDs3J5IG1hIGRvbSwgYSBuaWUgbWllc3prYW5pZSB3IGJsb2t1IGphayBteSwgbmEgcG9kamXFumR6aWUsIG5hIHByenljemVwaWUsIGt0w7NyxIUgdGVuIEphbnVzeiBtYSwgaSBzacSZIGLEmWTEhSB0xIUgxYLDs2RrxIUgZHppZWxpbGkgYWxibyBixJlkxIUgamXFumR6acSHIMWCb3dpxIcgcmF6ZW0uXG4gICAgXG4gICAgTmEgcG9jesSFdGt1IHRhIGtvb3BlcmF0eXdhIHN6xYJhIG5hd2V0IG5pZcW6bGUsIGFsZSB3IGt0w7NyecWbIHdlZWtlbmQgb2pjaWVjIHNpxJkgcm96Y2hvcm93YcWCIGkgbmllIG3Ds2fFgiB6IG5pbWkgamVjaGHEhywgaSBtaWHFgiBvIHRvIG9sYnJ6eW1pIGLDs2wgZHVweS4gSmVzemN6ZSBjaSBqZWdvIGtvbGVkenkgZHp3b25pbGksIMW8ZSByeWJ5IGJpb3LEhSBqYWsgcG9qZWJhbmUsIHdpxJljIG3Ds2ogb2pjaWVjIHR5bGtvIGxlxbxhxYIgY3plcndvbnkgemUgesWCb8WbY2kgbmEga2FuYXBpZSBpIHNhcGHFgiB6IHdrdXJ3aWVuaWEuIFN5dHVhY2rEmSBqZXN6Y3plIHBvZ2Fyc3phxYJvIHRvLCDFvGUgbmllIG1pYcWCIG5hIGtvZ28gendhbGnEhyB3aW55LCBjbyB6YXdzemUgcm9iaS4gVyBrb8WEY3UgZG9zemVkxYIgZG8gd25pb3NrdSwgxbxlIHRvIG5pZXNwcmF3aWVkbGl3ZSwgxbxlIG9uaSDFgm93acSFIGJleiBuaWVnbywgYm8gcHJ6ZWNpZcW8IHBvIHLDs3dubyBzacSZIHpyenVjYWxpIG5hIMWCw7Nka8SZIGkgdyBuaWVkemllbMSZIHdpZWN6b3JlbSwgamFrIHRlIEphbnVzemUganXFvCB3csOzY2nFgnkgeiB3eXByYXd5LCB3eXN6ZWTFgiBuYWdsZSB6IGRvbXUuXG4gICAgXG4gICAgUG8gZ29kemluaWUgd3JhY2EgaSBtw7N3aSBkbyBtbmllLCDFvGUgbXVzesSZIG11IHBvbcOzYyB6IGN6eW3FmyBwcnplZCBkb21lbS4gV3ljaG9kesSZIG5hIHpld27EhXRyeiwgYSB0YW0gbmFzeiBzYW1vY2jDs2QgeiBwcnp5Y3plcMSFIGkgxYLDs2RrxIUgeEQuIFB5dGFtLCBza8SFZCBvbiBqxIUgd3ppxIXFgiwgYSBvbiBtw7N3aSwgxbxlIEphbnVzem93aSB6YWplYmHFgiB6IHBvZGphemR1IHByemVkIGRvbWVtLCBibyBvbmkgZ28gb3N6dWthbGksIGkgxbxlYnltIMWCYXBhxYIgeiBuaW0gxYLDs2RrxJksIGkgd25vc2lteSBkbyBtaWVzemthbmlhIHhELiBOYSBuaWMgc2nEmSB6ZGHFgm8gdMWCdW1hY3plbmllLCDFvGUgemFqbWllIGNhxYJ5IGR1xbx5IHBva8Ozai4gTmEgc3pjesSZxZtjaWUgxYLDs2RrYSBuaWUgem1pZcWbY2nFgmEgc2nEmSB3IGRyendpYWNoIGRvIGtsYXRraSwgd2nEmWMgc3Rhcnkgc3R3aWVyZHppxYIsIMW8ZSBvbiBqxIUgcHJ6ZWQgZG9tZW0gem9zdGF3aS5cbiAgICBcbiAgICBaYSBwb21vY8SFIGpha2ljaMWbIMWCYcWEY3VjaMOzdywgY28gYnnFgnkgbmEgxYLDs2RjZSwgaSBtb2plaiBrxYLDs2RraSBvZCByb3dlcnUgcHJ6eXBpxIXFgiBqxIUgZG8gbGF0YXJuaSBpIHphZG93b2xvbnkgY2hjZSBpxZvEhyB3cmFjYcSHIGRvIG1pZXN6a2FuaWEsIGEgdHUgbmFnbGUgcHJ6eWplxbxkxbxhasSFIGR3YSBzYW1vY2hvZHkgeiBKYW51c3phbWkgd3Nww7PFgnfFgmHFm2NpY2llbGFtaSwga3TDs3J6eSBzacSZIGRvbXnFm2xpbGksIGdkemllIGljaCB3xYJhc25vxZvEhyBtb8W8ZSBzacSZIHpuYWpkb3dhxIcgeEQuIFphY3rEmcWCYSBzacSZIG5pZXppZW1za2EgaW5iYSwgYm8gSmFudXN6ZSBkcsSFIG1vcmR5LCBkbGFjemVnbyDFgsOzZGvEmSB1a3JhZMWCIGkgxbxlIG1hIG9kZGF3YcSHLCBhIG9qY2llYyBzacSZIGRyemUsIMW8ZSBvbmkgZ28gb3N6dWthbGkgaSBvbiA1MDAgesWCb3R5Y2ggc2nEmSBza8WCYWRhxYIsIGEgbmllIHDFgnl3YcWCIHcgdGVuIHdlZWtlbmQuIEphIHN0YXJhxYJlbSBzacSZIHphxYJhZ29kemnEhyBzeXR1YWNqxJksIMW8ZWJ5IG9qY2llYyBvZCBuaWNoIG5pZSBkb3N0YcWCIHdwaWVyZG9sdSwgYm8gYnnFgm8gYmxpc2tvLlxuICAgIFxuICAgIFBvIGtpbGt1bmFzdHUgbWludXRhY2ggc3l0dWFjamEgd3lnbMSFZGHFgmEgdGFrOlxuICAgIFxuICAgIOKAkyBNw7NqIG9qY2llYyBsZcW8eSBuYSB6aWVtaSwga3VyY3pvd28gdHJ6eW1hIHNpxJkgcHJ6eWN6ZXB5IGkga3J6eWN6eSwgxbxlIG5pZSBvZGRhLlxuICAgIFxuICAgIOKAkyBKYW51c3plIGtyenljesSFLCDFvGUgbWEgb2RkYXdhxIcuXG4gICAgXG4gICAg4oCTIEplZGVuIEphbnVzeiBtYSByb3pqZWJhbnkgbm9zLCBibyBwcsOzYm93YcWCIGxlxbzEhWNlZ28gb2pjYSBvZGNpxIVnbsSFxIcgb2QgxYLDs2RraSB6YSBub2fEmSBpIGRvc3RhxYIgZHJ1Z8SFIG5vZ8SFIHoga29wYS5cbiAgICBcbiAgICDigJMgRHfDs2NoIHBvbGljamFudMOzdyBjacSFZ25pZSBvamNhIHphIG5vZ2kgaSBtw7N3aSwgxbxlIGplZHppZSB6IG5pbWkgbmEga29taXNhcmlhdCwgYm8gcG9iacWCIGN6xYJvd2lla2EuXG4gICAgXG4gICAg4oCTIFdlIHdzenlzdGtpY2ggb2tuYWNoIGRvb2tvxYJhIHN0b2rEhSBzxIVzaWVkemkuXG4gICAgXG4gICAg4oCTIE1vamEgc3RhcmEgcMWCYWN6ZSBpIGLFgmFnYSBvamNhLCDFvGVieSB6b3N0YXdpxYIgxYLDs2RrxJksIGEgcG9saWNqYW50w7N3LCDFvGVieSBnbyBuaWUgYXJlc3p0b3dhbGkuXG4gICAgXG4gICAg4oCTIEphOiBzbXV0bmF6YWJhLnBzZC5cbiAgICBcbiAgICBXIGtvxYRjdSBwb2xpY2phbmNpIG9kZXJ3YWxpIHN0YXJlZ28gb2QgxYJvZHppLiBKYSBwb2RhxYJlbSBKYW51c3pvbSBrb2QgZG8ga8WCw7Nka2kgcm93ZXJvd2VqIGkgemFicmFsaSDFgsOzZGvEmSwgcnp1Y2FqxIVjIHdjemXFm25pZWogc3RhcmVtdSA1MDAgesWCb3R5Y2ggaSBtw7N3acSFYywgxbxlIG5pZSBtYSBqdcW8IGRvIMWCw7Nka2kgxbxhZG5lZ28gcHJhd2EgaSBsZXBpZWogZGxhIG5pZWdvLCDFvGVieSBzacSZIG5pZ2R5IG5hIHJ5YmFjaCBuaWUgc3BvdGthbGkuIE1hdGthIHVixYJhZ2HFgmEgcG9saWNqYW50w7N3LCDFvGVieSBuaWUgYXJlc3p0b3dhbGkgb2pjYS4gSmFudXN6LCBjbyBkb3N0YcWCIHcgbW9yZMSZIGJ1dGVtLCBwb3dpZWR6aWHFgiwgxbxlIG9uIHNpxJkgbmllIGLEmWR6aWUgcGllcmRvbGnFgiB6IMWCYcW8ZW5pZW0gcG8ga29taXNhcmlhdGFjaCBpIG1hIHRvIHcgZHVwaWUsIHR5bGtvIG9qY2EgbmllIGNoY2Ugd2nEmWNlaiB3aWR6aWXEhy5cbiAgICBcbiAgICBTdGFyeSBkbyB0ZWogcG9yeSByb2JpIHogSmFudXN6YW1pIGfDs3dub2J1cnrEmSBuYSBmb3JhY2ggZGxhIHfEmWRrYXJ6eSwgYm8gemHFgm/FvHlsaSB0YW0gc3BlY2phbG55IHRlbWF0LCBnZHppZSBwcnplc3RyemVnYWxpIHByemVkIHJvYmllbmllbSBqYWtpY2hrb2x3aWVrIGludGVyZXPDs3cgeiBtb2ltIG9qY2VtLiBPYnNlcndvd2HFgmVtIHRlbiB0ZW1hdCBpIHdpZHppYcWCZW0sIGphayBtw7NqIG9qY2llYyBuaWV1ZG9sbmllIHBvcm9iacWCIHRyb2xsa29udGE6XG4gICAgXG4gICAgU3pjemVwYW41NFxuICAgIFxuICAgIExpY3piYSBwb3N0w7N3OiAxXG4gICAgXG4gICAgVGVuIHRlbWF0IHphxYJvxbx5bGkgamFjecWbIGlkaW9jaSEgWm5hbSB1xbx5dGtvd25pa2Egc3RhcnlfYW5vbmEgb2QgZGF3bmEgaSB0byBiYXJkem8gcG9yesSFZG55IGN6xYJvd2llayBpIHdzcGFuaWHFgnkgd8SZZGthcnohIENoY8SFIGdvIG9jemVybmnEhyBibyB6YXpkcm9zemN6xIUgesWCb3dpb255Y2ggb2thesOzdyFcbiAgICBcbiAgICBQb3RlbSBqZXN6Y3plIHXFvHl3YcWCIHR5Y2ggdHJvbGxrb250IGRvIHByemXFm2xhZG93YW5pYSBuaWVkYXdueWNoIGtvbGVnw7N3IG9kIMWCw7Nka2kuIEphayBrdMOzcnnFmyB6IG5pY2ggemFrxYJhZGHFgiBqYWtpxZsgdGVtYXQsIHRvIG9qY2llYyBzacSZIHRhbSB3cGllcmRhbGHFgiBuYSB0cm9sbGtvbmNpZSBpIG5hIHByenlrxYJhZCBwaXNhxYIsIMW8ZSBjaHVqb3dlIHJ5YnkgxYJhcGllIGkgd2lkYcSHLCDFvGUgbmllIHVtaWUgxYJvd2nEhyB4RC5cbiAgICBcbiAgICBaIHR5Y2ggc2FteWNoIHRyb2xsa29udCB1ZHppZWxhxYIgc2nEmSB3IHN3b2ljaCB0ZW1hdGFjaCBpIGphayBuYSBwcnp5a8WCYWQgd3J6dWNhxYIgemRqxJljaWEgesWCYXBhbnljaCBwcnpleiBzaWViaWUgcnliLCB0byBzYW0gc29iaWUgcGlzYcWCIE5PT09PIEdSQVRVTFVKxJggT0tBWlUhIFdJREHEhiwgxbtFIERPxZpXSUFEQ1pPTlkgxYFPV0NBISBhIHBvdGVtIHNpxJkgeiB0ZWdvIGNpZXN6ecWCIGkga2F6YcWCIG9nbMSFZGHEhyBtaSBpIHN0YXJlaiwgamFrIGdvIGNod2FsxIUgbmEgZm9ydW0uXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgQ1rEmMWaxIYgRFJVR0EgKG5pZW9maWNqYWxuYSwgb2QgaW5uZWdvIGF1dG9yYSlcbiAgICBcbiAgICBQbyB0eWNoIGNhxYJ5Y2ggemFtaWVzemthY2ggeiBKYW51c3phbWkgdyBkb211IGJ5xYJvIGplc3pjemUgZ29yemVqLiBPamNpZWMgc2llZHppYcWCIGfFgsOzd25pZSBuYSBuZWNpZSBpIG5hZGFsIHJvYmnFgiBnw7N3bm9idXJ6ZSB6IGlubnltaS4gWsWCeSBiecWCIGJvIG5pZSBtaWHFgiDFvGFkbmVnbyBrb2xlZ2kgeiBrdMOzcnltIG3Ds2fFgmJ5IGplxbpkemnEhyBuYSByeWJ5LCBhIGphayB3aWFkb21vIHphd3N6ZSBqYWsgeiBraW3FmyBzacSZIGplxbpkemkgdG8gaSBrb3N6dGEgc8SFIG1uaWVqc3plLiBXeW15c2xpxYIgd2nEmWMgdHp3LCBcIlJvZHppbm5lIHfEmWRrb3dhbmllXCIgdyByYW1hY2ggaW50ZXJncmFjamkgeiByb2R6aW7EhS4gSSBtdXNpZWxpxZtteSB6IG1hdGvEhSB6IG5pbSBqZcW6ZHppxIcgbmEgcnlieS4gU3pjemVnw7NsbmllIGx1YmnFgiB6YWJpZXJhxIcgbmFzIG5hIHdpZWN6b3JuZSB3eXBhZHkgbmEgYnJ6YW7EmS4gQm8gdG8gd8SZZGvEmSB0cnp5bWEgc2llIHcgcsSZa3UgLCBwYWxlYyBuYSDFvHnFgmNlIGkgbmllIHRyemViYSBnxYJ1cGljaCBkendvbmvDs3cga3TDs3JlIHDFgm9zesSFIHJ5YnkuIEt1cG93YcWCIHNlciDFvMOzxYJ0eSBuYSB0ZSBicnphbnkgcG8gNDB6xYIgemEga2lsb2dyYW0gYSBteSBtdXNpZWxpxZtteSDFvHJlxIcgUGFzenRldCBNYXpvd2llY2tpIHogY2hsZWJlbS4gUG93aWVtIHN6Y3plcnplIMW8ZSBuYXdldCBwb2x1YmnFgmVtIHfEmWRrb3dhbmllICwgYm8gamFrIGp1xbwgbXVzaWHFgmVtIHNpZWR6aWXEhyBuYSB0eWNoIHJ5YmFjaCB0byBjaGNpYcWCZW0gxbxlYnkgdG8gamFracWbIHNlbnMgbWlhxYJvIGkgc3RhcmHFgmVtIHNpxJkgY2/FmyB6xYJvd2nEhy5PamNpZWMgamFrIGtpZWR5xZsgesWCb3dpxYJlbSBraWxrYSBicnphbiB0byByb2JpxYIgemRqxJljaWEgaSB3c3Rhd2lhxYIgbmEgcsOzxbxueWNoIGZvcmFjaCBpIGNod2FsacWCIHNpZSBzeW5lbS4gTmlla3TDs3J6eSByemVjenl3acWbY2llIG11IGdyYXR1bG93YWxpIMW8ZSBtYSBzcG9rbyBzeW5hIGl0ZCAuIEEgc2FtIHNvYmllIGplc3pjemUga2FkemnFgiBqYWtvIHN6Y3plcGFuIDU0IHBpc3rEhWMgxbxlIC0gTmllZGFsZWtvIHBhZGEgamFixYJrbyBvZCBqYWLFgm9uaSBpIHdpZGHEhyDFvGUgc3luIGN6ZXJwaWUgd3NwYW5pYcWCZSB3em9yY2Uga3TDs3JlIG9kemllZHppY3p5xYIgcG8gb2pjdS0gd3NwYW5pYcWCeW0gd8SZZGthcnp1IDopIEphIHcgdHltIGN6YXNpZSBkb3N0YcWCZW0gcHJhY8SZIHcgc2tsZXBpZSBab29sb2dpY3puby0gV8SZZGthcnNraW0uIE9qY2llYyBkdW1ueSBiecWCIHplIG1uaWUgaSBjesSZc3RvIHByenljaG9kemnFgiBkbyBza2xlcHUuIE5pZSB6YSBiYXJkem8gbHViacWCZW0gamFrIHByenljaG9kemnFgiBibyB6YXdzemUgc2nEmSB3Y2luYcWCIHcgcm96bW93xJkgeiBrbGllbnRhbWkgLCB6YXdzemUgc8WCdcW8xIXEhyBcImRvYnJ5bWkgcmFkYW1pXCIgdHlwdS0gTmllIGt1cHVqIHBhbiB0ZWogemFuxJl0eSBibyBqZXN0IGNodWpvd2EgaSBzemtvZGEgbmEgbmnEhSBrYXN5ICwgdHlsa28gd2XFuiBwYW4gdMSZIGJvIG5hIG5pxIUgYmlvcsSFIMWCYWRuZSByeWJ5IGkgamFrIHBhbiBuaWUgd2llcnp5c3ogdG8gd2VqZMW6IHBhbiBuYSBmb3J1bSBcIiBTdXBlcmthcnBcIiBpIHpuYWpkxbogdcW8eXRrb3duaWthIFN0YXJ5IEFub25hIGkgem9iYWN6eXN6IHBhbiBqYWtpZSBvbiByeWJ5IMWCYXBpZS4gVyB0eW0gY3phc2llIEphbnVzeiB6YWN6xIXFgiBicmHEhyB1ZHppYcWCIHcgemF3b2RhY2ggd8SZZGthcnNraWNoIGkgbmF3ZXQgbXUgbmllxbpsZSBzesWCby4gT2pjaWVjIHdzY2lla2HFgiBzacSZIGphayBjaG9sZXJhIMW8ZSB0YWtpIGNhcCB3eWdyeXdhIHphd29keSBpIG5hIHBld25vIHJ5d2FsaXp1amUgeiB0b3RhbG55bWkgYmV6dGFsZW5jaWFtaSB3ZWRrYXJza2ltaSBza29ybyB0YWsgZG9icnplIG11IGlkemllLiBNw7N3acWCZW0gbXUgY3phc2VtIMW8ZSBwcnp5Y2hvZHppIGRvIHNrbGVwdSBpIHphIHd5Z3JhbmUgdGFsb255IHd5YmllcmEgamFraWXFmyBoYWN6eWtpIHNwxYJhd2lraSBpdGQuIEkgcGV3bmVnbyByYXp1IGphayBrYXJtacWCZW0gcnlia2kgaSBuaWUgcGF0cnp5xYJlbSBjbyByb2JpIHRvIG9uIHphamViYcWCIG1pIHdzenlzdGtpZSBoYWN6eWtpIEhhbWFrYXRzdSBuciAxMiBpIDE0LiBOaWUgd2lkemlhxYJlbSBraWVkeSB0byB6cm9iacWCIGkgdXdpZXJ6Y2llIG1pIMW8ZSB3IG5vY3kgdGUgd3N6eXN0a2llIGhhY3p5a2kgc3TEmXBpxYIgaSBwb2RyenVjacWCIG5hc3TEmXBuZWdvIGRuaWEuIEkgSmFudXN6IGtpZWR5xZsgcHJ6eXN6ZWTFgiBpIHphIHRhbG9uIHphYnJhxYIgdGUgd3N6eXN0a2llIGhhY3p5a2kuIEkgenJvYmnFgiBzacSZIGR5bSBibyBKYW51c3ogcHJ6ZWdyYcWCIG5hc3TEmXBuZSB6YXdvZHkgeiBrcmV0ZXNlbSBpIG5hIGZvcnVtIG5hcGlzYWwgxbxlYnkgbmllIGt1cG93YcSHIGhhY3p5a8OzdyB3IFwiIG1vaW0gXCIgc2tsZXBpZSBibyBzem1lbGMgc3ByemVkYWrEhSBpdGQuIFN0YXJ5IGNob2R6acWCIGR1bW55IGphayBwYXcgxbxlIHphc3prb2R6acWCIEphbnVzem93aSBpIG5hIGZvcnVtIGpha28gc3pjemVwYW4gNTQgcGlzYcWCIG11LSDFvGUgbmllIGhhY3p5ayBrcnVwYSB0eWxrbyB3xJlka2FyeiBkdXBhIDopIEphIG11c2lhxYJlbSBvY3p5d2nFm2NpZSB6YXDFgmFjacSHIHplIHN3b2ljaCBwaWVuacSZZHp5IHphIHRlIGhha2kgYm8gc3ByYXdhIGRvc3rFgmEgZG8gd8WCYXNjaWNpY2llbGtpIHNrbGVwdS4gVyB0eW0gY3phc2llIHBvem5hxYJlbSBkemlld2N6eW7EmS4gTWlhxYJhIG5hIGltacSZIEFua2EuIFByenljaG9kemnFgmEgZG8gc2tsZXB1IGkga3Vwb3dhxYJhIHBva2FybSBkbGEgcnliZWsuIEkgamFrb8WbIHRhayBzacSZIHN0YcWCbyDFvGUgem9zdGFsacWbbXkgcGFyxIUuIMWBYWRuxIUgbWlhxYJhIGJ1emnEmSBpIGN5Y2tpIHRlxbwgZmFqbmUgdHlsa28gbWlhxYJhIGd1YmUgbm9naSBpIHNwb3J5IGJyenVjaC4gQWxlIGphayB0byBtw7N3acSFIC0gTGVwc3phIHNpa29ya2EgbmEgcHRha3Ugbml6IGdvxYLEhWIgbmEgZGFjaHUgLCBjenkgamFrb8WbIHRhayB0byBzesWCby4gQW5rYSBwb3p3YWxhxYJhIHR5bGtvIG5hIHNleCBuYSB0xJkgZHJ1Z8SFIGR6aXVyxJkgYm8gb2Jhd2lhxYJhIHNpxJkgY2nEhcW8eS4gVHJ1ZG5vIGFsZSBqYWtvxZsgeiBrcnp5xbxhIHRyemViYSBiecWCbyBzcHXFm2NpxIcuXG4gICAgXG4gICAgUGV3bmVnbyByYXp1IHByenlwcm93YWR6acWCZW0gasSFIGRvIGRvbXUgaSBwcnplZHN0YXdpYW0gb2pjdS4gVGF0byB0byBqZXN0IG1vamEgZHppZXdjenluYSBBbmlhIGkgY2jEmXRuaWUgcG9qZWR6aWUgeiBuYW1pIG5hIHJ5Ynkga2llZHnFmy4gTmllIHdpZWR6aWHFgmVtIMW8ZSBvamNpZWMgYnnFgiBuYXdhbG9ueSBqYWsgc3RvZG/FgmEuIE9kd3LDs2NpxYIgc2nEmSBpIHphcmVjaG90YcWCIGphayDFvGFiYSBpIGtyenlrbsSFxYI6IE5pZSBtYSBtb3d5IHN5bnUgxbxlYnkgb25hIHogbmFtaSBqZWNoYcWCYSBuYSByeWJ5IGJvIGplc3QgZ3J1YmEgYSBqYWsgZG9icnplIHdpZXN6IGdydWJlIGx1ZHppZSBzacSZIHBvY8SFIGkgc21pZXJkesSFIGEgdG8gcMWCb3N6eSByeWJ5LiBJIGplc3pjemUgemFyZWNob3RhxYIgcG9ub3duaWUgaSBrcnp5a27EhcWCIDIgcmF6eSAtIEFua2EgR3J5Y2Fua2EsIEFua2EgR3J5Y2Fua2EuIE15xZtsYcWCZW0gxbxlIHNpxJkgemUgd3N0eWR1IHNwYWzEmSBwcnpleiB0ZWdvIGplxYJvcGEgxbxlIHRha2llaiBzaWFyeSBtaSBuYXJvYmnFgi4gQW5rYSBuYSBzemN6xJnFm2NpZSBuaWUgd2t1cndpxYJhIHNpxJkgemEgYmFyZHpvIGkgamFrb8WbIG5pZSBtaWHFgmEgZG8gbW5pZSBwcmV0ZW5zamkuIFcgdHltIGN6YXNpZSBvamNpZWMgcHJ6ZXogZm9ydW0gcG96bmHFgiBub3dlZ28ga29sZWfEmSBwbyBraWp1IG5pZWpha2llZ28gSGXFhGthIE1hbGlub3dza2llZ28gbGF0IDYyLiBNw7N3acWCIG1pIMW8ZSB0byB0YWthIGJyYXRuaWEgZHVzemEgaSB3c3BhbmlhxYJ5IGtvbXBhbiBuYWQgd29kxIUuIEkgbWllbGnFm215IHogbWF0a8SFIHRyb2NoxJkgbHV6dSBibyBkb2dhZHl3YWxpIHNpxJkgeiB0eW0gSGXFhGtpZW0gZG9za29uYWxlLiBNYXRrYSB6IHdkemnEmWN6bm/Fm2NpIGt1cGnFgmEgbXUgYXBhcmF0IGZvdG8gxbxlYnkgbWlhxYIgY3p5bSB6ZGrEmWNpYSByeWIgcm9iacSHLiBJIHdzenlzdGtvIGJ5xYJvIHN1cGVyIHR5bGtvIMW8ZSBuYSBjaHliYSA1IHd5cHJhd2llIHN0YXJ5IHphbGHFgiB3b2TEhSB0ZW4gYXBhcmF0LiBOaWJ5IGR6aWHFgmHFgiB0eWxrbyB0ZSB6ZGrEmWNpYSByb2JpxYIgdGFraWUgdHJvY2jEmSB6YW1hemFuZSBpIGpha2J5IGN6YXJubyBiaWHFgmUuIEFsZSBvamNpZWMgc2nEmSB0eW0gbmllIHByemVqxIXFgi4gSSBwZXduZWdvIHJhenUgem9iYWN6ecWCIGphayBKYW51c3ogd3N0YXdpxYIgemRqxJljaWEgc3dvamVnbyBzeW5hIGphayDFgm93aSBva29uaWUgbmEgc3Bpbm5pbmcuIEkgxbxlIG9uIHRlxbwgbmllIGLEmWR6aWUgZ29yc3p5IGkgxbxlIHpkasSZY2lhIHplIG1uxIUgaSBzemN6dXBha2FtaSB3c3Rhd2kuIEkgemFtw7N3acWCIG5hIG5lY2llIHRha2llIGNvxZtcbiAgICBcbiAgICBodHRwIDovLz8gZ2FieSAuIGNvbS4gcGwgLyA/IHByb2R1a3R5XG4gICAgXG4gICAgMiBzemN6dXBha2kgaSBqZWRlZ28ga2FycGlhLiBJIGphayBwcnp5c3rFgnkgdG8gd2llY3pvcmVtIHphYnJhxYIgbW5pZSBuYWQgd29kxJkgaSB3emnEhcWCIHRlbiBzcGllcHJ6b255IGFwYXJhdCBpIHphY3rEhcWCIHpkasSZY2lhIG1pIHJvYmnEhy4gTXnFm2xhxYJlbSDFvGUgc2nEmSB6ZSB3c3R5ZHUgc3BhbMSZIGkgxbxlIGplc3RlbSBza2/FhGN6b255LiBBbGUgdXdpZXJ6Y2llIG1pIMW8ZSB0ZSBiYXJhbnkgbmEgdHltIGZvcnVtIHV3aWVyennFgnkuIEZha3QgxbxlIHN0YXJ5IHNpZWR6aWHFgiBww7PFgiBub2N5IHcgamFracWbIGZvdG9zem9wYWNoIGkgenJvYmnFgiB0ZSB6ZGrEmWNpYSB0YWsgxbxlIHRydWRubyBiecWCbyBzacSZIHprYXBvd2HEhyDFvGUgdG8gcG9kdXN6a2kgYSBuaWUgcnlieSBwcmF3ZHppd2UuIEplc3pjemUga2lsa2EgcmF6eSBrb3J6eXN0YcWCIHogdHljaCBwb2R1c3playBnxYLDs3duaWUgeiBrYXJwaWEgYm8gc2FtIHNpxJkgY2h3YWxpxYIgxbxlIG5pYnkgdGFrIG11IGRvYnJ6ZSBpZHppZS4gOilcbiAgICBcbiAgICBKYW51c3ogc2nEmSB3xZtjaWVrxYIgemEgdGUgc3pjenVweSBibyBvamNpZWMgbXUgZG9ncnl6YcWCIMW8ZSBqZWdvIHN5bmVrIGpha2llxZsgb2tvbmtpIMWCYXBpZSBhIGphIG5pYnkgdGFraWUgcGnEmWtuZSBzemN6dXB5LiBBIG5hcHJhd2TEmSBkbyBjemVnbyB6ZG9sbnkgamVzdCBtw7NqIHN0YXJ5IHByemVrb25hxYJlbSBzacSZIGtpZWR5IEphbnVzeiBuYXBpc2HFgiBuYSBmb3J1bSDFvGUgamVkemllIHcgc29ib3TEmSBuYSBtZWdhIMWCb3d5IGkgbWEgemFuxJljb25lIG1pZWpzY2Ugb2QgMyBkbmkuIE9qY2llYyB3aWVkemlhxYIgaSBqYSB0ZXogZ2R6aWUgdGEgbWllanNjw7N3YSBibyBiecWCZW0geiBuaW0gdGFtIGtpbGthIHJhenkuIEkgc3RhcnkgamFrIHRvIHd5Y3p5dGHFgiB3IHBpxIV0ZWsgdG8gd2llY3pvcmVtIHBvbGVjaWHFgiBkbyBwaXduaWN5IGkgcHJ6eW5pw7NzxYIgMiBkZWNoeSBkxYJ1Z2llIG5hIGpha2llxZsgMSw1bSBpIHNwb3JvIGd3b8W6ZHppIHRha2ljaCB6IDEwY20uIEkgemFjesSFxYIgbyAyMSBwcmHEhyB0ZSBnd2/FumR6aWUgdyB0xJkgZGVjaMSZICwgcG8gY3p5bSB3eXdhbGnFgiB3xJlka2kgeiBwb2tyb3djYSBpIHfFgmFkb3dhxYIgdGUgZGVjaHkgZG8gcG9rcm93Y2EgaSBnZHppZcWbIHBvamVjaGHFgi4gUGFkYcWCbyB3dGVkeSBtb2Nuby4gSSB3csOzY2nFgiBva2/Fgm8gMSB3IG5vY3kgaSBvY3p5IG11IGLFgnlzemN6YcWCeSBpIGJ5xYIgbWVnYXphZG93b2xvbnkuIFBvdGVtIEphbnVzeiBwaXNhxYIgbmEgZm9ydW0gxbxlIHd5cHJhd2EgbmllIGRvc3rFgmEgZG8gc2t1dGt1IGJvIHByemViacWCIHdzenlzdGtpZSBrb8WCYSBpIG5pZSBkb2plY2hhxYIgbmEgxYJvd2lza28uIENpZWthd2kgamVzdGXFm2NpZSBqYWsgbW/FvG5hIHByemViacSHIDQga2/FgmEgbmEgcmF6PyBaIG1vaW0gb2pjZW0gd3N6eXN0a28gamVzdCBtb8W8bGl3ZS4gVGFtIGphayBzaWUgamVkemllIG5hIHRvIMWCb3dpc2tvIHRvIGplc3QgdGFrYSBkcsOzxbxrYSB6IGtvbGVpbmFtaSBpIHRyemViYSB1d2HFvGHEhyDFvGVieSBuaWUgemF3aXNuxIVjIGF1dGVtLiBJIGphayBwb3BhZGEgdyB0eWNoIGtvbGVpbmFjaCB6YmllcmEgc2llIHdvZGEuIFN0YXJ5IHVtb2Nvd2HFgiB0ZSBkZWNoeSBkbyB6aWVtaSB3IHR5Y2gga2HFgnXFvGFjaCB0YWsgxbxlIG5pZSBiecWCbyB3aWRhxIcgaSBjaGPEhcSHIG5pZSBjaGPEhWMgSmFudXN6IHdqZWNoYcWCIGkgcHJ6ZWJpxYIgNCBrb8WCYS4gV2llZHppYcWCZW0gxbxlIHplIHN0YXJ5bSBuaWUgbW/FvG5hIHphY3p5bmHEhyBibyB0byBzacSZIMW6bGUga2/FhGN6eS4gVGFrIGJ5xYIgd8WbY2lla8WCeSB6YSB0xJkgxYJvZGvEmS5cbiAgICBcbiAgICBLaWVkecWbIGphayBzdGFyeSBtaWHFgiB1cm9kemlueSB0byBrdXBpbGnFm215IG11IHogbWF0a8SFIHNwb2RuaW9idXR5IG1hcmtpIFByb21pbC0gT2xzenR5bi4gVGFraWUgY2nEmcW8a2UgY3phcm5lIG1vY25lIHUgbW5pZSB3IHNrbGVwaWUuIE9qY2llYyBzacSZIGNpZXN6ecWCIGphayBkemllY2tvLiBCecWCIHUgbmllZ28gd3RlZHkgSGVuaWVrIE1hbGlub3draSBpIG5pZcW6bGUgcG9waWxpLiBTdGFyeSBvY3p5d2nFm2NpZSB1YnJhxYIgdGUgc3BvZG5pb2J1dHksIG5hbGHFgiB3b2R5IGRvIHdhbm55IGkgc2llZHppYcWCIHplIDMgZ29kemlueSBzcHJhd2R6YWrEhWMgY3p5IG5pZSBjaWVrbsSFLiBIZW5pZWsgdyB0eW0gY3phc2llIHByenliacWCIGd3b8W6ZHppYSB3IHBva29qdS4gUHJ6eXN6xYJhIGRvIG1uaWUgQW5rYSBpIGNoY2lhxYJhIHNpxJkgd3lzaWthxIcuIFd5b2JyYcW6Y2llIHNvYmllIGplaiBtaW7EmSBqYWsgd2VzesWCYSBkbyDFgmF6aWVua2kgaSB6b2JhY3p5xYJhIHBpamFuZWdvIHN0YXJlZ28gdyB3YW5uaWUgcGXFgm5laiB3b2R5IHcgc3BvZG5pYnV0YWNoLiAoIG1hbXkga2liZWwgeiDFgmF6aWVua8SFIC0gbWHFgmUgbWllc3prYW5pZSkuIDpEIFN0YXJ5IHdlendhxYIgbW5pZSBpIGrEhSBkbyB0ZWogxYJhemllbmtpIGkgcG93aWVkemlhxYIgxbxlIEFua2EgbWEgc2NodWRuxIXEhyBibyBvbiBuaWUgbmFkxIXFvHkgcnliIMWCYXBhxIcgamFrIGp1xbwgc2nEmSBvY2hhanRhbXkgZGxhIG5hcyB3c3p5c3RraWNoLiBJIHV3aWVyemNpZSBBbmthIHd6acSZxYJhIHRvIHNvYmllIGRvIHNlcmNhIGkgdyBjacSFZ3UgMiBtaWVzacSZY3kgc2NodWTFgmEgMjBraWxvLiBXeWdsxIVkYcWCYSBwacSZa25pZSwgbGFza2EgeiBuaWVqIHNpxJkgenJvYmnFgmEgc3VwZXIgaSBrYcW8ZHkgbWkgamVqIHphemRyb8WbY2nFgi4gOnd1YjogU3RhcnkgamFrIGrEhSB6b2JhY3p5xYIga2llZHnFmyB0byBnYcWCeSB3eXRyemVzemN6ecWCIGkgcG93aWVkemlhxYIgxbxlIHdhbGnFgmJ5IGphayBSZWtzaW8gcGllY3rEhXRraSBpIMW8ZSBtb8W8ZSB6IG5hbWkgbmEgcnlieSBqZcW6ZHppxIcuIEkgcG9qZWNoYWxpxZtteS4gSSB3c3p5c3RrbyBiecWCbyBzdXBlciAsIHBvZ29kYSBwacSZa25hLCBjaWVwxYJvICwgd3lwYWR6aWsgeiBBbmvEhSBuYSBtYcWCZSBiYXJhIGJhcmEgZG8gbGFza3UuIFPFgm93ZW0gY3VkIHd5cHJhd2EuIE1hdGthIHphZG93b2xvbmEgaSB3c2lvIGdpdC4gRG8gcGV3bmVnbyBtb21lbnR1IGphayBvamNpZWMgemFjacSFxYIgY2/FmyDFgmFkbmVnbyBpIG11c2lhxYJlbSB3ZWrFm8SHIGRvIHdvZHkgxbxlYnkgbXUgcG9kZWJyYWMgcnlixJkuIEEgeiByZXN6dMSFIHpvYmFjemNpZSBzYW1pIEFua2Ega3LEmWNpxYJhIGtvbcOzcmvEhVxuICAgIFxuICAgIGh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1PY3dlakpOZDdwd1xuICAgIFxuICAgIFN0YXJ5IHdzY2lla8WCIHNpxJkgaSBuaWUgZ2FkYcWCIHogbmFtaSBjYcWCeSB0eWR6aWXFhC4gWmFjesSFxYIgamXFumR6acSHIG5hIHJ5YnkgeiBIZcWEa2llbSBpIG5hd2V0IGltIG5pZcW6bGUgc3rFgm8uIERvIGN6YXN1IGphayBIZW5pZWsgbmEgZm9ydW0gbmllIG5hcGlzYcWCIMW8ZSB6xYJvd2nFgiBvIHDDs8WCIGNtIHdpxJlrc3plZ28gbGVzemN6YSBuacW8IG3Ds2ogc3RhcnkuIEZha3QgYnnFgiBww7PFgiBjZW50YSB3acSZa3N6eSBhbGUgcHJhd2TEmSBtw7N3acSFYyBsZXN6Y3ogb2pjYSBiecWCIHNwb3JvIGdydWJzenkuIEkgdGFrIHphY3rEmcWCYSBzaWUga29sZWpuYSB3b2puYS4gSGVuaWVrIGtvxYRjennFgiA2MiBsYXRhIGkgbWlhxYIgbmljayBuYSBmb3J1bSBITSA2Mi4gSSBuYSB1cm9kemlueSBwcnp5c3plZMWCIGRvIG1vamVnbyBza2xlcHUgaSB6YWt1cGnFgiBzb2JpZSB3eXBhcyBzcHJ6xJl0LiBLb8WCb3dyb3RlayBEYWl3YSBDbGF1ZGlhIGkgd2Vka8SZIERSLiBBZ29uIEhNNjIuIER6aXdueSB6YmllZyBva29saWN6bm/Fm2NpIG5pZSBzxIVkemljaWU/IFBvd2llZHppYcWCZW0gc3RhcmVtdSDFvGUgSGVuaWVrIHpvc3Rhd2nFgiBkemlzaWFqIHcgc2tsZXBpZSBqYWtpZcWbIDE1MDB6xYIuIFN0YXJlZ28gd25lcndpxYJvIHRvIHN0cmFzem5pZSBpIGRhd2FqIG5hIGZvcnVtLiBIZW5pZWsgb2N6eXdpxZtjaWUgd3N0YXdpxYIganXFvCB6ZGrEmWNpYSB3IGR6aWFsZSBcIiBTcHVzemN6YWpteSBzacSZIG5hZCBub3d5bSBzcHJ6ZXRlbVwiIDpsb2w6IEkgc3RhcnkgbmFwaXNhxYIgbXUgxbxlIGRvIHRha2llZ28gNjIgbGV0bmllZ28gSGFtYSAob3JnLiB0ZWtzdCBzdGFyZWdvKSBuaWUgcGFzdWplIHRha2EgxYJhZG5hIENsYXVkaWEgOilcbiAgICBcbiAgICBJIHpuw7N3IHNpxJkgemFjesSZxYJvIFwiIHJvZHppbm5lIHfEmWRrb3dhbmllXCIgTXVzaWVsacWbbXkgeiBtYXRrxIUgamVjaGHEhyBuYSBtZWdhIHd5cHJhd8SZIHplIHN0YXJ5bS4gTmlieSB3c3p5c3RrbyBiecWCbyBwcnp5Z290b3dhbmUgKCBtaWVsacWbbXkgamVjaGHEhyBza29ybyDFm3dpdCB3IHNvYm90xJkgaSB3csOzY2nEhyBwb2Qgd2llY3rDs3IgdyBuaWVkemllbMSZKSBpIHN0YXJ5IHBvd2llZHppYcWCIMW8ZSB0cnplYmEgc2nEmSBwb3J6xIVkbmllIHd5c3BhxIcgYm8gbmEgdHltIMWCb3dpc2t1IG5pZSBkYW5lIG5hbSBixJlkemllIHNwYcSHIGJvIHRha2llIHJ5Ynkgc8SFLiBJIHBvc3psacWbbXkgc3BhxIcgb2tvxYJvIDIxLWVqLiBJIHcgbm9jeSBzdGFyZW11IHByenlwb21uaWHFgm8gc2nEmSDFvGUgbmllIG5hxYJhcGHFgiByb3PDs3dlayBhIHRhbSBzdW15IHPEhSBqYWsgYnlraS4gSSBva2/Fgm8gcMOzxYJub2N5IGN6dWrEmSBqYWsgY2/FmyBrxYJ1amUgbW5pZSB3IGR1cMSZLiBPYnVkemnFgmVtIHNpxJkgaSB6b2JhY3p5xYJlbSBqYWsgc3RhcnkgYnVkemkgbW5pZSBrxYJ1asSFYyB3IGR1cMSZIHNwxYJhd2lraWVtIHoga29sY2EgamXFvG96d2llcnphIGkgbcOzd2kgxbxlYnltIGJyYcWCIGxhdGFya8SZIGkgaWR6aWVteSDFgmFwYWMgcm9zw7N3a2kuIEkgcXJ3YSBwZWNoIGNoY2lhxYIgxbxlIGt1bXBsZSB3cmFjYWxpIHogaW1wcmV6eSBpIHdpZHppZWxpIGphayB6ZSBzdGFyeW0gdyBwacW8YW1hY2ggeiBsYXRhcmthbWkgxYJhcGllbXkgcm9zw7N3eSBuYSB0cmF3bmlrdS4gQWxlIG1pZWxpIHBvbGV3xJkuIDooIFogbmltIHphd3N6ZSBqYWthxZsgbWluYSB3eWpkemllLiBObyBpIHBvamVjaGFsacWbbXkgbmFkIFdpc8WCxJkgbmEgdGFrYSBkxYJ1Z8SFIHRhbcSZICggb3N0cm9nxJkgamFrIGt0byB3b2xpKS4gUG93aWVkemlhxYJieW0gd2FtIGdkemllIGRva8WCYWRuaWUgYm8gcGnEmWtuYSBnxYLEmWJva2Egd29kYSBhbGUgc3RhcnkgYnkgbW5pZSB6YWJpxYIuIE5hIGtvxYRjdSB0ZWogdGFtb3N0cm9naSBiecWCYSB0YWthIHR5Y3prYSBiaXRhIHcgZG5vIGt0w7NyYSB3c2thenVqZSBqYWtpIGplc3Qgc3RhbiB3b2R5IGN6eSBnZHppZSBrb3J5dG8gaWR6aWUgY3p5IGNvxZsgZGxhIMWCb2RlayDFvGVieSBuaWUgd2plYmHEhyBzacSZIG5hIHRhbcSZLiBObyBpIHdzenlzdGtvIGZham5pZS4gT2pjaWVjIHcgc3BvZG5pb2J1dGFjaCBnb3Rvd3kgcG9waWphxYIgbmFsZXdrxJkuIE15IHogbWF0a8SFIHNpZWR6aW15IGNpY2hvLiBXxJlka2kgbmEgZ3J1bnRhIHphcnp1Y29uZS4gQ3VkIG1pw7NkIGkgb3J6ZXN6a2kuIEJvbGtpIGJpasSFIHBpxJlrbmllIGFsZSBqYWtvcyBicmHFhCBuaWUgbWEuIFB5dGHFgmVtIHN0YXJlZ28gcG8gY28gc2llZHppIHcgdHljaCBzcG9kbmlvYnV0YWNoIG5hIHd5YmV0b25vd2FuZWogdGFtaWUuIEEgb24gxbxlIHN5bnUgdHJ6ZWJhIGJ5xIcgcHJ6eWdvdG93YW55bSBuYSB3c3p5c3RrbyBuYXdldCBuYSB3ZWrFm2NpZSB6YSByeWLEhSBkbyB3b2R5LiBJIG5hamxlcGllaiB6ZWJ5bSBzaWVkemlhxYIgY2ljaG8gYm8gemFyYXogc2nEmSB6YWN6bmllLiBJIHNpZWR6aW15LiDFu2HFgm93YcWCZW0gxbxlIEFua2EgeiBuYW1pIG5pZSBwb2plY2hhxYJhIGJvIHBvc3plZGxieW0geiBuacSFIHcga3J6YWtpIHBvZCBwcmV0ZWtzdGVtIHplYnJhbmlhIHdpZWNlaiBkcmV3bmEgbmEgb2duaXNrby4gOikgQWxlIG5pYy4gU3RhcmVtdSBzacSZIHByenlraW1hxYJvIGkgbmFnbGUgZHp3b25layBuYSBqZWdvIHfEmWRjZSB6YWN6xIXFgiBkendvbmnEhy4gU3RhcnkgemFzcGFueSBwb2RsZWNpYcWCIGRvIGfFgm93a2kgaSAoIHR1IHogbWF0a8SFIHpiYXJhbmllbGlzbXkpIHd5cndhxYIgdMSZIHR5a8SZIGRvIG1pZXJ6ZW5pYSB3b2R5LCB6YWNpxIXFgiBtb2NubyBpIGRydWfEhSByxJlrYSB6YWN6xIXFgiBzenVrYcSHIGtvxYJvd3JvdGthLiBOaWUgZGHFgm8gcmFkeS4gRG9zdGFsacWbbXkgeiBtYXRrxIUgamFraWVqxZsgZ8WCdXBhd2tpLiBUYXJ6YWxpxZtteSBzacSZIHplIMWbbWllY2h1IGpha2llcyAyMCBtaW51dC4gUnliYSBvY3p5d2nFm2NpZSBuYSB0ZWogcHJhd2R6aXdlaiB3xJlkY2UgendpYcWCYS4gU3RhcnkgY3plcndvbnkgemUgd3N0eWR1IGkgesWCb8WbY2kgxbxlIHd5c3plZMWCIG5hIGlkaW90xJkgemFyesSFZHppxYIgxbxlIHptaWVuaWFteSDFgm93aXNrbyBibyB0dSBwcnpleiBuYXN6IGfFgnVwaSDFm21pZWNoIHdzenlzdGtvIHByemVwxYJvc3pvbmUuIEpha2J5xZtteSB3aWVkemllbGkgxbxlIHRhayBixJlkemllIHRvIHNpZWR6aWVsaWJ5xZtteSBjaWNobyBqYWsgbXlzeiBwb2QgbWlvdMWCxIUuIENob2xlcmEgbmEgdMSZIG9wYXNrxJkga3TDs3LEhSBzb2JpZSBzdGFyeSB3eWJyYcWCIGJ5xYJvIGpha2llxZsgMSBrbSBkYWxlaiBwcnpleiBrcnpha2kgaSBwcmF3aWUgxZtjaWXFvGtpIG5pZSBiecWCby4gSmVzemN6ZSBzdGFyeSB3eW15c2xpxYIgemUgemFiaWVyYW15IG9nbmlza28gYm8gb24gbmllIGLEmWR6aWUgdHJhY2nFgiBjemFzdSBuYSByb3pwYWxhbmllIG9nbmlhIGJvIHJvc2EgamVzdCBpIHdzenlzdGtvIHdpbGdvdG5lLiBNecWbbGljaWUgxbxlIMW8YXJ0dWrEmT8gTmllIHpuYWNpZSBtb2plZ28gc3RhcmVnbyBqZXN6Y3plLiBKYWsgYnnFgiBzacSZIHd5bGHEhyB0byB6YXV3YcW8ecWCIHcgcm9ndSB0YW15IHRha2kgZHXFvHkgYmFuaWFrKCBwZXduaWUgcG93w7NkxbogcHJ6eW5pb3PFgmEpLiBJIHByenl3bGVrbGnFm215IHRlbiBiYW5pYWsgaSBzdGFyeSB3xYJhZG93YcWCIG9nbmlza28gZG8gYmFuaWFrYSBpIGRhd2FqIGlkemllbXkuIERvYnJ6ZSDFvGUgbWllbGnFm215IHplIHN0YXJ5bSB0YWtpZSByxJlrYXdpY2Uga2V2bGFyb3dlIGRvIHBvZGJpZXJhbmlhIHN1bcOzdyBibyByxJljZSBieSBuYW0gcG9wYXJ6ecWCby4gTmFqYmFyZHppZWogbWkgYnnFgm8gc3prb2RhIG1hdGtpLiBPYmp1Y3pvbmEgMyBncnVudMOzd2thbWksIHBvZGJpZXJha2llbSwgemFuxJl0YW1pICwgcHJ6eW7EmXRhbWkgaSBjYcWCeW0gdHltIG1hamRhbmVtIG11c2lhxYJhIHdsZWMgdG8gcHJ6ZXoga3J6YWtpIHBvIHNjaWXFvGNlIGt0w7NyZWogcHJhd2llIG5pZSBiecWCby4gTXkgemUgc3RhcnltIG5pZcWbbGnFm215IGJhbmlhayB6IG9nbmlza2llbS4gSmFrIG9kcG9jenl3YWxpxZtteSB0cm9jaMSZIHRvIHN0YXJ5IHN6ZWTFgiBpIHByenlub3NpxYIgZ2HFgsSZemllIMW8ZWJ5IGRvxYJvxbx5xIcgZG8gYmFuaWFrYS4gSSB3dGVkeSBuYXN0xIVwacWCYSBkcnVnYSBtaW5hIHRlaiB3eXByYXd5LiBXIHR5Y2ggc3BvZG5pb2J1dGFjaCBzdGFyeSBwcnp5Y2nEhWduxIXFgiBzb2JpZSBtb2NubyB0ZSBzemVsa2kuIEkgamFrIHN6ZWTFgiBwbyBkcmV3bm8gdG8gY2hjaWHFgiBwcnplc2tvY3p5YyB0YWtpIHLDs3dlay4gQSDFvGUgxZtsaXNrbyBqdcW8IGJ5xYJvIHBvIHJvc2llIHRvIG1hxYJvIG5pZSB3eWplYmHFgiBpIHBvbGVjaWHFgiB0YWsgxbxlIGHFvCBwcnp5a3VjbsSFxYIuIFNwb2RuaW9idXR5IHd0ZWR5IG5pZSB3eXRyenltYcWCeSBpIHBpxJlrbmllIGpha2J5IG5vxbxlbSBvYmNpxIXFgiwgZ3VtaWFraSBvZGVyd2HFgm8gb2Qgbm9nYXdlay4gQcW8IG1uaWUgdHJ6xJlzxYJvIHplIMWbbWllY2h1IGFsZSBqYWtvxZsgc2nEmSBwb3dzdHJ6eW1hxYJlbSDFvGVieSBzdGFyeSBjemVnb8WbIGfFgnVwaWVnbyBuaWUgd3lteXNsacWCLiBaYWN6xIXFgiBzacSZIHdrdXJ3aWHEhyDFvGUgdGVyYXogdG8gZ8Ozd25vIHJvYmnEhSBhIG5pZSBzcHJ6xJl0IGkgxbxlIHRlbiBQcm9taWwtIE9sc3p0eW4gdG8gY2h1aiBuaWUgZmlybWEuIEpha2/FmyBwbyBwcmF3aWUgMSw1IGdvZHppbnkgZG90YXJsacWbbXkgbmEgb3Bhc2vEmSB6IGtsYXRrYW1pLiDFgWFkbmUgbWllanNjZSAoIHJhbm8gc3R3aWVyZHppxYJlbSkgaSBkYXdhaiDFgm93aW15LiBCYW5pYWsgeiBvZ25pc2tpZW0gcHJ6eSBrcnphY3prYWNoIMW8ZWJ5IHJ5YnkgxZt3aWF0xYJhIG5pZSB3aWR6aWHFgnkuU3RhcnkgemHFgm/FvHnFgiBuYWp3aWVrc3rEhSByb3PDs3drxJkgaSBzcnV1dXUuIEkgbcOzd2kgZG8gbW5pZS4gV2lkemlzeiBzeW51IC0gdGFrIHJ6dWNpxYJlbSDFvGUgbmF3ZXQgbmllIHPFgnljaGFjIGJ5xYJvIGdkemllIGRvIHdvZHkgc3BhZMWCby4gQWxlIG5pYyBtdSBuaWUgYnJhxYJvLiBKYSB6xYJvd2nFgmVtIHN1bWEgNzZjbSwgYnJ6YW5lIGtyw7N0a8SFICwgaSDFgmFkbmVnbyBsZXN6Y3phIDQ3Y20uIFN0YXJlbXUgbmljIG5pZSBicmHFgm8uIE1hdGthIG5pZSDFgm93acWCYSBibyBwYWTFgmEgemUgem3EmWN6ZW5pYSBpIHNwYcWCYS4gTmEgbW9qZSBzdWdlc3RpZSDFvGVieSBzdGFyeSBzcHJhd2R6acWCIGN6eSBwcnp5bsSZdMSZIG5pZSBvYmphZMWCbyBwb3dpZWR6aWHFgiDFvGUgbmllIGJvIGp1xbwgZHJ1Z2kgcmF6IHRha2kgcnp1dCBtdSBzacSZIG5pZSB1ZGEuIEEgbmFqbGVwc3plIGJ5xYJvIHJhbm8gamFrIHNpxJkgb2themHFgm8gxbxlIHN0YXJ5IMW6bGUgb2NlbmnFgiAoIHBvIE5hbGV3Y2UpIGdkemllIHdvZGEgYSBnZHppZSBsxIVkIGkgcHJ6eW7EmXRhIGNhxYLEhSBub2Mgd2lzaWHFgmEgbmEgZHJ6ZXdpZS4gUm9zw7N3a2EgYnnFgmEgd3lzY2huacSZdGEganXFvCBtb2NubyA6RCAuIFN0YXJlZ28gbWHFgm8gc3psYWcgbmllIHRyYWZpxYIgaSB6YXBvd2llZHppYcWCIMW8ZSBqZWR6aWVteSBkbyBkb211LiBNYXRrYSB6YWRvd29sb25hIHogdGFraWVnbyBvYnJvdHUgc3ByYXd5IG5hIHNhbSBrb25pZWMgesWCb3dpxYJhIGplc3pjemUgcGnEmWtuZWdvIGxlc3pjemEgY3p5bSBuaWXFumxlIHdrdXJ3acWCYSBzdGFyZWdvIGJvIHBvYmnFgmEgamVnbyByZWtvcmQgOikgLiBUbyBiecWCYSBjaHliYSBuYWpiYXJkemllaiBuaWV1ZGFuYSB3eXByYXdhIGRsYSBzdGFyZWdvIHcgamVnbyDFvHljaXUuIFBvIHR5bSB3c3p5c3RraW0gemFwb3dpZWR6aWHFgiDFvGUgYsSZZHppZSDFgm93acWCIG5hIHNwaW5uaW5nIGJvIHcgdHltIGplc3QgcHJ6eXN6xYJvxZvEhyBpIMW8ZSBzemN6dXBha8OzdyBpIHNhbmRhY3p5IHcgZG9tdSBuaWUgemFicmFrbmllLiBOYSB0YW10eWNoIGZvcmFjaCBkb3N0YcWCIGJhbnkgZG/FvHl3b3RuaW8gYm8gamVzemN6ZSBrxYLDs2NpxYIgc2nEmSB6IGpha2ltxZsgTXVyZ3JhYmnEhSBCZWN6a293c2tpbSBvIGJ5bGUgY28uIFdpZW0gdHlsa28gxbxlIHphcmVqZXN0cm93YcWCIHNpxJkgbmEgSmVyYmFpdC5wbCBhbGUgbmEgcmF6aWUgamVzdCBncnplY3pueS4gUHJ6eXdsZWvFgiBkbyBwaXduaWN5IHDDs8WCIGt1YmlrYSBsaXB5IHd5c3Vzem9uZWogaSBnYWRhxYIgxbxlIGLEmWR6aWUgcm9iacWCIHdvYmxlcnkuIEJvIHN5bnUgamFrIG1vd2nFgiBuaWUgbWEgdG8gamFrIHrFgm93acSHIGRyYXBpZcW8bmlrYSBuYSB3xYJhc25vcsSZY3puaWUgenJvYmlvbsSFIHByenluxJl0xJkuIE1hIGZhcmJ5LCBrbGVqZSwgZHJ1dCBuYSByYXppZSBwb3d5Y2nEhWdhxYIgeiBib21iZWsgY2hvaW5rb3d5Y2ggaSBtYW15IGNob2lua8SZIGJleiBib21iZWsuIE1hdGthIHNpxJkgd2t1cnp5xYJhIGFsZSBzdGFyeSBwb3dpZWR6aWHFgiDFvGUgcG8gTm93eW0gUm9rdSBrdXBpIGRydXQgbmEgQWxsZWdybyBpIHBvd3BpbmEgeiBwb3dyb3RlbSB3IHRlIGJvbWJraS4gTmEgamVya2JhaXQucGwgbcOzd2nFgiBtaSDFvGUgamVzdCBncnplY3pueSBpIGfFgnVwb3QgbmllIHd5cGlzdWplLCBibyBtdXNpIG9kIGNoxYJvcGFrw7N3IHd5c8SZcGnEhyB0YWplbW5pY2UgamFrIHNpxJkgcm9iaSB3b2JraSBuYSBzemN6dXB5IGkgc2FuZGHFgnkgYm8gbmEgYm9sa2kgbmllIGNoY2UgYm8gc8SFIGNodWpvd2UgdyBzbWFrdS4gVHlsa28gZ2FkYcWCIG1pIMW8ZSBpIHRhbSBnw7N3bm8gd2llZHrEhSBibyBiecWCYSBqYWthxZsga8WCb3RuaWEga3TDs3JhIHfEmWRrYSBsZXBzemEgLCBjenkgdGEgeiBCb3JvbnUgY3p5IHogR3JhZml0dT8gQSBwcnplY2llxbwgb24gd2llIG5hamxlcGllaiDFvGUgbmFqbGVwc3phIGplc3QgeiBLZXZsYXJ1IGJvIG1pYcWCIMW8ecWCa8SZIG1hcmtpIFNuZWNrIEtldmxhciBMaW5lIGkgMCwyMCB3eXRyenlteXdhxYJhIDgsNmtnLiBJIG5pZWNoIG11IHRlcmF6IHpuYWpkxIUgdGFrxIUgbW9jbsSFIGNpZW5rxIUgxbx5xYJrxJkuIEFsZSBuaWUgYsSZZHppZSBuYSByYXppZSByb2JpxYIgZ8Ozd25vYnVyeiBibyBqZXN0IHNlem9uIG1hcnR3eSBpIG5pZSB3a3Vyd2lhasSFIGdvIHpkasSZY2lhIHJ5YiBibyBuaWt0IHByYXdpZSBuaWMgbmllIMWCb3dpIGkgamVzdCBvay4gVGFrIMW8ZSB1d2HFvGFqY2llIG5hIHXFvHl0a293bmlrYSBTdGFyeSBBbm9uYSBibyBvbiB3YW0gamVzemN6ZSBwb2thxbxlLiBPbiBqZXN0IGRvIHdzenlzdGtpZWdvIHpkb2xueSBwb3dpbm5pZW4gdG8ga2HFvGR5IHdpZWR6aWXEhyBwbyBwcnplY3p5dGFuaXUgdGVnbyBvcG93aWFkYW5pYS4gVGFrIMW8ZSB3c3p5c3RraW0gdcW8eXRrb3duaWtvbSBKZXJrYmFpdC5wbC4gxbx5Y3rEmSDFvGViecWbY2llIG5pZSBzcG90a2FsaSBtb2plZ28gc3RhcmVnbyBuYWQgd29kxIUuIEkgc2FteWNoIHByenlqZW1ueWNoIGNod2lsIHogd8SZZGvEhSB3IHLEmWt1IHcgTm93eW0gMjAxMyBSb2t1LlxuICAgIFxuICAgIFRvIGplc3QgbW9qZSBvcG93aWFkYW5pZSBpIG5hamxlcGllaiDFvGVieW0gd3lncmHFgiB3ZWRrxJkgYm8gbWFtIHPFgmFixIUuXG4gICAgXG4gICAgQSBpIGplc3pjemUgamVkbm8uIFN0YXJ5IG5hIHBld25vIHByemVjenl0YSBtb2plIG9wb3dpYWRhbmllIGkgc2nEmSB3a3Vyd2kgbmEgbW5pZS4gQWxlIG5pZSBkYmFtIG8gdG8uIE11c2lhxYJlbSBzacSZIHJvenN0YcSHIHogQW5rxIUgYm8gZG93aWVkemlhxYJlbSBzacSZIMW8ZSBwcnpleiB0byBzY2h1ZMWCYSBibyB6amFkxYJhIGpha2llxZsgdGFibGV0a2kgeiB0YXNpZW1jZW0sIGEgdG8gd3N6eXN0a28gcHJ6ZXogbW9qZWdvIHN0YXJlZ28gYm8gZG9rdWN6YcWCIGplaiDFvGUgZ3J1YmEgamVzdCA6KFxuICAgIFxuICAgIE5pZWt0w7NyZSBkemlld2N6eW55IHNhIGplZG5hayBuYXByYXdkxJkgZ8WCdXBpZS4gVGFrIGJhcmR6byBjaGNpYcWCYSBqZWNoYcSHIHogbmFtaSBuYSByeWJ5IMW8ZSBwb3N0xIVwacWCYSB0YWsgZHJhc3R5Y3puaWUuIERvIGN6ZWdvIG1vxbxlIGRvcHJvd2FkemnEhyB3xJlka2Fyc3R3bz8gQnJhayBzxYLDs3cuXG4gICAgXG4gICAgXG4gICAgRWRpdC4gU3RhcnkgcHJ6ZWN6eXRhxYIgdG8gd3N6eXN0a28gaSBuYSBpbm55Y2ggZm9yYWNoIHogdHJvbGtvbnRhIG5hbWF3aWEgaW5ueWNoIMW8ZWJ5IG5pZSBnxYJvc293YWxpIG5hIG1vamUgb3Bvd2lhZGFuaWUgaSDFvGVieW0gbmljIG5pZSB3eWdyYcWCIDooLiBTemtvZGEuIFBvemRyYXdpYW0gUmlxZWxtZS5gO1xuICAgIGFkZEZvcm06IEhUTUxGb3JtRWxlbWVudDtcbiAgICBsZWZ0RGl2OiBIVE1MRGl2RWxlbWVudDtcbiAgICByaWdodERpdjogSFRNTERpdkVsZW1lbnQ7XG4gICAgY2l0eUxpc3REaXY6IEhUTUxEaXZFbGVtZW50O1xuICAgIGNpdHlMaXN0OiBnZXRXZWF0aGVyW107XG4gICAgaTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlclBsYWNlJyk7XG4gICAgICAgIHRoaXMubGVmdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXdlJyk7XG4gICAgICAgIHRoaXMucmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJhd2UnKTtcbiAgICAgICAgdGhpcy5jaXR5TGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5TGlzdCcpO1xuXG4gICAgICAgIC8vVHltY3phc293eSB6YWJpZWdcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvZ29kYTEnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXREYXRhKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jaXR5TGlzdCA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5pID0gdGhpcy5jaXR5TGlzdC5sZW5ndGg7XG5cbiAgICAgICAgICAgIHRoaXMuY2l0eUxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENpdHkoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaXR5RGl2KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuY2l0eUxpc3QgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGFzdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNpdHlMaXN0RGl2LmlubmVyVGV4dCk7XG4gICAgICAgIHRoaXMucHVzaEZvcm0odGhpcy5hZGRGb3JtKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xuICAgIH1cblxuICAgIHB1c2hGb3JtKGZvcm0/OiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBmb3JtLm9uc3VibWl0ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQ6SFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaXR5OiBnZXRXZWF0aGVyID0gdGhpcy5jcmVhdGVPYmplY3QoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpdHlMaXN0LnB1c2goY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2l0eUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaXR5LnByZXNzdXJlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNpdHlMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YoZWxlbWVudC5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDaXR5KHRoaXMuY2l0eUxpc3RbdGhpcy5pXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2l0eURpdih0aGlzLmNpdHlMaXN0W3RoaXMuaV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlT2JqZWN0KGNpdHk6IHN0cmluZyk6IGdldFdlYXRoZXIge1xuICAgICAgICBsZXQgb2JqOiBnZXRXZWF0aGVyID0gbmV3IGdldFdlYXRoZXIoY2l0eSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgYWRkQ2l0eShjaXR5OiBnZXRXZWF0aGVyKTp2b2lkIHtcbiAgICAgICAgbGV0IGRpdjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBjaXR5LmNpdHk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QgPSAnY2l0eUxpc3Rfb2JqJztcbiAgICAgICAgdGhpcy5jaXR5TGlzdERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGFwcGVuZENpdHlEaXYoY2l0eTogZ2V0V2VhdGhlcik6dm9pZCB7XG4gICAgICAgIGxldCBkaXY6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0ID0gJ2thZmVsZWsnO1xuICAgICAgICBsZXQgY2l0eURpdjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNpdHlEaXYuaW5uZXJUZXh0ID0gY2l0eS5jaXR5O1xuICAgICAgICBsZXQgY291bnRyeURpdjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvdW50cnlEaXYuaW5uZXJUZXh0ID0gY2l0eS5jb3VudHJ5O1xuICAgICAgICBsZXQgd2VhdGhlckRpdjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdlYXRoZXJEaXYuaW5uZXJUZXh0ID0gY2l0eS53ZWF0aGVyO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXY6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5pbm5lclRleHQgPSBjaXR5LmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgd2luZERpdjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdpbmREaXYuaW5uZXJUZXh0ID0gY2l0eS5wcmVzc3VyZSArIFwiaFBhXCI7XG4gICAgICAgIGxldCB0ZW1wZXJhdHVyZURpdjogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBlcmF0dXJlRGl2LmlubmVyVGV4dCA9IGNpdHkudGVtcGVyYXR1cmUgKyBcIiDCsENcIjtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY2l0eURpdik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb3VudHJ5RGl2KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHdlYXRoZXJEaXYpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQod2luZERpdik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpdik7XG4gICAgICAgIHRoaXMubGVmdERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjaGFuZ2VEYXRhKCk6IHZvaWQge1xuICAgICAgICBsZXQgZGl2czogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2FmZWxlaycpXG4gICAgICAgIGRpdnMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gdGhpcy5jaXR5TGlzdFtpXS5jb3VudHJ5O1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gdGhpcy5jaXR5TGlzdFtpXS53ZWF0aGVyO1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzNdLnRleHRDb250ZW50ID0gdGhpcy5jaXR5TGlzdFtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1s0XS50ZXh0Q29udGVudCA9IHRoaXMuY2l0eUxpc3RbaV0ucHJlc3N1cmUgKyBcImhQYVwiO1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzVdLnRleHRDb250ZW50ID0gdGhpcy5jaXR5TGlzdFtpXS50ZW1wZXJhdHVyZSArIFwiIMKwQ1wiOyBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2F2ZURhdGEoKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BvZ29kYTEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNpdHlMaXN0KSk7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpOiBnZXRXZWF0aGVyW10ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9nb2RhMScpKTtcbiAgICB9XG5cbn1cbmV4cG9ydCBjb25zdCBBQUEgPSAxMDtcbiIsImltcG9ydCB7IElXZWF0aGVyIH0gZnJvbSBcIi4vSVdlYXRoZXJcIjtcclxuaW1wb3J0IHsgSUFwaSB9IGZyb20gXCIuL0lBcGlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBnZXRXZWF0aGVyIGltcGxlbWVudHMgSVdlYXRoZXIge1xyXG4gICAgcHVibGljIGFwaUtleTogc3RyaW5nID0gXCJhODU0M2I4YTgxZWEwYmJhNTA3NDhiMmE5ZjYyNjljMFwiO1xyXG4gICAgcHVibGljIGNpdHk6IHN0cmluZztcclxuICAgIHB1YmxpYyB3ZWF0aGVyOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGVtcGVyYXR1cmU6IHN0cmluZztcclxuICAgIHNreTogc3RyaW5nO1xyXG4gICAgcHJlc3N1cmU6IHN0cmluZztcclxuICAgIGh1bWlkaXR5OiBzdHJpbmc7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjaXR5OiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XHJcbiAgICAgICAgdGhpcy5nZXRXZWF0aGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0V2VhdGhlckRhdGEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVHUgcG93aW5ubyBieWMgbmFwaXNhbmUgamFraWUgbWlhc3RvOiBcIiArIFwiIFwiICsgdGhpcy5jaXR5KyBcIiBcIiArIHRoaXMuYXBpS2V5KTtcclxuICAgICAgICBjb25zdCBvcFVSTDogYW55ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt0aGlzLmNpdHl9JmFwcGlkPSR7dGhpcy5hcGlLZXl9YDtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2U6IGFueSA9IGF3YWl0IGZldGNoKG9wVVJMKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YTogYW55ID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKHdlYXRoZXJEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERhdGEoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy9kbyBkb3ByYWNvd2FuaWEsIGRvZGFqIHdpZWNlaiBpbmZvcm1hY2ppIGx1YiB1cHJvxZvEhyB3eWNpxIVnYW5pZSBkYW55Y2ggeiBqc29uYVxyXG4gICAgICAgIHRoaXMud2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIk9waXM6IFwiICsgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IFwiTWlhc3RvXCIgKyBkYXRhLnN5cy5jb3VudHJ5O1xyXG4gICAgICAgIHRoaXMucHJlc3N1cmUgPSBcIkNpxZtuaWVuaWU6IFwiICsgZGF0YS5tYWluLnByZXNzdXJlO1xyXG4gICAgICAgIHRoaXMudGVtcGVyYXR1cmUgPSBcIlRlbXBlcmF0dXJhOiBcIiArIE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpO1xyXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBcIldpbGdvdG5vxZvEhzogXCIgKyBkYXRhLm1haW4uaHVtaWRpdHk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5jb25zdCBoZWxsbyA9IFwieWVwLCBpdCdzIHdvcmtpbiBzdGlsbCBzaWNrXCI7XG4vLyBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGhlbGxvO1xuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KCk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==