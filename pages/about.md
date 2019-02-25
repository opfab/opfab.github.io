---
layout: page
title: What is OpFab?
permalink: /whatisopfab/
feature-img: "assets/img/pexels/triangular.jpeg"
tags: [About]
---

<h2>A Smart Assistant For System Operators</h2>

Operator Fabric is a modular, extensible, industrial-strength and field-tested platform for use in electricity, water, and other utility operations.

OpFab provides a notification GUI with strong added value and powerful backend modules :

- System visualization and console integration
- Precise alerting
- Workflow scheduling (*)
- Historian
- Scripting (ex: Python, JavaScript)

_* This feature could be addressed either as an internal module or through simplified and standardized (BPMN) integration with external workflow engines, we're still weighing the pros and cons of the two options._

<h2>Open source</h2>

OperatorFabric is part of the [LF Energy](https://www.lfenergy.org/) coalition, a project of The Linux Foundation that supports open source innovation projects within the energy and electricity sectors.

OpFab is an open source platform licensed under [Mozilla Public License V2](https://www.mozilla.org/en-US/MPL/2.0/). 
The source code is hosted on GitHub in this repository : [operatorfabric-core](https://github.com/opfab/operatorfabric-core).

<h2>Where is the name from ?</h2>

 - **Operator** represents the human being at the center of the platform, whether he's working in a control room or in the field
 - **Fabric**, from a modern digital perspective, is used as a metaphor to illustrate the idea of a simple work to create and weave together powerful software

That's why when we started this project it felt kind of natural to call it **OperatorFabric**, or **"OpFab"** for short (there's no need to explain it, is there? :-) ).
And in the end, in emails and presentations and such, we started referring to it as just **"OF"**.

<h2>Technology stack</h2>

<h3>Development</h3>
OperatorFabric is mostly written in Java and based on the Spring framework. This makes writing and integrating software for a simplified and better coordination very easy.
[![Using Java](https://img.shields.io/badge/Using-Java-%237473C0.svg?style=for-the-badge)]() 
[![Using Spring](https://img.shields.io/badge/Using-Spring-%236db33f.svg?style=for-the-badge)](https://spring.io/) 
[![Using Angular](https://img.shields.io/badge/Using-Angular-%237473C0.svg?style=for-the-badge)](https://angular.io/)
[![Using Swagger](https://img.shields.io/badge/Using-Swagger-%237473C0.svg?style=for-the-badge)](https://swagger.io/)

<h3>Continuous Integration / Continuous Delivery</h3>
OperatorFabric is built and integrated using battle-tested tools and (open) platforms. 
[![Built with Gradle](https://img.shields.io/badge/Built%20with-Gradle-%23410099.svg?style=for-the-badge)](https://gradle.org/)
[![Built with Maven](https://img.shields.io/badge/Built%20with-Maven-%23410099.svg?style=for-the-badge)](https://maven.apache.org/)
[![Using Travis CI](https://img.shields.io/badge/Using-Travis%20CI-%23FF647D.svg?style=for-the-badge)](https://travis-ci.org/opfab/operatorfabric-core)
[![Using SonarCloud](https://img.shields.io/badge/Using-SonarCloud-%23FF647D.svg?style=for-the-badge)](https://sonarcloud.io/dashboard?id=org.lfenergy.operatorfabric%3Aoperatorfabric-core)
