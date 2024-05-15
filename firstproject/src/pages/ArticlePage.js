// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import NotFoundPage from './NotFoundPage';
// import CommentsList from '../Components/CommentsList';
// import articles from './article-content';

// const ArticlePage = () => {
//     const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
//     const { articleId } = useParams();

//     useEffect(() => {
//         const loadArticleInfo = async () => {
//             const response = await axios.get(`/api/articles/${articleId}`);
//             const newArticleInfo = response.data;
//             setArticleInfo(newArticleInfo);
//         }

//         loadArticleInfo();
//     }, []);

//     const article = articles.find(article => article.name === articleId);

//     const addUpvote = async () => {
//         const response = await axios.put(`/api/articles/${articleId}/upvote`);
//         const updatedArticle = response.data;
//         setArticleInfo(updatedArticle);
//     }

//     if (!article) {
//         return <NotFoundPage />
//     }

//     return (
//         <div className='m-40'>
//         <h1 className='text-start font-Roboto text-7xl'>{article.title}</h1>
//         <div className="">
//             <button onClick={addUpvote}>Upvote</button>
//             <p>This article has {articleInfo.upvotes} upvote(s)</p>
//         </div>
//         {article.content.map((paragraph, i) => (
//             <p  className='m-4 text-justify font-Poppins bg-gradient-to-r from-indigo-200 via-purple-200 ' key={i}>{paragraph}</p>
//         ))}
//         <CommentsList comments={articleInfo.comments} />
//         </div>
//     );
// }

// export default ArticlePage;



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../Components/CommentsList';
import AddCommentForm from '../Components/AddCommentForm';
import articles from './article-content';

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const { articleId } = useParams();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        loadArticleInfo();
    }, []);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <div className='m-40'>
        <h1 className='text-start font-Roboto text-7xl'>{article.title}</h1>
        <div className="">
            <button className='bg-black text-white  rounded-lg font-Poppins w-40 m-4' onClick={addUpvote}>Upvote</button>
            <p className='font-Poppins m-7'>This article has {articleInfo.upvotes} upvote(s)</p>
        </div>
        {article.content.map((paragraph, i) => (
            <p className='m-4 text-justify font-Poppins bg-gradient-to-r from-indigo-200 via-purple-200 ' key={i}>{paragraph}</p>
        ))}
        <AddCommentForm
            articleName={articleId}
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
        <CommentsList comments={articleInfo.comments} />
        </div>
    );
}

export default ArticlePage;