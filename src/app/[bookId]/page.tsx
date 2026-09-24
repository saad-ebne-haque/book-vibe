'use client';
import BooksData from "@/hooks/BooksData";
import { BookDataType } from "@/types/bookDataType";
import Image from "next/image";
import { Suspense, use } from "react";


export interface BooksDetailsPageProps {
    params: Promise<{ bookId: string }>
}

export default function BooksDetailsPage({ params }: BooksDetailsPageProps) {
    const { bookId } = use(params);
    const book: BookDataType | undefined = BooksData().books.find(book => book.bookId === Number(bookId));
    console.log(book);
    return (
        <>
<Suspense fallback={<p>Loading...........</p>}>


            <div className="container mx-auto my-5 flex items-center  gap-12">
                <div className="p-18.75 bg-[#131313]/5 rounded-2xl w-full flex items-center justify-center">
            
                       <Image
                        src={book?.image||'/assets/hero_img.jpg'}
                        alt={book?.bookName||''}
                        width={425}
                        height={564}
                    >

                    </Image>
             
                </div>
                <div className="w-full">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-[#131313] text-[40px] font-bold font-heading">{book?.bookName}</h1>
                            <p className="text-[#131313]/80 text-xl font-medium">By : {book?.author}</p>
                        </div>
                        <p className="py-4 border-y border-y-[#131313]/15  text-[#131313]/80 text-xl font-medium">
                            {book?.category}
                        </p>
                        <p className="text-[#131313]/70 leading-relaxed">
                            <b className="text-[#131313]">Review :</b> {book?.review}
                        </p>
                        <div className="space-x-4 pb-6 border-b border-[#131313]/15">
                            <span className="text-[#131313] font-bold">Tags</span>
                            <span className="space-x-3">

                                {book?.tags.map((tag, i) => <span key={i} className="rounded-full py-2 px-4 text-success bg-success/15 font-medium">#{tag}</span>)}
                            </span>
                        </div>
                        <div className="flex items-center gap-15">
                            <div className="space-y-3">
                                <p className="text-[#131313]/70">Number of Pages:</p>
                                <p className="text-[#131313]/70">Publisher:</p>
                                <p className="text-[#131313]/70">Year of Publishing:</p>
                                <p className="text-[#131313]/70">Rating:</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-[#131313] font-semibold">{book?.totalPages}</p>
                                <p className="text-[#131313] font-semibold"> {book?.publisher}</p>
                                <p className="text-[#131313] font-semibold">{book?.yearOfPublishing} </p>
                                <p className="text-[#131313] font-semibold">{book?.rating}</p>
                            </div>
                        </div>
                        <div className="space-x-4">
                            <button className="btn  text-[#131313] text-lg font-semibold">Read</button>
                            <button className="btn btn-info text-white text-lg font-semibold">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            </Suspense>
        </>
    )
}