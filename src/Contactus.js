import React from 'react';
import { HiMailOpen, HiOutlinePhoneOutgoing } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Contactus() {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-t from-sky-400 to-cyan-300 ">
        <div className=" bg-gradient-to-t from-sky-400 to-cyan-300 w-96 h-96 mt-32 mb-11">
          <div className=" ">
            <div className="flex ml-5">
              <h1 className="text-3xl mt-10">
                <HiMailOpen />
              </h1>
              <text className="mt-10 font-extrabold font-serif">
                kumaryadavmithilesh861@gmail.com
              </text>
            </div>
            <div className="flex ml-5">
              <a
                href="https://wa.me/7307838669"
                target="_blank"
                rel="noreferrer"
                className="text-3xl mt-5"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/917307838669"
                className=" mt-5 font-extrabold font-serif"
              >
                Chat On Whatsapp
              </a>
            </div>
            <div className="flex ml-5">
              <h className="text-3xl mt-5">
                <HiOutlinePhoneOutgoing />
              </h>
              <h1 className=" mt-5 font-extrabold font-serif">
                {' '}
                +917307838669
              </h1>
            </div>
            <div className="flex ml-5">
              <h1 className="text-3xl mt-5">
                <FaLocationArrow />
              </h1>
              <h1 className=" mt-5 font-extrabold font-serif">
                Lakshmania Khamaria Bhadohi Uttar Pradesh 221306 
              </h1>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;