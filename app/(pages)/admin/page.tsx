import { Button } from '@/components';
import { getAllPosts } from '@/lib/actions/posts';
import { PostI } from '@/types';
import Link from 'next/link';
import React from 'react';

// Agregar post
// accionb de agregar
// lista de post => eleminar y editar
// accion de eliminar
// accion de editar

const Admin = async () => {
  const { posts } = (await getAllPosts({})) as { posts: string };
  const postData = JSON.parse(posts);

  console.log('posts', postData);
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-light-700_dark-0 font-bold">
          Panel de Administracion
        </h1>
        <Link href="/article/create">
          <Button>Agregar</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {postData.map((post: PostI) => (
          <div key={post._id} className="flex justify-between">
            <span className="text-light-700_dark-0">{post.slug}</span>
            <div className="flex items-center gap-2.5">
              <Button>Editar</Button>
              <Button>Eliminar</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admin;
