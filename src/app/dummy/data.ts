export const dummyPosts = [
    {
        username: "Brien",
        postText: "Just finished my morning workout! Feeling energized and ready to tackle the day ahead. 💪 #FitnessGoals",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
        likes: 45,
        comments: 12
    },
    {
        username: "Sarah_Smith",
        postText: "Made the best pasta carbonara tonight! Secret ingredient? A little extra black pepper and lots of love! 🍝 #Cooking",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
        likes: 89,
        comments: 23
    },
    {
        username: "TechGuy_Mike",
        postText: "Finally got my hands on the new GPU! Can't wait to test it out with some high-end games. Anyone up for some gaming? 🎮",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
        likes: 156,
        comments: 34
    },
    {
        username: "Emma_Travels",
        postText: "Sunset in Bali hits different. Taking in these amazing views and feeling grateful. ✈️ #TravelLife",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
        likes: 234,
        comments: 45
    },
    {
        username: "BookWorm_Alex",
        postText: "Just finished reading 'The Midnight Library'. What a perspective-changing book! Any recommendations for what to read next? 📚",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
        likes: 67,
        comments: 28
    },
    {
        username: "CoffeeLover",
        postText: "Found this hidden gem of a café downtown. Their cold brew is absolutely amazing! ☕",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
        likes: 92,
        comments: 15
    },
    {
        username: "PetePics",
        postText: "New camera lens just arrived! Can't wait to capture some amazing shots this weekend. 📸",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
        likes: 178,
        comments: 31
    },
    {
        username: "GreenThumb_Jane",
        postText: "My succulents are thriving! Who else is into plant parenthood? 🌱 #PlantLover",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
        likes: 145,
        comments: 42
    },
    {
        username: "MusicMan_Dave",
        postText: "Just dropped my new track! Link in bio. Let me know what you think! 🎵",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
        likes: 289,
        comments: 67
    },
    {
        username: "ChefAna",
        postText: "Experimenting with Korean cuisine today. These kimchi pancakes turned out perfect! 🥘",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=10",
        likes: 198,
        comments: 45
    },
    {
        username: "FitnessFreak",
        postText: "New personal record on deadlifts today! Hard work pays off! 💪 #Fitness",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=11",
        likes: 167,
        comments: 29
    },
    {
        username: "ArtistMary",
        postText: "Finally finished this commission piece. So happy with how it turned out! 🎨",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=12",
        likes: 223,
        comments: 51
    },
    {
        username: "TechieSteve",
        postText: "Just launched my first app! Thanks everyone who supported me through this journey! 🚀",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=13",
        likes: 345,
        comments: 89
    },
    {
        username: "Wanderlust_Lisa",
        postText: "Hiking in the Swiss Alps was absolutely breathtaking! Nature at its finest! 🏔️",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=14",
        likes: 278,
        comments: 63
    },
    {
        username: "PetLover_Sam",
        postText: "Meet the newest addition to our family! Reddit, meet Luna! 🐱",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=15",
        likes: 432,
        comments: 95
    },
    {
        username: "MovieBuff",
        postText: "That plot twist in the new Christopher Nolan movie! Mind = Blown 🎬",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=16",
        likes: 187,
        comments: 56
    },
    {
        username: "GamerGirl",
        postText: "Finally beat that impossible boss! Only took 50 attempts 😅 #Gaming",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=17",
        likes: 165,
        comments: 34
    },
    {
        username: "FoodieJohn",
        postText: "Made my grandmother's secret recipe for the first time. Not quite like hers, but close! 👩‍🍳",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=18",
        likes: 143,
        comments: 27
    },
    {
        username: "YogaQueen",
        postText: "Day 30 of my yoga journey. Feeling more flexible and peaceful than ever! 🧘‍♀️",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=19",
        likes: 198,
        comments: 41
    },
    {
        username: "MountainMan",
        postText: "Summit reached! The view from Mount Rainier is absolutely incredible! ⛰️",
        profileUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=20",
        likes: 312,
        comments: 73
    }
].map(post => {
    const randomMinutesAgo = Math.floor(Math.random() * 60); // Random time in the last hour
    const postedTime = `${randomMinutesAgo} minutes ago`;

    let category = "";
    if (randomMinutesAgo <= 20) {
        category = "most-recent";
    } 
    if (post.likes > 50 || post.comments > 50) {
        category = category ? `${category}, trending` : "trending";
    }

    return {
        ...post,
        postedTime,
        category
    };
});
