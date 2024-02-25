import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center mt-[15%] gap-2">
      🥹
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested product.</p>
      <Link href="/">
        <button className="h-12 w-40 border hover:bg-secondary-dark tracking-[1px] leading-normal text-primary-very-dark hover:text-secondary-white font-bold text-sm">
          Go Back
        </button>
      </Link>
    </main>
  );
}
