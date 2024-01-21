'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">teddy_open_finance_challenge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' :
                                            'id="xs-controllers-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' :
                                        'id="xs-injectables-links-module-AuthModule-675caeddd1903edccfa5a1842cea776ea2471c61bb6aa2ee4b455c1e97cbdf75d89ae807717a5da1f5be3d2ddb8d8ccb5fe812dd729c961ac9dcc7ec37c77d63"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShortenedUrlsModule.html" data-type="entity-link" >ShortenedUrlsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' : 'data-bs-target="#xs-controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' :
                                            'id="xs-controllers-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' }>
                                            <li class="link">
                                                <a href="controllers/ShortenedUrlsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShortenedUrlsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' : 'data-bs-target="#xs-injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' :
                                        'id="xs-injectables-links-module-ShortenedUrlsModule-4389694089f411a524c1a0626f4aa26f4c17a0c19128739f213f7d38cbd1de76cedd69c2e9eff45f26168fb63d40aef5be475071aadee34288b8adb0914c87ba"' }>
                                        <li class="link">
                                            <a href="injectables/AddClickShortenedUrlsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddClickShortenedUrlsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateShortenedUrlsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateShortenedUrlsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteShortenedUrlsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteShortenedUrlsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListShortenedUrlsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListShortenedUrlsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdatetShortenedUrlsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatetShortenedUrlsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' :
                                            'id="xs-controllers-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' :
                                        'id="xs-injectables-links-module-UsersModule-c77764c8558f931580084614c2a38e5a7ae0d36b7fec76e8a741a719f543012ca68e70c0aba9eb735bfeea2365d9c0a155b576dc1169c103fae80ad2779479f1"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUsersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ListUsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUsersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateUsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateUsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ShortenedUrlsController.html" data-type="entity-link" >ShortenedUrlsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/ShortenedUrlsModel.html" data-type="entity-link" >ShortenedUrlsModel</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UsersModel.html" data-type="entity-link" >UsersModel</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateShortenedUrlsDto.html" data-type="entity-link" >CreateShortenedUrlsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpAllExceptionFilter.html" data-type="entity-link" >HttpAllExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelNotFoundException.html" data-type="entity-link" >ModelNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShortenedUrlsModel.html" data-type="entity-link" >ShortenedUrlsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateShortenedUrlsDto.html" data-type="entity-link" >UpdateShortenedUrlsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersModel.html" data-type="entity-link" >UsersModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserMiddleware.html" data-type="entity-link" >UserMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});