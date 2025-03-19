import React from 'react';
import ModelViewer from '../components/modelViewer'; // Assuming you have a ModelViewer component
import Chat from '../components/chat'; // Assuming you have a Chat component
// import Spline from '@splinetool/react-spline';

const Home = () => {
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
    }
  ];

  const sampleEvents = [
    {
      _id: '1',
      title: 'AI in Healthcare',
      description: 'Exploring the role of AI in improving patient outcomes.',
      date: new Date().toLocaleString()
    },
    {
      _id: '2',
      title: 'Next-Gen Robotics',
      description: 'Innovations in robotic surgery and automation.',
      date: new Date().toLocaleString()
    }
  ];

  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to the Futuristic Tech Fest 2025</h1>
        <p>Explore the latest in technology and innovation.</p>
        <spline-viewer url="https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode"></spline-viewer>
      </header>

      <section className="speakers-section">
        <h2>Featured Speakers</h2>
        <div className="speaker-list">
          {sampleSpeakers.map((speaker) => (
            <div key={speaker._id} className="speaker-card">
              <img src={speaker.avatar} alt={speaker.name} />
              <h3>{speaker.name}</h3>
              <p>{speaker.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {sampleEvents.map((event) => (
            <div key={event._id} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="chat-section">
        <h2>Need Help? Chat with Us!</h2>
        <Chat />
      </section>

      <style jsx>{`
        :root {
          --background-color: #121212; /* Deep Black */
          --text-color: #E0F2F1; /* Soft Greenish White */
          --primary-color: #4CAF50; /* Vibrant Green */
          --card-background: rgba(255, 255, 255, 0.9); /* Card Background */
          --card-shadow: rgba(0, 0, 0, 0.1); /* Card Shadow */
        }

        .home {
          padding: 20px;
          background-color: var(--background-color);
          color: var(--text-color);
          max-width: 1200px;
          margin: auto;
        }

        .hero {
          text-align: center;
          margin-bottom: 40px;
          padding: 60px 20px;
          background-color: #1A1A1A; /* Dark Grey for Hero Section */
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
        }

        .speakers-section, .events-section, .chat-section {
          margin: 40px 0;
          padding: 20px;
          background-color: #1E1E1E; /* Dark Grey for Section Background */
          border-radius: 12px;
        }

        h2 {
          color: var(--primary-color);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .speaker-list, .event-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px; /* Added gap for better spacing */
        }

                .speaker-card, .event-card {
          border: 2px solid var("black");
          border-radius: 12px;
          padding: 20px;
          margin: 16px;
          background-color: var("black");
          width: 300px;
          text-align: center;
          box-shadow: 0 4px 12px var(--card-shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .speaker-card:hover, .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(76, 175, 80, 0.5); /* Enhanced shadow on hover */
        }

        .speaker-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 10px;
          border: 3px solid var(--primary-color); /* Green Ring for Emphasis */
        }

        /* Chat Section Styling */
        .chat-section {
          text-align: center;
          padding: 20px;
          background-color: #1A1A1A; /* Dark Grey for Chat Section */
          border-radius: 12px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .speaker-card, .event-card {
            width: 90%; /* Full width on smaller screens */
          }

          .hero {
            padding: 40px 10px; /* Adjust padding for smaller screens */
          }

          h1 {
            font-size: 1.8em; /* Responsive font size for the hero title */
          }

          h2 {
            font-size: 1.5em; /* Responsive font size for section titles */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;