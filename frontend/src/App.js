import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaSearch, FaFilter, FaHome } from 'react-icons/fa';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import ResetButton from './components/ResetButton';
import { getUsers, searchUsers, filterUsers } from './utils/api';
import styles from './App.module.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [originalUsers, setOriginalUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
      setOriginalUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const data = await searchUsers(query);
      setUsers(data);
      setCurrentPage(1);
      setSearchQuery(query);
      setSelectedNationality('');
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  const handleFilter = async (nationality) => {
    try {
      const data = await filterUsers(nationality);
      setUsers(data);
      setCurrentPage(1);
      setSearchQuery('');
      setSelectedNationality(nationality);
    } catch (error) {
      console.error('Error filtering users:', error);
    }
  };

  const handleReset = () => {
    setUsers(originalUsers);
    setCurrentPage(1);
    setSearchQuery('');
    setSelectedNationality('');
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
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <FaHome className={styles.icon} />
            <h1>User Directory</h1>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <SearchBar onSearch={handleSearch} />
        <Filters onFilter={handleFilter} />
        <ResetButton onReset={handleReset} />
        <Results users={currentUsers} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; User Directory..</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
