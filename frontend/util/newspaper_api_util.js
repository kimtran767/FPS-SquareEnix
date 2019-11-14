

export const fetchNewspapers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/newspapers'
    })
);

export const fetchNewspaper = (newspaperId) => {
    // debugger
    return (
        $.ajax({
            method: 'GET',
            url: `/api/newspapers/${newspaperId}`
        })

    )
};

