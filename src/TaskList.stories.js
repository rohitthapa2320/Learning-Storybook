import React from 'react';

import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story=> <div style={{padding: '4rem'}}>{story()}</div>]
};

const Template = args => <TaskList {...args} /> ;

export const Default = Template.bind({});
Default.args = {
    tasks:[
        {...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
        {...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
        {...TaskStories.Default.args.task, id: '3', title: 'Task 3'}
    ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    tasks:[
        ...Default.args.tasks.slice(0,3),
        {id: '4', title: 'Task 4 (pinned)', state: 'TASK_PINNED'}
    ]
};

export const Loading = Template.bind({});
Loading.args ={
    tasks: [],
    loading: true
};

export const Empty = Template.bind({});
Empty.args={
    ...Loading.args,
    loading: false
};

