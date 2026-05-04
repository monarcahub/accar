import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";
import { ArrowRight, Search } from "lucide-react";
import { supabase } from "../lib/supabase";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image_url: string;
  category: string;
  published_at: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>(BLOG_POSTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      if (!supabase) {
        console.warn("Supabase não inicializado. Verifique VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY nas configurações.");
        return;
      }
      
      setLoading(true);
      console.log("Buscando posts do Supabase...");
      const { data, error } = await supabase
        .from('posts_accar')
        .select('*')
        .eq('status', 'active')
        .order('published_at', { ascending: false });

      if (error) {
        console.error("Erro ao buscar posts do Supabase:", error);
      } else if (data) {
        console.log(`Sucesso! ${data.length} posts encontrados.`);
        if (data.length > 0) {
          setPosts(data.map(p => ({
            id: p.id,
            title: p.title,
            excerpt: p.excerpt,
            image: p.image_url,
            date: new Date(p.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
            category: p.category || 'Dica Técnica'
          })));
        }
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-4 block">Blog A.C. CAR</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark leading-tight">
              Mantenha-se <span className="text-bosch-blue">Informado</span>
            </h1>
          </motion.div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Buscar dicas..." 
              className="w-full bg-gray-100 border-none rounded-full px-6 py-4 text-dark focus:ring-2 focus:ring-bosch-cyan outline-none"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-bosch-cyan border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-[4/3]">
                  <Link to={`/blog/${post.id}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-bosch-cyan italic">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-gray-400">{post.category || 'Dica Bosch'}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-display font-bold text-dark mb-4 group-hover:text-bosch-blue transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-500 mb-8 font-light line-clamp-2 italic">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 font-bold text-dark border-b-2 border-bosch-cyan pb-1 hover:text-bosch-blue hover:border-bosch-blue transition-all"
                >
                  Ler matéria <ArrowRight size={18} />
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
