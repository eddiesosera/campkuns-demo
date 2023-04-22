export const usersDB = [
    {
        id: 1,
        account: {
            name: 'Eddie',
            username: 'eddie',
            verified: true,
            location: 'ZA',
            city: 'JHB'
        },
        profile: {
            occupation: 'Artist',
            price: 500,
            followers: 543,
            followng: 87,
            posts: 3,
            bio: 'I’m a designer and dev/design student interested in collabs with like-minded peers.'
        },
        contactDetails: {
            phone: 27656121224,
            email: 'eddiesxcorner@gmail.com',
        },
        content: {
            category: 'digital-design',
            tags: ['artcover', 'music', 'grahicdesign', 'designer']
        },
        images: ['https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908', 'https://fastly.picsum.photos/id/417/2896/1944.jpg?hmac=9rm8TeiXN4ciMkjRusgPjrZQekh4qwoe4gOWAxm9avk', 'https://fastly.picsum.photos/id/420/4825/3217.jpg?hmac=ni53zQY-nHD1AgiPot8SAJLXKwhqk6Uz6iR0_-7xuns'],
        engagement: {
            user: {
                category: ['Illustration', 'Digital Design'],
                tags: ['artcover', 'music', 'grahicdesign', 'designer'],
                occupations: ['Designers, Painters'],
            },
            fans: {
                fans_agreed: 500,
                price_recommendations: {
                    price_recommendation_increase: 29,
                    price_recommendation_decrease: 10
                }
            }
        }
    },
    {
        id: 2,
        account: {
            name: 'Emma',
            username: 'genephotography',
            verified: true,
            location: 'ZA',
            city: 'PTA'
        },
        profile: {
            occupation: 'Photographer',
            price: 500,
            followers: 543,
            followng: 87,
            posts: 3,
            bio: 'Capturing moments that deserves to look as golden as they feel. Lifestyle | Weddings | Editorial Pretoria & Beyond'
        },
        contactDetails: {
            phone: 27656121224,
            email: 'genephotography@gmail.com',
        },
        content: {
            category: 'photography',
            tags: ['Lifestyle', 'Editorial', 'Weddings']
        },
        images: ['https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908'],
        engagement: {
            user: {
                category: ['Illustration', 'Digital Design'],
                tags: ['Lifestyle', 'Editorial', 'Weddings'],
                occupations: ['Designers, Painters'],
            },
            fans: {
                fans_agreed: 500,
                price_recommendations: {
                    price_recommendation_increase: 29,
                    price_recommendation_decrease: 10
                }
            }
        }
    }
]