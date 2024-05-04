async function* fetchPostsPage(pageNumber) {
    const response = await fetch(`https://api.example.com/posts?page=${pageNumber}`);
    const data     = await response.json();
    yield data;
}

async function displayPosts() {
    let currentPage = 1;

    while(true) {
        const generator = fetchPostsPage(currentPage);
        const result = await generator.next();
        const posts = result.value;

        if(posts.length === 0) {
            // No more posts.
            break;
        }

        // Process and display the fetched posts.
        for(const post of posts) {
            // ... display post logic here ...
        }
        
        currentPage++;
    }
}