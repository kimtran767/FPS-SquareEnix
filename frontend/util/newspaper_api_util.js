

export const fetchNewspapers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/newspapers'
    })
);

export const fetchNewspaper = (newspaperId) => (
    $.ajax({
        method: 'GET',
        url: `/api/newspapers/${newspaperId}`
    })
);

