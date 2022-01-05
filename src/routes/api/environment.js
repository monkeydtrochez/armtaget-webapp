import dotenv from 'dotenv';
dotenv.config();

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

export async function get() {
    return {
        body: {
            environment: process.env["VITE_ENVIRONMENT"]
        }
    }
}