import React from "react";

function Deskripsi({judul, penulis, deskripsisingkat, imageSrc}){
    

    return(
      <div className="">
        <h1><center>{judul}</center></h1>
          <div>
            <b>{penulis}</b>
          </div>
          <div>
            <img className="img-fluid" src={imageSrc}/>
          </div>
          <div className="justify">
            {deskripsisingkat}
          </div>
          
      </div>
    )
  }

export default Deskripsi;