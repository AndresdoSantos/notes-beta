import { getSession, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';
import { ArrowBendDownRight, Eye } from 'phosphor-react';
import { useContext, useEffect } from 'react';
import { Header } from '../../components/Header';
import { SubTasks } from '../../components/SubTasks';
import { Tasks } from '../../components/Tasks';
import { AuthContext, User } from '../../contexts/AuthContext';
import { api } from '../../services/api';

type Task = {
  id: string;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type AppProps = {
  data: Task[];
};

export default function App(props: AppProps) {
  return (
    <>
      <Header />

      <main className="grid grid-cols-2 w-full border">
        <Tasks tasks={props.data} />
        <SubTasks tasks={props.data} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  const { data } = await api.get<Task[]>('/tasks', {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });

  return {
    props: { data },
  };
};
