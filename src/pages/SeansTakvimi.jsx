import React, { useState } from 'react';
import Button from '../Components/Button';
import Psikolog from './Psikolog';

function SeansTakvimi() {
  const [activeTab, setActiveTab] = useState("randevularim");

  return (
    <div className="p-4 ml-12 md:ml-64   ">
      <div className='w-full max-w-md'>
        <div className="flex border-b">
          <Button 
            name="Randevularım" 
            className={`w-1/2 py-2 text-center ${
              activeTab === "randevularim" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("randevularim")}
          />

          <Button
            name="Geçmiş Randevularım"
            className={`w-1/2 py-2 text-center ${
              activeTab === "gecmis" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("gecmis")}
          >
            Geçmiş Randevularım
          </Button>
        </div>
        <div className='p-4'>
            {activeTab === "randevularim" && (
             <div className='bg-white p-8 shadow-xl rounded-lg'>
                <h2 className='text-center'>
                    Mevcut randevu yok
                </h2>
             </div>
            )}

            {activeTab === "gecmis" && (
            <div className='bg-white p-8 shadow-xl rounded-lg'>
                <h2 className='text-center'>
                    Geçmiş Randevu yok
                </h2>
             </div>
          )}
        </div>
      </div>
      

    </div>
  );
}

export default SeansTakvimi;
