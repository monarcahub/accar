import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../constants";
import { supabase } from "../lib/supabase";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>(BLOG_POSTS);

  useEffect(() => {
    async function fetchPosts() {
      if (!supabase) {
        console.warn("Supabase: Client não inicializado (Homepage Blog). Verifique variáveis de ambiente.");
        return;
      }
      
      console.log("Blog (Home): Buscando posts ativos...");
      const { data, error } = await supabase
        .from('posts_accar')
        .select('*')
        .eq('status', 'active')
        .order('published_at', { ascending: false })
        .limit(2);

      if (error) {
        console.error("Supabase Error (Home):", error);
      } else if (data && data.length > 0) {
        console.log(`Blog (Home): ${data.length} posts ativos carregados.`);
        setPosts(data.map(p => ({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt,
          image: p.image_url,
          date: new Date(p.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
          category: p.category || 'Dica Técnica'
        })));
      } else {
        console.log("Blog (Home): Nenhum post ativo encontrado no banco.");
      }
    }

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">Fique por dentro</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
              O Que Há de Novo?
            </h2>
            <p className="text-gray-500 max-w-xl text-lg font-light">
              Confira nossos últimos posts com novidades e dicas fantásticas sobre mecânica e cuidados com o seu carro!
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:flex items-center gap-2 font-bold text-dark hover:text-bosch-blue transition-colors group"
          >
            VER BLOG COMPLETO
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-video">
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </div>
              
              <div className="px-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-bosch-blue/10 text-bosch-blue text-[10px] uppercase font-black px-3 py-1 rounded-full">{post.category || 'DICA TÉCNICA'}</span>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="block">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4 group-hover:text-bosch-blue transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-lg leading-relaxed font-light mb-6">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="flex items-center gap-2 font-bold text-bosch-cyan hover:text-bosch-blue group-hover:gap-4 transition-all"
                >
                  Ler matéria completa
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <button className="md:hidden w-full mt-12 py-4 bg-gray-50 rounded-2xl font-bold flex items-center justify-center gap-2">
          VER BLOG COMPLETO
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
