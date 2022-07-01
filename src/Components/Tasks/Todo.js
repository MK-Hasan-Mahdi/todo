import React, { useState } from 'react';
import { useQuery } from 'react-query';


import Task from './Task';
import UpdateTask from './UpdateTask';

const Todo = () => {
    const { data: tasks, isLoading, refetch } = useQuery('loadTask', () => fetch('https://obscure-plains-79086.herokuapp.com/task').then(res => res.json()))

    const [updateId, setUpdateId] = useState('')


    return (
        <div className='px-2 md:w-1/2 mx-auto'>
            <h2 className='md:text-3xl mt-8 mb-3 font-extrabold font-mono text-3xl'>Todo</h2>
            <hr />

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Task List</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks?.map((task) => <Task
                                task={task}
                                key={task._id}
                                refetch={refetch}
                                setUpdateId={setUpdateId}
                            ></Task>)
                        }


                    </tbody>
                </table>
            </div>
            <UpdateTask task={updateId} refetch={refetch}></UpdateTask>

        </div>
    );
};

export default Todo;