import React from 'react';
import Deskripsi from '../component/Deskripsi';

function About() {
  return(
    <div className='konten'>
      <div className='container'>
        <div className='row'>
          <div className='col-4 offset-4'>
          <img className='img-fluid' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWO4n5cFbRnUHjnJ0G6L3KltG2RoJLwkXwo4B7wV60XbwMpDnAWeMizIIV3kSWTK0CQ6v9lz-1iMziDfFhDwCS4jP03L-bVZpCk096AaY_q4mhXipEPIUMeYJnG2cvz8xC0kI54il-7h8V/s800/sedang_1618209937_Visi+%2526+Misi.jpg' />
          </div>
          
          <div className='col-6'>
            <Deskripsi 
              judul='VISI'
              deskripsisingkat='Menjadi sumber utama informasi dan pendidikan yang terpercaya mengenai bencana alam, yang dapat meningkatkan kesadaran, pengetahuan, dan kesiapsiagaan masyarakat global dalam menghadapi ancaman bencana.'
            />
          </div>
          <div className='col-6'>
          <Deskripsi 
              judul='MISI'
            />
          <ul>
            <li>
            Memberikan Pendidikan Mendalam: Menyediakan konten edukasi yang komprehensif dan mudah dipahami tentang berbagai jenis bencana alam, termasuk penyebab, karakteristik, dan dampaknya.
            </li>
            <li>
            Menggalang Kesadaran: Meningkatkan kesadaran masyarakat akan pentingnya memahami risiko bencana, serta langkah-langkah mitigasi yang dapat diambil untuk mengurangi dampaknya.
            </li>
            <li>
            Mendorong Persiapan yang Efektif: Memberikan panduan praktis tentang perencanaan tanggap darurat, evakuasi, dan tindakan yang tepat saat bencana terjadi, untuk meningkatkan kesiapsiagaan individu dan komunitas.
            </li>
            <li>
            Memfasilitasi Kolaborasi: Menjadi platform untuk kolaborasi antara pemerintah, organisasi non-pemerintah, akademisi, dan masyarakat sipil dalam upaya untuk membangun komunitas yang lebih tangguh terhadap bencana.
            </li>
            <li>
            Promosi Pembangunan Berkelanjutan: Mengedukasi tentang pentingnya pembangunan berkelanjutan dalam mengurangi rentan terhadap bencana dan mempromosikan pemulihan pasca-bencana yang berkelanjutan.
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
