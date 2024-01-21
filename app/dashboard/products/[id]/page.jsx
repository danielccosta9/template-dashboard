import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgConainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.userImage} />
        </div>
        IPhone 13
      </div>
      <div action="" className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Daniel C. Costa" />
          <label> Price</label>
          <input type="number" name="price" placeholder="R$ 3.458" />
          <label> Stock</label>
          <input type="number" name="stock" placeholder="18" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Black" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="18p" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="4" placeholder="description"></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
