import Link from 'next/link';

function ItemLink({ href, name }) {
  return (
    <li key={name}>
      <Link href={`/api/${href}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
}

function AppItem({ label, href }) {
  return (
    <>
      <p>{label}</p>
      <ItemLink href={`${href}&format=DEFAULT`} name={`minified (default)`} />
      <ItemLink href={`${href}&format=UNMINIFIED`} name={`unminified`} />
      <ItemLink href={`${href}&format=JSON`} name={`json`} />
      <ItemLink href={`${href}&format=CSV`} name={`csv`} />
    </>
  )
};

export default function Index() {
  return (
    <ul>
      <h2>Sensors to Pi</h2>
      
      <h3>Test 1</h3>
      <p>x = 0, y = 2.5*sin(time + 2.5), z = 1</p>
      <ItemLink href="pi/test1_mpu1" name="mpu_1" />
      <p>x = 0, y = 3*sin(time + 1.5), z = 1</p>
      <ItemLink href="pi/test1_mpu2" name="mpu_2" />

      <h2>Files from MS Teams</h2>
      <ItemLink href="file/21-06-50mpuOutput.txt" name="21-06-50mpuOutput.txt" />
      <ItemLink href="file/21-49-27mpuOutput.txt" name="21-49-27mpuOutput.txt" />

      <h2>Pi to Android</h2>
      <ItemLink href="app/help" name="Help" />
      <AppItem 
        label="posture = floor(25 * sin((0.1 / interval) * timestamp + 80.1) + 55)"
        href="app/test1?" />
    </ul>
  )
};