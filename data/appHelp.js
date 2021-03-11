
export const APP_HELP_MENU = `
Minified example response from the Raspberry Pi with readings and timestamp. Below is the format:

    [ACTIVITY_TYPE] [param1] [param2];[ACTIVTY_TYPE] [param1];...
  
and example:

    0 1609506000000 50;3 1609506000500;0 1609506001000 51;0 1609506001500 55;...



---

enum ACTIVITY_TYPE:
  0 [timestamp] [value] # POSTURE value=[0-100]
  1 [timestamp] # SLOUCH_ALERT timestamp=[UNIX Timestamp with milliseconds]
  2 [timestamp] # SEDENTARY_ALERT
  3 [timestamp] # DOWNSTAIRS
  4 [timestamp] # JOGGING
  5 [timestamp] # SITTING
  6 [timestamp] # STANDING
  7 [timestamp] # UPSTAIRS
  8 [timestamp] # WALKING


---
Endpoint query parameters:
e.g. ?interval=500&readings=100&alerts=10&activities=40
---

### Format of output=['DEFAULT' | 'UNMINIFIED' | 'JSON' | 'CSV'] (default: minified format shown above)
format        optional (enum) default='DEFAULT'

### Starting timestamp (default: now)
timestamp     optional (int) default=1614700000000

### Between readings in milliseconds (default: 1 hour)
interval      optional (int) default=3600000

### Number of random POSTURE_READINGS to display (default: 3 days of 1 hour intervals).
readings      optional (int) default=72 

### Number of SLOUCH_ALERT and SEDENTARY_ALERT in the response. These are placed at a random index between 1-(interval-2) and the timestamp is mean of reading before and after.
alerts        optional int) default=5

### Number of 3-8 values in the response. These are placed at a random index between 1-(interval-2) and the timestamp is mean of reading before and after.
activities    optional (int) default=23 
`;