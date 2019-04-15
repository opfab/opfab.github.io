---
layout: page
title: User Guide
permalink: /userguide/
feature-img: "assets/img/pexels/pexels-photo-1476316.jpeg"
tags: [user,guide]
---
<h1> User Guide</h1>
{% for version in site.data.versions %}
{% if version.name > "0.1" %}
<h2>{{version.fullname}}</h2>
<h3>Getting Started</h3>
<h4><a class="text-dark" href="{{ "/documentation/" | append: version.fullname | append: "/start" | relative_url }}">the quickstart guide</a></h4>
<h3>Reference Documentation</h3>
<div>
    {% for categorie in site.data.subprojects %}
        {% if categorie.subcategories.size > 0 %}
            <h4>{{categorie.name}}</h4>
            {% assign docref = "/" | append: version.fullname | append: "/reference" %}
            {% for subcategorie in categorie.subcategories %}
                {% if subcategorie.list.size > 0 %}
                    <h5>{{subcategorie.name}}</h5>
                    {% for component in subcategorie.list %}
                    <a href="{{"/projects/" | append: categorie.id | append: "/" | append: subcategorie.id | append: "/" | append: component.id | append: docref | relative_url}}">
                    <h6>{{ component.name }}</h6>
                    </a>
                    {% endfor %}
                {% else %}
                    <a href="{{"/projects/" | append: categorie.id | append: "/" | append: subcategorie.id | append: docref  | relative_url}}">
                    <h6>{{ subcategorie.short }}</h6>
                    </a>
                {% endif %}
            {% endfor %}
        {% else %}
            <a href="{{"/projects/" | append: categorie.id | append: docref | relative_url }}">
            <h4>{{categorie.name}}</h4>
            </a>
        {% endif %}
    {% endfor %}
</div>
{% endif %}
{% endfor %}
