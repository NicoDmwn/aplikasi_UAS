import React from 'react';
import Deskripsi from '../../component/Deskripsi';

function Gunungapi() {
  return(
    <div className='konten'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            
              <Deskripsi
                judul="Gunung Api"
                imageSrc="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/04/19/jenis-letusan-gunung-jpg-20230419021231.jpg"
                deskripsisingkat="Bencana gunung api terjadi akibat dari aktivitas vulkanik yang dapat menimbulkan berbagai dampak negatif bagi lingkungan dan masyarakat di sekitarnya."
              />
              </div>
            
          <div className='col-6'>
            <Deskripsi
              judul="Ada beberapa Penyebab Bencana Gunung Api:"
            />
            <ul className='justify'>
              <li>
              Letusan Vulkanik: Pada dasarnya, bencana gunung api dipicu oleh letusan vulkanik yang mengeluarkan lava, abu, dan gas-gas beracun ke atmosfer.
              </li>
              <li>
              Pelepasan Gas Beracun: Aktivitas gunung api dapat melepaskan gas-gas beracun seperti sulfur dioksida, karbon dioksida, dan belerang hidrogen yang dapat berbahaya bagi kesehatan manusia dan hewan.
              </li>
              <li>
              Aliran Lahar: Letusan gunung api dapat menyebabkan aliran lahar, yang merupakan campuran lumpur, batuan, dan air yang sangat berbahaya dan bisa menghancurkan segala yang ada di jalur alirannya.
              </li> 
            </ul>
            <Deskripsi
              deskripsisingkat="Bencana gunung api dapat menyebabkan dampak yang luas dan serius terhadap lingkungan, masyarakat, dan ekonomi di sekitarnya. Kerusakan fisik merupakan salah satu dampak utama yang ditimbulkan oleh letusan gunung api, di mana infrastruktur seperti bangunan, jalan, dan jembatan dapat rusak atau bahkan hancur akibat aliran lava, abu vulkanik, atau lahar. Ancaman terhadap kesehatan juga sangat signifikan, karena debu vulkanik yang terhirup dapat menyebabkan masalah pernapasan serius bagi manusia dan hewan. Selain itu, gas-gas beracun seperti sulfur dioksida dan karbon dioksida yang dilepaskan selama letusan dapat berdampak buruk pada kesehatan masyarakat."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gunungapi;