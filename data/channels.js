
export const SENSORS_TO_PI = [
  {
    text: 'x = 0, y = 2.5*sin(time + 2.5), z = 1'
  },
  {
    id: 'pi/mpu?id=test1_mpu1',
    name: 'mpu_1',
    filters: ['mock']
  },
  {
    id: 'pi/mpu?id=test1_mpu2',
    name: 'mpu_2',
    filters: ['mock']
  },
  {
    text: 'Files from MS Teams'
  },
  {
    id: 'file/21-06-50mpuOutput.txt',
    name: "21-06-50mpuOutput.txt",
    filters: ['real']
  },
  {
    id: 'file/21-49-27mpuOutput.txt',
    name: "21-49-27mpuOutput.txt",
    filters: ['real']
  }
];

export const PI_TO_ANDROID = [
  {
    id: 'app/help',
    name: 'Pi to Android HELP',
    filters: ['mock']
  },
  {
    text: 'posture = floor(25 * sin((0.1 / interval) * timestamp + 80.1) + 55)',
  },
  {
    id: 'app/trig?format=DEFAULT',
    name: 'MINIFIED (default)',
    filters: ['mock']
  },
  {
    id: 'app/trig?format=UNMINIFIED',
    name: 'UNMINIFIED',
    filters: ['mock']
  },
  {
    id: 'app/trig?format=CSV',
    name: 'CSV',
    filters: ['mock']
  },
  {
    id: 'app/trig?format=JSON',
    name: 'JSON',
    filters: ['mock']
  },
];