// Example API utility
export async function fetchStudents() {
  // Replace with your backend API endpoint
  const response = await fetch('http://localhost:5000/api/students');
  if (!response.ok) throw new Error('Failed to fetch students');
  return response.json();
}
