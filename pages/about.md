---
layout: page
title: What is OpFab?
permalink: /whatisopfab/
feature-img: "assets/img/pexels/triangular.jpeg"
tags: [About]
---

## A Smart Assistant For System Operators

OperatorFabric is a modular, extensible, industrial-strength and field-tested platform for use in electricity, water, and other utility operations.

OpFab provides a notification GUI with strong added value and powerful backend modules :

- System visualization and console integration
- Precise alerting
- Workflow scheduling (*)
- Historian
- Scripting (ex: Python, JavaScript)

_* This feature could be addressed either as an internal module or through simplified and standardized (BPMN) integration with external workflow engines, we're still weighing the pros and cons of the two options._

## What does OperatorFabric do in practice?

To perform their duties, an operator has to interact with multiple applications (perform actions, watch for alerts, etc.), which can prove difficult if there are too many of them.

The idea is to aggregate all the notifications from all these applications into a single screen, and to allow the operator to act on them if needed. 

These notifications are materialized by **cards** sorted in a **feed** according to their period of relevance and their severity. 
When a card is selected in the feed, the right-hand pane displays the **details** of the card: information about the state of the parent process instance in the third-party application that published it, available actions, etc. 

In addition, the cards will also translate as events displayed on a **timeline** (its design is still under discussion) at the top of the screen. 
This view will be complimentary to the card feed in that it will allow the operator to see at a glance the status of processes for a given period, when the feed is more like a "To Do" list.

![Feed screen layout](../assets/img/of_screenshots/feed_screenshot.png)

Part of the value of OperatorFabric is that it makes the integration very simple on the part of the third-party applications. 
To start publishing cards to users in an OperatorFabric instance, all they have to do is:
* Register as a publisher through the "Thirds" service and provide a "bundle" containing handlebars templates defining how cards should be rendered, i18n info etc.
* Publish cards as json containing card data through the card publication API

OperatorFabric will then:
* Dispatch the cards to the appropriate users (by computing the actual users who should receive the card from the recipients rules defined in the card)
* Take care of the rendering of the cards, displaying details, actions, inputs etc.
* Display relevant information from the cards in the timeline

Another aim of OperatorFabric is to make cooperation easier by letting operators forward or send cards to other operators, for example:
* If they need an input from another operator
* If they can't handle a given card for lack of time or because the necessary action is out of their scope

This will replace phone calls or emails, making cooperation more efficient and traceable.

For instance, operators might be interested in knowing why a given decision was made in the past: 
the cards detailing the decision process steps will be accessible through the Archives screen, showing how the 
operators reached this agreement.

## Open source

OperatorFabric is part of the [LF Energy](https://www.lfenergy.org/) coalition, a project of The Linux Foundation that supports open source innovation projects within the energy and electricity sectors.

OpFab is an open source platform licensed under [Mozilla Public License V2](https://www.mozilla.org/en-US/MPL/2.0/). 
The source code is hosted on GitHub in this repository : [operatorfabric-core](https://github.com/opfab/operatorfabric-core).

## Where is the name from ?

 - **Operator** represents the human being at the center of the platform, whether he's working in a control room or in the field
 - **Fabric**, from a modern digital perspective, is used as a metaphor to illustrate the idea of a simple work to create and weave together powerful software

That's why when we started this project it felt kind of natural to call it **OperatorFabric**, or **"OpFab"** for short (there's no need to explain it, is there? :-) ).
And in the end, in emails and presentations and such, we started referring to it as just **"OF"**.

## Technology stack

### Development
OperatorFabric is mostly written in Java and based on the Spring framework. This makes writing and integrating software for a simplified and better coordination very easy.

[![Using Java](https://img.shields.io/badge/Using-Java-%237473C0.svg?style=for-the-badge)]() 
[![Using Spring](https://img.shields.io/badge/Using-Spring-%236db33f.svg?style=for-the-badge)](https://spring.io/) 
[![Using Angular](https://img.shields.io/badge/Using-Angular-%237473C0.svg?style=for-the-badge)](https://angular.io/)
[![Using Swagger](https://img.shields.io/badge/Using-Swagger-%237473C0.svg?style=for-the-badge)](https://swagger.io/)

### Continuous Integration / Continuous Delivery
OperatorFabric is built and integrated using battle-tested tools and (open) platforms. 

[![Built with Gradle](https://img.shields.io/badge/Built%20with-Gradle-%23410099.svg?style=for-the-badge)](https://gradle.org/)
[![Using Travis CI](https://img.shields.io/badge/Using-Travis%20CI-%23FF647D.svg?style=for-the-badge)](https://travis-ci.org/opfab/operatorfabric-core)
[![Using SonarCloud](https://img.shields.io/badge/Using-SonarCloud-%23FF647D.svg?style=for-the-badge)](https://sonarcloud.io/dashboard?id=org.lfenergy.operatorfabric%3Aoperatorfabric-core)
