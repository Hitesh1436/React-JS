import React from 'react';
import "./feed.css";

function Feed() {
  return (
    <>
      <div className= "header">
        <img src=" https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="insta_img" />
        <img src="https://mail.google.com/mail/u/0?ui=2&ik=6cb2d65126&attid=0.1.1&permmsgid=msg-f:1721863268852570386&th=17e549852bc01912&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ96Z3IJ2w3lCF6uDFSChQ4R2lxM9IFBbymnce8HRn7Kat_XwNx1N2u6_H1nhWKTkDZYxMXnG6ClRrZv31jdG70v0ZGT1r5l9KWu7FAEAVIUj4th3W2mEnI2hSk&disp=emb"alt="" className="profile_img" />
      </div>
      <div className="main_continer">
        <div className="upload_container">
          <i className="movie_icon fa-solid fa-clapperboard"></i>
          <div className="upload_text">UPLOAD</div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  )
}
export default Feed;