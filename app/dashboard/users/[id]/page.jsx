import Image from "next/image";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgConainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.userImage} />
        </div>
        Daniel C. Costa
      </div>
      <div action="" className={styles.formContainer}>
        <form className={styles.form}>
          <label> Username</label>
          <input type="text" name="username" placeholder="Daniel C. Costa" />
          <label> Email</label>
          <input
            type="email"
            name="email"
            placeholder="danieldev20@outlook.com"
          />
          <label> Password</label>
          <input type="password" name="password" placeholder="********" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="(83) 99352-3059" />
          <label>Address</label>
          <textarea type="text" name="adress" placeholder="Araçagi" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
