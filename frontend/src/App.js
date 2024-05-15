import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import { getUsers, searchUsers, filterUsers } from './utils/api';
import styles from './App.module.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = async (query) => {
    try {
      const data = await searchUsers(query);
      setUsers(data);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  const handleFilter = async (nationality) => {
    try {
      const data = await filterUsers(nationality);
      setUsers(data);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error filtering users:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = Array.isArray(users) ? users.slice(indexOfFirstUser, indexOfLastUser) : [];
  const totalPages = Math.ceil(users.length / usersPerPage);
  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Filters onFilter={handleFilter} />
      <Results users={currentUsers} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
