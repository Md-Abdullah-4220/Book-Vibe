export const displayCard  = async () => {
    try {
        const res = await fetch('/src/assets/booksData.json');
        if (!res.ok) throw new Error('Failed to fetch jobs');
        return res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

