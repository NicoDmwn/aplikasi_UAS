import React from 'react';
import Deskripsi from '../../component/Deskripsi';

function Tsunami() {
  return (
    <div className='konten'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            
              <Deskripsi
                judul="Tsunami"
                imageSrc="https://awsimages.detik.net.id/community/media/visual/2023/01/17/ilustrasi-bencana-tsunami_169.png?w=1200"
                deskripsisingkat="Tsunami adalah gelombang besar yang disebabkan oleh gangguan tiba-tiba di dasar laut, seperti gempa bumi, letusan gunung api di bawah laut, atau longsoran bawah laut. Gelombang ini dapat menyebar dengan kecepatan sangat tinggi di atas lautan dan bergerak menuju pantai dengan energi yang besar."
              />
              </div>
            
          <div className='col-6'>
            <Deskripsi
              judul="Ada beberapa Penyebab Tsunami:"
            />
            <ul className='justify'>
              <li>
              Gempa Bumi: Gempa bumi yang terjadi di dasar laut dapat menghasilkan pergerakan vertikal yang signifikan pada dasar laut, menciptakan gelombang tsunami.


              </li>
              <li>
              Letusan Gunung Api: Letusan gunung api yang terjadi di bawah laut dapat melepaskan material vulkanik dan menciptakan gelombang tsunami.


              </li>
              <li>
              Longsoran Bawah Laut: Longsoran besar di dasar laut dapat memicu gelombang tsunami yang besar.
              </li> 
  
            </ul>
            <Deskripsi
              deskripsisingkat="Tsunami memiliki karakteristik yang unik dan sangat berbahaya. Gelombang tsunami biasanya sangat panjang, dengan jarak yang besar antara puncak gelombang satu dengan yang lainnya. Ketika tsunami bergerak di perairan dalam, gelombangnya bisa mencapai ratusan kilometer panjangnya.

Kecepatan tsunami juga sangat tinggi, terutama ketika mendekati pantai. Gelombang ini dapat bergerak dengan kecepatan hingga ratusan kilometer per jam, tergantung pada kedalaman dan kekuatan sumber gangguan di dasar laut.

Selain itu, tsunami bisa mengubah level air secara drastis. Ini bisa berarti naiknya air yang tajam, membanjiri pesisir dan kawasan dataran rendah, atau bahkan penurunan tajam air laut yang bisa mengungkapkan dasar laut yang sebelumnya terendam."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tsunami;