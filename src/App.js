import React from 'react';

import { Header, Left, Projects, About, Rotate } from './components/index';

function App() {
   const [visible, setVisible] = React.useState();

   const onClickProjects = () => {
      setVisible('Projects');
   };
   const onClickAbout = () => {
      setVisible('About');
   };
   const onClickClose = () => {
      setVisible(undefined);
   };

   ///////////////////////////////////////////////////////////////////
   // TO DO
   // 1. Изменить названия CSS на БЭМ
   // 2. Исправить верстку отображения файлов по центру в Папках
   // 3. Отрефакторить код, по необходимости
   ///////////////////////////////////////////////////////////////////

   return (
      <>
         <Rotate />
         <Header />
         <div className="container">
            <Left
               toggleProjects={visible === 'Projects' ? onClickClose : onClickProjects}
               toggleAbout={visible === 'About' ? onClickClose : onClickAbout}
            />

            <div className="right">
               <h1>opened file</h1>
               {visible === 'Projects' ? (
                  <Projects onClose={onClickClose} />
               ) : visible === 'About' ? (
                  <About onClose={onClickClose} />
               ) : (
                  <></>
               )}
            </div>

            <div className="itsNotReady">
               <span>this is under construction</span>
            </div>
         </div>
      </>
   );
}

export default App;
