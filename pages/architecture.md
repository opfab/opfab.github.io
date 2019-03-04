--- 
layout: page
title : Architecture
permalink: /documentation/
feature-img: "assets/img/pexels/pexels-photo-1476316.jpeg"
tags: [Documentation]
---

<head>
    <link rel="stylesheet" href="{{ "/assets/css/version_badges.css" | relative_url}}">
</head>
<div class="col-sm-12 col-md-6 pr-md-3">Below is the architecture documentation for all versions.</div>
<table class="table table-borderless table-hover table-responsive-md w-100">
    {% for version in site.data.versions %}
    <tr>
        <td>{{ version.name }}
            {% for badge in version.badges %}
            <span class="badge {{badge.style}}">{{ badge.name }}</span>
            {% endfor %}
        </td>
        {% assign baseUrl = page.url | append: version.fullname %}
        <td><a class="text-dark" href="{{baseUrl | append: "/architecture" | relative_url }}">Documentation</a></td>
    </tr>
    {% endfor %}
</table>
