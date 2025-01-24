// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in which Victor Barberteguy is involved",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Projects done during the masters",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Click on the PDF button to get a pdf version if the resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-starting-a-research-internship-at-cnrs-aist-joint-robotics-laboratory-working-on-multisensory-task-learning-under-the-supervision-of-prof-fumio-kanehiro-can-t-wait-to-explore-japan",
          title: 'Starting a research internship at CNRS-AIST Joint Robotics Laboratory working on multisensory task...',
          description: "",
          section: "News",},{id: "news-travelling-to-ha-long-to-present-our-paper-as-an-oral-presentation-at-sii-2024-conference",
          title: 'Travelling to Ha Long 🇻🇳 to present our paper as an oral presentation...',
          description: "",
          section: "News",},{id: "news-starting-a-research-internship-at-mit-cocosci-working-on-cultural-evolution-of-drawing-skills-️-powered-by-multimodal-language-models-under-the-supervision-of-cédric-colas-joshua-tenenbaum-and-jacob-andreas",
          title: 'Starting a research internship at MIT CoCoSci working on cultural evolution of drawing...',
          description: "",
          section: "News",},{id: "news-i-am-thrilled-to-annouce-that-i-joined-google-deepmind-as-a-co-advised-phd-student-with-ecole-des-ponts",
          title: 'I am thrilled to annouce that I joined Google DeepMind as a co-advised...',
          description: "",
          section: "News",},{id: "projects-sketch-to-reality",
          title: 'Sketch to Reality',
          description: "This project investigates several LLM fine-tuning methods to assess the understanding and creation of art",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-dcase-challenge-audio-classification",
          title: 'DCase challenge - audio classification',
          description: "This is a project exploring how to address Audio Recordings Classification with CNNs or Foundation Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-convolutional-wasserstein-distances",
          title: 'Convolutional Wasserstein Distances',
          description: "We investigate and implement some features of an article of Convolutional Wasserstein Distances",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-help-mates-a-genetic-algorithm",
          title: 'Help Mates! A genetic algorithm',
          description: "Custom Unity tools to build a 3D world where creatures learn to survive with a Neural-Network based Genetic Algorithm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-conditional-vae-39-s",
          title: 'Conditional VAE&amp;#39;s',
          description: "Probabilistic Graph Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-rlrider",
          title: 'RLRider',
          description: "A Reinforcement Learning project on a replica of Ketchapp&#39;s game Rider",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%69%63%74%6F%72.%62%61%72%62%65%72%74%65%67%75%79%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/VictorBbt", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/victor-barberteguy-938951229", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5dSDr-IAAAAJ&hl=fr", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
