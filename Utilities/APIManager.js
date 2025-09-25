
export const APIManager = async ({ url , onSuccess , onError }) => {
    try {
        const response = await fetch(url)
        const json = await response.json();
        // console.log(json)
        onSuccess && onSuccess(json)
    } catch (error) {
        onError && onError(error)
    }
}

