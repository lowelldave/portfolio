import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start gap-4 py-16">
      <p className="eyebrow">404</p>
      <h1 className="text-4xl">Page not found.</h1>
      <p className="text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="link-arrow mt-2">
        Return home <span className="arrow">→</span>
      </Link>
    </div>
  );
}
