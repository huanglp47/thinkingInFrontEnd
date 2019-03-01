缓存验证流程
在浏览器和服务端设置都允许缓存策略的前提下（服务端响应头的Cache-Control不为no-store，即禁止任何缓存），如果某个请求的响应头设置了Last-Modified或Etag：

第一次请求：浏览器会记住响应头的Last-Modified和Etag；
第二次及以后请求：浏览器会携带保存的Last-Modified和Etag分别作为If-Modified-Since和If-None-Match放入请求头中携带过去，以此到服务端验证此次请求的资源是否过期或更新；服务端进行判断，若过期或更新，则返回新的资源，否则返回空即可，节省服务端消耗。
---------------------


Expires
<meta http-equiv="expires" content="Fri, 22 Aug 2014 00:52:49 GMT" />
HTTP 1.0，设置缓存的截止时间，在此之前，浏览器对缓存的数据不重新发请求。
它与Last-Modified/Etag结合使用，用来控制请求文件的有效时间，当请求数据在有效期内，浏览器从缓存获得数据。
Last-Modifed/Etag能够节省一点宽带，但是还会发一个HTTP请求。

Catch-Control
<!--Cache-Control: max-age=秒 -->
<meta http-equiv="Cache-Control" content="max-age=120"/>
如果Cache-Control与expires同时存在，Cache-Control生效。expires 的一个缺点就是，返回的到期时间是服务器端的时间，这样存在一个问题，如果客户端的时间与服务器的时间相差很大，那么误差就很大，所以在HTTP 1.1版开始，使用Cache-Control: max-age=秒替代。
