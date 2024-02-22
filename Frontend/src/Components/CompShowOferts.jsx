import axios from 'axios';
import { useEffect, useState } from 'react';

// Cambia la URI para apuntar a la nueva ruta del backend
const URI = 'http://localhost:8080/workwave/api/announcements';

const CompShowAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 3; // Número de anuncios por página
  const [checkedList, setCheckedList] = useState({}); // Estado individual de selección para cada tarjeta

  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = async () => {
    try {
      const res = await axios.get(URI);
      setAnnouncements(res.data);
      // Inicializa el estado de selección para cada tarjeta con el estado actual
      const initialCheckedList = {};
      res.data.forEach(announcement => {
        initialCheckedList[announcement.id] = false;
      });
      setCheckedList(initialCheckedList);
    } catch (error) {
      console.error('Error al obtener los anuncios:', error);
    }
  };

  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  // Añade aquí el resto de tu lógica de componente...

  return (
    <div className="product-section">
      <div>
        {currentAnnouncements.map((announcement) => (
          <div key={announcement.id}>
            <h1>{announcement.companyName}</h1>
            <h2>{announcement.jobName}</h2>
            <p>{announcement.province}</p>
            <p>{announcement.jobRequirements}</p>
            <p>{announcement.jobDescription}</p>
            <p>{announcement.salary}</p>
            <p>{announcement.publicationDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
        }
  

export default CompShowAnnouncements;
