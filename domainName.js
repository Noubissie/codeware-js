function domainName(url){
    return /www./.test(url)? url.split(.)[1]: url.replace(/http:\/{2}|https:\/{2}/,).split(/\./)[0]
  }
