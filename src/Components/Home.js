import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Add Task */}
            <div className="">
                <h1 className="text-center">Add Task</h1>
                <div class="form-control w-full sm:w-[40vw] mx-auto">
                    <label class="input-group">
                        <input type="text" placeholder="Add Your Task" class="input input-bordered w-full" />
                        <button className='btn' type="submit">ADD</button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Home;