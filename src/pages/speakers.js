import React from 'react';
// import './Speakers.css'; // Ensure styling is imported

const Speakers = () => {
  const sampleSpeakers = [
    {
      _id: '1',
      name: 'Dr. Jane Doe',
      bio: 'Expert in Cardiovascular Health with over 15 years of experience.',
      avatar: 'https://via.placeholder.com/150'
    },
    {
      _id: '2',
      name: 'Dr. John Smith',
      bio: 'Renowned Neurologist known for advanced treatments in therapy.',
      avatar: 'https://via.placeholder.com/150'
    },
    {
      _id: '3',
      name: 'Prof. Emily Johnson',
      bio: 'Pioneer in Sports Science and Physical Therapy.',
      avatar: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="speakers">
      <h2>🎙️ Guest Speakers</h2>
      <div className="speaker-list">
        {sampleSpeakers.map((speaker) => (
          <div key={speaker._id} className="speaker-card">
            <img src={speaker.avatar} alt={speaker.name} />
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
            <div className="social-links">
              <a href="#" className="social-link">🌐 LinkedIn</a>
              <a href="#" className="social-link">🐦 Twitter</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
