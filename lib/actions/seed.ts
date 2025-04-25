'use server';

import { postsTable } from '@/db/schema';
import { blogs } from '@/constants';
import client from '../mongodb';
import PostTranslation from '@/db/postTranslation.model';
import Post from '@/db/post.model';
// import Post from './models/Post';
// import PostTranslation from './models/PostTranslation';
// import { slugify } from './utils/slugify';  // Asegúrate de tener la función slugify que te mostré antes

export async function testDatabaseConnection() {
  let isConnected = false;
  try {
    const mongoClient = await client();
    console.log(`🔗 Estado de conexión: ${mongoClient.connection.readyState}`); // 1 = conectado

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    ); // because this is a server action, the console.log will be outputted to your terminal not in the browser
    return !isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}

// seeds/blog-seed.ts

const postsData = [
  {
    title: {
      en: 'The Rise of AI in Business: How Artificial Intelligence is Transforming Companies in 2025',
      es: 'El auge de la IA en los negocios: Cómo la inteligencia artificial está transformando las empresas en 2025',
    },
    slug: 'ai-transforming-business-2025',
    publishedAt: '2025-04-24T00:00:00Z',
    description: {
      en: 'Exploring the impact of AI on business operations and decision-making in 2025.',
      es: 'Explorando el impacto de la IA en las operaciones y la toma de decisiones empresariales en 2025.',
    },
    content: {
      en: 'Artificial Intelligence (AI) has become a cornerstone in modern business strategies. In 2025, companies are leveraging AI to optimize operations, enhance customer experiences, and drive innovation. From predictive analytics to automated customer service, AI tools are reshaping how businesses operate.',
      es: 'La Inteligencia Artificial (IA) se ha convertido en una piedra angular en las estrategias empresariales modernas. En 2025, las empresas están aprovechando la IA para optimizar operaciones, mejorar la experiencia del cliente y fomentar la innovación. Desde análisis predictivos hasta atención al cliente automatizada, las herramientas de IA están redefiniendo el funcionamiento empresarial.',
    },
  },
  {
    title: {
      en: 'Cybersecurity in 2025: Emerging Threats and How to Protect Your Data',
      es: 'Ciberseguridad en 2025: Amenazas emergentes y cómo proteger tus datos',
    },
    slug: 'cybersecurity-threats-2025',
    publishedAt: '2025-04-23T00:00:00Z',
    description: {
      en: 'An overview of the latest cybersecurity threats and strategies to safeguard information in 2025.',
      es: 'Una visión general de las últimas amenazas de ciberseguridad y estrategias para proteger la información en 2025.',
    },
    content: {
      en: 'As technology advances, so do cyber threats. In 2025, businesses and individuals face sophisticated attacks, including AI-driven phishing and ransomware-as-a-service. Implementing robust security protocols and staying informed are crucial to protect sensitive data.',
      es: 'A medida que la tecnología avanza, también lo hacen las amenazas cibernéticas. En 2025, las empresas y los individuos enfrentan ataques sofisticados, incluyendo phishing impulsado por IA y ransomware como servicio. Implementar protocolos de seguridad robustos y mantenerse informado son esenciales para proteger datos sensibles.',
    },
  },
  {
    title: {
      en: 'Mental Health in the Workplace: Prioritizing Employee Well-being in 2025',
      es: 'Salud mental en el lugar de trabajo: Priorizando el bienestar de los empleados en 2025',
    },
    slug: 'workplace-mental-health-2025',
    publishedAt: '2025-04-22T00:00:00Z',
    description: {
      en: 'The importance of mental health initiatives in modern workplaces and their impact on productivity.',
      es: 'La importancia de las iniciativas de salud mental en los lugares de trabajo modernos y su impacto en la productividad.',
    },
    content: {
      en: 'In 2025, companies recognize that employee mental health is integral to organizational success. Programs focusing on stress management, work-life balance, and mental health support are becoming standard, leading to increased productivity and employee satisfaction.',
      es: 'En 2025, las empresas reconocen que la salud mental de los empleados es fundamental para el éxito organizacional. Los programas centrados en la gestión del estrés, el equilibrio entre la vida laboral y personal, y el apoyo a la salud mental se están convirtiendo en estándar, lo que conduce a una mayor productividad y satisfacción de los empleados.',
    },
  },
  {
    title: {
      en: 'The Joy of Missing Out (JOMO): Embracing Digital Detox in a Connected World',
      es: 'La alegría de perderse (JOMO): Abrazando la desconexión digital en un mundo conectado',
    },
    slug: 'jomo-digital-detox-2025',
    publishedAt: '2025-04-21T00:00:00Z',
    description: {
      en: 'Understanding the JOMO trend and its benefits for mental health and personal well-being.',
      es: 'Comprendiendo la tendencia JOMO y sus beneficios para la salud mental y el bienestar personal.',
    },
    content: {
      en: 'The Joy of Missing Out (JOMO) encourages individuals to disconnect from constant digital engagement and focus on personal well-being. In 2025, embracing JOMO leads to reduced stress, improved mental health, and a more balanced lifestyle.',
      es: 'La alegría de perderse (JOMO) anima a las personas a desconectarse del compromiso digital constante y centrarse en el bienestar personal. En 2025, abrazar JOMO conduce a una reducción del estrés, una mejora en la salud mental y un estilo de vida más equilibrado.',
    },
  },
  {
    title: {
      en: 'AI-Powered Financial Services: The Future of Banking in 2025',
      es: 'Servicios financieros impulsados por IA: El futuro de la banca en 2025',
    },
    slug: 'ai-financial-services-2025',
    publishedAt: '2025-04-20T00:00:00Z',
    description: {
      en: 'Exploring how AI is revolutionizing financial services, from personalized banking to risk assessment.',
      es: 'Explorando cómo la IA está revolucionando los servicios financieros, desde la banca personalizada hasta la evaluación de riesgos.',
    },
    content: {
      en: 'Artificial Intelligence is transforming the financial sector by offering personalized banking experiences, automating risk assessments, and streamlining loan approvals. In 2025, AI-driven services enhance customer satisfaction and operational efficiency.',
      es: 'La Inteligencia Artificial está transformando el sector financiero al ofrecer experiencias bancarias personalizadas, automatizar evaluaciones de riesgos y agilizar las aprobaciones de préstamos. En 2025, los servicios impulsados por IA mejoran la satisfacción del cliente y la eficiencia operativa.',
    },
  },
  {
    title: {
      en: 'Data Privacy in the Age of AI: Navigating Ethical Challenges in 2025',
      es: 'Privacidad de datos en la era de la IA: Navegando desafíos éticos en 2025',
    },
    slug: 'data-privacy-ai-2025',
    publishedAt: '2025-04-19T00:00:00Z',
    description: {
      en: 'Addressing the ethical considerations of data privacy amid widespread AI adoption.',
      es: 'Abordando las consideraciones éticas de la privacidad de datos en medio de la adopción generalizada de la IA.',
    },
    content: {
      en: 'With AI systems processing vast amounts of personal data, concerns over data privacy are at an all-time high. In 2025, regulators, developers, and consumers must work together to ensure ethical data handling, transparency, and accountability.',
      es: 'Con los sistemas de IA procesando enormes cantidades de datos personales, las preocupaciones sobre la privacidad están en su punto más alto. En 2025, reguladores, desarrolladores y consumidores deben colaborar para garantizar un manejo ético, transparencia y responsabilidad en el uso de los datos.',
    },
  },
  {
    title: {
      en: 'Sustainable Tech: Green Innovations That Are Changing the World in 2025',
      es: 'Tecnología sostenible: Innovaciones verdes que están cambiando el mundo en 2025',
    },
    slug: 'sustainable-tech-2025',
    publishedAt: '2025-04-18T00:00:00Z',
    description: {
      en: 'Discover how green technologies are reshaping industries and fighting climate change.',
      es: 'Descubre cómo las tecnologías verdes están transformando industrias y combatiendo el cambio climático.',
    },
    content: {
      en: "Green technology is no longer a niche—it's a necessity. In 2025, breakthroughs in solar energy, biodegradable electronics, and sustainable manufacturing are driving the global shift toward eco-friendly innovation.",
      es: 'La tecnología verde ya no es un nicho, es una necesidad. En 2025, los avances en energía solar, electrónica biodegradable y manufactura sostenible están impulsando un cambio global hacia la innovación ecológica.',
    },
  },
  {
    title: {
      en: 'Remote Work 3.0: The Evolution of Work-Life Balance in the Post-Pandemic Era',
      es: 'Trabajo remoto 3.0: La evolución del equilibrio entre vida y trabajo en la era post-pandemia',
    },
    slug: 'remote-work-evolution-2025',
    publishedAt: '2025-04-17T00:00:00Z',
    description: {
      en: 'How remote and hybrid work models have evolved by 2025, and their impact on employee satisfaction.',
      es: 'Cómo han evolucionado los modelos de trabajo remoto e híbrido en 2025 y su impacto en la satisfacción laboral.',
    },
    content: {
      en: 'Remote work has entered a new phase in 2025, with flexible hybrid models, virtual reality meetings, and asynchronous collaboration tools defining modern workplaces. The focus is now on personalization, autonomy, and mental health.',
      es: 'El trabajo remoto ha entrado en una nueva fase en 2025, con modelos híbridos flexibles, reuniones en realidad virtual y herramientas de colaboración asincrónica que definen los lugares de trabajo modernos. El enfoque actual está en la personalización, la autonomía y la salud mental.',
    },
  },
  {
    title: {
      en: 'The Creator Economy in 2025: Monetizing Content in a Saturated Digital World',
      es: 'La economía de los creadores en 2025: Monetizando contenido en un mundo digital saturado',
    },
    slug: 'creator-economy-2025',
    publishedAt: '2025-04-16T00:00:00Z',
    description: {
      en: 'Analyzing the rise of niche audiences, new monetization platforms, and the future of online content creation.',
      es: 'Analizando el auge de las audiencias de nicho, nuevas plataformas de monetización y el futuro de la creación de contenido en línea.',
    },
    content: {
      en: 'In 2025, content creators are thriving through niche community building and diversified income streams like NFTs, memberships, and micro-subscriptions. With AI tools at their disposal, solo creators now rival traditional media companies.',
      es: 'En 2025, los creadores de contenido prosperan construyendo comunidades de nicho y diversificando sus ingresos con NFTs, membresías y micro-suscripciones. Con herramientas de IA a su alcance, los creadores independientes rivalizan con las empresas de medios tradicionales.',
    },
  },
  {
    title: {
      en: 'Digital Nomad Life in 2025: Best Countries, Visas, and Tools for Remote Living',
      es: 'Vida nómada digital en 2025: Mejores países, visas y herramientas para vivir en remoto',
    },
    slug: 'digital-nomad-guide-2025',
    publishedAt: '2025-04-15T00:00:00Z',
    description: {
      en: 'A comprehensive guide to living and working remotely around the world in 2025.',
      es: 'Una guía completa para vivir y trabajar en remoto por el mundo en 2025.',
    },
    content: {
      en: 'The digital nomad lifestyle continues to flourish in 2025, with countries offering specialized visas and co-living communities. Top destinations include Portugal, Thailand, and Colombia, while tools like Starlink and portable workstations keep nomads connected.',
      es: 'El estilo de vida nómada digital sigue en auge en 2025, con países que ofrecen visas especiales y comunidades de co-living. Los destinos más populares incluyen Portugal, Tailandia y Colombia, mientras que herramientas como Starlink y estaciones de trabajo portátiles mantienen a los nómadas conectados.',
    },
  },
];

export const seedDatabase = async () => {
  for (const postData of postsData) {
    const post = await Post.create({
      slug: postData.slug,
      publishedAt: new Date(postData.publishedAt),
    });

    const translationEn = await PostTranslation.create({
      post: post._id,
      language: 'en',
      title: postData.title.en,
      description: postData.description.en,
      content: postData.content.en,
    });

    const translationEs = await PostTranslation.create({
      post: post._id,
      language: 'es',
      title: postData.title.es,
      description: postData.description.es,
      content: postData.content.es,
    });

    post.translations.push(translationEn._id, translationEs._id);
    await post.save();
  }

  console.log('✅ Seed completado');
};
