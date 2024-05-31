"use client"

import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import { checkToken } from "../checkToken";
import Link from "next/link";

export default function Pagination() {
    const [auth, setAuth] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [paginationData, setPaginationData] = useState({
        pageNumber: 1,
        pageSize: 12,
        totalPages: 1,
        totalRecords: 0,
        firstPage: '',
        lastPage: '',
        nextPage: '',
        previousPage: '',
        data: [],
      });

    console.log(auth, "<<<Auth");

    
    
    // Fungsi untuk mengambil data pagination dari server
  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/species?pageNumber=${page}&pageSize=${paginationData.pageSize}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPaginationData(data);
      setTotalPages(data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Memuat data pertama kali
  useEffect(() => {
    fetchData(currentPage);
  }, []);

  // Fungsi untuk mengubah halaman
  const onPageChange = (page) => {
    fetchData(page);
  };



  useEffect(() => {

    (async () => {
        let checkAuth = await checkToken()
        setAuth(checkAuth)
    })()

 
  }, [])


    return (
        <>
        <div className="flex justify-center mt-8 mb-4">
            <nav>
                <ul className="flex space-x-2">
                {/* Tombol halaman sebelumnya */}
                <li>
                    <button
                    className={`${
                        !paginationData.previousPage
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    } bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded`}
                    onClick={() =>
                        paginationData.previousPage && onPageChange(currentPage - 1)
                    }
                    disabled={!paginationData.previousPage}
                    >
                    Previous
                    </button>
                </li>

                {/* Tombol halaman-halaman */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li key={page}>
                    <button
                        className={`${
                        page === currentPage
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white hover:text-white'
                        } px-4 py-2 rounded`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                    </li>
                ))}

                {/* Tombol halaman berikutnya */}
                <li>
                    <button
                    className={`${
                        !paginationData.nextPage ? 'opacity-50 cursor-not-allowed' : ''
                    } bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded`}
                    onClick={() =>
                        paginationData.nextPage && onPageChange(currentPage + 1)
                    }
                    disabled={!paginationData.nextPage}
                    >
                    Next
                    </button>
                </li>
                </ul>
            </nav>
        </div>
        
        {/* Search */}
        <Search changeData={setPaginationData} />
        
        {
            auth && (
                <div className="flex items-center justify-center mb-4">
                    <Link href="/speciesadd" className="text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded-none hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300">
                        Tambah data baru
                    </Link>
                </div>
            )
        }
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
        paginationData.data.map(detail => {
            return (
                <Card detail={detail} auth={auth} />
            )
        })
        }

        </div>
    </>
    )
}