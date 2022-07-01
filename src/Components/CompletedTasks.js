import React, { useState } from 'react';
import ComTask from './ComTask';
import { useQuery } from 'react-query';
import Loading from './Loading';

const CompletedTasks = () => {

    const { data: completedTasks, isLoading, refetch } = useQuery('completedTask', () => fetch('https://obscure-plains-79086.herokuapp.com/compeltetask').then(res => res.json()))


    if (isLoading) { return <Loading></Loading> }


    return (
        <div className='md:w-1/2 mx-auto px-2'>
            <h2 className='md:text-3xl mt-8 mb-3 font-extrabold font-mono text-3xl'>Completed Tasks</h2>
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
                            completedTasks?.map((comTask) => <ComTask
                                comTask={comTask}
                                key={comTask._id}
                                refetch={refetch}
                            ></ComTask>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTasks;