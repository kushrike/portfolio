// Centralized content and placeholder config for the portfolio

export const siteConfig = {
  name: 'kushrike',
  title: 'a.k.a. Kushal Srivastava',
  about: {
    headline: 'Software geek and a Power Rangers nerd. Working as a backend engineer at Hashicorp.',
    socials: {
      github: 'https://github.com/kushrike',
      linkedin: 'https://linkedin.com/in/kushrike',
      twitter: 'https://twitter.com/kushrike',
      email: 'mailto:kushrike@gmail.com',
      reddit: 'https://youtu.be/dQw4w9WgXcQ',
    },
    resumeUrl: 'https://raw.githubusercontent.com/kushrike/resume/master/resume.pdf',
  },
  experience: [
    {
      company: 'Zluri',
      title: 'Senior Software Engineer',
      link: 'https://www.zluri.com/',
      period: 'Apr 2025 - Present',
      logo: '/zluri.svg',
      highlights: [
        'Revamped notification service with minimal impacts, reducing peak-hour message delivery latency from <b>2 hours</b> to under <b>1 minute</b>.',
        'Performed cross-functional bug bashes and refactored critical legacy modules, resulting in a <b>33%</b> drop in on-call tickets.',
        'Improved system reliability and maintainability by implementing robust service-level <b>disaster recovery</b> and optimizing performance through query enhancements.',
        'Ideated & implemented a development workflow for the organisation using feature environments, automated testing etc. for multiple services and background jobs resulting in higher engineering productivity and faster project delivery',
        '<b>Mentored junior engineers and interns</b> through onboarding, code reviews, and project execution.',
      ],
      skills: ['Javascript', 'TypeScript', 'NodeJS', 'Kafka', 'MongoDB', 'Postgres', 'Bull MQ', 'ArgoCD', 'AWS S3', 'AWS DMS', 'DBT', 'Sentry', 'Datadog', 'CI/CD'],
    },
    {
      company: 'Zluri',
      title: 'Software Engineer',
      link: 'https://www.zluri.com/',
      period: 'Nov 2023 - Mar 2025',
      logo: '/zluri.svg',
      highlights: [
        'Lead the development of a greenfield project, <a href="https://www.linkedin.com/posts/zluri_ditch-the-chaos-of-complex-access-reviews-activity-7209563170468691970-MeRA" target="_blank"><b><i>Multilevel Access Reviews</i></b></a>. Delivered with exceptional code quality and a extensible design making agile future development possible and work <b>at scale</b>, resulting in a robust new revenue stream.',
        'Collaborated with Product Managers, Design, and Customer Support teams to proactively deliver features and address customer pain points.',
        'Achieved a <b>65% reduction in the time</b> required for raising and approving application requests by engineering <a href="https://zluri-1.wistia.com/medias/svw7jw37f1" target="_blank"><i>Slack integrations</i></a> for the same.',
        '<b>Improved operational excellence</b> by promptly tackling on‑call issues and service/API failures leveraging observability tools like <b>Datadog</b> and <b>Sentry</b>.',
        'Led the efforts within my team to <b>migrate our database from MongoDB to Postgres</b>, ensuring data integrity and relational consistency. Contributed to the organization’s broader migration strategy.',
        'Leveraged <b>AWS DMS</b> for efficient data migration and developed <b>DBT scripts</b> to format and structure data accurately in Postgres tables. Built the <b>Data Access Layer</b> and migrated APIs and background jobs to integrate seamlessly with Postgres.',
      ],
      skills: ['Javascript', 'TypeScript', 'NodeJS', 'MongoDB', 'Postgres', 'ArgoCD', 'AWS S3', 'Sentry', 'Datadog', 'CI/CD'],
    },
    {
      company: 'Captain Fresh',
      title: 'Software Development Engineer',
      link: 'https://www.captainfresh.in/',
      period: 'Jun 2022 - Oct 2023',
      logo: '/cf.svg',
      highlights: [
        'Spearheaded the <b>remodeling of the finance module</b>. Worked with Product Managers to develop technical specifications. Designed and built the <b>backend service to process all vendor/customer payments</b>, and incorporated credit/debit knock‑off behavior in a <b>scalable</b> fashion.',
        'Achieved a <b>4x performance boost</b> in payment processes compared to the previous Zoho ERP setup.',
        'Set up <b>two way sync</b> between the previous ERP and the new Finance service in a <b>master‑slave architecture</b> to ensure sanity of incoming transactions and facilitate smooth migration. Adapted myself to learn and understand <b>Zoho Deluge</b>.',
        '<b>Contributed vital UI components</b> to the Finance Module, <b>accelerating product development</b> while emphasizing collective efficiency.',
      ],
      skills: ['Java', 'SpringBoot', 'Service Framework', 'Hibernate', 'PostgreSQL', 'AWS S3', 'AWS SQS', 'AWS SNS', 'ReactJS'],
    },
    {
      company: 'Captain Fresh',
      title: 'Backend Intern',
      link: 'https://www.captainfresh.in/',
      period: 'Jan 2022 - May 2022',
      logo: '/cf.svg',
      highlights: [
        'Built <b>the first production ready version of in‑house Finance Backend module</b> from scratch to handle customer and vendor transactions.',
        'Designed and implemented <b>transaction and ledger behaviour</b>, integrated <b>Razorpay payment schemes</b> to handle order processing and refunds.',
        'Engineered an <b>expense module</b> which accepted company wide expenses and validated them based upon expense category and type.',
      ],
      skills: ['Java', 'SpringBoot', 'Hibernate', 'JHipster', 'PostgreSQL', 'Golang', 'Iris', 'MongoDB'],  
    },
    {
      company: 'D.E Shaw & Co.',
      title: 'Software Intern',
      link: 'https://www.deshaw.com/',
      period: 'May 2021 - July 2021',
      logo: '/deshaw.png',
      highlights: [
        'Developed and deployed an in‑house toolset from scratch to aggregate, display and update datasets informations used by Finance wing.',
        '<b>Enhanced overall productivity by 200%</b> by reducing the dependence of the financial stakeholders over Ops team and eliminating slow e‑mail based communications.',
      ],
      skills: ['ReactJS', 'Redux', 'Python', 'SQL'],  
    },
  ],
  projects: [
    {
      name: 'Status Page Application',
      description: 'A modern, real-time status page system built with Django and React. Monitor your services, manage incidents, and keep your users informed with real-time updates.',
      githubUrl: 'https://github.com/kushrike/status-page',
      liveUrl: 'https://www.loom.com/share/f4a89434e7f940f39218ded62bc36052?sid=a93a006b-644c-441b-9f54-180ca765a195',
      colors: ['#3b82f6', '#8b5cf6', '#22c55e'],
      badges: ['Python', 'Django', 'React', 'Celery', 'Redis', 'Docker', 'PostgreSQL', 'Websockets'],
    },
    {
      name: 'Zemotacqy',
      description: 'A web platform that would help doctors in assessing the growth and improvement of their patients suffering from mental disorders like ADHD by running a set of research‐backed cognitive tests, rendering meaningful statistics and data.',
      githubUrl: 'https://github.com/kushrike/all_kavs36',
      liveUrl: 'https://drive.google.com/file/d/1jjA1oRKHpFGiYzUHUpM6xuBgrCpochzl/view',
      colors: ['#2563eb', '#22c55e', '#f97316'],
      badges: ['Hackathon Winner', 'Python', 'Flask', 'MongoDB', 'Javascript', 'OpenCV'],
      isWinner: true,
    },
    {
      name: 'XMeme',
      description: 'Dockerized full‐stack Meme Stream Application that lets its users create, edit and view memes posted on the webpage.',
      githubUrl: 'https://github.com/kushrike/XMeme',
      liveUrl: 'https://youtu.be/PHtka9uhlf4',
      colors: ['#2563eb', '#22c55e', '#f97316'],
      badges: ['Javascript', 'React', 'NodeJS', 'Express', 'MongoDB', 'Docker'],
    },
    {
      name: 'Distributed File System (GFS)',
      description: 'Designed and developed a Distributed File System as part of a group project, where I led the implementation of key components including the master server, chunkserver logic, and client interactions. I implemented robust file-handling strategies at the chunkserver level and was responsible for designing and coding multi-level failure recovery mechanisms to ensure system resilience.',
      githubUrl: 'https://github.com/kushrike/gfs',
      liveUrl: 'https://github.com/kushrike/gfs/blob/master/README.md',
      colors: ['#ef4444', '#f59e42', '#ec4899'],
      badges: ['Java', 'SpringBoot', 'Distributed Systems'],
    },
    {
      name: 'BIT Insider',
      description: 'Android application to connect all the students of BIT college campus as a single social hub.',
      githubUrl: 'https://github.com/kushrike/BITInsider',
      liveUrl: 'https://github.com/kushrike/BITInsider',
      colors: ['#2563eb', '#22c55e', '#f97316'],
      badges: ['Android', 'Java'],
    },
  ],
  blog: {
    rssurl: 'https://kushrike.medium.com/feed',
  },
  github: {
    username: 'kush-zluri',
    contribution_url: 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile',
  },
  recommendations: [
    {
      text: 'Kushal has been an integral part of IGA\'s success, consistently bringing <b>dedication, technical depth, and a strong sense of ownership</b> to everything he does. Beyond that, Kushal has a <b>keen eye for identifying suboptimal code and proactively improving it</b>—making our systems cleaner, more efficient, and more maintainable. His <b>drive to raise the bar</b> has made a lasting impact on the team and the codebase.',
      name: 'Shashwat Tandon',
      designation: 'Engineering Manager at Zluri',
      profile: 'https://media.licdn.com/dms/image/v2/C5603AQGdZQW7nIcWTQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1650442226908?e=1754524800&v=beta&t=4AER6dXkS1_rwgos7mjsCl7pKhpxT6-uLLJTScxdEio',
      linkedin: 'https://www.linkedin.com/in/shashwat-tandon/',
    },
    {
      text: 'I worked closely with Kushal and mentored him on his internship project, and I was consistently impressed by his dedication, technical expertise, and collaborative spirit. His <b>ability to think critically and find innovative solutions</b> greatly contributed to the project\'s success he worked on. What truly stood out about Kushal was his <b>commitment to learning and growth</b>. He eagerly embraced new challenges and <b>consistently sought opportunities to expand his skillset</b>. He was always willing to <b>share insights and collaborate with colleagues.</b> I wholeheartedly recommend them for any software-related role. He is not only a talented engineer but also a pleasure to work with. I have every confidence that they will continue to <b>excel and make significant contributions</b> wherever they go.',
      name: 'Shikhar Sharma',
      designation: 'Lead Tech at D.E. Shaw',
      profile: 'https://media.licdn.com/dms/image/v2/C5103AQHuMz4KHxj25Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516898619793?e=1754524800&v=beta&t=2tpmQMKuz6216D_AtSvLCD-VMhK0B10ZzLCHyGj-Dlw',
      linkedin: 'https://www.linkedin.com/in/shikharshar/',
    },
    {
      text: 'Kushal is a <b>highly motivated and skilled developer</b> who thrives on tackling complex and challenging problems. He has a <b>keen eye for detail and a strong ability to identify potential issues early on</b>—often leading to faster, more stable outcomes. His contributions consistently added value to our projects and helped maintain high code quality across the board. What truly sets Kushal apart is his <b>excellent communication skills and strong sense of ownership</b>. He ensures that stakeholders are always informed and involved, which greatly improves collaboration and trust within the team.',
      name: 'Faizal Shaikh',
      designation: 'Senior Software Engineer at Zluri',
      profile: 'https://media.licdn.com/dms/image/v2/C5103AQEJRmjHsN-36g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1581853713731?e=1754524800&v=beta&t=JI4jxh_wgF6p0R6-pxJQ1iS0taBPDe0aPR3ZB-bS2MM',
      linkedin: 'https://www.linkedin.com/in/faizal-shaikh-sde/',
    },
  ]
}; 