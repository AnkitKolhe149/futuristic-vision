import React from 'react';
import ModelViewer from '../components/modelViewer'; // Assuming you have a ModelViewer component
// import './Events.css'; // Ensure styling is included for better design

const Events = () => {
  const sampleEvents = [
    {
      _id: '1',
      title: 'AI in Healthcare',
      description: 'Exploring the role of AI in improving patient outcomes.',
      date: new Date().toLocaleString(),
      modelUrl: 'https://www.datasciencecentral.com/wp-content/uploads/2024/10/Artificial-Intelligence-in-Healthcare-industry-1536x1024.jpg'
    },
    {
      _id: '2',
      title: 'Next-Gen Robotics',
      description: 'Innovations in robotic surgery and automation.',
      date: new Date().toLocaleString(),
      modelUrl: 'https://www.technetexperts.com/wp-content/uploads/2024/08/AI-And-Robotics.jpg'
    },
    {
      _id: '3',
      title: 'Digital Transformation in Hospitals',
      description: 'Discover how digital tools are revolutionizing healthcare services.',
      date: new Date().toLocaleString(),
      modelUrl: 'https://example.com/sample-model3'
    }
  ];

  return (
    <div className="events">
      <h2>📅 Event Timeline</h2>
      <div className="event-list">
        {sampleEvents.map((event) => (
          <div key={event._id} className="event-card">
            <h3>{event.title}</h3>
            <i>{event.description}</i>
            <i>{event.date}</i>
            {event.modelUrl && <ModelViewer modelUrl={event.modelUrl} />}
          </div>
        ))}
      </div>

      <style jsx>{`
        .events {
          padding: 20px;
          background-color: var(--background-color);
          color: var(--text-color);
        }
        .event-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-around;
        }
        .event-card {
          border: 2px solid var(--primary-color);
          border-radius: 12px;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 300px;
          text-align: center;
        }
        .model-placeholder {
          margin-top: 10px;
          padding: 10px;
          background-color: var(--primary-color);
          color: #fff;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default Events;
