'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">teddy_open_finance_challenge documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' : 'id="xs-controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' : 'id="xs-injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LocalStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LocalStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ShortenedUrlsModule.html\" data-type=\"entity-link\" >ShortenedUrlsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' : 'data-bs-target="#xs-controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' : 'id="xs-controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/ShortenedUrlsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ShortenedUrlsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' : 'data-bs-target="#xs-injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' : 'id="xs-injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AddClickShortenedUrlsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AddClickShortenedUrlsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/CreateShortenedUrlsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreateShortenedUrlsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DeleteShortenedUrlsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DeleteShortenedUrlsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ListShortenedUrlsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListShortenedUrlsService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UpdatetShortenedUrlsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UpdatetShortenedUrlsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' : 'id="xs-controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' : 'id="xs-injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/CreateUsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreateUsersService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ListUsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListUsersService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UpdateUsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UpdateUsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links"' : 'data-bs-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" >AuthController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/ShortenedUrlsController.html\" data-type=\"entity-link\" >ShortenedUrlsController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" >UsersController</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#entities-links"' : 'data-bs-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/ShortenedUrlsModel.html\" data-type=\"entity-link\" >ShortenedUrlsModel</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/UsersModel.html\" data-type=\"entity-link\" >UsersModel</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreateShortenedUrlsDto.html\" data-type=\"entity-link\" >CreateShortenedUrlsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HttpAllExceptionFilter.html\" data-type=\"entity-link\" >HttpAllExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoginDto.html\" data-type=\"entity-link\" >LoginDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ModelNotFoundException.html\" data-type=\"entity-link\" >ModelNotFoundException</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ShortenedUrlsModel.html\" data-type=\"entity-link\" >ShortenedUrlsModel</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateShortenedUrlsDto.html\" data-type=\"entity-link\" >UpdateShortenedUrlsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateUserDto.html\" data-type=\"entity-link\" >UpdateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UsersModel.html\" data-type=\"entity-link\" >UsersModel</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LocalAuthGuard.html\" data-type=\"entity-link\" >LocalAuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoggingInterceptor.html\" data-type=\"entity-link\" >LoggingInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UserMiddleware.html\" data-type=\"entity-link\" >UserMiddleware</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));