'use client';

import { BookDataType } from "@/types/bookDataType";
import { useEffect, useState } from "react";



const BooksData = () => {
    const [books, setBooks] = useState<BookDataType[]>([]);
    const [error, setError] = useState('')
    useEffect(() => {
        const loadBooks = async () => {

            try {
                const res = await fetch('/booksData.json');
                if (!res.ok) {
                    throw new Error('Faild to fetch Books')
                }
                const data = await res.json();
                setBooks(data);
            } catch (err) {
                setBooks([]);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        }
        loadBooks();
    }, [])


    return (
        { books, error }
    );
};

export default BooksData;
