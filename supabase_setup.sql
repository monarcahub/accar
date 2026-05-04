-- Script ATUALIZADO para o SQL Editor do Supabase --
-- Acesse: https://supabase.com/dashboard/project/_/sql --

-- 1. Criar a tabela de postagens com novas colunas
CREATE TABLE IF NOT EXISTS posts_accar (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT, -- Conteúdo completo do artigo
  image_url TEXT NOT NULL,
  category TEXT DEFAULT 'Dica Técnica',
  status TEXT DEFAULT 'pending' CHECK (status IN ('active', 'pending')), -- Filtro de visibilidade
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Habilitar RLS (Segurança)
ALTER TABLE posts_accar ENABLE ROW LEVEL SECURITY;

-- 3. Criar política de acesso público (Leitura liberada apenas para os ATIVOS)
DROP POLICY IF EXISTS "Permitir leitura pública" ON posts_accar;
CREATE POLICY "Permitir leitura pública" ON posts_accar
  FOR SELECT USING (status = 'active');

-- 4. Exemplo de inserção
-- INSERT INTO posts_accar (title, excerpt, content, image_url, category, status)
-- VALUES 
-- ('Dica de Freios', 'Resumo aqui...', 'Texto completo aqui...', 'url_imagem', 'Segurança', 'active');
