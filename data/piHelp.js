
export const PI_HELP_MENU = `
Minified example response from the sensor with readings and timestamp. Below is the format:

    [timestamp],[x],[y],[z]


---
Endpoint query parameters:
e.g. ?time=1000&format=JSON
---

### Format of output=['DEFAULT' | 'JSON'] (default: minified format shown above)
format        optional (enum) default='DEFAULT'

### Starting timestamp (default: now)
time     optional (int) default=1614700000000
`;