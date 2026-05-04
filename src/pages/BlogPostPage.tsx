import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Tag, ChevronRight } from "lucide-react";
import { supabase } from "../lib/supabase";
import { BLOG_POSTS, APP_CONFIG } from "../constants";

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;
      
      setLoading(true);
      console.log(`Buscando detalhes do post ID: ${id}...`);
      
      // Tentar buscar no Supabase
      if (supabase) {
        const { data, error } = await supabase
          .from('posts_accar')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error("Erro ao buscar post no Supabase:", error);
        } else if (data) {
          console.log("Post encontrado no Supabase:", data.title);
          setPost({
            id: data.id,
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            image: data.image_url,
            date: new Date(data.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
            category: data.category || 'Dica Técnica'
          });
          setLoading(false);
          return;
        }
      }

      console.log("Post não encontrado no Banco ou Supabase offline. Tentando dados estáticos...");
      // Fallback para dados estáticos se não encontrar no banco ou banco offline
      const staticPost = BLOG_POSTS.find(p => p.id === Number(id));
      if (staticPost) {
        setPost(staticPost);
      } else {
        console.error("Post não encontrado em nenhuma fonte. Redirecionando...");
        navigate('/blog');
      }
      setLoading(false);
    }

    fetchPost();
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="pt-40 pb-24 flex justify-center">
        <div className="w-12 h-12 border-4 border-bosch-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs & Back */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-bosch-cyan transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para o Blog
          </Link>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6 text-sm font-bold uppercase tracking-widest text-bosch-cyan italic">
              <span className="flex items-center gap-1"><Tag size={14} /> {post.category || 'Dica Técnica'}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-8 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-500 italic font-light leading-relaxed">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[60px] overflow-hidden mb-16 shadow-2xl aspect-video"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Render */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-8 prose-p:italic prose-p:font-light prose-strong:text-dark prose-strong:font-bold prose-ul:list-disc prose-li:text-gray-600 mb-20"
          >
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>Conteúdo em desenvolvimento...</p>
            )}
          </motion.div>

          {/* CTA Box */}
          <div className="bg-bosch-blue rounded-[50px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-bosch-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h3 className="text-3xl font-display font-bold mb-4 italic">Gostou da dica?</h3>
                <p className="text-bosch-cyan font-bold uppercase tracking-widest text-sm mb-6">Mantenha seu carro com a qualidade Bosch Car Service.</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${APP_CONFIG.whatsapp}`}
                className="bg-white text-bosch-blue px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl flex items-center gap-3 whitespace-nowrap"
              >
                Agendar Agora <ChevronRight size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
