import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    // console.log(articleId)
    const article = articles.find(article => article.name === articleId);
//articles/learn-react
//articles/nextjs

    return (
        <div className='m-40'>
        <h1 className='text-start font-Roboto text-7xl' >{article.title}</h1>
        {article.content.map(paragraph => (
            <p className='m-4 text-justify font-Poppins bg-gradient-to-r from-indigo-200 via-purple-200 '>{paragraph}</p>
        ))}
        </div>
    );
}

export default ArticlePage;


