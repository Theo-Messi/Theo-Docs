#HTTP

[HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP) stands for HyperText Transfer Protocol, which is a protocol for transmitting hypermedia documents (such as `HTML`) application layer protocol

::: tip Main features of HTTP protocol

- is an application layer protocol
- **Follow the classic "client-server" model** (client sends request, server returns response)
- **Flexible and scalable**
  - Semantic freedom, only stipulates the basic format of the message, and each component of the message can be customized by the developer.
  - Diversity of transmission formats
- **No connection**: Disconnect every time a request is completed (long connections are enabled by default after HTTP/1.1)
- **Stateless**: The HTTP protocol has no memory for transaction processing (each request, the browser and the server are independent of each other)
- **Reliable transmission**: HTTP protocol is a reliable transmission protocol (based on TCP/IP protocol)
- **Clear text transmission**: Messages in the protocol are directly transmitted in text form (changed to binary transmission after HTTP/2.0)

:::

## Evolution of the HTTP protocol

[HTTP protocol evolution and characteristics of each version](https://mp.weixin.qq.com/s/RuHaKgwpCMvPQeEwe31k2A)

### HTTP/0.9

> Launched in 1990

The function is simple, there is only one `GET` method, and it only supports plain text content

### HTTP/1.0

> Officially released in May 1996

- Content in any format can be sent
- Added header information to requests and responses
- New method: `POST HEAD`
- Added status codes, multi-character set support, permissions, caching, content encoding and other functions

### HTTP/1.1

> Released in January 1997, it is the **currently mainstream HTTP protocol version**

- **Long connection**: TCP connection is not closed by default and can be reused by multiple requests
- **Pipeline mechanism**: In the same TCP link, the client can send multiple requests at the same time
- **chunked transfer encoding**
- Cache handling: `Cache-Control` and `Etag/If-None-Match`
- http
- Added `TLS` support: supports `HTTPS` transmission
- New method: `PUT PATCH OPTIONS DELETE`

::: warning HTTP/1.1 Disadvantages

- Single-way connection request is inefficient: each TCP connection can only correspond to one HTTP request
- Head-of-queue blocking: When a request in the sequence of requests sent sequentially is blocked for some reason, all requests queued later will also be blocked, causing the client to be unable to receive data for a long time.
- Redundant header information
- Only requests initiated by the client are allowed
- Clear text transmission

:::

### HTTP/2.0

> Released in 2015, mainly based on the SPDY protocol (in 2009, Google disclosed its self-developed SPDY protocol, which mainly solved the problem of low efficiency of HTTP/1.1)

- **Binary transmission**: header information and data body are both binary
- **Multiplexing/Binary Framing**: Multiple requests can be sent simultaneously in one TCP connection
- **Header Compression** (compression using HPACK algorithm)
- **Server Push**: Allows the server to proactively send resources to the client without request
- **Request Priority**

::: warning HTTP/2.0 Disadvantages

- Long time to establish connection (essentially a TCP problem)
- The problem of head-of-line blocking is not completely solved
- Poor performance in weak network environment

:::

### HTTP/3.0

HTTP/3.0, also known as HTTP Over QUIC, abandons the TCP protocol and instead uses the QUIC protocol based on the UDP protocol.

- Implements TCP-like flow control and transmission reliability functions
- Implemented fast handshake function
- Integrated TLS encryption
- Multiplexing to completely solve the problem of TCP squadron head blocking

## HTTP status code

The responsibility of the `HTTP` status code is to describe the returned request result when the client sends a request to the server. With the help of status codes, users can know whether the server processed the request normally or whether an error occurred.

There are mainly the following `5` response category status codes

- `1XX` is an informational status code indicating that the received request is being processed
- `2XX` is a success status code, indicating that the request has been processed normally.
- `3XX` is a redirect status code indicating that additional operations are required to complete the request
- `4XX` is a client error status code, indicating that the server cannot process the request
- `5XX` is a server error status code, indicating that the server has an error in processing the request.

### 2XX Success

- `200 OK` means that the request sent from the client is processed normally on the server side
- `204 No Content` means that the request is successful but the returned response message does not contain the body part of the entity.
- `206 Partial Content` indicates that the client made a range request

### 3XX redirect

- `301 Moved Permanently` permanent redirection, indicating that the resource has been assigned a new `URL`
- `302 Found` temporary redirection, indicating that the resource has been temporarily assigned a new `URL`
- `303 See Other` means that there is another `URL` for the resource, and the `GET` method should be used to obtain the requested resource.
- `304 Not Modified` means that when the client sends a request with conditions, the server allows the request to access the resource but the conditions are not met.
- `307 Temporary Redirect` has the same meaning as `302 Found`

### 4XX client error

- `400 Bad Request` means there is a syntax error in the request message
- `401 Unauthorized` means that the request sent needs to have authentication information passed `HTTP` authentication
- `403 Forbidden` means that access to the requested resource was denied by the server
- `404 Not Found` means the requested resource cannot be found on the server

### 5XX server error

- `500 Internal Server Error` means that an error occurred on the server side when executing the request.
- `503 Service Unavailable` means that the server is temporarily overloaded or is undergoing downtime for maintenance and is currently unable to process requests.

## The difference between GET and POST

> Security means that the request method will not destroy resources on the server
>
> Impotence means that if you perform the same operation multiple times, the result will be the same

- **Semantic** (the most essential difference)
  - `GET` is to obtain the specified resource from the server. The `GET` method is safe, idempotent, and can be cached
  - `POST` processes the specified resource based on the request load (message body). The specific processing method varies depending on the resource type. `POST` is not safe, not idempotent, and (in most implementations) not cacheable.

In the actual process, developers may not necessarily implement the `GET` and `POST` methods according to the semantics defined by the RFC specification.

- You can use the `GET` method to implement requests to add or delete data. The `GET` method implemented in this way is naturally not safe and idempotent;
- You can use the `POST` method to implement a request to query data. The `POST` method implemented in this way is naturally safe and idempotent.

::: tip Can GET request include body?
The RFC specification does not stipulate that `GET` requests cannot carry bodies. Just because the `GET` request defined by the RFC specification is to obtain resources, there is no need to use the body according to this semantics. <br />
**Theoretically any HTTP request can carry a body, and the URL of any HTTP request can also carry query parameters**
:::
