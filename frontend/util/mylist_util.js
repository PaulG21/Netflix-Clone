export const getMyLists = () => {
    return $.ajax({
        method: 'get',
        url: "api/mylists"
    })
}

export const addToMyList = (movieId) => {
    return $.ajax({
        method: 'post',
        url: "api/mylists",
        data: { movieId }
    })
}

export const removeFromMyList = (id) => {
    return $.ajax({
        method: 'delete',
        url: `api/mylists/${id}`
    })
}