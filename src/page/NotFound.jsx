const NotFound = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
                <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100">404</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">Oops! Halaman tidak ditemukan.</p>
                <a href="/" className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                    Kembali ke Beranda
                </a>
            </div>    </>
    );
};

export default NotFound;
