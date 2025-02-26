function ipv4Parser(ip, mask) {

    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);
  
    const network = [];
    const host = [];
  
    for (let i = 0; i < 4; i++) {
      network[i] = ipOctets[i] & maskOctets[i];
      host[i] = ipOctets[i] & (~maskOctets[i] & 255);
    }
  
    const networkStr = network.join('.');
    const hostStr = host.join('.');
  
    return [networkStr, hostStr];
}