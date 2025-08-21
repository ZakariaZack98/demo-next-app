import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href='/products'>This link takes to product page</Link>
      <br></br>
      <Link href='/about'>This link takes to about page</Link>
    </div>
  );
}
