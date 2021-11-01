import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return <div className='storyReel'>
      <Story
        image="https://cdn.pixabay.com/photo/2017/06/01/13/16/peru-2363502_960_720.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Jason Zhu"
      />
      <Story
        image="https://i.imgur.com/rEq5YmM.jpg"
        profileSrc="https://i.imgur.com/wtEWSg7.jpg?1"
        title="Jacob Coyle"
      />
      <Story
        image="https://i.imgur.com/jIc8PId.jpg"
        profileSrc="https://i.imgur.com/5LSF4N4.jpg?1"
        title="Ricardo Barojas"
      />
      <Story
        image="https://i.imgur.com/6iSrX9q.png"
        profileSrc="https://i.imgur.com/nMrQGDI.png"
        title="Minkyu Park"
      />
    
    </div>
}

export default StoryReel
