'use client'
import BooksData from "@/hooks/BooksData";
import { BookDataType } from "@/types/bookDataType";
import BookCard from "./BookCard";




const books = () => {
    const { books }: { books: BookDataType[] } = BooksData();
   


    return (
        <>
            <section className="container mx-auto my-25">
                <h1 className=" text-[40px] font-heading font-bold text-[#131313] text-center">Books</h1>
                <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                    }
                </div>
            </section>

        </>
    );
};

export default books;