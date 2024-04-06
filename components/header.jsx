import Link from "next/link";

export function Header() {
  return (
    (
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <EyeIcon className="h-6 w-6" />
          <span className="ml-2 text-l font-bold">visionary AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/">
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/image-generator">
            Image Generation
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/chat">
            Chatbot
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/contact">
            Contact
          </Link>
        </nav>
      </header>
    )
  );
}


function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
