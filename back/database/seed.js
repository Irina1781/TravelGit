import { db } from './index.js';
import { climatesTable } from './schema.js';

const climatesData = [
    {
        name: 'Антарктический',
    },
    {
        name: 'Экваториальный',
    },
    {
        name: 'Субэкваториальный',
    },
    {
        name: 'Тропический',
    },
    {
        name: 'Субтропический',
    },
    {
        name: 'Умеренный',
    },
    {
        name: 'Арктический',
    },
    {
        name: 'Средиземноморский',
    }
];

await db.insert(climatesTable).values(climatesData);
console.log('Climates created!')

const climates = await db.select().from(climatesTable);
console.log('Getting all climates from the database: ', climates)
