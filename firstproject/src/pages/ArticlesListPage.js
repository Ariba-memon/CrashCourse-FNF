
import { Link } from 'react-router-dom';
import articles from './article-content';
import ArticlesList from '../Components/ArticlesList'
const ArticlesListPage = () => {
    return (
        <>
       
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticlesListPage;