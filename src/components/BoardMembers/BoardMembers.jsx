import React, { useState, useContext, useEffect } from 'react';
import { Section } from '../Section';
import { BoardMemberCardList } from '../BoardMemberCardList';
import { getAllMembers } from '../../services';
import appContext from '../../context/appContext';

export const BoardMembers = () => {
  const [members, setMembers] = useState([]);
  const [sorted, setSorted] = useState(false)
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
  }, []);

  useEffect(() => {
    const sortMembers = () => {
      members.sort((member1, member2) => member1.priority - member2.priority);
    }
    if (members.length > 0 && !sorted) {
      sortMembers();
      setSorted(true);
    }
  }, [members, sorted]);

  return (
    <Section title="Meet the Board">
      <BoardMemberCardList members={members} />
    </Section>
  );
}