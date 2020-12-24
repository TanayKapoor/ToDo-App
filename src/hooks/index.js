import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { collatedTasksExists } from '../helpers';
import moment from 'moment';

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedtasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', '0TD1uiFZSC');

    unsubscribe == selectedProject &&
    !collatedTasksExists(selectedProject)
      ? (unsubscribe = unsubscribe.where(
          'projectId',
          '==',
          selectedProject,
        ))
      : selectedProject == 'TODAY'
      ? (unsubscribe = unsubscribe.where(
          'date',
          '==',
          moment().format('DD/MM/YYYY'),
        ))
      : selectedProject === 'INBOX' || selectedProject === 0
      ? (unsubscribe = unsubscribe.where('date', '==', ''))
      : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              (task) =>
                moment(task.date, 'DD-MM-YYYY').diff(
                  moment(),
                  'days',
                ) <= 7 && task.archived != true,
            )
          : newTasks.filter((task) => task.archived !== true),
      );

      setArchivedtasks(
        newTasks.filter((task) => task.archived !== false),
      );
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedtasks };
};

export const useProjects = () => {
  const [prjects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', '0TD1uiFZSC')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        if (
          JSON.stringify(allProjects) !== JSON.stringify(projects)
        ) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
