---
ref: home
layout: splash
title: "Department of Informatics"
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/splash1.jpg
  cta_label: "<i class='fa fa-download'></i> News"
  cta_url: "/en/posts/"
  caption:
excerpt: 'A flexible two-column Jekyll theme. Perfect for personal sites, blogs, and portfolios hosted on GitHub or your own server.<br /> <small><a href="https://github.com/mmistakes/minimal-mistakes/releases/tag/4.2.1">Latest release v4.2.1</a></small><br /><br />'
feature_row:
  - image_path: /assets/images/mm-customizable-feature.png
    title: "{{ site.posts.first.title }}"
    excerpt: "{{ site.posts.first.excerpt }}"
    url: "{{ site.posts.first.url }}"
    btn_label: "Learn More"
  - image_path: /assets/images/mm-responsive-feature.png
    title: "{{ site.posts.second.title }}"
    excerpt: "{{ site.posts.first.excerpt }}"
    url: "{{ site.posts.first.url }}"
    btn_label: "Learn More"
  - image_path: /assets/images/mm-free-feature.png
    title: "{{ site.posts.third.title }}"
    excerpt: "{{ site.posts.third.excerpt }}"
    url: "{{ site.posts.third.url }}"
    btn_label: "Learn More"
github:
  - excerpt: ''
intro:
  - excerpt: ''
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include posts-sorting.html %}
