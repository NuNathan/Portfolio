const requestOptions = {
    method: "GET",
    redirect: "follow"
};

const getRepositories = new Promise((resolve, reject) => {

    setTimeout(() => {
        fetch("https://api.github.com/users/nunathan/repos", requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                const mappedArray = result.map((section) => {
                    return {
                        name: section.name,
                        url: section.owner.repos_url,
                        language: section.language
                    }
                });
                resolve(mappedArray)
            })

            .catch((error) => reject(error));
    }, 300)
})

export default getRepositories;