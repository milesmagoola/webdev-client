import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <h4>Welcome to MK&apos;s world!</h4>
      <h6>The land of the free and the home of the brave. Or something idk I just work here.</h6>
      <ul>
        <li>
          <Link id="wd-toc-lab1-link" href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link id="wd-toc-book-link" href="/book/ch1">Chapter 1</Link>
        </li>
        <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      </ul>
    </div>
  );
}