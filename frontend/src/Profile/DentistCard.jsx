import React from 'react';

const DentistCard = ({ image, firstName, lastName, diplomas, experience, courses }) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-2 hover:shadow-xl h-full w-[390px] xl:w-[370px]">
      <img
        src={`data:${image.content_type};base64,${image.image_data}`}
        alt={fullName}
        className="w-full h-60 object-cover rounded-xl mb-4"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{fullName}</h2>

        <div className="space-y-3 text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-700">🎓 Diplomas:</h4>
            <p>{diplomas}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">🧳 Experience:</h4>
            <p>{experience}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700">📚 Courses:</h4>
            <p>{courses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistCard;