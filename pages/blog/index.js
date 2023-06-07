import Link from "next/link"
export default function Blog() {
  return (
    <div>
        <h1>Blog page</h1>
        <Link href="/blog/first">first blog </Link>
        <Link href="/blog/second">second blog</Link>
        <br></br><br></br><br></br>
        <Link href="/">Back</Link>
    </div>
  )
}
