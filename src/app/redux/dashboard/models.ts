export interface IState {
  serverUsageAndStatus: any[];
  recentUpdates: any[];
  APIsUsageAndStatus: any[];
}

export const initialState: IState = {
  serverUsageAndStatus: [
    {
      id: 1,
      serverName: 'Hercules',
      method: '[ ARD CHARGEN DNS LDAP MDNS NTP QOTD SSYN TCPMIX UDPSOURCE WSD OVH SNMP WIZARD TCPIMP TCPRAND ISYN XSYN VSE SQLPING ]',
      runningAttack: 9,
      totalCapacity: 10
    },
    {
      id: 2,
      serverName: 'Giant',
      method: '[ ARD CHARGEN DNS LDAP MDNS NTP QOTD SSYN TCPMIX UDPSOURCE WSD OVH SNMP WIZARD TCPIMP TCPRAND ISYN XSYN VSE SQLPING ]',
      runningAttack: 9,
      totalCapacity: 10
    },
    {
      id: 3,
      serverName: 'Thor',
      method: '[ ARD CHARGEN DNS LDAP MDNS NTP QOTD SSYN TCPMIX UDPSOURCE WSD OVH SNMP WIZARD TCPIMP TCPRAND ISYN XSYN VSE SQLPING ]',
      runningAttack: 7,
      totalCapacity: 10
    },
    {
      id: 4,
      serverName: 'Beta',
      method: '[ ARD CHARGEN DNS LDAP MDNS NTP QOTD SSYN TCPMIX UDPSOURCE WSD OVH SNMP WIZARD TCPIMP TCPRAND ISYN XSYN VSE SQLPING ]',
      runningAttack: 9,
      totalCapacity: 15
    },
    {
      id: 5,
      serverName: 'Small2',
      method: '[ ARD CHARGEN DNS LDAP MDNS NTP QOTD SSYN TCPMIX UDPSOURCE WSD OVH SNMP WIZARD TCPIMP TCPRAND ISYN XSYN VSE SQLPING ]',
      runningAttack: 9,
      totalCapacity: 15
    },
    {
      id: 6,
      serverName: 'Bypass',
      method: '[ SYNBYPASS UDPBYPASS ACKBYPASS ]',
      runningAttack: 1,
      totalCapacity: 15
    },
    {
      id: 7,
      serverName: 'L7Server1',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 9,
      totalCapacity: 9
    },
    {
      id: 8,
      serverName: 'L7Server2',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 3,
      totalCapacity: 9
    },
    {
      id: 9,
      serverName: 'L7Server3',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 3,
      totalCapacity: 9
    },
    {
      id: 10,
      serverName: 'L7Server4',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 6,
      totalCapacity: 9
    },
    {
      id: 11,
      serverName: 'L7Server6',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 6,
      totalCapacity: 9
    },
    {
      id: 12,
      serverName: 'L7Server7',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 7,
      totalCapacity: 9
    },
    {
      id: 13,
      serverName: 'L7Server8',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 4,
      totalCapacity: 9
    },
    {
      id: 14,
      serverName: 'L7Server9',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 8,
      totalCapacity: 9
    },
    {
      id: 15,
      serverName: 'L7Server10',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 5,
      totalCapacity: 8
    },
    {
      id: 16,
      serverName: 'L7Server11',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 6,
      totalCapacity: 9
    },
    {
      id: 17,
      serverName: 'Free1',
      method: '[ X ]',
      runningAttack: 0,
      totalCapacity: 10
    },
    {
      id: 18,
      serverName: 'Test',
      method: '[ X ]',
      runningAttack: 0,
      totalCapacity: 7
    },
    {
      id: 19,
      serverName: 'FreeL7',
      method: '[ FREEL7 ]',
      runningAttack: 5,
      totalCapacity: 15
    },
    {
      id: 20,
      serverName: 'L7Server0',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 3,
      totalCapacity: 9
    },
    {
      id: 21,
      serverName: 'Free2',
      method: '[ FREEL FREED FREEN ]',
      runningAttack: 2,
      totalCapacity: 8
    },
    {
      id: 22,
      serverName: 'L7Server12',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 4,
      totalCapacity: 9
    },
    {
      id: 23,
      serverName: 'L7Server13',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 2,
      totalCapacity: 9
    },
    {
      id: 24,
      serverName: 'L7Server14',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 6,
      totalCapacity: 9
    },
    {
      id: 25,
      serverName: 'L7Server15',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 8,
      totalCapacity: 9
    },
    {
      id: 26,
      serverName: 'L7Server16',
      method: '[ HTTP TOR BROWSER SPAM SOCKETFLOOD WSS SOCKETENGINE ]',
      runningAttack: 4,
      totalCapacity: 9
    }
  ],
  recentUpdates: [
    {
      id: 1,
      title: 'UPDATES & FIX',
      lastTime: '5 day ago',
      content: [
        'Discount code (15% off!): happychristmas',
        'Sorry about the recent downtime of website (9 hours).',
        'An extra day has been added to all users, shouldnt happen again.',
        '',
        'Layer 7 attack IP pool has been updated. -27500+ Unique IPs',
        '',
        'Layer 4 attack lists updated.',
        '',
        'This has significantly improved power for Layer 4 and Layer 7!',
        '',
        'Everything is working perfectly and power is high!',
        'Fixed a problem starting attacks.',
        '',
        'Our attack connection handler had crashed, a backup will be added to prevent this happening in the future.',
        '',
        '1 day added to all users, sorry for the inconvenience.',
        '',
      ]
    },
    {
      id: 2,
      title: 'MAINTENANCE OVER',
      lastTime: '15 day ago',
      content: [
        'Everything is working perfectly.',
        '- Added more Layer 4 attack capacity.',
        '- Added more Layer 7 STORM capacity (150 total)',
        'The only problem is reduced capacity for Socket, chrome-bypass and http-request methods but more will be added soon. In the meantime you can use storm methods.',
        'Added 1 extra day to all users in compensation.',
      ]
    },
    {
      id: 3,
      title: 'UPDATES & IMPROVEMENTS',
      lastTime: '20 day ago',
      content: [
        'stresser.net is now using a new attack system.',
        'Attacks are sent instantly with no delays, after pressing the attack button you will see the response message within 3 seconds.',
        'How ever it may take 1-20 seconds before the target starts receiving the attack (usually less than 10).',
        '',
        '- Updated Layer 7 attack IPs: 31500+ in total.',
        '- Updated Layer 4 attack vectors, power improved.',
        '- Improved instant attack sending now it takes around 2 seconds to launch Layer 4 and Layer 7 attacks!',
        '',
        'Free, regular and premium network are fully working with high power and stability, as always.',
      ]
    }
  ],
  APIsUsageAndStatus: [
    {
      id: 1,
      title: 'API: Smart [ JSBYPASS UNIVERSAL UNIV2 ]',
      value: 23,
      total: 25
    },
    {
      id: 2,
      title: 'API: Storm [ STORMHTTP STORMBYPASS STORMCAPTCHA ]',
      value: 54,
      total: 150
    },
    {
      id: 3,
      title: 'API: Storm [ STORMHTTP STORMBYPASS STORMCAPTCHA ]',
      value: 100,
      total: 150
    },
  ],
};
