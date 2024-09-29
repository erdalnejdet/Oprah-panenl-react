import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="fixed top-4 left-4 z-20 text-white bg-lime-500 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      <header
        className={`fixed top-0 left-0 h-full bg-lime-500 p-8 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-[75%]'
        } w-64 z-10`}
      >
        <ul className="space-y-4 mt-16">
          <li>
            <a
              href="#"
              className="block text-white hover:bg-white hover:text-black p-2 rounded"
            >
              Anasayfa
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white hover:bg-white hover:text-black p-2 rounded"
            >
              Randevu Al
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white hover:bg-white hover:text-black p-2 rounded"
            >
              Randevularım
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-white hover:bg-white hover:text-black p-2 rounded"
            >
              Çıkış Yap
            </a>
          </li>
        </ul>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-5 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}

export default Header;
