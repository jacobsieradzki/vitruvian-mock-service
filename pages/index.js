import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/mock/available', fetcher)

  if (error) return <div>Failed to load channels</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map(channel => (
        <li key={channel.name}>
          <Link href={`/api/mock/${channel.id}`}>
            <a>{channel.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
