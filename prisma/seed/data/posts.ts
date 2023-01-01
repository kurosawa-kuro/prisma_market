import { faker } from '@faker-js/faker';

export const Posts = [
    // User 1
    {
        id: 1,
        user_id: 1,
        title: 'title 1',
        content: 'content 1',
        image_url: 'image_url 1',
        createdAt: new Date(faker.date.past()),
        updatedAt: new Date(faker.date.past()),
    },
    {
        id: 2,
        user_id: 1,
        title: 'title 2',
        content: 'content 2',
        image_url: 'image_url 2',
        createdAt: new Date(faker.date.past()),
        updatedAt: new Date(faker.date.past()),
    },

    // User 2
    // {
    //     id: '9371f314-1c93-11ec-9621-0242ac130002',
    //     createdAt: new Date(
    //         'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
    //     ),
    //     updatedAt: new Date(
    //         'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
    //     ),
    // }
];