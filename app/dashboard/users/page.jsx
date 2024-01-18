import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const UsersPages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={50}
                  height={50}
                  className={styles.userImage}
                />
                <span>John Doe</span>
              </div>
            </td>
            <td>jhon@gmail.com</td>
            <td>18/01/2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>
                  Edit
                </button>
              </Link>
              <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPages;
