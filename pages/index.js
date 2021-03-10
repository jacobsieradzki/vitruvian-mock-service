import Link from 'next/link'
import { PI_TO_ANDROID, SENSORS_TO_PI } from '../data/channels'

function Item(item) {
  
  if (item.text) {
    return (
      <p>{item.text}</p>
    );
  }

  if (item.id && item.name) {
    return (
      <li key={item.name}>
        <Link href={`/api/${item.id}`}>
          <a>{item.name}</a>
        </Link>
      </li>
    );
  }

  return <></>;
}

export default function Index() {
  return (
    <ul>
      <h1>Sensors to Pi</h1>
      {SENSORS_TO_PI.map(Item)}

      <h1>Pi to Android</h1>
      {PI_TO_ANDROID.map(Item)}
    </ul>
  )
}
