import {configureStore, createSlice} from '@reduxjs/toolkit';

const defaultTasks = [
    { id: '1', title: 'Hello..Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Hi..Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Hi there..Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Greetings..Task 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Hiii..Task 5', state: 'TASK_INBOX' },
];
const AppStateSlice = createSlice({
    name: "appState",
    initialState:"",
    reducers:{
        updateAppState: (state,action) => {
            return {...state, isError: action.payload};
        }
    }
});

const TasksSlice= createSlice({
    name: 'tasks',
    initialState: defaultTasks,
    reducers:{
        updateTaskState:(state, action) => {
            const {id, newTaskState} = action.payload;

            const task = state.findIndex(task => task.id == id);

            if(task >= 0){
                state[task].state = newTaskState;
            }
                
        }
    }
});

export const {updateTaskState} = TasksSlice.actions;

export const {updateAppState} = AppStateSlice.actions;

const store = configureStore({
    reducer:{
        tasks: TasksSlice.reducer,
        isError: AppStateSlice.reducer
    }
    
});

export default store;