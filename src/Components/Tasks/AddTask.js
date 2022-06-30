import React from 'react';

const AddTask = () => {
    const handleAddTask = (e) => {
        e.preventDefault();
        const taskName = e.target.taskname.value;
        const description = e.target.description.value;
        console.log(taskName, description);
    }
    return (
        <div className='my-4'>
            <form onSubmit={handleAddTask} className='p-2 flex flex-col gap-3 lg:w-1/2 w-full mx-auto'>
                <h1 className="text-3xl text-primary font-bold pb-2 pt-6">Add a New task</h1>

                <label htmlFor='name'>Name</label>
                <input type="text" name='taskname' placeholder='Task Name' className='input input-bordered w-full' />


                <label htmlFor='description'>Description</label>
                <input type="text" name='description' placeholder='Task Description' className='input input-bordered w-full' />
                <input type="submit" className='btn btn-primary' value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;