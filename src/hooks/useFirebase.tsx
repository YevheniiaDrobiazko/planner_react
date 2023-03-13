import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";

type useFirebaseHook = {
  getSettings: () => void
  setTheme: (theme: string) => void
  setLanguage: (language: string) => void
  getTasks: () => void
  setTask: ({ taskId, taskDate, taskText }: any) => void
  updateTask: ({ taskId, taskText }: any) => void
  removeTask: (id: number) => void
}

export const useFirebase = (): useFirebaseHook => {
  // const language = useSelector((state: RootState) => state.app.language)

  const key = process.env.REACT_APP_FIREBASE_KEY;
  const id = process.env.REACT_APP_FIREBASE_ID;
  const appId = process.env.REACT_APP_FIREBASE_APP_ID;
  const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

  // const isSameObjects = (x: TaskType, y: TaskType) => {
  //   let propertyName: keyof TaskType
  //   for( propertyName in x) {
  //     if(JSON.stringify(x[propertyName]) !== JSON.stringify(y[propertyName])) {
  //       return false
  //     }
  //   }
  //   return true
  // }

  const firebaseConfig = {
    apiKey: key,
    authDomain: "planner-react-ace21.firebaseapp.com",
    databaseURL: "https://planner-react-ace21-default-rtdb.firebaseio.com",
    projectId: "planner-react-ace21",
    storageBucket: "planner-react-ace21.appspot.com",
    messagingSenderId: id,
    appId: appId,
    measurementId: measurementId
  };
  const firebase = initializeApp(firebaseConfig);
  const database = getDatabase(firebase);

  const getSettings = () => {
    const settingsRef = ref(database, 'settings');
    onValue(settingsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Settings:", data)
      // if(data && (
      //       data.theme !== settings.theme ||
      //       data.language !== settings.language
      //       ) {
      //         dispatch(changeSettings(data))
      //       }
      //   })
    })
  }

  const setTheme = (newTheme: string) => {
    update(ref(database, 'settings/'), {
      theme: newTheme,
    })
    .then()
    .catch()
  }

  const setLanguage = (newLanguage: string) => {
    update(ref(database, 'settings'), {
      language: newLanguage,
    })
    .then()
    .catch()
  }

  const getTasks = () => {
    const tasksRef = ref(database, 'tasks');
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const arr = []
      for(const key in data) {
        arr.push(data[key])
      }
      // if(arr.length !== tasks.length) {
      //   dispatch(changeTasks(arr))
      // } else {
      //   for(let i=0; i<arr.length; i++) {
      //     if(arr[i].id === tasks[i].id) {
      //       if(!isSameObjects(arr[i], tasks[i])) {
      //         dispatch(changeTasks(arr))
      //       }
      //     }
      //   }
      // }
    })
  }

  const setTask = ({taskId, taskDate, taskText}: any) => {
    set(ref(database, 'tasks/' + taskId), {
      id: taskId, 
      date: taskDate,
      text: taskText
    })
    .then()
    .catch()
  }

  const updateTask = ({taskId, taskText}: any) => {
    update(ref(database, 'tasks/' + taskId), {
      text: taskText
    })
    .then()
    .catch()
  }

  const removeTask = (id: number) => {
    remove(ref(database, 'tasks/' + id))
    .then()
    .catch()
  }

  return {
    getSettings,
    setTheme,
    setLanguage,
    getTasks,
    setTask,
    updateTask,
    removeTask
  };
}