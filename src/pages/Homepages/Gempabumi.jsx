import React from 'react';
import Deskripsi from "../../component/Deskripsi";

function Gempabumi() {
  return(
    <div className='konten'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            
              <Deskripsi
                judul="Gempa Bumi"
                imageSrc="https://cdn0-production-images-kly.akamaized.net/u1IiWRr27F2omK3UfAXLOb-8X6E=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245923/original/053910000_1600781261-GEMPA_2.jpg"
                deskripsisingkat="Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi akibat pelepasan energi yang tiba-tiba dari dalam bumi. 
                                  Energi ini biasanya dilepaskan karena pergerakan atau pergeseran lempeng tektonik, yang bisa terjadi karena akumulasi tekanan yang
                                  menumpuk selama waktu tertentu."
              />
              </div>
            
          <div className='col-6'>
            <Deskripsi
              judul="Ada beberapa penyebab utama gempa bumi:"
            />
            <ul className='justify'>
              <li>
                Aktivitas Tektonik: Pergerakan lempeng tektonik yang bertabrakan, bergesekan, atau berpisah.
              </li>
              <li>
                Aktivitas Vulkanik: Letusan gunung berapi juga bisa menyebabkan gempa bumi.
              </li>
              <li>
                Longsoran Bawah Laut: Pergerakan besar massa tanah di bawah laut bisa memicu gempa bumi."
              </li> 
            </ul>
            <Deskripsi
              deskripsisingkat="Gempa bumi dapat diukur menggunakan alat yang disebut seismometer, dan kekuatannya sering dinyatakan dalam skala Richter atau skala magnitudo momen. 
              Lokasi pusat gempa disebut episentrum, dan titik di bawah permukaan bumi tempat gempa berasal disebut hiposentrum. Gempa bumi dapat menyebabkan kerusakan bangunan, tanah longsor, 
              dan bahkan tsunami jika terjadi di bawah laut."
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Gempabumi;
