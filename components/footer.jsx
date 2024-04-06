import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
      © 2024 Yassine Dorgâa. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="https://www.yassinedorgaa.tech/">
          Portfolio
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="https://github.com/YassineDG"
        >
          Github
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="https://twitter.com/yassinedorgaa"
        >
          Twitter
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="https://www.linkedin.com/in/yassinedorgaa/"
        >
          Linkedin
        </Link>
      </nav>
    </footer>
  );
}
