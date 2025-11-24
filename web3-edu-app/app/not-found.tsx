import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-fluid web3-dark-bg min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <div className="pixel-card p-5">
          <h1 className="neon-text display-1 mb-4">404</h1>
          <h2 className="neon-text mb-4">Page Not Found</h2>
          <p className="mb-4">The page you're looking for doesn't exist in the blockchain.</p>
          <div className="d-flex gap-3 justify-content-center">
            <Link href="/" className="btn pixel-button">
              Home
            </Link>
            <Link href="/courses" className="btn pixel-button">
              Courses
            </Link>
            <Link href="/explore" className="btn pixel-button">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}