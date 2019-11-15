

export const fetchComment = (comment) => (

    $.ajax({
        method: 'GET',
        url: `api/newspapers/${comment.news_id}/comments/${comment.id}`
    })
);

export const createComment = (comment) => {
    // debugger
    return (
            $.ajax({
                method: 'POST',
                url: `api/newspapers/${comment.newsId}/comments`,
                data: { comment }
            })

    )
}

export const updateComment = (comment) => (
    $.ajax({
        method: 'PATCH',
        url: `api/newspapers/${comment.news_id}/comments/${comment.id}`,
        data: { comment }
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/newspapers/${comment.news_id}/comments/${commentId}`
    })
)