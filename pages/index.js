import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Link href='/Contacts'>
        <a id='linkContacts'> See contacts</a>
      </Link>
    </div>
  )
}
