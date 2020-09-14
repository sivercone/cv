import React from 'react';

function Left({ toggleProjectsFromApp, toggleAboutFromApp }) {
   return (
      <div className="sideleft">
         <div className="sideleft__content">
            <div className="sideleft__title">file</div>

            <div className="sideleft__files" onClick={toggleProjectsFromApp}>
               <div className="sideleft__files__content">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px">
                     <path d="M0 0h512v512H0z" fill="url(#pattern)" fillOpacity="1"></path>
                     <path
                        d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z"
                        fill="#111111"
                        fillOpacity="1"></path>
                  </svg>
                  <div className="sideleft__files__name">projects</div>
               </div>
            </div>

            <div className="sideleft__files" onClick={toggleAboutFromApp}>
               <div className="sideleft__files__content">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px">
                     <path d="M0 0h512v512H0z" fill="url(#pattern)" fillOpacity="1"></path>
                     <path
                        d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z"
                        fill="#111111"
                        fillOpacity="1"></path>
                  </svg>
                  <div className="sideleft__files__name">about</div>
               </div>
            </div>

            <div className="sideleft__files">
               <div className="sideleft__files__content">
                  <a style={{ textDecoration: 'none', color: 'inherit' }} href="mailto:sivercone@gmail.com">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="50px" width="50px">
                        <path d="M0 0h512v512H0z" fill="url(#pattern)" fillOpacity="1"></path>
                        <path
                           d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48H41zm62.303 96L43.092 455h381.605l60.211-286H103.303z"
                           fill="#111111"
                           fillOpacity="1"></path>
                     </svg>
                     <div className="sideleft__files__name">contact</div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Left;
