import React from 'react';
import Draggable from 'react-draggable';

function About({ toggleFromRight }) {
   return (
      <Draggable handle=".window_top__draggable" bounds={{ top: -200, left: -300, right: 500, bottom: 100 }}>
         <div className="about">
            <div className="window_top --about">
               <div className="window_top__name">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20px" width="20px">
                     <path d="M0 0h512v512H0z" fill="url(#pattern)" fillOpacity="1"></path>
                     <path
                        d="M83.014 30.53c-14.8 0-26.118 5.868-33.96 17.6-7.782 11.675-11.673 28.656-11.673 50.942 0 22.228 3.892 39.207 11.675 50.94 7.84 11.674 19.16 17.51 33.96 17.51 14.797 0 26.09-5.836 33.872-17.51 7.84-11.733 11.76-28.712 11.76-50.94 0-22.286-3.92-39.267-11.76-50.94-7.783-11.734-19.075-17.6-33.873-17.6zm230.648 0c-14.8 0-26.12 5.868-33.96 17.6-7.783 11.675-11.675 28.656-11.675 50.942 0 22.228 3.892 39.207 11.674 50.94 7.843 11.674 19.163 17.51 33.962 17.51 14.8 0 26.09-5.836 33.87-17.51 7.843-11.733 11.765-28.712 11.765-50.94 0-22.286-3.922-39.267-11.764-50.94-7.782-11.734-19.072-17.6-33.87-17.6zm115.324 0c-14.798 0-26.12 5.868-33.96 17.6-7.783 11.675-11.674 28.656-11.674 50.942 0 22.228 3.89 39.207 11.673 50.94 7.842 11.674 19.163 17.51 33.96 17.51 14.8 0 26.09-5.836 33.872-17.51 7.842-11.733 11.762-28.712 11.762-50.94 0-22.286-3.92-39.267-11.763-50.94-7.782-11.734-19.072-17.6-33.87-17.6zm-236.75 2.39l-31.572 6.367V55.56l31.748-6.367v100.73H163.23v15.036h76.055v-15.036H210.1V32.92h-17.864zM83.014 44.682c9.256 0 16.184 4.54 20.783 13.62 4.658 9.02 6.986 22.61 6.986 40.77 0 18.1-2.328 31.69-6.986 40.77-4.6 9.02-11.527 13.53-20.783 13.53-9.198 0-16.124-4.51-20.782-13.53-4.598-9.08-6.898-22.67-6.898-40.77 0-18.16 2.3-31.75 6.898-40.77 4.658-9.08 11.584-13.62 20.782-13.62zm230.648 0c9.257 0 16.185 4.54 20.783 13.62 4.658 9.02 6.987 22.61 6.987 40.77 0 18.1-2.33 31.69-6.987 40.77-4.598 9.02-11.526 13.53-20.783 13.53-9.197 0-16.125-4.51-20.783-13.53-4.6-9.08-6.9-22.67-6.9-40.77 0-18.16 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.782-13.62zm115.324 0c9.257 0 16.185 4.54 20.784 13.62 4.657 9.02 6.986 22.61 6.986 40.77 0 18.1-2.33 31.69-6.986 40.77-4.6 9.02-11.527 13.53-20.784 13.53-9.197 0-16.125-4.51-20.783-13.53-4.6-9.08-6.898-22.67-6.898-40.77 0-18.16 2.3-31.75 6.898-40.77 4.658-9.08 11.586-13.62 20.783-13.62zM83.014 187.504c-14.8 0-26.118 5.867-33.96 17.6-7.782 11.673-11.673 28.654-11.673 50.94 0 22.228 3.892 39.208 11.675 50.94 7.84 11.674 19.16 17.512 33.96 17.512 14.797 0 26.09-5.838 33.872-17.512 7.84-11.732 11.76-28.712 11.76-50.94 0-22.286-3.92-39.267-11.76-50.94-7.783-11.733-19.075-17.6-33.873-17.6zm115.324 0c-14.8 0-26.12 5.867-33.96 17.6-7.784 11.673-11.675 28.654-11.675 50.94 0 22.228 3.89 39.208 11.674 50.94 7.84 11.674 19.162 17.512 33.96 17.512 14.8 0 26.09-5.838 33.874-17.512 7.842-11.732 11.763-28.712 11.763-50.94 0-22.286-3.92-39.267-11.762-50.94-7.782-11.733-19.073-17.6-33.872-17.6zm109.223 2.39l-31.574 6.366v16.273l31.75-6.37v100.733h-29.183v15.036h76.056v-15.036h-29.186V189.893H307.56zm115.323 0l-31.572 6.366v16.273l31.75-6.37v100.733h-29.185v15.036h76.057v-15.036h-29.184V189.893h-17.865zm-339.87 11.76c9.257 0 16.185 4.54 20.784 13.62 4.658 9.02 6.986 22.612 6.986 40.77 0 18.1-2.328 31.69-6.986 40.77-4.6 9.02-11.527 13.532-20.783 13.532-9.198 0-16.124-4.51-20.782-13.532-4.598-9.08-6.898-22.67-6.898-40.77 0-18.158 2.3-31.75 6.898-40.77 4.658-9.08 11.584-13.62 20.782-13.62zm115.325 0c9.256 0 16.184 4.54 20.783 13.62 4.66 9.02 6.987 22.612 6.987 40.77 0 18.1-2.328 31.69-6.986 40.77-4.598 9.02-11.526 13.532-20.782 13.532-9.198 0-16.126-4.51-20.783-13.532-4.6-9.08-6.9-22.67-6.9-40.77 0-18.158 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.783-13.62zm0 142.823c-14.8 0-26.12 5.866-33.96 17.6-7.784 11.673-11.675 28.652-11.675 50.94 0 22.226 3.89 39.207 11.674 50.94 7.84 11.674 19.162 17.512 33.96 17.512 14.8 0 26.09-5.84 33.874-17.513 7.842-11.733 11.763-28.714 11.763-50.94 0-22.288-3.92-39.267-11.762-50.94-7.782-11.734-19.073-17.6-33.872-17.6zm115.324 0c-14.8 0-26.12 5.866-33.96 17.6-7.783 11.673-11.675 28.652-11.675 50.94 0 22.226 3.892 39.207 11.674 50.94 7.843 11.674 19.163 17.512 33.962 17.512 14.8 0 26.09-5.84 33.87-17.513 7.843-11.733 11.765-28.714 11.765-50.94 0-22.288-3.922-39.267-11.764-50.94-7.782-11.734-19.072-17.6-33.87-17.6zm-236.75 2.388l-31.572 6.367v16.272l31.75-6.367V463.87H47.904V478.9h76.057V463.87H94.778V346.864H76.912zm345.97 0l-31.57 6.367v16.272l31.75-6.367V463.87h-29.187V478.9h76.057V463.87h-29.184V346.864h-17.865zM198.34 358.627c9.256 0 16.184 4.54 20.783 13.62 4.66 9.02 6.987 22.61 6.987 40.77 0 18.1-2.328 31.69-6.986 40.77-4.598 9.02-11.526 13.53-20.782 13.53-9.198 0-16.126-4.51-20.783-13.53-4.6-9.08-6.9-22.67-6.9-40.77 0-18.16 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.783-13.62zm115.324 0c9.257 0 16.185 4.54 20.783 13.62 4.658 9.02 6.987 22.61 6.987 40.77 0 18.1-2.33 31.69-6.987 40.77-4.598 9.02-11.526 13.53-20.783 13.53-9.197 0-16.125-4.51-20.783-13.53-4.6-9.08-6.9-22.67-6.9-40.77 0-18.16 2.3-31.75 6.9-40.77 4.657-9.08 11.585-13.62 20.782-13.62z"
                        fill="#111111"
                        fillOpacity="1"></path>
                  </svg>
                  <label>about</label>
               </div>
               <div className="window_top__draggable">drag this</div>
               <label className="window_top__close" onClick={toggleFromRight}>
                  X
               </label>
            </div>
            <div className="about__content">
               <p>Hello There!</p>
               <p>
                  My name is Danylo. I am a student of Information Technology at the University of Information Technology and
                  Management in Rzeszow.
               </p>
               <p>
                  In parallel, while studying, I am engaged in web-development, in the direction of the frontend. I am currently
                  writing code using the JavaScript library React and related technologies (React-router, Redux etc ...)
               </p>
               <div className="window_bottom__file">
                  <a
                     href="https://docs.google.com/document/d/1nvGrt5BGObUnxSpXKJUiqDZ_e24mgy8Wxp7YIL8LM5w/edit?usp=sharing"
                     rel="noopener noreferrer"
                     target="_blank">
                     <svg
                        className="window_bottom__image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height="50"
                        width="50">
                        <path d="M0 0h512v512H0z" fill="url(#pattern)" fillOpacity="1"></path>
                        <path
                           d="M359.486 53.883c-18.533.924-36.916 8.152-52.168 23.404L50.463 334.143c-15.528 15.527-21.196 34.746-19.207 52.65 1.99 17.904 11.053 34.485 23.793 47.225 12.738 12.74 29.32 21.803 47.223 23.793 17.905 1.99 37.123-3.68 52.65-19.206l220.163-220.16c20.998-21 19.447-48.32 4.586-63.182-14.86-14.86-42.183-16.413-63.182 4.586L169.717 306.62l12.728 12.73L329.22 172.576c15.694-15.695 29.653-12.66 37.725-4.588 8.073 8.073 11.108 22.032-4.588 37.727l-220.16 220.16c-11.992 11.992-24.88 15.498-37.935 14.047-13.056-1.45-26.29-8.44-36.485-18.633-10.194-10.195-17.182-23.43-18.632-36.485-1.45-13.056 2.054-25.944 14.046-37.936L320.046 90.015c16.358-16.358 35.173-20.603 54.918-17.27 19.745 3.334 40.126 14.96 56.195 31.03 16.07 16.068 27.696 36.45 31.03 56.195 3.333 19.746-.912 38.56-17.27 54.92l-220.16 220.16 12.726 12.727 220.162-220.162c20.336-20.335 26.41-46.24 22.29-70.642-4.118-24.402-17.718-47.595-36.05-65.926-18.33-18.332-41.523-31.93-65.925-36.05-6.1-1.03-12.296-1.422-18.474-1.114z"
                           fill="#111111"
                           fillOpacity="1"></path>
                     </svg>
                     <div className="window_bottom__txt">Resume.pdf</div>
                  </a>
               </div>
            </div>
         </div>
      </Draggable>
   );
}

export default About;
