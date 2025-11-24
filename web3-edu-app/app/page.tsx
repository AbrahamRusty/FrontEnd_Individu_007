import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-fluid web3-dark-bg min-vh-100">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <div className="pixel-card p-4 text-center">
            <h1 className="neon-text mb-4">🌐 WEB3 Platform Edukasi</h1>
            
            <div className="pixel-border p-3 mb-4">
              <h3 className="neon-text">Informasi Mahasiswa</h3>
              <p className="mb-1"><strong>Name:</strong> Rustacle</p>
              <p className="mb-1"><strong>NIM:</strong> 535240007</p>
              <p><strong>Topic:</strong> Web3 platform edukasi</p>
            </div>

            <div className="row mt-4">
              <div className="col-md-4 mb-2">
                <Link href="/courses" className="btn pixel-button w-100">
                  Courses
                </Link>
              </div>
              <div className="col-md-4 mb-2">
                <Link href="/explore" className="btn pixel-button w-100">
                  Explore
                </Link>
              </div>
              <div className="col-md-4 mb-2">
                <Link href="/add-course" className="btn pixel-button w-100">
                  Add Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}