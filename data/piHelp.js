
export const PI_HELP_MENU = `
Minified example response from the sensor with readings and timestamp. Below is the format:

    [timestamp in ms],[x],[y],[z]


---
Endpoint query parameters:
e.g. ?time=1000&format=JSON
---

### Format of output=['DEFAULT' | 'JSON' | 'TXT'] (default: format shown above)
format        optional (enum) default='DEFAULT'

### Starting timestamp (default: 0 for iOS file, current for mock)
timestamp     required for iOS files (int) default=0

### Starting timestamp (default: 500)
interval      required for iOS files (int) default=500
`;