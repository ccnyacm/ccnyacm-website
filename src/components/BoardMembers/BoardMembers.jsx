import React, { useState, useEffect } from 'react';
import { Section } from '../Section';
import { BoardMemberCardList } from '../BoardMemberCardList';
import { apiRequest } from '../../services';
import { ErrorDialog } from '../ErrorDialog';

export const BoardMembers = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const [hasError, setHasError] = useState(false);
  
  const getMembers = async () => {
    try {
      const response = await apiRequest('/members/all', 'GET', null);
      const data = await response.json();
      if (response.status === 200) {
        setMembers(data);
      } else {
        setError(data.message);
        setHasError(true);
      }
    } catch (err) {
      setError(err.message);
      setHasError(true);
    }
  }

  if(members.length === 0) {
    getMembers();
  }

  return (
    <Section title="Meet the Board">
      <ErrorDialog title="Error" message={error} open={hasError} onClose={() => setHasError(false)} />
      <BoardMemberCardList members={members} />
    </Section>
  );
}