# Project 4 - Evaluate a news article with Natural Language Processing

## NLP is provided by meaningCloud API.

- https://www.meaningcloud.com/developer/apis

## Webpack confirguration

3 config files

- Common -> code shared between production & development environmental
- Prod -> production config
- Dev -> development config

## How does the REGEX URL works

- // protocol identifier
- "(?:(?:(?:https?|ftp):)?//)"

---

- // user:pass authentication
- "(?:\\S+(?::\\S\*)?@)?"
- "(?:"

---

- // IP address exclusion
- // private & local networks
- "(?!(?:10|127)(?:\\.\\d{1,3}){3})"
- "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})"
- "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})"

---

- // IP address dotted notation octets
- // excludes loopback network 0.0.0.0
- // excludes reserved space >= 224.0.0.0
- // excludes network & broacast addresses
- // (first & last IP address of each class)
- "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])"
- "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}"
- "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))"
- "|"

---

- // host name
- "(?:(?:[a-z\\u00a1-\\uffff0-9]-\*)\_[a-z\\u00a1-\\uffff0-9]+)"

---

- // domain name
- "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-_)_[a-z\\u00a1-\\uffff0-9]+)\_"

---

- // TLD identifier
- "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))"

---

- // port number
- "(?::\\d{2,5})?"

---

- // resource path
- "(?:[/?#]\\S\*)?"

---

[Stackoverflow](https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url)

## Project include service worker for offline capabilities
