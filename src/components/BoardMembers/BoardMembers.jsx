import React, { useState, useContext } from 'react';
import { Section } from '../Section';
import { BoardMemberCardList } from '../BoardMemberCardList';
import { getAllMembers } from '../../services';
import appContext from '../../context/appContext';

export const BoardMembers = () => {
  const [members, setMembers] = useState([]);
  const { setError, setHasError } = useContext(appContext);
  
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
      <BoardMemberCardList members={members} />
    </Section>
  );
}