--- 
layout: page
title : Documentation
permalink: /documentation/
feature-img: "assets/img/pexels/pexels-photo-1476316.jpeg"
tags: [Documentation]
---

<head>
    <link rel="stylesheet" href="{{ "/assets/css/version_badges.css" | relative_url}}">
</head>
<div class="col-sm-12 col-md-6 pr-md-3">Below is the documentation for all versions.</div>
<table class="table table-borderless table-hover table-responsive-md w-100">
    {% for version in site.data.versions %}
    <tr>
        <td>{{ version.name }}
            {% for badge in version.badges %}
            <span class="badge {{badge.style}}">{{ badge.name }}</span>
            {% endfor %}
        </td>
        {% assign baseUrl = page.url | append: version.fullname %}
        <td><a class="text-dark" href="{{baseUrl | append: "/architecture" | relative_url }}">Architecture</a></td>
        <td><a class="text-dark" href="{{baseUrl | append: "/start" | relative_url }}">Getting Started</a></td>
        <td><a class="text-dark" href="{{baseUrl | append: "/user_guide" | relative_url }}">User Guide</a></td>
        <td><a class="text-dark" href="{{baseUrl | append: "/developer_guide" | relative_url }}">Developer Guide</a></td></tr>
    {% endfor %}
</table>
