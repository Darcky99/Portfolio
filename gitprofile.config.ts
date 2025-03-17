// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Darcky99', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
            title: 'OrthoWorx',
            description:
              'VR application for OrthoWorx to educate users about the orthopedic industry, presenting key concepts and guiding them through the fabrication process of orthopedic artifacts. As one of the two developers, I contributed to Chapters 6–11, enhancing interactive activities and refining VR interactions. This project provided valuable experience in working on complex VR systems while ensuring an engaging and accurate educational experience. | App not available to the public.',
              imageUrl:
              './specific/orthoworx_logo.jpeg',
            link: 'https://orthoworxindiana.com/',
          }, 
        {
            title: 'Earth Ranger',
            description:
              'You will simulate a radio call interaction, study animal behavior, and go through various daily activities as an Earth Ranger. | Another VR project of great value to me, as this is where I learned about VR interaction. | App not available to the public.',
              imageUrl:
              './specific/earthranger_icon.png',
            link: '',
          },
        {
            title: 'Chaos Corp',
            description:
              'An educational experience designed for Filipino students who wish to better understand the methods of manipulation they are exposed to when reading online information. I led the development of this app from June 2024 to March 2025, implementing features such as a saving system, new cards, UI modernization, videos, animations, and other improvements.',
              imageUrl:
              './specific/bouncingrainbow_icon.png',
            link: 'https://play.google.com/store/apps/details?id=com.VisualUniVRs.ChaosCorp',
          },
        {
            title: 'Erskine Green Training Institute | VR training',
            description:
              'At EGTI, students receive training in hospitality, food service, healthcare, and inventory distribution. | My first delivered VR application takes users through various scenes, where they can watch presentations and interact with different elements while discovering what the Erskine Green Institute has to offer. | App not available to the public.',
            imageUrl:
              './specific/egti_icon.png',
            link: 'https://www.erskinegreeninstitute.org/',
          },
        {
            title: 'Generation Revolution',
            description:
              'Developed with Unity, General Revolutions is a presentation-like project that tells the story of Cato, a Black man fighting for the rights of Black Americans in a post-revolutionary New York context.',
            imageUrl:
              './specific/gr_icon.png',
            link: 'https://genrev.historyadventures.app/',
          },
        {
            title: 'Who Dies First',
            description:
              'Took over development from v4.0.2, contributing to iteration plans and adapting existing tools and code. Implemented features like kicking action, a victory screen minigame, landmines, breakable crates, and spikes, along with bug fixes and minor improvements. Also created 3D models and icons for the landmine, trampoline, and spikes.',
            imageUrl:
              './specific/whodiesfirst_icon.png',
            link: 'https://play.google.com/store/apps/details?id=com.games.whodiesfirst',
          },
          {
            title: 'Bouncing Rainbow',
            description:
              'Inspired by ASMR TikTok videos, the project was delivered in one month (v0.1) and later expanded with additional features. Launched with three different mini-games, utilizing DOTween for movement and animations.',
            imageUrl:
              './specific/bouncingrainbow_icon.png',
            link: 'https://play.google.com/store/apps/details?id=com.games.bouncingrainbow',
          },
        {
          title: 'Structure Master',
          description:
            'Utilized Unity’s Joints to create six distinct connection types, each with unique behavior. Developed a state-driven algorithm to track different outcomes and used the "Shapes" asset during prototyping to display 2D graphics.',
          imageUrl:
            './specific/structuremaster_icon.png',
          link: 'https://play.google.com/store/apps/details?id=com.games.structuremaster2d&hl=es_MX&gl=US',
        },
        {
          title: 'Trick Shot',
          description:
            'Created over 20 unique prefabs for game elements and implemented mechanics such as trampolines, directed paths, and trajectory prediction. Utilized the "Shapes" asset during prototyping to display 2D graphics.',
          imageUrl:
            './specific/trickshot_icon.png',
          link: 'https://play.google.com/store/apps/details?id=com.games.trickshot',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kevin Villalvazo',
    description: 'Videogame Developer | Unity, C# | with 4 years of experience',
    imageURL: './specific/T_ProfilePicture.jpg',
  },
  social: {
    linkedin: 'kevin-villalvazo',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'darcking99@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Unity',
    'C#',
    'JavaScript',
    'React.js',
    'MongoDB',
    'Git',
    'CSS',
  ],
  experiences: [
    {
        company: 'Visual UniVRs',
        position: 'Unity Developer',
        from: 'June 2024',
        to: 'Present',
        companyLink: 'https://visualunivrs.com/',
      },
    {
      company: 'KobGames Studio',
      position: 'Unity Developer',
      from: 'January 2021',
      to: 'January 2024',
      companyLink: 'https://kobgames.com/',
    },
    {
      company: 'Freelance in Upwork',
      position: 'Programer | Designer',
      from: '2020 - Early 2021',
      to: 'August 2021',
      companyLink: 'https://www.upwork.com/freelancers/~0126ed5e26092ce810',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2015',
    //   to: '2019',
    // }
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
