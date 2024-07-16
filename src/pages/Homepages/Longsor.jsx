import React from 'react';
import Deskripsi from '../../component/Deskripsi';

function Longsor() {
  return(
    <div className='konten'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            
              <Deskripsi
                judul="Tanah Longsor"
                imageSrc="https://www.suarasurabaya.net/wp-content/uploads/2019/10/kk227911_clip10.jpg"
                deskripsisingkat="Tanah longsor adalah peristiwa alam di mana lapisan tanah atau batuan yang longgar atau tidak stabil tergelincir atau jatuh secara tiba-tiba. Hal ini sering kali disebabkan oleh berbagai faktor seperti curah hujan yang tinggi, erosi tanah, gempa bumi, atau aktivitas manusia seperti penggalian tambang yang tidak terkendali."
              />
              </div>
            
          <div className='col-6'>
            <Deskripsi
              judul="Ada beberapa Penyebab Banjir:"
            />
            <ul className='justify'>
              <li>
              Curah Hujan Tinggi: Air hujan yang berlebihan bisa meresap ke dalam tanah, membuatnya menjadi lebih berat dan cenderung longgar.
              </li>
              <li>
              Erosi Tanah: Pengikisan lapisan tanah oleh air atau angin membuat tanah kehilangan kestabilannya.
              </li>
              <li>
              Gempa Bumi: Gempa bumi dapat memicu pergeseran lapisan tanah yang sudah longgar atau tidak stabil.
              </li> 
              <li>
              Aktivitas Manusia: Aktivitas seperti penggalian tambang atau konstruksi tanpa perencanaan yang tepat bisa mengganggu stabilitas lereng dan menyebabkan longsor.
              </li>
            </ul>
            <Deskripsi
              deskripsisingkat="Tanah longsor memiliki dampak yang serius terhadap berbagai aspek kehidupan dan lingkungan sekitarnya. Salah satu dampak utamanya adalah kerusakan properti yang dapat mengakibatkan merusak atau bahkan menghancurkan rumah, bangunan, dan infrastruktur lain yang berada di jalur longsor. Ancaman terhadap keselamatan jiwa juga signifikan, terutama bagi mereka yang tinggal di daerah rawan longsor, karena kejadian ini dapat mengancam nyawa secara langsung.

Selain itu, tanah longsor juga dapat menyebabkan gangguan dalam transportasi dengan menghalangi jalan atau rel kereta, yang berpotensi mengisolasi komunitas atau daerah terdampak. Gangguan ini tidak hanya mempengaruhi mobilitas penduduk, tetapi juga dapat menghambat distribusi bantuan dan layanan darurat selama periode pasca-bencana."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Longsor;