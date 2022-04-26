import './App.css';
import RequestsDistribution from './components/RequestsDistribution';
import SizeRequests from './components/SizeRequests';
import { RequestsPerMinute } from './components/RequestsPerMinute';
import Modal from './components/Modal';
import { useState } from 'react';
import { RequestType } from './components/RequestType';

function App() {

  const [open, setOpen] = useState({
    result: false,
    type: false,
    size: false,
    perMinute: false,
  });

  const toggleClass = (e) => {
    console.log(e)
    const name = e.target.getAttribute("name");
    const modal = open[name];
    setOpen({
      ...open,
      [name]: !modal,
    });
  };

  return (
    <div className=" h-full bg-gradient-to-br from-sky-200 to-teal-300 p-8">
      <div>
        <h1 className='text-center font-bold text-2xl text-sky-500 py-3'>
        Requests Distributions 
        </h1>
      </div>
      <div className='grid justify-center md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 my-10'>
        <div name="result" onClick={toggleClass} className='m-4 rounded-lg bg-white py-10 px-6 hover:scale-105 cursor-pointer'>
          <RequestsDistribution/>
          {open.result && (
            <Modal
              toggleClass={toggleClass}
              chart={<RequestsDistribution/>}
              name='result'
            />
          )}
          <button name="result" onClick={toggleClass}
          className="rounded-lg bg-sky-500 px-4 py-2 text-center transition duration-300 hover:bg-sky-400 text-white mt-2">
            View details</button>
        </div >
        <div name="type" onClick={toggleClass} className='m-4 rounded-lg bg-white py-10 px-6 hover:scale-105'>
          <div className='px-32'>
          <RequestType/>
          {open.type && (
            <Modal
              toggleClass={toggleClass}
              chart={<RequestType/>}
              name='type'
            />
          )}
          </div>
          <button name="type" onClick={toggleClass}
           className="rounded-lg bg-sky-500 px-4 py-2 text-center transition duration-300 hover:bg-sky-400 text-white mt-2">
             View details
          </button>
        </div>
        <div name="size" onClick={toggleClass} className='m-4 rounded-lg bg-white py-10 px-6 hover:scale-105'>
          <SizeRequests/>
          {open.size && (
            <Modal
              toggleClass={toggleClass}
              chart={<SizeRequests/>}
              name='size'
            />
          )}
          <button name="size" onClick={toggleClass} 
          className="rounded-lg bg-sky-500 px-4 py-2 text-center transition duration-300 hover:bg-sky-400 text-white mt-2">
            View details
          </button>
        </div>
        <div name="perMinute" onClick={toggleClass} className='m-4 rounded-lg bg-white py-10 px-6 hover:scale-105'>
          <RequestsPerMinute/>
          {open.perMinute && (
            <Modal
              toggleClass={toggleClass}
              chart={<RequestsPerMinute/>}
              name='perMinute'
            />
          )}
          <button name="perMinute" onClick={toggleClass}
           className="rounded-lg bg-sky-500 px-4 py-2 text-center transition duration-300 hover:bg-sky-400 text-white mt-2">
             View details
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
