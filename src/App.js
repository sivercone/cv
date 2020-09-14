import React from 'react';

import { Header, Left, Projects, About, Rotate } from './components/index';

function App() {
   const [isProjects, setIsProjects] = React.useState(false);
   const [isAbout, setIsAbout] = React.useState(false);

   const toggleProjects = () => {
      setIsProjects(!isProjects);
      setIsAbout(false);
   };
   const toggleAbout = () => {
      setIsAbout(!isAbout);
      setIsProjects(false);
   };

   return (
      <>
         <Rotate />
         <Header />
         <div className="container">
            <Left toggleProjectsFromApp={toggleProjects} toggleAboutFromApp={toggleAbout} />

            <div className="sideright">
               <div className="sideright__content">
                  <div className="sideright__title">opened file</div>
               </div>

               {isProjects ? <Projects toggleFromRight={toggleProjects} /> : false}
               {isAbout ? <About toggleFromRight={toggleAbout} /> : false}
            </div>

            <div className="itsNotReady">this is under construction</div>
         </div>
      </>
   );
}

export default App;
