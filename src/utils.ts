export function getScreenY(id: string) {
  const node = document.getElementById(id)?.getBoundingClientRect() as DOMRect;
  // return node;
  const y = node.y - window.innerHeight;
  return Math.abs(y > 100 ? 0 : y) / node.height; // > 0
}

export function useScroll() {
  return {
    y: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
  };
}

export function onResize(fn: () => void) {
  document.addEventListener('resize', fn);
}

export const projects = [
  {
    title: 'Sales Api',
    img_sd: '/assets/sales-api-sd.webp',
    img_hd: '/assets/sales-api-hd.webp',
    img_2k: '/assets/sales-api-2k.webp',
    descr: 'Versatile .NET API for seamless sales system integration with JSON support.',
    uri: 'https://api-sales.netlify.app/',
    source: 'https://github.com/marekmars/sistemaVentasApi.Net',
    tags: ['.NET', 'C#', 'JSON', 'API', 'Astro', 'Tailwindcss', 'SQL'],
  },
  {
    title: 'Sales System App',
    img_sd: '/assets/sales-system-sd.webp',
    img_hd: '/assets/sales-system-hd.webp',
    img_2k: '/assets/sales-system-2k.webp',
    descr: 'Angular Sales System App utilizes the Sales Api created for efficient sales management. Streamlining the sales process, it offers a user-friendly interface for tracking transactions, managing inventory, and enhancing sales performance. provides test login: marco@mail.com / 123456.',
    uri: 'https://sales-system-app.netlify.app/',
    source: 'https://github.com/marekmars/apiSalesApp',
    tags: ['Angular', 'TypeScript', 'Tailwindcss', 'API'],
  },
  {
    title: 'MVC Real Estate .Net Core',
    img_sd: '/assets/mvc-realestate-sd.webp',
    img_hd: '/assets/mvc-realestate-hd.webp',
    img_2k: '/assets/mvc-realestate-2k.webp',
    descr: 'The system optimizes property rental operations for real estate agencies, managing owners, properties, tenants, contracts, and payments. It simplifies the rental process, offers reporting capabilities, and provides test login: marcosilva@mail.com / 123456.',
    uri: 'https://realestate.somee.com/',
    source: 'https://github.com/marekmars/InmobiliariaNew',
    tags: ['.NET', 'C#', 'MVC',  'Bootstrap', 'SQL'],
  },
  {
    title: 'CragExplorer',
    img_sd: '/assets/crag-explorer-2k.webp',
    img_hd: '/assets/crag-explorer-2k.webp',
    img_2k: '/assets/crag-explorer-2k.webp',
    descr: 'The Climbing Routes and Sectors Saving App will be developed to provide a comprehensive platform for managing and exploring climbing routes and sectors worldwide. It targets climbers and climbing enthusiasts, offering a tool to ease activity planning and access relevant location',
    uri: 'https://www.youtube.com/watch?v=YiJSDEeG-xY',
    source: 'https://github.com/marekmars/ProyectoCragExplorer',
    tags: ['.NET', 'C#', 'JSON', 'Java',  'Android', 'MySQL'],
  },
  
];

export const focus = [
  {
    src: '/assets/csharp.svg',
    title: 'C#',
    tooltip: 'Microsoft\'s modern object-oriented programming language.',
  },
  {
    src: '/assets/dot-net-plain.svg',
    title: '.Net',
    tooltip: 'Microsoft\'s versatile application development framework',
  },
  {
    src: '/assets/angular.svg',
    title: 'Angular',
    tooltip: 'Google\'s web application framework',
  },
  {
    src: '/assets/ts.svg',
    title: 'Typescript',
    tooltip: 'JavaScript with syntax for types',
  },
  {
    src: '/assets/tailwind.svg',
    title: 'Tailwindcss',
    tooltip: 'Utility-first CSS framework',
  },

  {
    src: '/assets/git-original.svg',
    title: 'Git',
    tooltip: 'Version control system for tracking and managing changes in source code.',
  },
  {
    src: '/assets/mysql.svg',
    title: 'MySQL',
    tooltip: 'Relational database management system',
  },
];
export const familiar = [
  {
    src: '/assets/nodejs.svg',
    title: 'Node.js',
    tooltip: 'JavaScript runtime environment',
  },
  {
    src: '/assets/express.svg',
    title: 'Express.js',
    tooltip: 'Minimalist nodejs web framework',
  },
  // {
  //   src: '/assets/docker.svg',
  //   title: 'Docker',
  //   tooltip: 'open platform for developing, shipping, and running applications',
  // },
  {
    src: '/assets/astro.svg',
    title: 'Astro',
    tooltip: 'Static framework with Island Architecture',
  },
  {
    src: '/assets/figma.svg',
    title: 'Figma',
    tooltip: 'Web-based designing tool',
  },
  {
    src: '/assets/java.svg',
    title: 'Java',
    tooltip: 'POO based programming language for developing applications',
  },
  {
    src: '/assets/android.svg',
    title: 'Android Studio',
    tooltip: 'Most popular Android development tool',
  },
  // {
  //   src: '/assets/ionic.svg',
  //   title: 'Ionic',
  //   tooltip: 'Cross-platform mobile app development framework',
  // },
  {
    src: '/assets/capacitor.svg',
    title: 'Capacitor',
    tooltip: 'Cross-platform mobile app development framework',
  },
];
