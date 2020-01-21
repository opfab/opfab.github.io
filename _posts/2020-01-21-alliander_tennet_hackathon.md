---
layout: post
title: 3 Days of Open Source Development for Asset Monitoring
tags: [Event, LF Energy, TenneT, Alliander, RTE, Asset Monitoring]
excerpt_separator: <!--more-->
---
OperatorFabric was participated in 3 Days of Open Source Development for Asset Monitoring use cases.
<!--more-->

On January 13-15, 2020 in Paris, France, a team of IT specialists from Alliander, TenneT and RTE took part in a 
collaborative coding event to create open source software for asset monitoring. 
This work was based on RTE’s Plasma, Alliander’s OSGP, TenneT’s Data Platform and OperatorFabric.

The aim was to learn more about each other’s projects and to to show the ability to transport data generated in a 
simulator through OSGP middleware and Apache Kafka, and display it in a substation diagram, perform basic analytics and 
generate an alert on deviation. 

The proof of concept that was produced performed the following tasks:

* Gather data from 2 transformers using the 61850 protocol (Active power and Oil temperature)
* Display a real time view of the substation hosting the 2 transformers.
* Analysis of the thermal behavior of the transformers
* Alert through OperatorFabric in case of thermal deviation, and highlighting in the substation view of the defective 
transformer.

![Final result in OperatorFabric]({{"/assets/img/posts/2020-01-21_hackathon.png" | relative_url}})

See the [LF Energy blog post](https://www.lfenergy.org/blog/2019/12/18/lf-energy-members-collaborate-3-days-of-open-source-development-for-asset-monitoring/) 
about the event.




