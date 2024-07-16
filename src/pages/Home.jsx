import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Deskripsi from '../component/Deskripsi';

function Home() {
    return (
<div>
      <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item carousel-new active">
          <img src="https://cdn.antaranews.com/cache/1200x800/2022/07/22/IMG20220718162039.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item carousel-new">
          <img src="https://cdn.antaranews.com/cache/1200x800/2022/10/26/IMG_20221026_091651_800x533.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item carousel-new">
          <img src="https://insights.id/uploads/2021/02/6035ca4caae83_1614137932.jpeg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
        <div className='konten_pad'>
          <div className='container-fluid'>
            <div>
              <div className='col-md-6 offset-md-3'>
                <button type="button" class="btn btn-warning button_bencana"><Link to="Gempabumi" className="nav-link">Gempabumi</Link></button>    
                <button type="button" class="btn btn-warning button_bencana"><Link to="Banjir" className="nav-link">Banjir</Link></button>
                <button type="button" class="btn btn-warning button_bencana"><Link to="Longsor" className="nav-link">Longsor</Link></button>
                <button type="button" class="btn btn-warning button_bencana"><Link to="Gunungapi" className="nav-link">Gunungapi</Link></button>
                <button type="button" class="btn btn-warning button_bencana"><Link to="Tsunami" className="nav-link">Tsunami</Link></button>
                <button type="button" class="btn btn-warning button_bencana"><Link to="Cuacaextrem" className="nav-link">Cuacaextrem</Link></button>
              </div>
            </div>
            <Outlet />
            <div className='container'>
              <Deskripsi 
                judul="Meningkatkan wawasan kesiapsiagaan kepada masyarakat yang tinggal di negara dengan kondisi alam yang tidak hanya indah, namun penuh dengan ancaman bencana adalah upaya yang perlu dimaksimalkan."
                deskripsisingkat='Sebuah website edukasi interaktif tentang bencana alam bertujuan untuk menyediakan pemahaman mendalam kepada pengguna tentang berbagai jenis bencana alam, seperti gempa bumi, banjir, tanah longsor, tsunami, gunung berapi, dan cuaca ekstrem. Melalui pendekatan interaktif dan mudah diakses, website ini tidak hanya memberikan informasi tentang penyebab dan karakteristik masing-masing bencana, tetapi juga mengajak pengguna untuk terlibat dalam simulasi, video, dan grafik animasi yang membantu memvisualisasikan bahaya potensial dan langkah-langkah mitigasi yang dapat diambil.'
              />
            </div>
          </div>
        </div>
        </div>
        
    );
}

export default Home;