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
                    <a href="index.html" data-type="index-link">operatorfabric-ui-main documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-500aea851b18d42e53ce835f04438111"' : 'data-target="#xs-components-links-module-AppModule-500aea851b18d42e53ce835f04438111"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-500aea851b18d42e53ce835f04438111"' :
                                            'id="xs-components-links-module-AppModule-500aea851b18d42e53ce835f04438111"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArchivesModule.html" data-type="entity-link">ArchivesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArchivesModule-5878b81c82b862e17a0b9201f74aa828"' : 'data-target="#xs-components-links-module-ArchivesModule-5878b81c82b862e17a0b9201f74aa828"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArchivesModule-5878b81c82b862e17a0b9201f74aa828"' :
                                            'id="xs-components-links-module-ArchivesModule-5878b81c82b862e17a0b9201f74aa828"' }>
                                            <li class="link">
                                                <a href="components/ArchivesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchivesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArchivesRoutingModule.html" data-type="entity-link">ArchivesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardsModule.html" data-type="entity-link">CardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' : 'data-target="#xs-components-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' :
                                            'id="xs-components-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' : 'data-target="#xs-injectables-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' :
                                        'id="xs-injectables-links-module-CardsModule-f13108dd320db91f08141d104061a1e6"' }>
                                        <li class="link">
                                            <a href="injectables/HandlebarsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HandlebarsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedModule.html" data-type="entity-link">FeedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' : 'data-target="#xs-components-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' :
                                            'id="xs-components-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' }>
                                            <li class="link">
                                                <a href="components/CardListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomTimelineChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomTimelineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiltersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InitChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InitChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoSelectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TagsFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagsFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeLineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeLineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypeFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' : 'data-target="#xs-directives-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' :
                                        'id="xs-directives-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' }>
                                        <li class="link">
                                            <a href="directives/DraggableDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MouseWheelDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MouseWheelDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' : 'data-target="#xs-pipes-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' :
                                            'id="xs-pipes-links-module-FeedModule-a8bdf075059f6fb97789b0e84b7bdd8b"' }>
                                            <li class="link">
                                                <a href="pipes/XAxisTickFormatPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">XAxisTickFormatPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedRoutingModule.html" data-type="entity-link">FeedRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-c957feab5fab82f67a7ad64312e97058"' : 'data-target="#xs-injectables-links-module-ServicesModule-c957feab5fab82f67a7ad64312e97058"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-c957feab5fab82f67a7ad64312e97058"' :
                                        'id="xs-injectables-links-module-ServicesModule-c957feab5fab82f67a7ad64312e97058"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FilterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FilterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/I18nService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>I18nService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SettingsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SettingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThirdsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThirdsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TimeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TimeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-2700c4ff6eff170e4700be4bc402d0a7"' : 'data-target="#xs-components-links-module-SettingsModule-2700c4ff6eff170e4700be4bc402d0a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-2700c4ff6eff170e4700be4bc402d0a7"' :
                                            'id="xs-components-links-module-SettingsModule-2700c4ff6eff170e4700be4bc402d0a7"' }>
                                            <li class="link">
                                                <a href="components/BaseSettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BaseSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailSettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListSettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MultiSettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextSettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextSettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypeAheadSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeAheadSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link">SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StateModule.html" data-type="entity-link">StateModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ThirdpartyModule.html" data-type="entity-link">ThirdpartyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThirdpartyModule-1e6ba780e3b030564d118b60feecec06"' : 'data-target="#xs-components-links-module-ThirdpartyModule-1e6ba780e3b030564d118b60feecec06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThirdpartyModule-1e6ba780e3b030564d118b60feecec06"' :
                                            'id="xs-components-links-module-ThirdpartyModule-1e6ba780e3b030564d118b60feecec06"' }>
                                            <li class="link">
                                                <a href="components/IframeDisplayComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IframeDisplayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThirdpartyRoutingModule.html" data-type="entity-link">ThirdpartyRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AcceptLogIn.html" data-type="entity-link">AcceptLogIn</a>
                            </li>
                            <li class="link">
                                <a href="classes/AcceptLogOut.html" data-type="entity-link">AcceptLogOut</a>
                            </li>
                            <li class="link">
                                <a href="classes/AcceptLogOutSuccess.html" data-type="entity-link">AcceptLogOutSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Action.html" data-type="entity-link">Action</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddLightCardFailure.html" data-type="entity-link">AddLightCardFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplyFilter.html" data-type="entity-link">ApplyFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthObject.html" data-type="entity-link">AuthObject</a>
                            </li>
                            <li class="link">
                                <a href="classes/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckAuthenticationStatus.html" data-type="entity-link">CheckAuthenticationStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckTokenResponse.html" data-type="entity-link">CheckTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearCard.html" data-type="entity-link">ClearCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearLightCardSelection.html" data-type="entity-link">ClearLightCardSelection</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomRouterStateSerializer.html" data-type="entity-link">CustomRouterStateSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Detail.html" data-type="entity-link">Detail</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmptyLightCards.html" data-type="entity-link">EmptyLightCards</a>
                            </li>
                            <li class="link">
                                <a href="classes/FailToUpdateTimeReference.html" data-type="entity-link">FailToUpdateTimeReference</a>
                            </li>
                            <li class="link">
                                <a href="classes/Filter.html" data-type="entity-link">Filter</a>
                            </li>
                            <li class="link">
                                <a href="classes/GuidService.html" data-type="entity-link">GuidService</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleUnexpectedError.html" data-type="entity-link">HandleUnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleUnexpectedError-1.html" data-type="entity-link">HandleUnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleUnexpectedError-2.html" data-type="entity-link">HandleUnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleUnexpectedError-3.html" data-type="entity-link">HandleUnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleUnexpectedError-4.html" data-type="entity-link">HandleUnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/I18n.html" data-type="entity-link">I18n</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitAuthStatus.html" data-type="entity-link">InitAuthStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitFilters.html" data-type="entity-link">InitFilters</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitTimeline.html" data-type="entity-link">InitTimeline</a>
                            </li>
                            <li class="link">
                                <a href="classes/Input.html" data-type="entity-link">Input</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCard.html" data-type="entity-link">LoadCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCardFailure.html" data-type="entity-link">LoadCardFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCardSuccess.html" data-type="entity-link">LoadCardSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadConfig.html" data-type="entity-link">LoadConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadConfigFailure.html" data-type="entity-link">LoadConfigFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadConfigSuccess.html" data-type="entity-link">LoadConfigSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadLightCards.html" data-type="entity-link">LoadLightCards</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadLightCardsExtendedData.html" data-type="entity-link">LoadLightCardsExtendedData</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadLightCardsFailure.html" data-type="entity-link">LoadLightCardsFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadLightCardsSuccess.html" data-type="entity-link">LoadLightCardsSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadMenu.html" data-type="entity-link">LoadMenu</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadMenuFailure.html" data-type="entity-link">LoadMenuFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadMenuSuccess.html" data-type="entity-link">LoadMenuSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadSettings.html" data-type="entity-link">LoadSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadSettingsFailure.html" data-type="entity-link">LoadSettingsFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadSettingsSuccess.html" data-type="entity-link">LoadSettingsSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/Map.html" data-type="entity-link">Map</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParameterListItem.html" data-type="entity-link">ParameterListItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchSettings.html" data-type="entity-link">PatchSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchSettingsFailure.html" data-type="entity-link">PatchSettingsFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchSettingsSuccess.html" data-type="entity-link">PatchSettingsSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/PayloadForSuccessfulAuthentication.html" data-type="entity-link">PayloadForSuccessfulAuthentication</a>
                            </li>
                            <li class="link">
                                <a href="classes/Process.html" data-type="entity-link">Process</a>
                            </li>
                            <li class="link">
                                <a href="classes/RejectLogIn.html" data-type="entity-link">RejectLogIn</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouterStateUrl.html" data-type="entity-link">RouterStateUrl</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectLightCard.html" data-type="entity-link">SelectLightCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectMenuLink.html" data-type="entity-link">SelectMenuLink</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectMenuLinkFailure.html" data-type="entity-link">SelectMenuLinkFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectMenuLinkSuccess.html" data-type="entity-link">SelectMenuLinkSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetCardDataTimeline.html" data-type="entity-link">SetCardDataTimeline</a>
                            </li>
                            <li class="link">
                                <a href="classes/State.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="classes/Third.html" data-type="entity-link">Third</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThirdMenu.html" data-type="entity-link">ThirdMenu</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThirdMenuEntry.html" data-type="entity-link">ThirdMenuEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThirdsI18nLoader.html" data-type="entity-link">ThirdsI18nLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThirdsServiceMock.html" data-type="entity-link">ThirdsServiceMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tick.html" data-type="entity-link">Tick</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeReference.html" data-type="entity-link">TimeReference</a>
                            </li>
                            <li class="link">
                                <a href="classes/TryToLogIn.html" data-type="entity-link">TryToLogIn</a>
                            </li>
                            <li class="link">
                                <a href="classes/TryToLogOut.html" data-type="entity-link">TryToLogOut</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedSubscription.html" data-type="entity-link">UpdatedSubscription</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTimeReference.html" data-type="entity-link">UpdateTimeReference</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationEffects.html" data-type="entity-link">AuthenticationEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CardEffects.html" data-type="entity-link">CardEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CardOperationEffects.html" data-type="entity-link">CardOperationEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigEffects.html" data-type="entity-link">ConfigEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link">ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomRouterEffects.html" data-type="entity-link">CustomRouterEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeedFiltersEffects.html" data-type="entity-link">FeedFiltersEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterService.html" data-type="entity-link">FilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/I18nService.html" data-type="entity-link">I18nService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LightCardEffects.html" data-type="entity-link">LightCardEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuEffects.html" data-type="entity-link">MenuEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsEffects.html" data-type="entity-link">SettingsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThirdsService.html" data-type="entity-link">ThirdsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeEffects.html" data-type="entity-link">TimeEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeService.html" data-type="entity-link">TimeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInjector.html" data-type="entity-link">TokenInjector</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthState.html" data-type="entity-link">AuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CardFeedState.html" data-type="entity-link">CardFeedState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CardState.html" data-type="entity-link">CardState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigState.html" data-type="entity-link">ConfigState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuState.html" data-type="entity-link">MenuState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SettingsState.html" data-type="entity-link">SettingsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimelineState.html" data-type="entity-link">TimelineState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeState.html" data-type="entity-link">TimeState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});