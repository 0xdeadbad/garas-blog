{% set data = load_data(url="{{ config.base_url }}/hygraph/{{ id }}", format="json") -%}
+++
title = {{ data.data.post.title }}
date = {{ data.data.post.createdAt }}
+++

{{ data.data.post.content.markdown | markdown(inline=true) }}