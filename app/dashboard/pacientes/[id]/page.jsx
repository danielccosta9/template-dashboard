"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Axios from "axios";
import Image from "next/image";
import { Box, LinearProgress } from "@mui/material";
import { connectApiToPaciente } from "../../conect";
import { toast } from "sonner";

const SingleUserPage = ({ params }) => {
  const { id } = params;
  const [user, setUser] = useState({});

  const apiUrl = connectApiToPaciente();

  useEffect(() => {
    const userApi = async () => {
      try {
        const response = await Axios.get(`${apiUrl}/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    userApi();
  }, [id, apiUrl]);  

  const paciente = user[0];

  return (
    <>
      {user.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
              <Image src={"/noavatar.png"} alt="" fill />
            </div>
            {paciente.paciente_nome}
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={(e) => (e)}>
              <input type="hidden" name="id" value={paciente.paciente_id} />
              <label>NOME DO PACIENTE</label>
              <input
                type="text"
                name="nome"
                placeholder={paciente.paciente_nome}
                value={paciente.paciente_nome}
              />
              <label>CPF</label>
              <input
                type="text"
                name="cpf"
                placeholder={paciente.paciente_cpf}
                value={paciente.paciente_cpf}
              />
              <label>DATA DE NASCIMENTO</label>
              <input
                type="text"
                name="nascimento"
                placeholder={paciente.paciente_cpf}
                value={paciente.paciente_nascimento}
              />
              <label>TELEFONE</label>
              <input
                type="text"
                name="telefone"
                placeholder={paciente.paciente_telefone}
                value={paciente.paciente_telefone}
              />
              <input
                type="hidden"
                name="cormobidade"
                value={paciente.paciente_cormobidade}
                defaultValue={
                  (paciente.paciente_cormobidade = "SEM COMORBIDADE")
                }
              />
              <input
                type="hidden"
                name="residencia"
                value={paciente.paciente_residencia}
                defaultValue={(paciente.paciente_residencia = "CENTRO")}
              />
              <button>Update</button>
            </form>
          </div>
        </div>
      ) : (
        <Box sx={{ width: "100%", mt: "10%", mb: "10%" }}>
          <LinearProgress
            color="secondary"
            sx={{
              backgroundColor: "#182237",
              borderRadius: "10px",
              height: "10px",
            }}
          />
        </Box>
      )}
    </>
  );
};

export default SingleUserPage;
