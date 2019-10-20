import ApiService from './Api'

const endQuery = '.json?print=pretty';
const _baseUrl = 'https://hacker-news.firebaseio.com/v0';
const client = new ApiService({baseURL : _baseUrl});

const getRequiredStories = (storyIds, noOfStories) => {
    for (let i = storyIds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [storyIds[i], storyIds[j]] = [storyIds[j], storyIds[i]];
    }
    return storyIds.slice(0,noOfStories);
}

const hackerNewApi = {}

hackerNewApi.fetchStories = () => client.get(`/topstories${endQuery}`);

hackerNewApi.fetchSingleStory = id => client.get(`/item/${id}${endQuery}`);

hackerNewApi.getTopStories = (ids, noOfStories) => {
    const requiredStories = getRequiredStories(ids, noOfStories);
    const results = requiredStories.map(id=>hackerNewApi.fetchSingleStory(id));
    return Promise.all(results);
}

export default hackerNewApi;