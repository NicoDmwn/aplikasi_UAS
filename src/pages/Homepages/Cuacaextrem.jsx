import React from 'react';
import Deskripsi from '../../component/Deskripsi';

function Cuacaextrem() {
  return(
    <div className='konten'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            
              <Deskripsi
                judul="Cuaca Extrem"
                imageSrc="https://www.suarasurabaya.net/wp-content/uploads/2018/04/kk201688_clip10.jpg"
                deskripsisingkat="Cuaca ekstrem merujuk pada kondisi cuaca yang di luar dari pola cuaca normal yang diharapkan di suatu wilayah pada suatu waktu tertentu. Cuaca ekstrem dapat mencakup berbagai fenomena cuaca yang ekstrem seperti badai, tornado, hujan lebat, gelombang panas, dan angin kencang."
              />
              </div>
            
          <div className='col-6'>
            <Deskripsi
              judul="Ada beberapa Contoh Cuaca Ekstrem:"
            />
            <ul className='justify'>
              <li>
              Badai: Badai dapat mencakup badai petir, badai salju, atau badai hujan es dengan angin kencang dan hujan lebat.
              </li>
              <li>
              Tornado: Puting beliung adalah fenomena angin putar yang sangat kuat, yang dapat menyebabkan kerusakan besar dalam waktu singkat.
              </li>
              <li>
              Hujan Lebat: Curah hujan yang sangat tinggi dalam waktu singkat dapat menyebabkan banjir dan tanah longsor.
              </li> 
              <li>
              Gelombang Panas: Suhu udara yang sangat tinggi dalam periode waktu yang panjang, melebihi rata-rata musiman.
              </li>
            </ul>
            <Deskripsi
              deskripsisingkat="Dampak dari cuaca ekstrem bisa sangat luas dan serius terhadap berbagai aspek kehidupan. Hal ini termasuk kerusakan besar pada harta benda seperti bangunan dan infrastruktur, ancaman langsung terhadap kesehatan masyarakat akibat kejadian seperti banjir atau gelombang panas yang ekstrem, serta gangguan signifikan pada aktivitas ekonomi setempat. Selain itu, cuaca ekstrem juga dapat menyebabkan kerusakan lingkungan yang serius, mengganggu ekosistem alami dan menyebabkan degradasi sumber daya alam."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuacaextrem;