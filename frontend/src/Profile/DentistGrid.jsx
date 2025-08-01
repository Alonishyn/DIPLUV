import React, { useEffect, useState } from 'react';
import DentistCard from './DentistCard';

const DentistGrid = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="px-10 py-16 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-100 gap-10">
        {doctors.map((doc, index) => (
          <DentistCard
            key={index}
            firstName={doc.firstName}
            lastName={doc.lastName}
            diplomas={doc.diplomas}
            experience={doc.experience}
            courses={doc.courses}
            image={doc.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DentistGrid;