import { BookDataType } from "@/types/bookDataType";
import Image from "next/image";
import Link from "next/link";


export interface BookCardProps {
    book: BookDataType;
}

export default function BookCard({ book }: BookCardProps) {

    return (
        <>
            <div className="rounded-2xl border border-[#131313]/15 w-full p-6 flex flex-col gap-6 justify-between shadow hover:shadow-lg transition-all duration-150 ease-in-out active:scale-99">
                <div className=" bg-[#f3f3f3] px-24 py-8 rounded-2xl  flex items-center justify-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={120}
                        height={56}
                    >
                    </Image>
                </div>
                <div className="space-y-5">
                    <div className="space-y-4">

                        <div className="space-x-3">
                            {
                                book.tags.map((tag, i) => <span key={i} className="py-2 px-4 bg-success/10 text-success font-medium rounded-full">{tag}</span>)
                            }
                        </div>
                        <Link href={`/${book.bookId}`}><h2 className="text-[#131313] text-2xl font-bold font-heading cursor-pointer hover:underline  ">{book.bookName}</h2></Link>
                        <p className="text-[#131313]/80 font-medium  ">By : {book.author}</p>
                    </div>
                    <div className="border-t border-[#131313]/15 border-dashed pt-5 flex justify-between items-center">
                        <span className="text-[#131313]/80 font-medium">{book.category}</span>
                        <span className="text-[#131313]/80 font-medium">{book.rating}</span>
                    </div>
                </div>
            </div>
        </>
    )
}