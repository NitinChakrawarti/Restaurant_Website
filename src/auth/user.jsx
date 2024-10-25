import React from 'react'

const User = () => {


    const logouthandle = () => {
        localStorage.removeItem('islogin');
        localStorage.removeItem('username');
        localStorage.removeItem('location');
        localStorage.removeItem('cardValue')
        window.location.reload();
    }


    return (
        <div className='max-w-md mx-auto mt-10 p-6  bg-white rounded-lg ml-[2vmax] sm:ml-[16vmax] md:ml-[24vmax] lg:ml-[40vmax] mb-10'>

            <h1 className="text-3xl font-bold underline underline-offset-4 decoration-[#a5e8aa]">
                User Details
            </h1>
            <div className="pt-16 ">
                <div className="text-2xl">
                    <span className="underline underline-offset-4 decoration-[#a5e8aa]/50 pr-4"> Username:</span> {localStorage.getItem('username')}
                </div>
                <div className="text-2xl pt-4">
                    <span className="underline underline-offset-4 decoration-[#a5e8aa]/50 pr-4"> Location:</span> {localStorage.getItem('location')}
                </div>
            </div>
            <button className="mt-10 px-4 py-1 bg-[#a5e8aa] relative rounded-sm mb-8 " onClick={logouthandle}>
                Log Out
            </button>

        </div>
    )
}

export default User

