import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";


const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const products = [
    {
      title: "Product 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 12.99,
      createdAt: new Date(),
      stock: 12,
      img: "/noproduct.jpg",
      id: 1
    },
    {
      title: "Product 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 12.99,
      createdAt: new Date(),
      stock: 12,
      img: "/noproduct.jpg",
      id: 2
    },
    {
      title: "Product 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 12.99,
      createdAt: new Date(),
      stock: 12,
      img: "/noproduct.jpg",
      id: 3
    },
    {
      title: "Product 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      price: 12.99,
      createdAt: new Date(),
      stock: 12,
      img: "/noproduct.jpg",
      id: 4
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
