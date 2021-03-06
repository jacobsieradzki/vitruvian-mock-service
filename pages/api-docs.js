import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FILE_REPO_URL, FILE_API_URL } from '@h/fileOutput';

function ItemLink({ href, name }) {
  return (
    <li key={name}>
      <Link href={`/api/${href}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
}

function SensorLink({ item }) {
  console.log(item);
  const fileName = item.name;
  return (
    <li>
      <Link href={`/api/pi/${fileName}`}>
        <a>{item.name}</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href={`/api/pi/${fileName}?format=JSON`}>
        <a>JSON</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href={item.html_url}>
        <a>GitHub</a>
      </Link>
    </li>
  );
}

function AppItem({ label, href }) {
  return (
    <>
      <p>{label}</p>
      <ItemLink href={`${href}`} name={`minified (default)`} />
      <ItemLink href={`${href}?format=UNMINIFIED`} name={`unminified`} />
      <ItemLink href={`${href}?format=JSON`} name={`json`} />
      <ItemLink href={`${href}?format=CSV`} name={`csv`} />
    </>
  )
};

export default function Index() {

  const [iosTests, setIosTests] = useState([]);
  useEffect(() => {
    fetch(FILE_API_URL).then(x => x.json()).then(setIosTests)
      .catch(console.log);
  }, []);

  return (
    <ul>
      <h2>Sensors to Pi</h2>

      <ItemLink href="pi/help" name="Help" />
      
      <h3>Test 1</h3>
      <p>x = 0, y = 2.5*sin(time + 2.5), z = 1</p>
      <ItemLink href="pi/test1_mpu1" name="mpu_1" />
      <p>x = 0, y = 3*sin(time + 1.5), z = 1</p>
      <ItemLink href="pi/test1_mpu2" name="mpu_2" />

      <h2>Files from iOS Sensor App</h2>
      {iosTests.length > 0 ? (
        <>
          <p>Fetched from <a href={FILE_REPO_URL}>jacobsieradzki/vitruvian-hardware/ios_tests</a> on GitHub</p>
          {iosTests.map((x, i) => <SensorLink key={i} item={x} />)}
        </>
      ) : (
        <p>No tests available. Check the ios_tests folder of the vitruvian-hardware repo <a href={FILE_REPO_URL}>here</a>.</p>
      )}

      <h2>Files from MS Teams</h2>
      <ItemLink href="file/21-06-50mpuOutput.txt" name="21-06-50mpuOutput.txt" />
      <ItemLink href="file/21-49-27mpuOutput.txt" name="21-49-27mpuOutput.txt" />

      <h2>Pi to Android</h2>
      <ItemLink href="app/help" name="Help" />
      <AppItem 
        label="posture = floor(25 * sin((0.1 / interval) * timestamp + 80.1) + 55)"
        href="app/test1" />
      <AppItem 
        label='test "abc" from Firebase'
        href="app/abc" />
    </ul>
  )
};