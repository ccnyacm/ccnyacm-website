import React, { useState } from 'react';
import { Section } from '../Section';
import { BoardMemberCardList } from '../BoardMemberCardList';
import { getAllMembers } from '../../services';
import { ErrorDialog } from '../ErrorDialog';

export const BoardMembers = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const [hasError, setHasError] = useState(false);
  
  const getMembers = async () => {
    try {
      const data = await getAllMembers();
      setMembers(data);
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