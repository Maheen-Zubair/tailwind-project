import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-900 sm:h-12 h-10 flex items-center justify-end">
      <ul className="flex gap-4 sm:gap-8 pr-5 text-white sm:text-lg text-md">
        <li>
          <Link href="/" className="hover:underline"> Home </Link>
        </li>
        <li>
        <Link href="/about" className="hover:underline">About </Link>

        </li>
        <li>
        <Link href="/contact" className="hover:underline">Contact</Link>

        </li>
      </ul>
    </div>
  );
}
