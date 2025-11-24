'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: number;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const deleteCourse = async (id: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      try {
        await fetch(`/api/courses/${id}`, { method: 'DELETE' });
        fetchCourses(); // Refresh the list
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  return (
    <div className="container-fluid web3-dark-bg min-vh-100 py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="neon-text">Web3 Courses</h1>
          <Link href="/add-course" className="btn pixel-button">
            ➕ Add New Course
          </Link>
        </div>

        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-md-6 col-lg-4 mb-4">
              <div className="pixel-card p-3 h-100">
                <h5 className="neon-text">{course.title}</h5>
                <p className="small">{course.description}</p>
                <div className="mb-2">
                  <span className="badge bg-success me-2">Level: {course.level}</span>
                  <span className="badge bg-info">Duration: {course.duration}h</span>
                </div>
                
                <div className="d-flex gap-2 mt-3">
                  <Link 
                    href={`/courses/${course.id}`} 
                    className="btn pixel-button btn-sm flex-fill"
                  >
                    👁️ View
                  </Link>
                  <Link 
                    href={`/edit-course/${course.id}`} 
                    className="btn pixel-button btn-sm flex-fill"
                  >
                    ✏️ Edit
                  </Link>
                  <button 
                    onClick={() => deleteCourse(course.id)}
                    className="btn pixel-button btn-sm flex-fill"
                    style={{background: '#ff0000', borderColor: '#ff0000'}}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link href="/" className="btn pixel-button">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}