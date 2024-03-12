'use client'

import { useConnection } from '../../../context/connect'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';

const Page = () => {
    // const connection = useConnection();
    const { connection } = useConnection();
    const router = useRouter();
    let [error, setError] = useState(null);

    const CreateRoom = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        console.log({ name, password })
        connection.emit('createRoom', { name, password });
        connection.on('createRoom', data => {
            const result = data;

            if (result.success) {
                router.push('/rooms/' + result.data.id);
            } else {
                setError(data.message);
            }
        });
    }

    useEffect(() => {
        if (connection) {
            connection.emit('fetchUser');
            connection.on('user', data => {
                if (data === null) {
                    router.push('/');
                }
            });

            return () => {
                connection.off('user', data => {
                    if (data === null) {
                        router.push('/');
                    }
                });
            }
        }
    }, [connection]);


    // const { connection } = useConnection();
    // const router = useRouter();
    // let [error, setError] = useState(null);
  
    const Login = event => {
      event.preventDefault();
      const username = event.target.username.value;
      connection.emit('login', { username });
      connection.on('login', data => {
        if (data.success) {
          router.push('/rooms');
        } else {
          setError(data.error);
        }
      });
    }
  
    useEffect(() => {
      if (connection) {
        connection.emit('fetchUser');
        connection.on('user', data => {
          if (data !== null) {
            router.push('/rooms');
          }
        });
      }
    }, []);

    
    return <>
        <div className="flex">
            <Sidebar />
            <div className="overflow-y-auto w-full">
                <div className="md:h-screen relative flex flex-col justify-center items-center">
                    <div className="bg-dark-2 md:shadow-lg shadow-none rounded p-10">
                        <div className="flex flex-col items-center space-y-3">
                            <span className="text-2xl text-white font-semi-bold leading-normal">Create New Room</span>
                        </div>
                        {error && <div className="w-full rounded-md px-4 p-2 border-red-500 border text-red-500 bg-red-500/20 mt-4">
                            <p>{error || "Something went wrong.."}</p>
                        </div>}
                        <form onSubmit={CreateRoom} className="my-8 w-96 h-auto">
                            <div className="relative mb-2">
                                <label htmlFor="name" className="text-[12.5px] leading-tighter text-gray-300 uppercase font-medium text-base cursor-text">Room Name</label>
                                <input id="name" autoComplete='off' className="bg-dark-3 transition-all duration-200 w-full rounded-lg p-3 border border-gray-300/10 focus:border-blue-700 outline-none ring-none" type="text" />
                            </div>
                            <div className="relative mb-2">
                                <label htmlFor="name" className="text-[12.5px] leading-tighter text-gray-300 uppercase font-medium text-base cursor-text">Password <span className="text-xs italic lowercase font-thin opacity-50">optional</span></label>
                                <input id="password" autoComplete='off' className="bg-dark-3 transition-all duration-200 w-full rounded-lg p-3 border border-gray-300/10 focus:border-blue-700 outline-none ring-none" type="text" />
                            </div>
                            <div className="space-y-9">
                                <div className="text-sm flex justify-end items-center h-full mt-16">
                                    <button className="py-2.5 px-12 rounded text-white btn bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-80 transition-all duration-200">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Page;