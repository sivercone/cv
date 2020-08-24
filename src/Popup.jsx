import React from 'react';

import img_folder from './assets/img/open-folder.svg';
import img_clip from './assets/img/paper-clip.svg';
import img_0101 from './assets/img/computing.svg';

function Popup({ toggle }) {
   return (
      <div className="openfile">
         <div className="openfile--top">
            <div className="openfile--top--name">
               <img src={img_folder} alt="" />
               <label>projects</label>
            </div>
            <label className="openfile--top--close" onClick={toggle}>
               X
            </label>
         </div>
         <div className="openfile--bottom">
            <div className="openfile--bottom--file">
               <a href="https://github.com/sivercone/">
                  <img src={img_0101} alt="" />
                  <div>github.html</div>
               </a>
            </div>
            <div className="openfile--bottom--file">
               <a href="https://github.com/sivercone/">
                  <img src={img_clip} alt="" />
                  <div>github.html</div>
               </a>
            </div>
         </div>
      </div>
   );
}

export default Popup;
