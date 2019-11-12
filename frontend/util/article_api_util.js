

export const fetchArticles = () => (
    $.ajax({
        method: 'GET',
        url: '/api/articles'
    })
);

export const fetchArticle = (articleId) => (
    $.ajax({
        method: 'GET',
        url: `/api/articles/${articleId}`
    })
);

