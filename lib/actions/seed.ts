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
      en: 'Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated',
      es: 'Equilibrando aficiones y programación: Cómo el senderismo y la escalada me ayudan a mantenerme motivado'
    },
    slug: 'balancing-hobbies-and-coding',
    publishedAt: '2025-02-18T00:00:00Z',
    description: {
      en: 'Thoughts on maintaining energy and focus through outdoor activities and exercise.',
      es: 'Reflexiones sobre cómo mantener la energía y concentración a través de actividades al aire libre y ejercicio.'
    },
    content: {
      en: "Today I want to talk about how I juggle my love for hiking and rock climbing with my growing passion for coding. It's easy to get so deep into front-end development that we forget to step away from our screens. But for me, embracing outdoor adventures has been crucial in keeping my mind fresh and my motivation strong.\n\n---\n\n## Why Balance Matters\nIt's tempting to pour all your energy into coding—especially when you're in a good flow or *this close* to fixing that stubborn bug. However, **taking breaks** and staying active can help you:\n\n1. **Clear Your Head**: Stepping away from lines of code often leads to creative problem-solving breakthroughs.\n2. **Maintain Physical Health**: Coding can be pretty sedentary, so regular exercise helps offset hours at the computer.\n3. **Boost Mental Resilience**: Outdoor hobbies let you recharge, fight stress, and come back stronger for the next coding challenge.\n\n---\n\n> **Warning: Be aware of burnout**  \n> Overworking at your desk—even if you love what you're doing—can lead to burnout. If you're feeling overwhelmed or fatigued, consider stepping away for a quick walk or a stretching session. Your code (and your body) will thank you!\n\n---\n\n## My Outdoor Adventures\n\n### 1. Hiking\nI've always loved the feeling of conquering a trail and reaching a scenic overlook. Hiking challenges my endurance and keeps me grounded in nature's beauty. Whether it's a short trail on a lazy afternoon or a full-day trek in the mountains, the fresh air and picturesque views give me the clarity I need when I'm stuck on a tricky coding problem.\n\n> **Tip: Bring a small notebook on your hikes**  \nSometimes, those “aha” moments pop up when you're miles away from your keyboard!\n\n### 2. Rock Climbing\nRock climbing might seem worlds away from coding, but it actually mirrors the problem-solving aspects of development:\n\n- **Strategic Thinking**: Each route is like a puzzle, and you have to figure out the sequence of moves.\n- **Incremental Progress**: You improve over time, one hold at a time, just like learning new coding concepts.\n\nRock climbing also helps build confidence—if I can overcome a tough route on the wall, I can handle whatever JavaScript throws at me.\n\n---\n\n## Tips for Staying Motivated\n\n1. **Plan Your Adventure**: Before a big project, schedule a hike or climbing session. It gives you a goal to work toward and a well-deserved break afterward.\n2. **Start Small**: If you're new to outdoor activities, you don't have to summit the highest peak. A simple walk in the park can do wonders for your mood.\n3. **Listen to Your Body**: If you're tired, don't force yourself to climb a 5.12 route! Find a balance between pushing your limits and staying safe.\n4. **Track Your Progress**: Just like version control, keep track of your achievements in both coding and hobbies. Looking back at how far you've come is super motivating.\n\n---\n\n## Final Thoughts\nBalancing coding with activities like hiking and rock climbing has been a game-changer for me. By stepping away from the computer, I find renewed focus, more creativity, and a stronger sense of well-being. Whether you're a seasoned developer or just starting out, remember: taking care of your mind and body is just as important as mastering that new JavaScript framework.\n\nThanks for reading!\n\n— Paulina",
      es: "Hoy quiero hablar de cómo equilibrar mi amor por el senderismo y la escalada con mi creciente pasión por la programación. Es fácil perderse en el desarrollo frontend y olvidar que debemos alejarnos de las pantallas. Pero para mí, abrazar las aventuras al aire libre ha sido crucial para mantener mi mente fresca y mi motivación fuerte.\n\n---\n\n## Por qué el equilibrio es importante\nEs tentador volcar toda tu energía en la programación, especialmente cuando estás en un buen flujo o *tan cerca* de arreglar ese molesto error. Sin embargo, **tomarse descansos** y mantenerse activo puede ayudarte a:\n\n1. **Despejar tu mente**: Alejarte del código a menudo conduce a descubrimientos creativos.\n2. **Mantener la salud física**: La programación puede ser bastante sedentaria, por lo que el ejercicio regular ayuda a contrarrestar las horas frente al ordenador.\n3. **Aumentar la resistencia mental**: Las aficiones al aire libre te permiten recargar energías, combatir el estrés y volver más fuerte para el siguiente reto de programación.\n\n---\n\n> **Advertencia: Cuidado con el agotamiento**  \n> Trabajar en exceso frente a tu escritorio, incluso si amas lo que haces, puede llevar a agotamiento. Si te sientes abrumado o fatigado, considera hacer una caminata rápida o una sesión de estiramientos. ¡Tu código (y tu cuerpo) te lo agradecerán!\n\n---\n\n## Mis aventuras al aire libre\n\n### 1. Senderismo\nSiempre me ha encantado la sensación de conquistar un sendero y llegar a un mirador. El senderismo desafía mi resistencia y me mantiene conectado con la belleza de la naturaleza. Ya sea una caminata corta en una tarde tranquila o una excursión de todo el día en las montañas, el aire fresco y las vistas pintorescas me dan la claridad que necesito cuando me enfrento a un problema complicado de programación.\n\n> **Consejo: Lleva una pequeña libreta en tus caminatas**  \n¡A veces, esos momentos “aha” surgen cuando estás a kilómetros de tu teclado!\n\n### 2. Escalada\nLa escalada puede parecer algo completamente diferente a la programación, pero en realidad refleja los aspectos de resolución de problemas del desarrollo:\n\n- **Pensamiento estratégico**: Cada ruta es como un rompecabezas, y tienes que averiguar la secuencia de movimientos.\n- **Progreso incremental**: Mejoras con el tiempo, paso a paso, al igual que aprender nuevos conceptos de programación.\n\nLa escalada también ayuda a ganar confianza: si puedo superar una ruta difícil en la pared, puedo manejar lo que sea que JavaScript me eche.\n\n---\n\n## Consejos para mantener la motivación\n\n1. **Planifica tu aventura**: Antes de un gran proyecto, agenda una caminata o sesión de escalada. Te da un objetivo por el que trabajar y un merecido descanso después.\n2. **Comienza poco a poco**: Si eres nuevo en las actividades al aire libre, no tienes que conquistar la montaña más alta. Un simple paseo por el parque puede hacer maravillas por tu ánimo.\n3. **Escucha a tu cuerpo**: Si estás cansado, no te obligues a escalar una ruta 5.12. Encuentra un equilibrio entre desafiarte y mantenerte seguro.\n4. **Haz un seguimiento de tu progreso**: Al igual que en el control de versiones, lleva un registro de tus logros tanto en la programación como en tus aficiones. Mirar atrás y ver lo lejos que has llegado es muy motivador.\n\n---\n\n## Pensamientos finales\nEquilibrar la programación con actividades como el senderismo y la escalada ha sido un cambio radical para mí. Al alejarme del ordenador, encuentro un enfoque renovado, más creatividad y un sentido de bienestar más fuerte. Ya seas un desarrollador experimentado o estés empezando, recuerda: cuidar tu mente y cuerpo es tan importante como dominar ese nuevo framework de JavaScript.\n\n¡Gracias por leer!\n\n— Paulina"
    },
  },
  {
    title: {
      en: 'Reading for Inspiration: 5 Books That Shaped My Coding Journey',
      es: 'Lectura para inspiración: 5 libros que moldearon mi camino como programadora'
    },
    slug: '5-books-that-shaped-my-coding-journey',
    publishedAt: '2025-02-15T00:00:00Z',
    description: {
      en: 'A few of my favorite books, both fiction and non-fiction, that keep me motivated.',
      es: 'Algunos de mis libros favoritos, tanto de ficción como de no ficción, que me mantienen motivada.'
    },
    content: {
      en: "As much as I love sitting down with a code editor, sometimes I need a break from staring at screens. That's where books come in. Over the past few years, I've found that reading the right books—whether they're about coding, creativity, or even fantasy—has given me new perspectives and fresh motivation. Below are five titles that have really *shaped my journey* so far.\n\n---\n\n## 1. *The Pragmatic Programmer* by Andrew Hunt and David Thomas\nI'll admit, it took me a while to pick this one up. Once I did, I realized why so many developers recommend it. It's packed with practical advice on how to write clean, maintainable code and think critically about the process of software development.  \n**Why I Love It**: It's not just about coding—it's about cultivating a curious, problem-solving mindset that makes you better at everything tech-related.\n\n---\n\n## 2. *Code Complete* by Steve McConnell\nAnother big name in the programming world, *Code Complete* dives into the nitty-gritty of building robust, maintainable software. It covers naming conventions, debugging, testing, and so much more.  \n**Key Takeaway**: It's like a “best practices” bible, encouraging you to write code that's readable, efficient, and built to last.\n\n---\n\n## 3. *Educated* by Tara Westover\nThis isn't a coding book, but it's a powerful memoir about growing up in a challenging environment and finding your own path to learning.  \n**Inspiration Factor**: It reminds me that *anyone* can overcome obstacles and grow, regardless of where they start. For me, that mindset is crucial when I'm feeling behind or overwhelmed by new tech.\n\n---\n\n> **Information: Did you know?**  \n> Reading about topics *outside* of coding can boost creativity and help you see problems from different angles. Biographies, memoirs, and even works of fiction can all contribute to your growth as a developer.\n\n## 4. *The Hobbit* by J.R.R. Tolkien\nOkay, so this one might seem out of left field. But I've been a fantasy lover for ages, and *The Hobbit*—with its sense of adventure and discovery—reminds me that learning new skills is its own kind of epic quest.  \n**Personal Note**: Sometimes, diving into a fictional world helps reset my brain so I can return to coding challenges with fresh energy.\n\n---\n\n## 5. *Don't Make Me Think* by Steve Krug\nFocusing on user experience (UX) might seem like a “later step” in the coding journey, but this classic book shows how a user-friendly design approach can transform your projects from day one.  \n**Main Lesson**: Your app or website should be intuitive enough that users don't have to *think* about how to navigate it. Less friction equals more enjoyment!\n\n---\n\n## My Advice for Fellow Readers\n- **Mix It Up**: Read both technical and non-technical books.\n- **Reflect**: After finishing a book, jot down your biggest takeaways.\n- **Apply What You Learn**: If it's a coding concept, try it in a small project. If it's a life lesson, see how it shapes your mindset when tackling problems.\n\nReading has been an amazing way for me to step back, recharge, and approach my work with fresh eyes. If you're looking for inspiration on your own coding journey, give these books a shot—or go hunting for new titles that speak to you.\n\n— Paulina",
      es: "Por mucho que me encante sentarme con un editor de código, a veces necesito un descanso de estar mirando pantallas. Ahí es donde entran los libros. En los últimos años, he descubierto que leer los libros adecuados, ya sea sobre programación, creatividad o incluso fantasía, me ha dado nuevas perspectivas y motivación renovada. A continuación, te dejo cinco títulos que realmente han *moldeado mi camino* hasta ahora.\n\n---\n\n## 1. *The Pragmatic Programmer* por Andrew Hunt y David Thomas\nLo admito, me tardé un poco en leer este libro. Pero una vez lo hice, me di cuenta de por qué tantos desarrolladores lo recomiendan. Está lleno de consejos prácticos sobre cómo escribir código limpio y mantenible, y cómo pensar críticamente sobre el proceso de desarrollo de software.  \n**Lo que me encanta**: No se trata solo de programación, sino de cultivar una mentalidad curiosa y resolutiva que te hace mejor en todo lo relacionado con la tecnología.\n\n---\n\n## 2. *Code Complete* por Steve McConnell\nOtro nombre importante en el mundo de la programación, *Code Complete* profundiza en los aspectos más técnicos de construir software robusto y mantenible. Cubre convenciones de nombres, depuración, pruebas y mucho más.  \n**Lección clave**: Es como una biblia de “mejores prácticas”, que te anima a escribir código que sea legible, eficiente y diseñado para durar.\n\n---\n\n## 3. *Educated* por Tara Westover\nEste no es un libro de programación, pero es una poderosa memoria sobre crecer en un entorno desafiante y encontrar tu propio camino de aprendizaje.  \n**Factor inspirador**: Me recuerda que *cualquier persona* puede superar obstáculos y crecer, sin importar dónde empiece. Para mí, esa mentalidad es crucial cuando me siento atrasada o abrumada por nuevas tecnologías.\n\n---\n\n> **Información: ¿Sabías que?**  \n> Leer sobre temas *fuera* de la programación puede aumentar la creatividad y ayudarte a ver problemas desde diferentes ángulos. Las biografías, memorias e incluso obras de ficción pueden contribuir a tu crecimiento como desarrolladora.\n\n## 4. *The Hobbit* de J.R.R. Tolkien\nBueno, este puede parecer fuera de lugar. Pero he sido amante de la fantasía durante mucho tiempo, y *El Hobbit*—con su sentido de aventura y descubrimiento—me recuerda que aprender nuevas habilidades es una especie de búsqueda épica.\n**Nota personal**: A veces, sumergirse en un mundo ficticio ayuda a reiniciar mi cerebro para que pueda volver a los retos de programación con energía renovada.\n\n---\n\n## 5. *Don't Make Me Think* por Steve Krug\nEl enfoque en la experiencia de usuario (UX) puede parecer una “etapa posterior” en el camino de la programación, pero este libro clásico muestra cómo un enfoque de diseño fácil de usar puede transformar tus proyectos desde el primer día.  \n**Lección principal**: Tu aplicación o sitio web debe ser tan intuitivo que los usuarios no tengan que *pensar* en cómo navegar por él. ¡Menos fricción equivale a más disfrute!\n\n---\n\n## Mis consejos para otros lectores\n- **Mezcla**: Lee tanto libros técnicos como no técnicos.\n- **Reflexiona**: Después de terminar un libro, apunta tus ideas principales.\n- **Aplica lo que aprendas**: Si es un concepto de programación, pruébalo en un proyecto pequeño. Si es una lección de vida, observa cómo cambia tu mentalidad a la hora de resolver problemas.\n\nLeer ha sido una manera increíble para mí de dar un paso atrás, recargar energías y abordar mi trabajo con una nueva perspectiva. Si estás buscando inspiración en tu propio camino de programación, prueba estos libros o busca nuevos títulos que te inspiren.\n\n— Paulina"
    },
  }
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
