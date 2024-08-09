import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <br/>
      <Link href = "/name">name page Link</Link>
    </div>
  );
}
