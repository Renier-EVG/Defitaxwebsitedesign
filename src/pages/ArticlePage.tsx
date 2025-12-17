import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { getArticleById } from '../data/articles';

interface ArticlePageProps {
  article: any;
  onNavigate: (page: string, section?: string) => void;
}

export function ArticlePage({ article, onNavigate }: ArticlePageProps) {
  // Get the full article content from the centralized data
  const articleContent = article?.id ? getArticleById(article.id) : null;
  
  // Fallback if no article is found
  if (!articleContent) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1440px] mx-auto px-8 py-6">
            <button
              onClick={() => onNavigate('blog')}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Blog</span>
            </button>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto px-8 py-16 text-center">
          <h2 className="text-3xl mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <button
            onClick={() => onNavigate('blog')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 py-6">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16">
        <div className="max-w-[700px] mx-auto px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`${articleContent.categoryColor} text-white px-4 py-2 rounded-full font-medium inline-block`}>
              {articleContent.category}
            </span>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={articleContent.image}
              alt={articleContent.title}
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {articleContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className={`text-3xl mb-6 ${index === 0 ? 'mt-0' : 'mt-12'}`}>
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}