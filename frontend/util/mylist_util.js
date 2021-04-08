export const fetchMyLists = () => (
    $.ajax({
        url: 'api/mylists'
    })
)

export const addToMyList = (movieId) => (
    $.ajax({
        url: 'api/mylists',
        method: 'POST',
        data: { movieId }
    })
)

export const removeFromMyList = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/mylists/${id}`,
        // data: { id }
    })
)