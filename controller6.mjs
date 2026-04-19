// controller6.mjs
import users from "./data6.mjs";

// Fungsi untuk melihat data (Menggunakan map)
const index = () => {
    console.log("\n--- Daftar User Saat Ini ---");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Email: ${user.email}`);
    });
};

// Fungsi untuk menambah data (Menggunakan push)
const store = (user) => {
    users.push(user);
    console.log(`[Info] Berhasil menambah user: ${user.nama}`);
};

// Fungsi untuk menghapus data terakhir (Menggunakan pop)
const destroy = () => {
    const deletedUser = users.pop();
    console.log(`[Info] Berhasil menghapus user terakhir: ${deletedUser.nama}`);
};

export { index, store, destroy };