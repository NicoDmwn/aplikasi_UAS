import React from 'react';
import Deskripsi from '../../component/Deskripsi';

function Banjir() {
  return(
    <div className='konten'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            
              <Deskripsi
                judul="Banjir"
                imageSrc="https://media.istockphoto.com/id/1327503600/id/vektor/badai-menghancurkan-kota.jpg?s=612x612&w=0&k=20&c=Mm3-kXmZXGv8IUQBa5P-ZvSsITCaw2VgsP6klC9MOFI="
                deskripsisingkat="Banjir adalah peristiwa alam yang terjadi ketika air, baik dari hujan, sungai, danau, atau laut, meluap dan menutupi area yang biasanya kering. Banjir dapat menyebabkan kerusakan besar pada lingkungan, infrastruktur, dan properti, serta menimbulkan risiko kesehatan bagi manusia dan hewan."
              />
              </div>
            
          <div className='col-6'>
            <Deskripsi
              judul="Ada beberapa Penyebab Banjir:"
            />
            <ul className='justify'>
              <li>
              Curah Hujan Tinggi: Hujan lebat dalam waktu singkat dapat menyebabkan aliran air yang besar dan cepat, melebihi kapasitas saluran air alami seperti sungai atau drainase buatan.
              </li>
              <li>
              Sungai Meluap: Sungai yang meluap karena hujan berlebihan di hulu atau pelepasan air dari bendungan dapat menyebabkan banjir di wilayah sekitarnya.
              </li>
              <li>
              Penurunan Permukaan Tanah: Penurunan permukaan tanah, terutama di wilayah yang dekat dengan laut, dapat membuat wilayah tersebut lebih rentan terhadap banjir.
              </li> 
              <li>
              Pembangunan yang Tidak Terkontrol: Urbanisasi dan pembangunan yang tidak memperhatikan tata ruang seringkali menyebabkan hilangnya lahan resapan air, yang berkontribusi pada banjir.
              </li>
              <li>
              Rusaknya Infrastruktur Drainase: Sistem drainase yang tidak memadai atau rusak dapat menghambat aliran air, menyebabkan banjir lokal.
              </li>
            </ul>
            <Deskripsi
              deskripsisingkat="Banjir memiliki dampak yang luas dan merugikan. Kerusakan infrastruktur adalah salah satu dampak utama, di mana banjir dapat merusak jalan, jembatan, gedung, dan fasilitas umum lainnya. Selain itu, banjir juga mengakibatkan kehilangan harta benda, karena rumah dan properti pribadi dapat rusak atau hancur. Risiko kesehatan juga meningkat selama banjir, karena air banjir seringkali terkontaminasi dengan kuman, bahan kimia, dan limbah, yang bisa menyebabkan penyakit. Tidak hanya itu, banjir juga menimbulkan gangguan ekonomi yang signifikan, menghambat aktivitas ekonomi dan menyebabkan kerugian finansial bagi individu serta komunitas."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banjir;