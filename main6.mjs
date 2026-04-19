// main6.mjs
import { index, store, destroy } from "./controller6.mjs";

const main = () => {
    // 1. Tampilkan data awal
    index();

    // 2. Tambah minimal 2 data
    console.log("\n--- Menambah Data Baru ---");
    store({ nama: 'User Baru 1', umur: 30, alamat: 'Depok', email: 'baru1@mail.com' });
    store({ nama: 'User Baru 2', umur: 31, alamat: 'Bekasi', email: 'baru2@mail.com' });

    // 3. Tampilkan data setelah ditambah
    index();

    // 4. Hapus 1 data terakhir
    console.log("\n--- Menghapus Data ---");
    destroy();

    // 5. Tampilkan data terakhir
    index();
};

main();