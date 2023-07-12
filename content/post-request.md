+++
title = "An unreasonable way to reach me"
description = "An unreasonable way to reach me via POST request."
+++

[post.arkan.me](https://post.arkan.me) is a small service that you can subscribe me or reach me via POST request. It is also [open source](https://github.com/gokhanarkan/post.arkan.me).

Simply try this.

```bash
curl -X "POST" "https://post.arkan.me" \
	 -H 'Content-Type: application/json; charset=utf-8' \
	 -d $'{
  "name": ">{your name}(optional)<",
  "email": ">{your email}<",
  "message": ">{your message}<",
  "phone": ">{your phone}(optional)<"
}'
```