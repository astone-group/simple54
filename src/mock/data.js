import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'ASTONE | Melbourne', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'ODx',
  subtitle: 'Partnering with you to develop leaders, teams and organisations.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'logo_odx_pink.png',
  paragraphOne: 'ODx',
  paragraphTwo: 'We partner',
  paragraphThree: 'We believe',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: ' ',
    title: 'Psychometric Assessment',
    title2: 'Leadership Coaching and Development',
    title3: 'Team Performance and Dynamics',
    title4: '360s and other Assessments for Development',
    title5: 'Positive Mental Health and Wellbeing',
    title6: 'Career Alignment and Transition',
    info: '', 
    
  },

  /* 
  {
    id: nanoid(),
    img: 'Assessment2.png',
    title: 'Assessment for Development',
    info: 'We know that psychometric assessment data is one of the most powerful ways of predicting job performance and culture fit.',
    info2: 'We help you to make sense of this data and to increase your liklihood of making a good hire by integrating assessment data with other methods of selection (and your gut feel), and to plan and craft your next stages of interview, reference checks and on-boarding.',
    
  },
  {
    id: nanoid(),
    img: 'Leadership.png',
    title: 'Leadership Coaching & Development',
    info: 'We believe in the potential for growth and development within all of us, including the great leaders among us.',
    info2: 'Leadership coaching is a high impact and high accountability approach to developing an individual\'s personal leadership capability, and embed new and helpful behaviours that will maintain a virtuous, upward spiral. This almost always begins with honest self-reflective, personal insights, and an exploration of the individual why.',
    url: 'e',
      },
      {
    id: nanoid(),
    img: 'Team.png',
    title: 'Team Performance',
    info: 'We believe in the potential for growth and development within all of us, including the great leaders among us.',
    info2: 'Leadership coaching is a high impact and high accountability approach to developing an individual\'s personal leadership capability, and embed new and helpful behaviours that will maintain a virtuous, upward spiral. This almost always begins with honest self-reflective, personal insights, and an exploration of the individual why.',
    url: 'e',
      },
  {
    id: nanoid(),
    img: 'Wellbeing.png',
    title: 'Wellbeing',
    info: 'We believe in the potential for growth and development within all of us, including the great leaders among us.',
    info2: 'Leadership coaching is a high impact and high accountability approach to developing an individual\'s personal leadership capability, and embed new and helpful behaviours that will maintain a virtuous, upward spiral. This almost always begins with honest self-reflective, personal insights, and an exploration of the individual why.',
    url: 'e',
      },
  {
    id: nanoid(),
    img: 'Career.png',
    title: 'Career Alignment',
    info: 'We believe in the potential for growth and development within all of us, including the great leaders among us.',
    info2: 'Leadership coaching is a high impact and high accountability approach to developing an individual\'s personal leadership capability, and embed new and helpful behaviours that will maintain a virtuous, upward spiral. This almost always begins with honest self-reflective, personal insights, and an exploration of the individual why.',
    url: 'e',
      }, */
                  
    ];  
    

// CONTACT DATA
export const contactData = {
  info: ' ',
  cta: 'Would you like to work with us? Great!',
  btn: 'Let\'s chat',
  email: '@',
};

// FOOTER DATA
export const footerData = {
  networks: [
        
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com',
    },
   
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
