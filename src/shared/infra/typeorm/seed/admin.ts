import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import createConnection from '@shared/infra/typeorm';

async function create() {
    const connection = await createConnection('localhost');

    const id = uuidv4();
    const password = await hash('teste', 8);

    await connection.query(
        `INSERT INTO USERS(id, name, email, driver_license, password, is_admin, created_at)
        VALUES (
            '${id}',
            'admin',
            'admin@gmail.com',
            'A5MC28',
            '${password}',
            true,
            now()
        )
        `
    );
}

create().then(() => console.log('teste'));
