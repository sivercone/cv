import React from 'react';
import img_folder from './assets/img/open-folder.svg';

import Popup from './Popup';

function App() {
   const [isOpen, setIsOpen] = React.useState(false);

   const togglePopup = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="container">
         {/* <!-- side left --> */}
         <div className="sideleft">
            <div className="sideleft--content">
               <div className="sideleft--title">file</div>
               <div className="sideleft--files" onClick={togglePopup}>
                  <div className="sideleft--files--content">
                     <img src={img_folder} alt="folder" />
                     <div className="sideleft--files--name">projects</div>
                  </div>
               </div>
               <div className="sideleft--files">
                  <div className="sideleft--files--content">
                     <img src={img_folder} alt="folder" />
                     <div className="sideleft--files--name">bio</div>
                  </div>
               </div>
               <div className="sideleft--files">
                  <div className="sideleft--files--content">
                     <img src={img_folder} alt="folder" />
                     <div className="sideleft--files--name">contact</div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- side right --> */}
         <div className="sideright">
            <div className="sideright--content">
               <div className="sideright--title">opened file</div>
            </div>
            {/* <!-- file --> */}
            {isOpen ? <Popup toggle={togglePopup} /> : null}
         </div>

         <div className="itsNotReady">this is under construction</div>
      </div>
   );
}

export default App;
