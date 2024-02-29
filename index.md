---
layout: default
---

# A Smart Assistant For System Operators


OperatorFabric is a modular, extensible, industrial-strength platform for use in electricity, water, and other utility operations.

It aims to facilitate operational activities for utilities in two ways :

* Centralize real time business events in a single place to avoid having multiple screens/software. To do so,  OperatorFabric provides 
    * event dispatching rules on a per user basis (based on groups, organizational entities, processes... )
    * event-sending endpoints for business applications 
    * a mechanism of templating to customize events rendering (using HTML5 )
    * a view of the events on a timeline or a calendar 
    * storage of all the events (archive feature)
    * notifications via sounds 
    * possibilities  to integrate screen form other applications

    
* Facilitate interactions between operational control centers:
    * Share information in real time, as pre-formatted cards that can be sent either manually by operators or automatically by external solutions.
    * Introduce pre-formatted question/response exchanges between control centers. This can be used to implement operational processes (with the notion of "last time to respond").  
    * Share events in calendar (also allowing repeating events)

In addition, the following features are available: internationalization, light/dark mode for the UI, realtime connected users supervision, authorization mechanism.

Integration with existing IT systems is an overarching concern: support of Firefox and Chromium-based browsers, docker deployment, communication with business applications via REST API or Kafka, integration with external authentication systems (via OAuth2), monitoring via Prometheus endpoints.

![Feed screen layout](./assets/img/of_screenshots/feed_screenshot.png){:class="img-fluid"}



# Open source

OperatorFabric is part of the [LF Energy](https://www.lfenergy.org/) coalition, a project of The Linux Foundation that supports open source innovation projects within the energy and electricity sectors.

OpFab is an open source platform licensed under [Mozilla Public License V2](https://www.mozilla.org/en-US/MPL/2.0/). 
The source code is hosted on GitHub in this repository : [operatorfabric-core](https://github.com/opfab/operatorfabric-core).

# Technology stack

## Development
OperatorFabric is mostly written in Java and based on the Spring framework. This makes writing and integrating software for a simplified and better coordination very easy.

[![Using Java](https://img.shields.io/badge/Using-Java-%237473C0.svg?style=for-the-badge)](https://www.java.com) 
[![Using Spring](https://img.shields.io/badge/Using-Spring-%236db33f.svg?style=for-the-badge)](https://spring.io/) 
[![Using Angular](https://img.shields.io/badge/Using-Angular-%237473C0.svg?style=for-the-badge)](https://angular.io/)
[![Using Spring](https://img.shields.io/badge/Using-MongoDB-%236db33f.svg?style=for-the-badge)](https://www.mongodb.com/community/) 
[![Using Swagger](https://img.shields.io/badge/Using-Swagger-%237473C0.svg?style=for-the-badge)](https://swagger.io/)
[![Using Spring](https://img.shields.io/badge/Using-RabbitMQ-%236db33f.svg?style=for-the-badge)](https://www.rabbitmq.com/) 

## Continuous Integration / Continuous Delivery
OperatorFabric is built and integrated using battle-tested tools and (open) platforms. 

[![Built with Gradle](https://img.shields.io/badge/Built%20with-Gradle-%23410099.svg?style=for-the-badge)](https://gradle.org/)
[![Using Github Actions](https://img.shields.io/badge/Using-Github%20Actions-%23FF647D.svg?style=for-the-badge)](https://github.com/opfab/operatorfabric-core/actions)
[![Using SonarCloud](https://img.shields.io/badge/Using-SonarCloud-%23FF647D.svg?style=for-the-badge)](https://sonarcloud.io/dashboard?id=org.lfenergy.operatorfabric%3Aoperatorfabric-core)

