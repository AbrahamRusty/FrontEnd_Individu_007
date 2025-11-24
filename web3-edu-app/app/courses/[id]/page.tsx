'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: number;
  createdAt: string;
}

export default function CourseDetailPage() {
  const params = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchCourse();
    }
  }, [params.id]);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`/api/courses/${params.id}`);
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error('Error fetching course:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container-fluid web3-dark-bg min-vh-100 d-flex justify-content-center align-items-center">
        <div className="neon-text">Loading...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container-fluid web3-dark-bg min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h2 className="neon-text mb-4">Course not found</h2>
          <Link href="/courses" className="btn pixel-button">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid web3-dark-bg min-vh-100 py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="pixel-card p-4">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <h1 className="neon-text">{course.title}</h1>
                <Link href="/courses" className="btn pixel-button btn-sm">
                  ← Back
                </Link>
              </div>

              <div className="mb-4">
                <h4 className="neon-text">Description</h4>
                <p>{course.description}</p>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="pixel-border p-3 text-center">
                    <h5 className="neon-text">Level</h5>
                    <p className="mb-0">{course.level}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pixel-border p-3 text-center">
                    <h5 className="neon-text">Duration</h5>
                    <p className="mb-0">{course.duration} hours</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <Link href={`/edit-course/${course.id}`} className="btn pixel-button me-3">
                  ✏️ Edit Course
                </Link>
                <Link href="/courses" className="btn pixel-button">
                  📚 All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}