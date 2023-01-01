import { faker } from '@faker-js/faker';

export const Users = [
    // User 1
    {
        id: 1,
        name: 'test user',
        email: 'user@user.com',
        password: '$2b$10$6daMkc2N.9Rt6zdmoYYU1eRcmGFFB.p6HkGtrMjH787ScqPqO26AO', // password
        role: 'user',
        createdAt: new Date(
            faker.date.past(),
        ),
        updatedAt: new Date(
            faker.date.past(),
        ),
    },
    {
        id: 2,
        name: 'test admin',
        email: 'admin@admin.com',
        password: '$2b$10$6daMkc2N.9Rt6zdmoYYU1eRcmGFFB.p6HkGtrMjH787ScqPqO26AO', // password
        role: 'admin',
        createdAt: new Date(
            faker.date.past(),
        ),
        updatedAt: new Date(
            faker.date.past(),
        ),
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