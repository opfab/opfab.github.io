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
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d41857eb3c99be8d97ed41bbd7f24a1a"' : 'data-target="#xs-components-links-module-AppModule-d41857eb3c99be8d97ed41bbd7f24a1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d41857eb3c99be8d97ed41bbd7f24a1a"' :
                                            'id="xs-components-links-module-AppModule-d41857eb3c99be8d97ed41bbd7f24a1a"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomLogoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomLogoComponent</a>
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
                                                <a href="components/MenuLinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuLinkComponent</a>
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
                                            'data-target="#components-links-module-ArchivesModule-0e739823eae66849ac868227df4cf585"' : 'data-target="#xs-components-links-module-ArchivesModule-0e739823eae66849ac868227df4cf585"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArchivesModule-0e739823eae66849ac868227df4cf585"' :
                                            'id="xs-components-links-module-ArchivesModule-0e739823eae66849ac868227df4cf585"' }>
                                            <li class="link">
                                                <a href="components/ArchiveFiltersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchiveFiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchiveListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchiveListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchiveListPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchiveListPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArchivesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArchivesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatetimeFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatetimeFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MultiFilterComponent</a>
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
                                            'data-target="#components-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' : 'data-target="#xs-components-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' :
                                            'id="xs-components-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' }>
                                            <li class="link">
                                                <a href="components/ActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmModalComponent</a>
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
                                        'data-target="#injectables-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' : 'data-target="#xs-injectables-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' :
                                        'id="xs-injectables-links-module-CardsModule-0b77a11836e6274be6bf8c25df1b8a44"' }>
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
                                            'data-target="#components-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' : 'data-target="#xs-components-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' :
                                            'id="xs-components-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' }>
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
                                                <a href="components/SeveritySortComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeveritySortComponent</a>
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
                                        'data-target="#directives-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' : 'data-target="#xs-directives-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' :
                                        'id="xs-directives-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' }>
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
                                            'data-target="#pipes-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' : 'data-target="#xs-pipes-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' :
                                            'id="xs-pipes-links-module-FeedModule-1588bf7200a4d69325d7524e6d882549"' }>
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
                                        'data-target="#injectables-links-module-ServicesModule-1f24f99de96f71654924ea6fb181d765"' : 'data-target="#xs-injectables-links-module-ServicesModule-1f24f99de96f71654924ea6fb181d765"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-1f24f99de96f71654924ea6fb181d765"' :
                                        'id="xs-injectables-links-module-ServicesModule-1f24f99de96f71654924ea6fb181d765"' }>
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
                                            <a href="injectables/NotifyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NotifyService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SettingsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SettingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThirdActionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThirdActionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThirdsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThirdsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TimeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TimeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-da2847096889a6b5ab619557a4a03721"' : 'data-target="#xs-components-links-module-SettingsModule-da2847096889a6b5ab619557a4a03721"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-da2847096889a6b5ab619557a4a03721"' :
                                            'id="xs-components-links-module-SettingsModule-da2847096889a6b5ab619557a4a03721"' }>
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
                                            'data-target="#components-links-module-ThirdpartyModule-9a598fd4c6ad71e3893fce9f934a08ae"' : 'data-target="#xs-components-links-module-ThirdpartyModule-9a598fd4c6ad71e3893fce9f934a08ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThirdpartyModule-9a598fd4c6ad71e3893fce9f934a08ae"' :
                                            'id="xs-components-links-module-ThirdpartyModule-9a598fd4c6ad71e3893fce9f934a08ae"' }>
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
                            <li class="link">
                                <a href="modules/UtilitiesModule.html" data-type="entity-link">UtilitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' : 'data-target="#xs-components-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' :
                                            'id="xs-components-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' }>
                                            <li class="link">
                                                <a href="components/ResizableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResizableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' : 'data-target="#xs-directives-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' :
                                        'id="xs-directives-links-module-UtilitiesModule-eef988d851bb391560786fb8bd9062ec"' }>
                                        <li class="link">
                                            <a href="directives/CalcHeightDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalcHeightDirective</a>
                                        </li>
                                    </ul>
                                </li>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
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
                                <a href="classes/ActionStatus.html" data-type="entity-link">ActionStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddActionsAppear.html" data-type="entity-link">AddActionsAppear</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddLightCardFailure.html" data-type="entity-link">AddLightCardFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddThirdActions.html" data-type="entity-link">AddThirdActions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplyFilter.html" data-type="entity-link">ApplyFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArchiveQuerySuccess.html" data-type="entity-link">ArchiveQuerySuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthObject.html" data-type="entity-link">AuthObject</a>
                            </li>
                            <li class="link">
                                <a href="classes/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="classes/CardOperation.html" data-type="entity-link">CardOperation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangeSort.html" data-type="entity-link">ChangeSort</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckAuthenticationStatus.html" data-type="entity-link">CheckAuthenticationStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckImplicitFlowAuthenticationStatus.html" data-type="entity-link">CheckImplicitFlowAuthenticationStatus</a>
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
                                <a href="classes/CreateUserApplication.html" data-type="entity-link">CreateUserApplication</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserApplicationOnFailure.html" data-type="entity-link">CreateUserApplicationOnFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserApplicationOnSuccess.html" data-type="entity-link">CreateUserApplicationOnSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomRouterStateSerializer.html" data-type="entity-link">CustomRouterStateSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeNgb.html" data-type="entity-link">DateTimeNgb</a>
                            </li>
                            <li class="link">
                                <a href="classes/DelayedLightCardUpdate.html" data-type="entity-link">DelayedLightCardUpdate</a>
                            </li>
                            <li class="link">
                                <a href="classes/Detail.html" data-type="entity-link">Detail</a>
                            </li>
                            <li class="link">
                                <a href="classes/DetailContext.html" data-type="entity-link">DetailContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmptyLightCards.html" data-type="entity-link">EmptyLightCards</a>
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
                                <a href="classes/HandleUnexpectedError-5.html" data-type="entity-link">HandleUnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandleUnexpectedError-6.html" data-type="entity-link">HandleUnexpectedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/I18n.html" data-type="entity-link">I18n</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImplicitAuthenticationHandler.html" data-type="entity-link">ImplicitAuthenticationHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImplicitlyAuthenticated.html" data-type="entity-link">ImplicitlyAuthenticated</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitAuthStatus.html" data-type="entity-link">InitAuthStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitTimeline.html" data-type="entity-link">InitTimeline</a>
                            </li>
                            <li class="link">
                                <a href="classes/Input.html" data-type="entity-link">Input</a>
                            </li>
                            <li class="link">
                                <a href="classes/LightCard.html" data-type="entity-link">LightCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/LightCardAlreadyUpdated.html" data-type="entity-link">LightCardAlreadyUpdated</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadArchivedCard.html" data-type="entity-link">LoadArchivedCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadArchivedCardFailure.html" data-type="entity-link">LoadArchivedCardFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadArchivedCardSuccess.html" data-type="entity-link">LoadArchivedCardSuccess</a>
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
                                <a href="classes/Page.html" data-type="entity-link">Page</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParameterListItem.html" data-type="entity-link">ParameterListItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PasswordOrCodeAuthenticationHandler.html" data-type="entity-link">PasswordOrCodeAuthenticationHandler</a>
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
                                <a href="classes/RefreshTranslation.html" data-type="entity-link">RefreshTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/RejectLogIn.html" data-type="entity-link">RejectLogIn</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveLightCard.html" data-type="entity-link">RemoveLightCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouterStateUrl.html" data-type="entity-link">RouterStateUrl</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectArchivedLightCard.html" data-type="entity-link">SelectArchivedLightCard</a>
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
                                <a href="classes/SendArchiveQuery.html" data-type="entity-link">SendArchiveQuery</a>
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
                                <a href="classes/ThirdActionAlreadyLoaded.html" data-type="entity-link">ThirdActionAlreadyLoaded</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThirdActionAlreadyUpdated.html" data-type="entity-link">ThirdActionAlreadyUpdated</a>
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
                                <a href="classes/TickPayload.html" data-type="entity-link">TickPayload</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeSpan.html" data-type="entity-link">TimeSpan</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransitionalThirdWithItSVersion.html" data-type="entity-link">TransitionalThirdWithItSVersion</a>
                            </li>
                            <li class="link">
                                <a href="classes/TranslationUpToDate.html" data-type="entity-link">TranslationUpToDate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TryToLogIn.html" data-type="entity-link">TryToLogIn</a>
                            </li>
                            <li class="link">
                                <a href="classes/TryToLogOut.html" data-type="entity-link">TryToLogOut</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnableToRefreshOrGetToken.html" data-type="entity-link">UnableToRefreshOrGetToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnAuthenticationFromImplicitFlow.html" data-type="entity-link">UnAuthenticationFromImplicitFlow</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateALightCard.html" data-type="entity-link">UpdateALightCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAnAction.html" data-type="entity-link">UpdateAnAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAnActionFailure.html" data-type="entity-link">UpdateAnActionFailure</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateArchiveFilter.html" data-type="entity-link">UpdateArchiveFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateArchivePage.html" data-type="entity-link">UpdateArchivePage</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedSubscription.html" data-type="entity-link">UpdatedSubscription</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTranslation.html" data-type="entity-link">UpdateTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTranslationFailed.html" data-type="entity-link">UpdateTranslationFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTranslationSuccessful.html" data-type="entity-link">UpdateTranslationSuccessful</a>
                            </li>
                            <li class="link">
                                <a href="classes/UselessAuthAction.html" data-type="entity-link">UselessAuthAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserApplicationNotRegistered.html" data-type="entity-link">UserApplicationNotRegistered</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserApplicationRegistered.html" data-type="entity-link">UserApplicationRegistered</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserContext.html" data-type="entity-link">UserContext</a>
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
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ArchiveEffects.html" data-type="entity-link">ArchiveEffects</a>
                                </li>
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
                                    <a href="injectables/NotifyService.html" data-type="entity-link">NotifyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsEffects.html" data-type="entity-link">SettingsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThirdActionService.html" data-type="entity-link">ThirdActionService</a>
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
                                <li class="link">
                                    <a href="injectables/TranslateEffects.html" data-type="entity-link">TranslateEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffects.html" data-type="entity-link">UserEffects</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
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
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArchiveState.html" data-type="entity-link">ArchiveState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationModeHandler.html" data-type="entity-link">AuthenticationModeHandler</a>
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
                                <a href="interfaces/SettingsInputs.html" data-type="entity-link">SettingsInputs</a>
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
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link">UserState</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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