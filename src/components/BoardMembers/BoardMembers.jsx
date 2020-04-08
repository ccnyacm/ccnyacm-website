import React, { useState, useContext, useEffect } from 'react';
import { Section } from '../Section';
import { BoardMemberCardList } from '../BoardMemberCardList';
import { getAllMembers } from '../../services';
import appContext from '../../context/appContext';

export const BoardMembers = () => {
  const [members, setMembers] = useState([]);
  const { setError, setHasError } = useContext(appContext);

  useEffect(() => {
    const getMembers = async () => {
      try {
        const data = await getAllMembers();
        setMembers(data);
      } catch (err) {
        setError(err.message);
        setHasError(true);
      }
    };
    getMembers();
  }, [setError, setHasError, members])

  return (
    <Section title="Meet the Board">
      <BoardMemberCardList members={members} />
    </Section>
  );
}