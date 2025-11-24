'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddCoursePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    level: 'Beginner',
    duration: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/courses');
      }
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid web3-dark-bg min-vh-100 py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="pixel-card p-4">
              <h1 className="neon-text text-center mb-4">➕ Add New Course</h1>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label neon-text">Course Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="form-control pixel-input"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label neon-text">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control pixel-input"
                    rows={4}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label neon-text">Level</label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="form-select pixel-input"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label neon-text">Duration (hours)</label>
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="form-control pixel-input"
                      required
                    />
                  </div>
                </div>

                <div className="d-flex gap-3 justify-content-center mt-4">
                  <button type="submit" className="btn pixel-button px-4">
                    💾 Save Course
                  </button>
                  <button 
                    type="button" 
                    onClick={() => router.push('/courses')}
                    className="btn pixel-button px-4"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}