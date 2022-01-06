
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

export async function get() {
    return {
        body: {
            environment: import.meta.env.VITE_ENVIRONMENT
        }
    }
}